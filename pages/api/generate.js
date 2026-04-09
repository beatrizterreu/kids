export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { age, category, time, location, lang } = req.body;

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: lang === 'es'
        ? 'Clave API no configurada. Revisa las variables de entorno en Vercel.'
        : 'API key not configured. Check your environment variables in Vercel.',
    });
  }

  const langMap = {
    es: 'SPANISH',
    en: 'ENGLISH',
    fr: 'FRENCH',
    it: 'ITALIAN',
    de: 'GERMAN',
  };
  const responseLang = langMap[lang] || 'ENGLISH';

  const prompt = `You are a creative children's activity expert. Generate a fun, safe, and age-appropriate activity.

Parameters:
- Age group: ${age}
- Activity type: ${category}
- Duration: ${time}
- Location: ${location}
- Response language: ${responseLang}

Return ONLY a valid JSON object. No markdown, no code blocks, no extra text. Just the raw JSON.
The JSON must have this exact structure:

{
  "title": "Creative and fun activity title",
  "description": "2-3 engaging sentences that excite parents and kids about this activity",
  "steps": [
    "Clear step 1",
    "Clear step 2",
    "Clear step 3",
    "Clear step 4",
    "Clear step 5"
  ],
  "materials": [
    {
      "name": "Material name in ${responseLang}",
      "amazonSearch": "search term in ENGLISH for Amazon"
    }
  ],
  "imagePrompt": "Detailed visual description in ENGLISH for AI image generation. Describe the scene, colors, style.",
  "duration": "Realistic duration estimate in ${responseLang}",
  "difficulty": "easy"
}

Rules:
- title, description, steps, materials.name, duration MUST be in ${responseLang}
- imagePrompt and materials.amazonSearch ALWAYS in English
- difficulty must be one of: easy, medium, hard
- steps between 4 and 7 items
- materials between 2 and 6 items, only real physical materials needed
- imagePrompt: vivid, detailed scene description for a colorful cartoon illustration for children
- Make it genuinely creative and fun, not generic
- Ensure activity is realistic and safe for the age group`;

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: 'You are a creative children\'s activity expert. Always respond with valid JSON only, no markdown.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 1.0,
        max_tokens: 1024,
        response_format: { type: 'json_object' },
      }),
    });

    if (!groqRes.ok) {
      const errData = await groqRes.json();
      throw new Error(errData.error?.message || `Groq error: ${groqRes.status}`);
    }

    const data = await groqRes.json();
    const rawText = data?.choices?.[0]?.message?.content;

    if (!rawText) {
      throw new Error('Empty response from Groq');
    }

    let activity;
    try {
      activity = JSON.parse(rawText);
    } catch {
      const match = rawText.match(/\{[\s\S]*\}/);
      if (match) {
        activity = JSON.parse(match[0]);
      } else {
        throw new Error('Could not parse JSON from response');
      }
    }

    if (!activity.title || !activity.steps || !activity.description) {
      throw new Error('Incomplete activity data received');
    }

    return res.status(200).json(activity);

  } catch (err) {
    console.error('[KidSpark] Generation error:', err.message);
    const errorMessages = {
      es: 'Error al generar la actividad. ¡Inténtalo de nuevo!',
      en: 'Error generating activity. Please try again!',
      fr: "Erreur lors de la génération. Réessayez !",
      it: "Errore nella generazione. Riprova!",
      de: 'Fehler beim Generieren. Bitte versuche es erneut!',
    };
    return res.status(500).json({
      error: errorMessages[lang] || errorMessages.en,
    });
  }
}

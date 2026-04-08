export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { age, category, time, location, lang } = req.body;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: lang === 'es'
        ? 'Clave API no configurada. Revisa el archivo .env.local'
        : 'API key not configured. Check your .env.local file',
    });
  }

  const isSpanish = lang === 'es';

  const prompt = `You are a creative children's activity expert. Generate a fun, safe, and age-appropriate activity.

Parameters:
- Age group: ${age}
- Activity type: ${category}
- Duration: ${time}
- Location: ${location}
- Response language: ${isSpanish ? 'SPANISH' : 'ENGLISH'}

Return ONLY a valid JSON object. No markdown, no code blocks, no extra text.
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
      "name": "Material name in ${isSpanish ? 'SPANISH' : 'ENGLISH'}",
      "amazonSearch": "search term in ENGLISH for Amazon"
    }
  ],
  "imagePrompt": "Detailed visual description in ENGLISH for AI image generation. Describe the scene, colors, style.",
  "duration": "Realistic duration estimate (e.g. '20 minutes' in ${isSpanish ? 'Spanish' : 'English'})",
  "difficulty": "easy"
}

Rules:
- title, description, steps, materials.name → in ${isSpanish ? 'SPANISH' : 'ENGLISH'}
- imagePrompt, materials.amazonSearch → ALWAYS in English
- difficulty → one of exactly: easy, medium, hard
- steps → between 4 and 7 steps
- materials → between 2 and 6 items, only real physical materials
- imagePrompt → vivid, detailed, suitable for a cartoon illustration for children
- Make it genuinely creative, not generic
- Ensure activity is realistic for the age group specified`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 1.0,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          ],
        }),
      }
    );

    if (!geminiRes.ok) {
      const errData = await geminiRes.json();
      throw new Error(errData.error?.message || `Gemini error: ${geminiRes.status}`);
    }

    const data = await geminiRes.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      throw new Error('Empty response from Gemini');
    }

    // Strip markdown code blocks if present
    const cleaned = rawText
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();

    let activity;
    try {
      activity = JSON.parse(cleaned);
    } catch {
      // Try to extract JSON object from the text
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (match) {
        activity = JSON.parse(match[0]);
      } else {
        throw new Error('Could not parse JSON from response');
      }
    }

    // Validate required fields
    if (!activity.title || !activity.steps || !activity.description) {
      throw new Error('Incomplete activity data');
    }

    return res.status(200).json(activity);

  } catch (err) {
    console.error('[KidSpark] Generation error:', err.message);
    return res.status(500).json({
      error: isSpanish
        ? 'Error al generar la actividad. ¡Inténtalo de nuevo!'
        : 'Error generating activity. Please try again!',
    });
  }
}

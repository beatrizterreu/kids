export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { age, category, lang, responseLang } = req.body;

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const prompt = `You are an expert children's educational worksheet creator.
Create a printable worksheet for a child aged ${age} on the topic: "${category}".
Language: ${responseLang}

Return ONLY valid JSON with this exact structure (no markdown, no code blocks):
{
  "title": "Worksheet title in ${responseLang}",
  "subtitle": "Short subtitle or instruction in ${responseLang}",
  "instructions": "One sentence instruction for the child in ${responseLang}",
  "exercises": [
    { "type": "problem", "content": "Exercise content" },
    { "type": "problem", "content": "Exercise content" }
  ],
  "footer": "Encouraging message for the child in ${responseLang}"
}

Rules:
- Generate 12 to 20 exercises appropriate for the age group
- For Matemáticas/Math/Mathématiques/Matematica/Mathematik: generate arithmetic problems (additions, subtractions, multiplications, divisions depending on age). Format each as "5 + 3 = ___" or "12 × 4 = ___"
- For Lectura/Reading/Lecture/Lettura/Lesen: generate short comprehension text + 5 questions
- For Caligrafía/Handwriting/Calligraphie/Calligrafia/Schreiben: generate letters or words to trace/copy
- For Ciencias/Science/Sciences/Scienze/Wissenschaft: generate short true/false or fill-in-the-blank questions
- For Historia/History/Histoire/Storia/Geschichte: generate matching or fill-in-the-blank questions
- For Idiomas/Languages/Langues/Lingue/Sprachen: generate vocabulary or translation exercises
- All content must be in ${responseLang}
- Keep exercises age-appropriate and fun`;

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: 'You are an expert children\'s educational worksheet creator. Always respond with valid JSON only.',
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0.8,
        max_tokens: 2048,
        response_format: { type: 'json_object' },
      }),
    });

    if (!groqRes.ok) {
      const err = await groqRes.json();
      throw new Error(err.error?.message || 'Groq error');
    }

    const data = await groqRes.json();
    const raw = data?.choices?.[0]?.message?.content;
    if (!raw) throw new Error('Empty response');

    const worksheet = JSON.parse(raw);

    // Build printable HTML
    const exercises = worksheet.exercises || [];
    const exerciseRows = exercises.map((ex, i) => `
      <div class="exercise">
        <span class="num">${i + 1}.</span>
        <span class="content">${ex.content}</span>
      </div>`).join('');

    const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${worksheet.title}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Arial', sans-serif;
      padding: 32px 40px;
      color: #1a1a2e;
      max-width: 800px;
      margin: 0 auto;
      font-size: 14px;
    }
    .header {
      text-align: center;
      border-bottom: 3px solid #7C3AED;
      padding-bottom: 16px;
      margin-bottom: 24px;
    }
    .logo {
      font-size: 13px;
      color: #7C3AED;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    h1 {
      font-size: 26px;
      font-weight: 900;
      color: #1a1a2e;
      margin-bottom: 4px;
    }
    .subtitle {
      font-size: 14px;
      color: #6b7280;
      margin-bottom: 12px;
    }
    .meta-row {
      display: flex;
      justify-content: center;
      gap: 24px;
      font-size: 12px;
      color: #6b7280;
    }
    .meta-row span { display: flex; align-items: center; gap: 4px; }
    .instructions {
      background: #f5f3ff;
      border-left: 4px solid #7C3AED;
      padding: 12px 16px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 24px;
      font-size: 14px;
      color: #4c1d95;
      font-weight: 600;
    }
    .name-date {
      display: flex;
      gap: 32px;
      margin-bottom: 28px;
    }
    .field {
      flex: 1;
      border-bottom: 1.5px solid #9ca3af;
      padding-bottom: 4px;
      font-size: 12px;
      color: #9ca3af;
    }
    .exercises-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px 24px;
    }
    .exercise {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 10px 12px;
      background: #fafafa;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      min-height: 44px;
    }
    .num {
      font-size: 12px;
      font-weight: 700;
      color: #7C3AED;
      min-width: 20px;
      padding-top: 1px;
    }
    .content {
      font-size: 15px;
      font-weight: 600;
      color: #1f2937;
      flex: 1;
      line-height: 1.4;
    }
    .footer {
      margin-top: 32px;
      text-align: center;
      font-size: 13px;
      color: #7C3AED;
      font-weight: 700;
      padding-top: 16px;
      border-top: 1px dashed #c4b5fd;
    }
    @media print {
      body { padding: 20px 28px; }
      .exercise { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">KidSpark</div>
    <h1>${worksheet.title}</h1>
    <p class="subtitle">${worksheet.subtitle || ''}</p>
    <div class="meta-row">
      <span>👤 ${age}</span>
      <span>📚 ${category}</span>
    </div>
  </div>

  <div class="name-date">
    <div class="field">Nombre: ___________________________</div>
    <div class="field">Fecha: ____________________________</div>
  </div>

  <div class="instructions">${worksheet.instructions}</div>

  <div class="exercises-grid">
    ${exerciseRows}
  </div>

  <div class="footer">${worksheet.footer || '¡Muy bien hecho! ⭐'}</div>

  <script>
    // Auto-close after print
    window.addEventListener('afterprint', () => window.close());
  </script>
</body>
</html>`;

    return res.status(200).json({ html });

  } catch (err) {
    console.error('[KidSpark] Worksheet error:', err.message);
    return res.status(500).json({ error: 'Error generating worksheet. Please try again.' });
  }
}

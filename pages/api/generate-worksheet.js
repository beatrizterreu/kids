export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { age, category, lang, responseLang } = req.body;

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  // Cursive font for children up to 8 years (Spanish schools use "letra ligada")
  const useCursive = /0.?2|3.?5|6.?8/.test(age);

  // Age-specific difficulty guidance
  const difficultyGuide = /0.?2/.test(age)
    ? 'VERY EASY (toddlers): recognize shapes and colors, count to 5, match identical objects, trace simple shapes. Large content, minimal text.'
    : /3.?5/.test(age)
    ? 'EASY (preschool): count to 20, additions up to 10 (e.g. 3+4=___), recognize letters, trace words of 3-4 letters, name basic colors and shapes, simple patterns (circle-square-circle-?).'
    : /6.?8/.test(age)
    ? 'MEDIUM (early primary): additions and subtractions up to 100 (e.g. 47+38=___, 83-29=___), 2x/5x/10x multiplication tables, read short 3-4 sentence texts with comprehension questions, compound words, basic sentence construction, simple world map questions, basic science facts.'
    : 'CHALLENGING (upper primary): multiplications and divisions with 2-3 digit numbers (e.g. 128×7=___, 364÷4=___), fractions and decimals (e.g. 3/4+1/2=___), longer reading comprehension with inference questions, grammar rules, world geography (capitals, continents, flags), historical events and dates, basic algebra (x+5=12), logic puzzles.';

  const prompt = `You are an expert children's educational worksheet creator.
Create a printable worksheet for a child aged ${age} on the topic: "${category}".
Language: ${responseLang}

DIFFICULTY FOR AGE ${age}: ${difficultyGuide}

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
- Generate 12 to 20 exercises. STRICTLY match the difficulty level above — do NOT simplify for older kids or complicate for younger ones.
- For Matemáticas/Math: use the correct operations for the age. Format as "47 + 38 = ___" or "5 × 4 = ___" or "3/4 + 1/2 = ___"
- For Lectura/Reading: short simple text (2-3 sentences) + 4 questions for young kids; longer text (6-8 sentences) + 6 inference questions for older kids
- For Caligrafía/Handwriting: single letters for youngest; words for 3-5; full sentences for 6-8; paragraphs for 9-12
- For Ciencias/Science: simple observations for young (why is the sky blue?); experiments and concepts for older (explain photosynthesis, food chains)
- For Historia/History: simple timeline for young; dates, causes, consequences for older
- For Idiomas/Languages: single words for young; sentences and grammar for older
- For Geografía/Geography: name continents for young; capitals, rivers, flags for older
- For Lógica/Logic: simple sequences (2,4,6,___) for young; complex patterns and deductions for older
- All content must be in ${responseLang}`;

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

    // Cursive font settings for ages up to 8 (letra ligada)
    const fontLink = useCursive
      ? '<link rel="preconnect" href="https://fonts.googleapis.com"/><link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap" rel="stylesheet"/>'
      : '';
    const bodyFont = useCursive ? "'Caveat', cursive" : "'Arial', sans-serif";
    const contentFontSize = useCursive ? '20px' : '15px';
    const contentLineHeight = useCursive ? '1.6' : '1.4';
    const exerciseMinHeight = useCursive ? '56px' : '44px';
    const gridCols = useCursive ? '1fr' : '1fr 1fr'; // single column for cursive (more space)

    const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${worksheet.title}</title>
  ${fontLink}
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: ${bodyFont};
      padding: 32px 40px;
      color: #1a1a2e;
      max-width: 800px;
      margin: 0 auto;
      font-size: ${useCursive ? '16px' : '14px'};
    }
    .header {
      text-align: center;
      border-bottom: 3px solid #0d9488;
      padding-bottom: 16px;
      margin-bottom: 24px;
    }
    .logo {
      font-size: 13px;
      color: #0d9488;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 6px;
      font-family: 'Arial', sans-serif;
    }
    h1 {
      font-size: ${useCursive ? '30px' : '26px'};
      font-weight: 900;
      color: #1a1a2e;
      margin-bottom: 4px;
    }
    .subtitle {
      font-size: ${useCursive ? '16px' : '14px'};
      color: #6b7280;
      margin-bottom: 12px;
    }
    .meta-row {
      display: flex;
      justify-content: center;
      gap: 24px;
      font-size: 12px;
      color: #6b7280;
      font-family: 'Arial', sans-serif;
    }
    .meta-row span { display: flex; align-items: center; gap: 4px; }
    .instructions {
      background: #f0fdfa;
      border-left: 4px solid #0d9488;
      padding: 12px 16px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 24px;
      font-size: ${useCursive ? '18px' : '14px'};
      color: #134e4a;
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
      font-size: ${useCursive ? '18px' : '12px'};
      color: #9ca3af;
      font-family: ${bodyFont};
    }
    .exercises-grid {
      display: grid;
      grid-template-columns: ${gridCols};
      gap: ${useCursive ? '16px 24px' : '14px 24px'};
    }
    .exercise {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: ${useCursive ? '12px 16px' : '10px 12px'};
      background: #fafafa;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      min-height: ${exerciseMinHeight};
    }
    .num {
      font-size: 12px;
      font-weight: 700;
      color: #0d9488;
      min-width: 20px;
      padding-top: 1px;
      font-family: 'Arial', sans-serif;
    }
    .content {
      font-size: ${contentFontSize};
      font-weight: ${useCursive ? '600' : '600'};
      color: #1f2937;
      flex: 1;
      line-height: ${contentLineHeight};
    }
    .footer {
      margin-top: 32px;
      text-align: center;
      font-size: ${useCursive ? '18px' : '13px'};
      color: #0d9488;
      font-weight: 700;
      padding-top: 16px;
      border-top: 1px dashed #99f6e4;
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

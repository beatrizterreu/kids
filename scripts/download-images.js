/**
 * KidSpark — Image pre-generator
 * Run from project root: node scripts/download-images.js
 *
 * Downloads card (800×450), hero (1200×675) and social (1080×1080)
 * images for all 22 articles and saves them to /public/images/articles/.
 * After running, commit the images and push to Vercel.
 */

const https = require('https');
const http  = require('http');
const fs    = require('fs');
const path  = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'articles');
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const articles = [
  { slug: 'rainy-day-activities',        prompt: 'colorful craft supplies flatlay on wooden table, paint pots, cardboard, scissors, glue stick, paper rolls, rainy window in background, cozy kitchen, top-down view' },
  { slug: 'math-through-play',           prompt: 'colorful wooden counting blocks, abacus, number tiles and math puzzles arranged on bright floor, morning sunlight, top-down flat lay, vivid primary colors' },
  { slug: 'yoga-for-kids',               prompt: 'colorful children yoga mat unrolled on wooden floor, small yoga blocks and bolster, green plant nearby, bright natural window light, serene calm space, no people' },
  { slug: 'recycled-crafts',             prompt: 'recycled craft materials flatlay, cardboard tubes, bottle caps, egg cartons, paint brushes, colored tape, bright craft table, top-down overhead shot, vivid colors' },
  { slug: 'cooking-with-kids',           prompt: 'baking ingredients flatlay on kitchen counter, flour, eggs, cookie cutters, rolling pin, colorful mixing bowls, warm morning light, overhead top-down view, cozy kitchen' },
  { slug: 'science-experiments-home',    prompt: 'colorful science experiment supplies on table, baking soda, vinegar bottle, food coloring drops, small beakers, safety goggles, bubbling foam, bright lab-style setup, vivid colors' },
  { slug: 'building-reading-habit',      prompt: 'stack of colorful childrens picture books on cozy reading nook, soft cushions, warm lamp light, small stuffed animal, wooden shelf, inviting atmosphere, no people' },
  { slug: 'outdoor-nature-activities',   prompt: 'nature treasures collection flatlay on wooden surface, colorful autumn leaves, pinecones, smooth pebbles, feathers, acorns, green moss, sunlit forest floor, macro detail' },
  { slug: 'screen-free-games',           prompt: 'colorful board games, card decks, dice and game pieces spread on wooden table, warm evening light, cozy home atmosphere, overhead flat lay, vivid colors' },
  { slug: 'learning-languages-young',    prompt: 'colorful language learning flashcards spread on white desk, small globe, multilingual alphabet letters, pencils, bright natural light, top-down view, vibrant saturated colors' },
  { slug: 'sensory-play-toddlers',       prompt: 'colorful sensory play bin close-up, kinetic sand, water beads, small scoops and toys, bright saturated colors, macro texture shot, overhead view, vivid playroom light' },
  { slug: 'music-movement-kids',         prompt: 'colorful childrens musical instruments flatlay, xylophone, maracas, small drum, tambourine, rainbow colors, bright sunny floor, overhead view, vivid and cheerful' },
  { slug: 'mindfulness-kids',            prompt: 'peaceful meditation corner setup, soft cushion, small plant, smooth stones, candle, natural light from window, serene minimalist interior, calm neutral tones, no people' },
  { slug: 'creative-play-ages-3-5',      prompt: 'colorful finger painting art supplies flatlay, open paint pots in rainbow colors, painted paper with swirls, brushes, sponges, bright white table, overhead view, vivid saturated' },
  { slug: 'stem-activities-home',        prompt: 'colorful LEGO bricks and building blocks spread on bright floor, gears, wheels, half-built construction, engineering toys, overhead flat lay, vivid primary colors' },
  { slug: 'gardening-with-kids',         prompt: 'small terracotta pots with seedlings on sunny windowsill, watering can, seed packets, gardening trowel, fresh soil, green sprouts, warm afternoon light, close-up' },
  { slug: 'healthy-bedtime-routine',     prompt: 'cozy children bedroom nightstand with open storybook, soft warm lamp glow, small stuffed animals, smooth bed sheets, peaceful evening atmosphere, no people' },
  { slug: 'emotional-intelligence-kids', prompt: 'colorful emotion cards and feelings chart spread on floor, heart-shaped objects, small journal, crayons, soft natural light, overhead flat lay, warm pastel tones' },
  { slug: 'travel-activities-kids',      prompt: 'travel flatlay on bright surface, childrens travel toys, small backpack, colorful map, snacks, headphones, activity book, passport, adventure accessories, overhead view' },
  { slug: 'holiday-crafts-kids',         prompt: 'holiday craft supplies flatlay, glitter, colored paper, ribbon, scissors, half-finished ornaments, pine branches, festive table, overhead view, bright cheerful colors' },
  { slug: 'paper-crafts-origami',        prompt: 'colorful origami paper squares in rainbow colors, small finished origami crane and frog, folding lines visible, bright white background, overhead flat lay, clean minimal' },
  { slug: 'active-play-movement',        prompt: 'colorful outdoor sports equipment flatlay on green grass, jump rope, hula hoop, soft ball, cones, bright sunny day, vibrant saturated colors, overhead view' },
];

const BASE_SUFFIX   = ', professional product photography, vibrant saturated colors, bright natural light, sharp focus, no people, no faces, no text, no logos, no watermarks, clean background';
const SOCIAL_SUFFIX = ', flat lay photography, vivid colors, high contrast, white clean background, Instagram editorial style, sharp focus, no people, no faces, no text, no logos';

function slugSeed(slug) {
  return slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 9999;
}

function buildUrl(prompt, suffix, width, height, seed) {
  const encoded = encodeURIComponent(prompt + suffix);
  return `https://image.pollinations.ai/prompt/${encoded}?width=${width}&height=${height}&nologo=true&seed=${seed}`;
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const requester = url.startsWith('https') ? https : http;
    const request = requester.get(url, { timeout: 90000 }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlink(dest, () => {});
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`HTTP ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    });
    request.on('timeout', () => { request.destroy(); file.close(); fs.unlink(dest, () => {}); reject(new Error('Timeout')); });
    request.on('error', (err) => { file.close(); fs.unlink(dest, () => {}); reject(err); });
  });
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  console.log(`\n🖼️  Downloading images for ${articles.length} articles...\n`);
  let done = 0, failed = [];

  for (const article of articles) {
    const seed = slugSeed(article.slug);
    const variants = [
      { name: 'card',   url: buildUrl(article.prompt, BASE_SUFFIX,   800,  450,  seed),     file: `${article.slug}-card.jpg`   },
      { name: 'hero',   url: buildUrl(article.prompt, BASE_SUFFIX,   1200, 675,  seed),     file: `${article.slug}-hero.jpg`   },
      { name: 'social', url: buildUrl(article.prompt, SOCIAL_SUFFIX, 1080, 1080, seed + 1), file: `${article.slug}-social.jpg` },
    ];

    for (const v of variants) {
      const dest = path.join(OUTPUT_DIR, v.file);
      if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
        console.log(`  ✓ ${v.file} (cached)`);
        done++; continue;
      }
      process.stdout.write(`  ⬇  ${v.file} ... `);
      try {
        await downloadFile(v.url, dest);
        const size = fs.statSync(dest).size;
        if (size < 5000) { fs.unlinkSync(dest); throw new Error('Too small'); }
        console.log(`✓ (${Math.round(size / 1024)}KB)`);
        done++;
      } catch (err) {
        console.log(`✗ ${err.message}`);
        failed.push(v.file);
      }
      await sleep(2000); // Respect Pollinations rate limits
    }
    console.log('');
  }

  console.log(`\n✅ Downloaded: ${done}`);
  if (failed.length) {
    console.log(`❌ Failed (${failed.length}): ${failed.join(', ')}`);
    console.log('\nRe-run the script to retry failed images.');
  } else {
    console.log('\nAll images downloaded! Now run:');
    console.log('  git add public/images/');
    console.log('  git commit -m "add pre-generated article images"');
    console.log('  git push');
  }
}

main().catch(console.error);

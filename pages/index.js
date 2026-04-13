import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { articles } from '../data/articles';

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const ui = {
  es: {
    siteTitle: 'KidSpark — Actividades para niños, ideas para padres creativos',
    siteDesc: 'Genera actividades únicas para tus hijos en segundos. Manualidades, juegos, yoga, cocina, fichas educativas y más. Gratis, sin registro.',
    hero: 'Inspira a tus hijos cada día',
    heroSub: 'Genera actividades únicas y divertidas en segundos. Sin suscripción, sin registro — completamente gratis.',
    ctaMain: 'Generar actividad ahora',
    ctaSub: 'Para edades de 0 a 12 años',
    howTitle: 'Así de fácil',
    steps: [
      { emoji: '🎯', title: 'Elige edad y categoría', desc: 'Selecciona la edad de tu hijo y el tipo de actividad: ocio, manualidades, yoga, educación y más.' },
      { emoji: '✨', title: 'La IA genera la actividad', desc: 'En segundos recibes una actividad completa con pasos, materiales y una ilustración única.' },
      { emoji: '🖨️', title: 'Descarga o haz la actividad', desc: 'Para educación, descarga una ficha PDF lista para imprimir. Para ocio, ¡a ponerse manos a la obra!' },
    ],
    featuresTitle: 'Todo lo que necesitas',
    features: [
      { emoji: '🎨', title: 'Ocio creativo', desc: 'Manualidades, juegos, naturaleza, teatro, cocina, música y experimentos adaptados a cada edad.' },
      { emoji: '📚', title: 'Fichas educativas', desc: 'Matemáticas, lectura, ciencias, historia, idiomas. Descarga fichas PDF listas para imprimir.' },
      { emoji: '🌍', title: 'En tu idioma', desc: 'Genera actividades en español o inglés. Contenido adaptado culturalmente para cada región.' },
      { emoji: '🆓', title: '100% gratuito', desc: 'Sin planes de pago, sin registro, sin trucos. KidSpark es y será siempre gratuito.' },
    ],
    blogTitle: 'Del blog',
    blogCta: 'Ver todos los artículos →',
    toolCta: '¿Listo para empezar?',
    toolCtaSub: 'Genera la primera actividad de hoy',
    toolBtn: 'Abrir el generador →',
    langLabel: 'Idioma',
    footerCredits: 'Hecho con ❤️ para padres creativos',
    blog: 'Blog',
    generator: 'Generador',
  },
  en: {
    siteTitle: 'KidSpark — Activities for kids, ideas for creative parents',
    siteDesc: 'Generate unique activities for your kids in seconds. Crafts, games, yoga, cooking, educational worksheets and more. Free, no sign-up.',
    hero: 'Inspire your kids every day',
    heroSub: 'Generate unique and fun activities in seconds. No subscription, no sign-up — completely free.',
    ctaMain: 'Generate an activity now',
    ctaSub: 'For ages 0 to 12',
    howTitle: "It's this easy",
    steps: [
      { emoji: '🎯', title: 'Choose age and category', desc: 'Select your child\'s age and the type of activity: leisure, crafts, yoga, education, and more.' },
      { emoji: '✨', title: 'AI generates the activity', desc: 'In seconds you get a complete activity with steps, materials, and a unique illustration.' },
      { emoji: '🖨️', title: 'Download or get started', desc: 'For education, download a print-ready PDF worksheet. For leisure, get hands-on!' },
    ],
    featuresTitle: 'Everything you need',
    features: [
      { emoji: '🎨', title: 'Creative leisure', desc: 'Crafts, games, nature, theater, cooking, music, and experiments adapted to every age.' },
      { emoji: '📚', title: 'Educational worksheets', desc: 'Math, reading, science, history, languages. Download print-ready PDF worksheets.' },
      { emoji: '🌍', title: 'In your language', desc: 'Generate activities in Spanish or English. Content culturally adapted for each region.' },
      { emoji: '🆓', title: '100% free', desc: 'No paid plans, no sign-up, no tricks. KidSpark is and always will be free.' },
    ],
    blogTitle: 'From the blog',
    blogCta: 'See all articles →',
    toolCta: 'Ready to get started?',
    toolCtaSub: 'Generate today\'s first activity',
    toolBtn: 'Open the generator →',
    langLabel: 'Language',
    footerCredits: 'Made with ❤️ for creative parents',
    blog: 'Blog',
    generator: 'Generator',
  },
};

export default function Home() {
  const [lang, setLang] = useState('es');
  const t = ui[lang];

  // Get 3 latest blog posts for current language
  const latestPosts = articles.filter(a => a.lang === lang).slice(0, 3);

  return (
    <>
      <Head>
        <title>{t.siteTitle}</title>
        <meta name="description" content={t.siteDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="actividades para niños, manualidades niños, activities for kids, crafts for children, fichas educativas, yoga niños, generador actividades" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t.siteTitle} />
        <meta property="og:description" content={t.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kids-one-ebon.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kids-one-ebon.vercel.app/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'KidSpark',
          url: 'https://kids-one-ebon.vercel.app',
          description: t.siteDesc,
        }) }} />
      </Head>

      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:bg-amber-800 focus:text-white focus:rounded-lg focus:font-bold">
        Saltar al contenido
      </a>

      <div className="min-h-screen bg-stone-50">

        {/* ── HEADER ── */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link href="/" aria-label="KidSpark — inicio"
                className="text-xl font-black text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded-lg">
                KidSpark
              </Link>
              <nav className="hidden sm:flex items-center gap-5 text-sm font-semibold text-stone-500">
                <Link href="/blog" className="hover:text-amber-800 transition-colors">{t.blog}</Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="landing-lang" className="sr-only">{t.langLabel}</label>
              <select
                id="landing-lang"
                value={lang}
                onChange={e => setLang(e.target.value)}
                className="bg-white border border-stone-300 rounded-full pl-4 pr-8 py-1.5
                  text-sm font-bold text-stone-800 hover:border-amber-600 cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700
                  focus-visible:ring-offset-2 appearance-none transition-colors shadow-sm"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2392400e' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
              >
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
              <Link href="/tool"
                className="bg-amber-800 text-white text-sm font-black px-4 py-2 rounded-full
                  hover:bg-amber-900 transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2">
                {t.generator}
              </Link>
            </div>
          </div>
        </header>

        <main id="main-content">

          {/* ── HERO ── */}
          <section className="bg-white border-b border-stone-100">
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
              <h1 className="text-5xl md:text-6xl font-black text-stone-900 leading-tight mb-6">
                {t.hero}
              </h1>
              <p className="text-xl text-stone-600 max-w-xl mx-auto mb-10 leading-relaxed">
                {t.heroSub}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/tool"
                  className="bg-amber-800 text-white font-black text-lg px-8 py-5 rounded-full
                    hover:bg-amber-900 active:scale-95 transition-all shadow-lg
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
                >
                  {t.ctaMain}
                </Link>
                <p className="text-stone-400 text-sm">{t.ctaSub}</p>
              </div>
            </div>
          </section>

          {/* ── HOW IT WORKS ── */}
          <section className="max-w-5xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-black text-stone-900 text-center mb-12">{t.howTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.steps.map((step, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-3xl p-8 text-center">
                  <div className="text-5xl mb-4" aria-hidden="true">{step.emoji}</div>
                  <div className="text-xs font-black text-amber-700 uppercase tracking-widest mb-2">
                    {lang === 'es' ? `Paso ${i + 1}` : `Step ${i + 1}`}
                  </div>
                  <h3 className="text-lg font-black text-stone-900 mb-3">{step.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FEATURES ── */}
          <section className="bg-amber-800 py-20">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-black text-white text-center mb-12">{t.featuresTitle}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {t.features.map((f, i) => (
                  <div key={i} className="bg-amber-700/40 border border-amber-600 rounded-2xl p-6">
                    <div className="text-4xl mb-4" aria-hidden="true">{f.emoji}</div>
                    <h3 className="font-black text-white text-base mb-2">{f.title}</h3>
                    <p className="text-amber-200 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── BLOG PREVIEW ── */}
          {latestPosts.length > 0 && (
            <section className="max-w-5xl mx-auto px-4 py-20">
              <div className="flex justify-between items-baseline mb-10">
                <h2 className="text-3xl font-black text-stone-900">{t.blogTitle}</h2>
                <Link href="/blog"
                  className="text-amber-700 font-black text-sm hover:underline
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded">
                  {t.blogCta}
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {latestPosts.map(article => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group bg-white border border-stone-200 rounded-2xl p-6
                      hover:border-amber-300 hover:shadow-md transition-all
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
                  >
                    <span className="text-4xl mb-4 block" aria-hidden="true">{article.emoji}</span>
                    <span className="text-xs font-black text-amber-700 uppercase tracking-wide">
                      {article.category}
                    </span>
                    <h3 className="font-black text-stone-900 text-base leading-snug mt-2 mb-2
                      group-hover:text-amber-800 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── FINAL CTA ── */}
          <section className="bg-stone-100 border-t border-stone-200 py-20 text-center">
            <div className="max-w-xl mx-auto px-4">
              <h2 className="text-3xl font-black text-stone-900 mb-3">{t.toolCta}</h2>
              <p className="text-stone-600 mb-8">{t.toolCtaSub}</p>
              <Link
                href="/tool"
                className="inline-block bg-amber-800 text-white font-black text-lg px-8 py-5 rounded-full
                  hover:bg-amber-900 active:scale-95 transition-all shadow-lg
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
              >
                {t.toolBtn}
              </Link>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t border-stone-200 py-10 text-center text-stone-400 text-sm">
          <nav className="flex justify-center gap-6 mb-3" aria-label="Footer navigation">
            <Link href="/" className="hover:text-amber-800 transition-colors font-semibold">KidSpark</Link>
            <Link href="/tool" className="hover:text-amber-800 transition-colors">{t.generator}</Link>
            <Link href="/blog" className="hover:text-amber-800 transition-colors">{t.blog}</Link>
          </nav>
          <p>{t.footerCredits}</p>
        </footer>
      </div>
    </>
  );
}

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import { getAllArticlesInLang } from '../data/articles';

const ui = {
  es: {
    siteTitle: 'KidSpark — Actividades para niños, ideas para padres creativos',
    siteDesc: 'Genera actividades únicas para tus hijos en segundos. Manualidades, juegos, yoga, cocina, fichas educativas y más. Gratis, sin registro.',
    heroLine1: 'Inspira a tus hijos',
    heroLine2: 'cada día',
    heroSub1: 'Genera actividades únicas y divertidas en segundos.',
    heroSub2: 'Sin suscripción, sin registro. Completamente gratis.',
    ctaBtn: 'Generar actividad ahora',
    ctaSub: 'Para edades de 0 a 12 años',
    howTitle: 'Así de fácil',
    steps: [
      { n: '01', title: 'Elige edad y categoría', desc: 'Selecciona la edad y el tipo de actividad: ocio, yoga, educación y más.' },
      { n: '02', title: 'La IA genera la actividad', desc: 'En segundos recibes una actividad completa con pasos y materiales.' },
      { n: '03', title: 'Hazla o descárgala', desc: 'Para educación, descarga una ficha PDF. Para ocio, manos a la obra.' },
    ],
    featuresTitle: 'Todo lo que necesitas',
    features: [
      { emoji: '🎨', title: 'Ocio creativo', desc: 'Manualidades, juegos, naturaleza, teatro, cocina, música y experimentos adaptados a cada edad.' },
      { emoji: '📚', title: 'Fichas educativas', desc: 'Matemáticas, lectura, ciencias, historia. Descarga fichas PDF listas para imprimir.' },
      { emoji: '🌍', title: 'Español e inglés', desc: 'Contenido en dos idiomas, adaptado culturalmente para cada región.' },
      { emoji: '🆓', title: '100% gratuito', desc: 'Sin planes de pago, sin registro, sin trucos. KidSpark es y será siempre gratuito.' },
    ],
    blogTitle: 'Del blog',
    blogCta: 'Ver todos los artículos →',
    finalCta: '¿Lista para inspirarte?',
    finalSub: 'Genera la primera actividad de hoy',
    finalBtn: 'Abrir el generador →',
    footerCredits: 'Hecho con ❤️ para padres creativos',
    readMore: 'Leer →',
    appAlt: 'Padre usando la app KidSpark en su móvil',
  },
  en: {
    siteTitle: 'KidSpark — Activities for kids, ideas for creative parents',
    siteDesc: 'Generate unique activities for your kids in seconds. Crafts, games, yoga, cooking, educational worksheets and more. Free, no sign-up.',
    heroLine1: 'Inspire your kids',
    heroLine2: 'every day',
    heroSub1: 'Generate unique and fun activities in seconds.',
    heroSub2: 'No subscription, no sign-up. Completely free.',
    ctaBtn: 'Generate an activity now',
    ctaSub: 'For ages 0 to 12',
    howTitle: "It's this easy",
    steps: [
      { n: '01', title: 'Choose age and category', desc: 'Select your child\'s age and activity type: leisure, yoga, education, and more.' },
      { n: '02', title: 'AI generates the activity', desc: 'In seconds you get a complete activity with steps and materials.' },
      { n: '03', title: 'Do it or download it', desc: 'For education, download a PDF worksheet. For leisure, get hands-on.' },
    ],
    featuresTitle: 'Everything you need',
    features: [
      { emoji: '🎨', title: 'Creative leisure', desc: 'Crafts, games, nature, theater, cooking, music, and experiments adapted to every age.' },
      { emoji: '📚', title: 'Educational worksheets', desc: 'Math, reading, science, history. Download print-ready PDF worksheets.' },
      { emoji: '🌍', title: 'Spanish and English', desc: 'Content in two languages, culturally adapted for each region.' },
      { emoji: '🆓', title: '100% free', desc: 'No paid plans, no sign-up, no tricks. KidSpark is and always will be free.' },
    ],
    blogTitle: 'From the blog',
    blogCta: 'See all articles →',
    finalCta: 'Ready to get inspired?',
    finalSub: "Generate today's first activity",
    finalBtn: 'Open the generator →',
    footerCredits: 'Made with ❤️ for creative parents',
    readMore: 'Read →',
    appAlt: 'Parent using the KidSpark app on their phone',
  },
};

const appImgUrl = () =>
  `https://image.pollinations.ai/prompt/${encodeURIComponent(
    'overhead flat lay of colorful children craft supplies on white wood table, paint brushes, scissors, colored paper, crayons, stickers, professional product photography, vibrant saturated colors, bright natural light, sharp focus, no people, no faces, no text, no logos'
  )}?width=720&height=820&nologo=true&seed=42`;

export default function Home() {
  const [lang, setLang] = useState('es');
  const t = ui[lang];
  const latestPosts = getAllArticlesInLang(lang).slice(0, 3);

  return (
    <>
      <Head>
        <title>{t.siteTitle}</title>
        <meta name="description" content={t.siteDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t.siteTitle} />
        <meta property="og:description" content={t.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kids-one-ebon.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kids-one-ebon.vercel.app/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:bg-amber-800 focus:text-white focus:rounded-lg focus:font-bold">
        Saltar al contenido
      </a>

      <div className="min-h-screen bg-white">
        <Header lang={lang} setLang={setLang} />

        <main id="main-content">

          {/* ── HERO ── */}
          <section className="bg-white">
            <div className="max-w-3xl mx-auto px-4 pt-20 pb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-black text-stone-900 leading-tight mb-5 whitespace-nowrap">
                <span className="block">{t.heroLine1}</span>
                <span className="block text-amber-800">{t.heroLine2}</span>
              </h1>
              <p className="text-lg text-stone-500 mb-1">{t.heroSub1}</p>
              <p className="text-lg text-stone-500 mb-5">{t.heroSub2}</p>

              <Link
                href="/tool"
                className="inline-block bg-amber-800 text-white font-bold text-lg px-8 py-3.5 rounded-full
                  hover:bg-amber-900 active:scale-95 transition-all shadow-md
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
              >
                {t.ctaBtn}
              </Link>
              <p className="text-stone-400 text-sm mt-3">{t.ctaSub}</p>
            </div>
          </section>

          {/* ── HOW IT WORKS ── */}
          <section className="w-full bg-stone-50 border-t border-stone-100 border-b">
            <div className="max-w-5xl mx-auto px-4 py-14">

              <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Creative flatlay photo — bigger */}
                <div className="flex-shrink-0 w-full md:w-80 lg:w-96">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-amber-50 aspect-[3/4]">
                    <img
                      src={appImgUrl()}
                      alt={t.appAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={e => { e.currentTarget.src = 'https://placehold.co/720x820/fef3c7/92400e?text=KidSpark'; }}
                    />
                  </div>
                </div>

                {/* Steps — title aligned with content */}
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-stone-900 mb-8">{t.howTitle}</h2>
                  <div className="space-y-6">
                    {t.steps.map((step) => (
                      <div key={step.n} className="flex gap-5 items-start">
                        <span className="flex-shrink-0 text-3xl font-black text-amber-200 w-12 text-right leading-none pt-1">
                          {step.n}
                        </span>
                        <div>
                          <h3 className="font-black text-stone-900 text-lg leading-snug">{step.title}</h3>
                          <p className="text-stone-500 text-sm mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── FEATURES — bento grid ── */}
          <section className="w-full bg-stone-900">
            <div className="max-w-5xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-black text-white text-center mb-10">{t.featuresTitle}</h2>

              {/* Bento grid — all uniform cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {t.features.map((feature, i) => (
                  <div key={i} className={`bg-stone-800 border border-stone-700 rounded-2xl p-6 flex flex-col
                    ${i === 3 ? 'col-span-2 lg:col-span-1 bg-amber-900/60 border-amber-800' : ''}`}>
                    <span className="text-4xl mb-4" aria-hidden="true">{feature.emoji}</span>
                    <h3 className="font-black text-white text-base mb-2 leading-snug">{feature.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── BLOG PREVIEW ── */}
          {latestPosts.length > 0 && (
            <section className="w-full bg-white border-t border-stone-100">
              <div className="max-w-5xl mx-auto px-4 py-16">
                <div className="flex justify-between items-baseline mb-10">
                  <h2 className="text-3xl font-black text-stone-900">{t.blogTitle}</h2>
                  <Link href="/blog"
                    className="text-amber-700 font-bold text-sm hover:underline
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded">
                    {t.blogCta}
                  </Link>
                </div>
                <div className="grid sm:grid-cols-3 gap-5">
                  {latestPosts.map(article => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="group bg-amber-50 border border-amber-100 rounded-2xl overflow-hidden
                        hover:shadow-md transition-all
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
                    >
                      {/* Photo — 16:9 */}
                      <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={e => { e.currentTarget.src = 'https://placehold.co/800x450/fef3c7/92400e?text=KidSpark'; }}
                        />
                      </div>
                      <div className="p-5">
                        <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-2">
                          {article.category}
                        </span>
                        <h3 className="font-black text-stone-900 text-sm leading-snug mb-2
                          group-hover:text-amber-800 group-hover:underline transition-colors">
                          {article.title}
                        </h3>
                        <span className="text-xs font-bold text-amber-700 group-hover:underline">{t.readMore}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── FINAL CTA — full width ── */}
          <section className="w-full bg-stone-900">
            <div className="max-w-2xl mx-auto px-4 py-20 text-center">
              <h2 className="text-3xl font-black text-white mb-3">{t.finalCta}</h2>
              <p className="text-stone-400 mb-8">{t.finalSub}</p>
              <Link
                href="/tool"
                className="inline-block bg-amber-600 text-white font-bold text-lg px-8 py-3.5 rounded-full
                  hover:bg-amber-500 active:scale-95 transition-all shadow-md
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
              >
                {t.finalBtn}
              </Link>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t border-stone-100 py-8 text-center text-stone-400 text-sm">
          <nav className="flex justify-center gap-4 mb-2 flex-wrap">
            <Link href="/" className="hover:text-amber-800 transition-colors font-semibold text-stone-600">KidSpark</Link>
            <Link href="/tool" className="hover:text-amber-800 transition-colors">{lang === 'es' ? 'Generador' : 'Generator'}</Link>
            <Link href="/blog" className="hover:text-amber-800 transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-amber-800 transition-colors">{lang === 'es' ? 'Sobre nosotros' : 'About'}</Link>
            <Link href="/privacy" className="hover:text-amber-800 transition-colors">{lang === 'es' ? 'Privacidad' : 'Privacy'}</Link>
          </nav>
          <p>{t.footerCredits}</p>
        </footer>
      </div>
    </>
  );
}

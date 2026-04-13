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

const appImgUrl = (lang) =>
  `https://image.pollinations.ai/prompt/${encodeURIComponent(
    'parent using smartphone app to look at children activities, cozy kitchen background, child playing with toys nearby, warm morning light, lifestyle photography, soft focus, no text'
  )}?width=500&height=620&nologo=true&seed=7`;

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
              <p className="text-lg text-stone-500 mb-10">{t.heroSub2}</p>

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
            <div className="max-w-5xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-black text-stone-900 text-center mb-12">{t.howTitle}</h2>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* App mockup image */}
                <div className="flex-shrink-0 w-full md:w-64 lg:w-72">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl bg-amber-50 aspect-[4/5]">
                    <img
                      src={appImgUrl(lang)}
                      alt={t.appAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Steps */}
                <div className="flex-1 space-y-6">
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
          </section>

          {/* ── FEATURES — bento grid ── */}
          <section className="w-full bg-amber-800">
            <div className="max-w-5xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-black text-white text-center mb-10">{t.featuresTitle}</h2>

              {/* Bento grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Feature 1 — large */}
                <div className="col-span-2 lg:col-span-1 lg:row-span-2 bg-amber-700/50 border border-amber-600 rounded-2xl p-7 flex flex-col justify-end min-h-48">
                  <span className="text-5xl mb-4" aria-hidden="true">{t.features[0].emoji}</span>
                  <h3 className="font-black text-white text-lg mb-1">{t.features[0].title}</h3>
                  <p className="text-amber-200 text-sm leading-relaxed">{t.features[0].desc}</p>
                </div>
                {/* Feature 2 */}
                <div className="bg-amber-700/50 border border-amber-600 rounded-2xl p-6">
                  <span className="text-4xl mb-3 block" aria-hidden="true">{t.features[1].emoji}</span>
                  <h3 className="font-black text-white text-base mb-1">{t.features[1].title}</h3>
                  <p className="text-amber-200 text-sm leading-relaxed">{t.features[1].desc}</p>
                </div>
                {/* Feature 3 */}
                <div className="bg-amber-700/50 border border-amber-600 rounded-2xl p-6">
                  <span className="text-4xl mb-3 block" aria-hidden="true">{t.features[2].emoji}</span>
                  <h3 className="font-black text-white text-base mb-1">{t.features[2].title}</h3>
                  <p className="text-amber-200 text-sm leading-relaxed">{t.features[2].desc}</p>
                </div>
                {/* Feature 4 — spans 2 on lg */}
                <div className="col-span-2 lg:col-span-2 bg-white/10 border border-amber-600 rounded-2xl p-6 flex items-center gap-5">
                  <span className="text-5xl flex-shrink-0" aria-hidden="true">{t.features[3].emoji}</span>
                  <div>
                    <h3 className="font-black text-white text-lg mb-1">{t.features[3].title}</h3>
                    <p className="text-amber-200 text-sm leading-relaxed">{t.features[3].desc}</p>
                  </div>
                </div>
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
                      className="group bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden
                        hover:border-amber-300 hover:shadow-md transition-all
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
                    >
                      {/* Photo */}
                      <div className="h-40 bg-amber-50 overflow-hidden">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-black text-amber-700 uppercase tracking-wide">
                          {article.category}
                        </span>
                        <h3 className="font-black text-stone-900 text-sm leading-snug mt-1.5 mb-2
                          group-hover:text-amber-800 transition-colors">
                          {article.title}
                        </h3>
                        <span className="text-xs font-bold text-amber-700">{t.readMore}</span>
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
          <nav className="flex justify-center gap-6 mb-2">
            <Link href="/" className="hover:text-amber-800 transition-colors font-semibold text-stone-600">KidSpark</Link>
            <Link href="/tool" className="hover:text-amber-800 transition-colors">{lang === 'es' ? 'Generador' : 'Generator'}</Link>
            <Link href="/blog" className="hover:text-amber-800 transition-colors">Blog</Link>
          </nav>
          <p>{t.footerCredits}</p>
        </footer>
      </div>
    </>
  );
}

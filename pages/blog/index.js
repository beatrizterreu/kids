import { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import { getAllArticlesInLang } from '../../data/articles';

const ui = {
  es: {
    title: 'Blog de KidSpark — Ideas y actividades para padres',
    description: 'Artículos sobre actividades para niños, educación en casa, manualidades, yoga y más. Ideas frescas para padres creativos.',
    hero: 'Ideas para padres creativos',
    subtitle: 'Artículos sobre actividades, educación y desarrollo infantil',
    filterAll: 'Todos',
    readMin: 'min de lectura',
    readMore: 'Leer artículo →',
    ctaTitle: 'Crea actividades personalizadas en segundos',
    ctaSub: 'Gratis, sin registro, sin límites.',
    ctaBtn: 'Probar el generador →',
    footerCredits: 'Hecho con ❤️ para padres creativos',
  },
  en: {
    title: 'KidSpark Blog — Ideas and activities for parents',
    description: 'Articles on activities for kids, home education, crafts, yoga and more. Fresh ideas for creative parents.',
    hero: 'Ideas for creative parents',
    subtitle: 'Articles on activities, education, and child development',
    filterAll: 'All',
    readMin: 'min read',
    readMore: 'Read article →',
    ctaTitle: 'Create personalized activities in seconds',
    ctaSub: 'Free, no sign-up, no limits.',
    ctaBtn: 'Try the generator →',
    footerCredits: 'Made with ❤️ for creative parents',
  },
};

export default function BlogIndex() {
  const [lang, setLang] = useState('es');
  const [activeFilter, setActiveFilter] = useState('all');
  const t = ui[lang];

  const allArticles = getAllArticlesInLang(lang);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(allArticles.map(a => a.category))];
    return cats;
  }, [lang, allArticles]);

  const filtered = activeFilter === 'all'
    ? allArticles
    : allArticles.filter(a => a.category === activeFilter);

  // Reset filter when lang changes
  const handleLangChange = (newLang) => {
    setLang(newLang);
    setActiveFilter('all');
  };

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:url" content="https://kids-one-ebon.vercel.app/blog" />
        <link rel="canonical" href="https://kids-one-ebon.vercel.app/blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:bg-amber-800 focus:text-white focus:rounded-lg focus:font-bold">
        Skip to content
      </a>

      <div className="min-h-screen bg-white">
        <Header lang={lang} setLang={handleLangChange} />

        <main id="main-content">

          {/* HERO */}
          <section className="bg-white border-b border-stone-100">
            <div className="max-w-5xl mx-auto px-4 pt-12 pb-10 text-center">
              <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-3 leading-tight">
                {t.hero}
              </h1>
              <p className="text-stone-500 text-lg max-w-xl mx-auto">{t.subtitle}</p>
            </div>
          </section>

          {/* FILTERS — gradient hint for horizontal scroll */}
          <section className="sticky top-[57px] z-40 bg-white border-b border-stone-100 shadow-sm">
            <div className="max-w-5xl mx-auto px-4 py-3 relative">
              {/* Fade hint on right edge */}
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
              <div
                className="flex gap-2 overflow-x-auto pb-0.5"
                role="group"
                aria-label={lang === 'es' ? 'Filtrar por categoría' : 'Filter by category'}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <button
                  onClick={() => setActiveFilter('all')}
                  aria-pressed={activeFilter === 'all'}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-bold transition-all
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700
                    ${activeFilter === 'all'
                      ? 'bg-amber-800 text-white shadow-sm'
                      : 'bg-amber-50 text-stone-600 hover:bg-amber-100 hover:text-amber-800'
                    }`}
                >
                  {t.filterAll}
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    aria-pressed={activeFilter === cat}
                    className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-bold transition-all
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700
                      ${activeFilter === cat
                        ? 'bg-amber-800 text-white shadow-sm'
                        : 'bg-amber-50 text-stone-600 hover:bg-amber-100 hover:text-amber-800'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
                {/* Spacer so last item isn't behind the fade */}
                <div className="flex-shrink-0 w-6" aria-hidden="true" />
              </div>
            </div>
          </section>

          {/* ARTICLES GRID */}
          <section className="max-w-5xl mx-auto px-4 py-10 pb-20">

            {/* Featured first article */}
            {filtered[0] && (
              <Link
                href={`/blog/${filtered[0].slug}`}
                className="group block bg-amber-50 border border-amber-100 rounded-3xl overflow-hidden
                  hover:shadow-lg transition-all mb-8
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
              >
                <div className="md:flex">
                  <div className="md:w-80 flex-shrink-0 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={filtered[0].imageUrl}
                      alt={filtered[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                      onError={e => { e.currentTarget.src = 'https://placehold.co/800x450/fef3c7/92400e?text=KidSpark'; }}
                    />
                  </div>
                  <div className="p-7 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-amber-100 text-amber-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                        {filtered[0].category}
                      </span>
                      <span className="text-stone-400 text-sm">{filtered[0].readTime} {t.readMin}</span>
                    </div>
                    <h2 className="text-2xl font-black text-stone-900 leading-tight mb-3 group-hover:text-amber-800 transition-colors">
                      {filtered[0].title}
                    </h2>
                    <p className="text-stone-600 leading-relaxed mb-4 text-sm">
                      {filtered[0].excerpt}
                    </p>
                    <span className="text-amber-700 font-bold text-sm group-hover:underline">
                      {t.readMore}
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* Grid of remaining articles */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.slice(1).map(article => (
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
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-stone-400 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="font-black text-stone-900 text-sm leading-snug mb-2 group-hover:text-amber-800 transition-colors group-hover:underline">
                      {article.title}
                    </h3>
                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <span className="mt-3 block text-xs font-bold text-amber-700 group-hover:underline">
                      {t.readMore}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-stone-400">
                <p className="text-lg">{lang === 'es' ? 'Sin artículos en esta categoría' : 'No articles in this category'}</p>
              </div>
            )}
          </section>

          {/* CTA — full width */}
          <section className="w-full bg-stone-900">
            <div className="max-w-2xl mx-auto px-4 py-16 text-center">
              <h2 className="text-2xl font-black text-white mb-2">{t.ctaTitle}</h2>
              <p className="text-stone-300 mb-7 text-base">{t.ctaSub}</p>
              <Link
                href="/tool"
                className="inline-block bg-amber-400 text-stone-900 font-bold px-8 py-3.5 rounded-full
                  hover:bg-amber-300 transition-colors shadow-md
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
              >
                {t.ctaBtn}
              </Link>
            </div>
          </section>

        </main>

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

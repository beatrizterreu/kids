import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { articles } from '../../data/articles';

export default function BlogIndex() {
  const [lang, setLang] = useState('es');
  const filtered = articles.filter(a => a.lang === lang);

  const ui = {
    es: {
      title: 'Blog de KidSpark — Ideas y actividades para padres',
      description: 'Artículos sobre actividades para niños, educación en casa, manualidades, yoga y más. Ideas frescas para padres creativos.',
      hero: 'Ideas para padres creativos',
      subtitle: 'Artículos sobre actividades, educación y desarrollo infantil',
      allArticles: 'Todos los artículos',
      readArticle: 'Leer artículo →',
      tryTool: 'Probar el generador →',
      toolTagline: 'Crea actividades personalizadas en segundos',
      readTime: 'de lectura',
    },
    en: {
      title: 'KidSpark Blog — Ideas and activities for parents',
      description: 'Articles on activities for kids, home education, crafts, yoga and more. Fresh ideas for creative parents.',
      hero: 'Ideas for creative parents',
      subtitle: 'Articles on activities, education, and child development',
      allArticles: 'All articles',
      readArticle: 'Read article →',
      tryTool: 'Try the generator →',
      toolTagline: 'Create personalized activities in seconds',
      readTime: 'read',
    },
  };

  const t = ui[lang];

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kids-one-ebon.vercel.app/blog" />
        <link rel="canonical" href="https://kids-one-ebon.vercel.app/blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:bg-amber-800 focus:text-white focus:rounded-lg focus:font-bold">
        Skip to content
      </a>

      <div className="min-h-screen bg-stone-50">

        {/* ── HEADER ── */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-5">
              <Link href="/" aria-label="KidSpark — home"
                className="text-xl font-black text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded-lg">
                KidSpark
              </Link>
              <span className="text-sm font-black text-stone-300" aria-hidden="true">/</span>
              <span className="text-sm font-semibold text-stone-600">Blog</span>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="blog-lang" className="sr-only">Idioma / Language</label>
              <select
                id="blog-lang"
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
                className="hidden sm:block bg-amber-800 text-white text-sm font-black px-4 py-2 rounded-full
                  hover:bg-amber-900 transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2">
                {t.tryTool}
              </Link>
            </div>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main id="main-content" className="max-w-4xl mx-auto px-4 pb-20">

          {/* HERO */}
          <div className="text-center pt-12 pb-10">
            <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-4 leading-tight">
              {t.hero}
            </h1>
            <p className="text-stone-600 text-xl max-w-xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Featured article (first one) */}
          {filtered[0] && (
            <Link
              href={`/blog/${filtered[0].slug}`}
              className="group block bg-white border border-stone-200 rounded-3xl overflow-hidden
                hover:border-amber-300 hover:shadow-lg transition-all mb-10
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
            >
              <div className="md:flex">
                {/* Decorative color band */}
                <div className="md:w-56 flex-shrink-0 bg-gradient-to-br from-amber-100 to-orange-100
                  flex items-center justify-center py-12 md:py-0 text-7xl">
                  {filtered[0].emoji}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-amber-100 text-amber-800 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                      {filtered[0].category}
                    </span>
                    <span className="text-stone-400 text-sm">{filtered[0].readTime} {t.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-black text-stone-900 leading-tight mb-3 group-hover:text-amber-800 transition-colors">
                    {filtered[0].title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    {filtered[0].excerpt}
                  </p>
                  <span className="text-amber-700 font-black text-sm group-hover:underline">
                    {t.readArticle}
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Article grid */}
          <section aria-label={t.allArticles}>
            <h2 className="sr-only">{t.allArticles}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.slice(1).map(article => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white border border-stone-200 rounded-2xl p-6
                    hover:border-amber-300 hover:shadow-md transition-all
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
                >
                  <span className="text-4xl mb-4 block" aria-hidden="true">{article.emoji}</span>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-amber-50 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-stone-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="font-black text-stone-900 text-base leading-snug mb-2 group-hover:text-amber-800 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 block text-xs font-black text-amber-700 group-hover:underline">
                    {t.readArticle}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA banner */}
          <div className="mt-16 bg-amber-800 text-white rounded-3xl px-8 py-10 text-center">
            <p className="text-2xl font-black mb-2">{t.toolTagline}</p>
            <p className="text-amber-200 mb-6 text-base">
              {lang === 'es'
                ? 'Gratis, sin registro, sin límites.'
                : 'Free, no sign-up, no limits.'}
            </p>
            <Link
              href="/tool"
              className="inline-block bg-white text-amber-900 font-black px-8 py-4 rounded-full
                hover:bg-amber-50 transition-colors shadow-md
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-800"
            >
              {t.tryTool}
            </Link>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="text-center py-8 text-stone-400 text-sm border-t border-stone-100">
          <nav className="flex justify-center gap-6 mb-2">
            <Link href="/" className="hover:text-amber-800 transition-colors">KidSpark</Link>
            <Link href="/blog" className="hover:text-amber-800 transition-colors">Blog</Link>
            <Link href="/tool" className="hover:text-amber-800 transition-colors">
              {lang === 'es' ? 'Generador' : 'Generator'}
            </Link>
          </nav>
          <p>{lang === 'es' ? 'Hecho con ❤️ para padres creativos' : 'Made with ❤️ for creative parents'}</p>
        </footer>
      </div>
    </>
  );
}

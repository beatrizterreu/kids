import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import { articles, getArticleInLang, getArticleBySlug, getAllSlugs } from '../../data/articles';

export async function getStaticPaths() {
  return {
    paths: getAllSlugs().map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const rawArticle = getArticleBySlug(params.slug);
  if (!rawArticle) return { notFound: true };

  // Related: 3 other articles (we pass raw to allow bilingual rendering client-side)
  const relatedRaw = articles
    .filter(a => a.slug !== params.slug)
    .slice(0, 3);

  return { props: { rawArticle, relatedRaw } };
}

// ─── RENDER BLOCK ─────────────────────────────────────────────────────────────
function renderBlock(block, index) {
  const parseBold = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong key={i} className="text-stone-900">{part.slice(2, -2)}</strong>
        : part
    );
  };

  switch (block.type) {
    case 'intro':
      return (
        <p key={index} className="text-xl text-stone-700 leading-relaxed font-medium border-l-4 border-amber-600 pl-5 py-1 my-6">
          {block.text}
        </p>
      );
    case 'h2':
      return (
        <h2 key={index} className="text-2xl font-black text-stone-900 mt-10 mb-4 leading-tight">
          {block.text}
        </h2>
      );
    case 'text':
      return (
        <p key={index} className="text-stone-700 leading-relaxed my-4">{block.text}</p>
      );
    case 'list':
      return (
        <ul key={index} className="my-4 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-stone-700 leading-relaxed">
              <span className="text-amber-700 mt-1 flex-shrink-0">—</span>
              <span>{parseBold(item)}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ArticlePage({ rawArticle, relatedRaw }) {
  const [lang, setLang] = useState('es');
  const article = getArticleInLang(rawArticle, lang);
  const related = relatedRaw.map(a => getArticleInLang(a, lang));
  const canonical = `https://kids-one-ebon.vercel.app/blog/${rawArticle.slug}`;

  const isEs = lang === 'es';
  const copy = {
    back: isEs ? '← Volver al blog' : '← Back to blog',
    relatedTitle: isEs ? 'Más artículos' : 'More articles',
    readTime: isEs ? `${article.readTime} de lectura` : `${article.readTime} read`,
    toolDesc: isEs ? 'Genera actividades personalizadas para tus hijos en segundos, gratis.' : 'Generate personalized activities for your kids in seconds, free.',
    toolBtn: isEs ? 'Probar el generador →' : 'Try the generator →',
    footerCredits: isEs ? 'Hecho con ❤️ para padres creativos' : 'Made with ❤️ for creative parents',
  };

  return (
    <>
      <Head>
        <title>{article.title} — KidSpark</title>
        <meta name="description" content={article.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={article.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          image: article.imageUrl,
          url: canonical,
          publisher: { '@type': 'Organization', name: 'KidSpark', url: 'https://kids-one-ebon.vercel.app' },
        }) }} />
      </Head>

      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:bg-amber-800 focus:text-white focus:rounded-lg focus:font-bold">
        Skip to content
      </a>

      <div className="min-h-screen bg-white">
        <Header lang={lang} setLang={setLang} />

        <main id="main-content" className="max-w-3xl mx-auto px-4 py-10 pb-20">

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-8">
            <Link href="/blog"
              className="text-sm text-amber-700 font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded">
              {copy.back}
            </Link>
          </nav>

          {/* Hero image */}
          <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden bg-amber-50 mb-8">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Article header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                {article.category}
              </span>
              <span className="text-stone-400 text-sm">{copy.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-stone-900 leading-tight mb-3">
              {article.title}
            </h1>
            <p className="text-stone-400 text-sm">
              {new Date(article.date).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>
          </header>

          <div className="border-t-2 border-amber-100 mb-8" />

          {/* Body */}
          <article>
            {article.content.map((block, i) => renderBlock(block, i))}
          </article>

          {/* CTA box */}
          <div className="mt-14 bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center">
            <p className="text-stone-600 mb-5">{copy.toolDesc}</p>
            <Link
              href="/tool"
              className="inline-block bg-amber-800 text-white font-bold px-8 py-3.5 rounded-full
                hover:bg-amber-900 transition-colors shadow-md
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
            >
              {copy.toolBtn}
            </Link>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-14" aria-label={copy.relatedTitle}>
              <h2 className="text-2xl font-black text-stone-900 mb-6">{copy.relatedTitle}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(rel => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden
                      hover:border-amber-300 hover:shadow-md transition-all
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
                  >
                    <div className="h-28 bg-amber-50 overflow-hidden">
                      <img
                        src={rel.imageUrl}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-black text-stone-900 leading-snug group-hover:text-amber-800 transition-colors">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1">{rel.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>

        <footer className="bg-white border-t border-stone-100 py-8 text-center text-stone-400 text-sm">
          <nav className="flex justify-center gap-6 mb-2">
            <Link href="/" className="hover:text-amber-800 transition-colors font-semibold text-stone-600">KidSpark</Link>
            <Link href="/tool" className="hover:text-amber-800 transition-colors">{isEs ? 'Generador' : 'Generator'}</Link>
            <Link href="/blog" className="hover:text-amber-800 transition-colors">Blog</Link>
          </nav>
          <p>{copy.footerCredits}</p>
        </footer>
      </div>
    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import { articles, getArticleBySlug, getAllSlugs } from '../../data/articles';

// ─── STATIC GENERATION ────────────────────────────────────────────────────────
export async function getStaticPaths() {
  const slugs = getAllSlugs();
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return { notFound: true };

  // Get 3 related articles (same lang, exclude current)
  const related = articles
    .filter(a => a.lang === article.lang && a.slug !== article.slug)
    .slice(0, 3);

  return { props: { article, related } };
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
function renderBlock(block, index) {
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
        <p key={index} className="text-stone-700 leading-relaxed my-4">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className="my-4 space-y-3">
          {block.items.map((item, i) => {
            // Parse **bold** markdown
            const parts = item.split(/(\*\*[^*]+\*\*)/g);
            return (
              <li key={i} className="flex gap-3 items-start text-stone-700 leading-relaxed">
                <span className="text-amber-700 mt-1 flex-shrink-0">—</span>
                <span>
                  {parts.map((part, pi) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={pi} className="text-stone-900">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </span>
              </li>
            );
          })}
        </ul>
      );
    default:
      return null;
  }
}

export default function ArticlePage({ article, related }) {
  const isEs = article.lang === 'es';
  const canonical = `https://kids-one-ebon.vercel.app/blog/${article.slug}`;

  const ui = {
    backToBlog: isEs ? '← Volver al blog' : '← Back to blog',
    readMore: isEs ? 'Leer artículo' : 'Read article',
    relatedTitle: isEs ? 'Más artículos' : 'More articles',
    readTime: isEs ? `${article.readTime} de lectura` : `${article.readTime} read`,
    tryTool: isEs ? 'Prueba el generador de actividades →' : 'Try the activity generator →',
    toolDesc: isEs
      ? 'Genera actividades personalizadas para tus hijos en segundos, gratis.'
      : 'Generate personalized activities for your kids in seconds, free.',
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
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          url: canonical,
          publisher: {
            '@type': 'Organization',
            name: 'KidSpark',
            url: 'https://kids-one-ebon.vercel.app',
          },
        }) }} />
      </Head>

      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:bg-amber-800 focus:text-white focus:rounded-lg focus:font-bold">
        Skip to content
      </a>

      <div className="min-h-screen bg-stone-50">

        {/* ── HEADER ── */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
          <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" aria-label="KidSpark — home"
              className="text-xl font-black text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded-lg">
              KidSpark
            </Link>
            <nav className="flex items-center gap-5 text-sm font-semibold text-stone-500">
              <Link href="/blog" className="hover:text-amber-800 transition-colors">Blog</Link>
              <Link href="/tool"
                className="bg-amber-800 text-white px-4 py-1.5 rounded-full hover:bg-amber-900 transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2">
                {isEs ? 'Generador' : 'Generator'}
              </Link>
            </nav>
          </div>
        </header>

        {/* ── ARTICLE ── */}
        <main id="main-content" className="max-w-3xl mx-auto px-4 py-10 pb-20">

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-8">
            <Link href="/blog"
              className="text-sm text-amber-700 font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded">
              {ui.backToBlog}
            </Link>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl" aria-hidden="true">{article.emoji}</span>
              <span className="bg-amber-100 text-amber-800 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
                {article.category}
              </span>
              <span className="text-stone-400 text-sm">{ui.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-stone-900 leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-stone-500 text-sm">
              {new Date(article.date).toLocaleDateString(article.lang === 'es' ? 'es-ES' : 'en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>
          </header>

          {/* Divider */}
          <div className="border-t-2 border-amber-100 mb-8" />

          {/* Article body */}
          <article className="prose-stone max-w-none">
            {article.content.map((block, i) => renderBlock(block, i))}
          </article>

          {/* CTA box */}
          <div className="mt-14 bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center">
            <p className="text-stone-600 text-base mb-4">{ui.toolDesc}</p>
            <Link
              href="/tool"
              className="inline-block bg-amber-800 text-white font-black px-8 py-4 rounded-full
                hover:bg-amber-900 transition-colors shadow-md
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
            >
              {ui.tryTool}
            </Link>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <section className="mt-16" aria-label={ui.relatedTitle}>
              <h2 className="text-2xl font-black text-stone-900 mb-6">{ui.relatedTitle}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(rel => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group bg-white border border-stone-200 rounded-2xl p-5 hover:border-amber-300
                      hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
                  >
                    <span className="text-2xl mb-3 block" aria-hidden="true">{rel.emoji}</span>
                    <h3 className="text-sm font-black text-stone-900 leading-snug group-hover:text-amber-800 transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-2">{rel.readTime}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* FOOTER */}
        <footer className="text-center py-8 text-stone-400 text-sm border-t border-stone-100">
          <nav className="flex justify-center gap-6 mb-2">
            <Link href="/" className="hover:text-amber-800 transition-colors">KidSpark</Link>
            <Link href="/blog" className="hover:text-amber-800 transition-colors">Blog</Link>
            <Link href="/tool" className="hover:text-amber-800 transition-colors">
              {isEs ? 'Generador' : 'Generator'}
            </Link>
          </nav>
          <p>{isEs ? 'Hecho con ❤️ para padres creativos' : 'Made with ❤️ for creative parents'}</p>
        </footer>
      </div>
    </>
  );
}

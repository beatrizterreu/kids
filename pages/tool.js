import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';

// ─── TRANSLATIONS (ES + EN only) ─────────────────────────────────────────────
const translations = {
  es: {
    siteTitle: 'Generador de Actividades — KidSpark',
    siteDesc: 'Genera actividades únicas, divertidas y educativas para niños en segundos. Manualidades, juegos, yoga, cocina y más.',
    hero: '¿Qué hacemos hoy?',
    subtitle: 'Genera actividades únicas y divertidas para tus hijos en segundos',
    ageLabel: 'Edad del niño',
    timeLabel: 'Tiempo disponible',
    locationLabel: 'Dónde',
    groupOcio: 'Ocio',
    groupEdu: 'Educación',
    generateBtn: 'Generar actividad',
    generatingBtn: 'Creando magia...',
    generateWorksheet: 'Descargar ficha PDF',
    generatingWorksheet: 'Generando ficha...',
    generateAnother: 'Generar otra actividad',
    materialsTitle: 'Materiales necesarios',
    stepsTitle: 'Cómo hacerlo',
    buyOnAmazon: 'Ver en Amazon',
    langLabel: 'Idioma',
    difficulty: { easy: 'Fácil', medium: 'Medio', hard: 'Difícil' },
    errorMsg: 'Algo salió mal. Inténtalo de nuevo.',
    footerCredits: 'Hecho con ❤️ para padres creativos',
    backHome: 'Inicio',
    ages: [
      { label: '0–2 años', emoji: '👶' },
      { label: '3–5 años', emoji: '🧒' },
      { label: '6–8 años', emoji: '🧑' },
      { label: '9–12 años', emoji: '👦' },
    ],
    categoryGroups: [
      {
        groupLabel: 'Ocio',
        items: [
          { label: 'Manualidades', emoji: '🎨' },
          { label: 'Juegos', emoji: '🎮' },
          { label: 'Naturaleza', emoji: '🌿' },
          { label: 'Yoga', emoji: '🧘' },
          { label: 'Cocina', emoji: '👨‍🍳' },
          { label: 'Música', emoji: '🎵' },
          { label: 'Teatro', emoji: '🎭' },
          { label: 'Experimentos', emoji: '🧪' },
          { label: 'Deporte', emoji: '🏃' },
        ],
      },
      {
        groupLabel: 'Educación',
        items: [
          { label: 'Matemáticas', emoji: '🔢' },
          { label: 'Lectura', emoji: '📖' },
          { label: 'Caligrafía', emoji: '✏️' },
          { label: 'Ciencias', emoji: '🔬' },
          { label: 'Historia', emoji: '🏛️' },
          { label: 'Idiomas', emoji: '🌍' },
          { label: 'Geografía', emoji: '🗺️' },
          { label: 'Lógica', emoji: '🧩' },
        ],
      },
    ],
    times: [
      { label: '15 min', emoji: '⚡' },
      { label: '30 min', emoji: '🕐' },
      { label: '1 hora', emoji: '⏳' },
      { label: 'Libre', emoji: '🌟' },
    ],
    locations: [
      { label: 'Interior', emoji: '🏠' },
      { label: 'Exterior', emoji: '🌳' },
    ],
  },
  en: {
    siteTitle: 'Activity Generator — KidSpark',
    siteDesc: 'Generate unique, fun and educational activities for kids in seconds. Crafts, games, yoga, cooking and more.',
    hero: 'What are we doing today?',
    subtitle: 'Generate unique and fun activities for your kids in seconds',
    ageLabel: "Child's age",
    timeLabel: 'Time available',
    locationLabel: 'Where',
    groupOcio: 'Leisure',
    groupEdu: 'Education',
    generateBtn: 'Generate activity',
    generatingBtn: 'Creating magic...',
    generateWorksheet: 'Download PDF worksheet',
    generatingWorksheet: 'Generating worksheet...',
    generateAnother: 'Generate another activity',
    materialsTitle: 'Materials needed',
    stepsTitle: 'How to do it',
    buyOnAmazon: 'See on Amazon',
    langLabel: 'Language',
    difficulty: { easy: 'Easy', medium: 'Medium', hard: 'Hard' },
    errorMsg: 'Something went wrong. Please try again.',
    footerCredits: 'Made with ❤️ for creative parents',
    backHome: 'Home',
    ages: [
      { label: '0–2 years', emoji: '👶' },
      { label: '3–5 years', emoji: '🧒' },
      { label: '6–8 years', emoji: '🧑' },
      { label: '9–12 years', emoji: '👦' },
    ],
    categoryGroups: [
      {
        groupLabel: 'Leisure',
        items: [
          { label: 'Crafts', emoji: '🎨' },
          { label: 'Games', emoji: '🎮' },
          { label: 'Nature', emoji: '🌿' },
          { label: 'Yoga', emoji: '🧘' },
          { label: 'Cooking', emoji: '👨‍🍳' },
          { label: 'Music', emoji: '🎵' },
          { label: 'Theater', emoji: '🎭' },
          { label: 'Experiments', emoji: '🧪' },
          { label: 'Sports', emoji: '🏃' },
        ],
      },
      {
        groupLabel: 'Education',
        items: [
          { label: 'Math', emoji: '🔢' },
          { label: 'Reading', emoji: '📖' },
          { label: 'Handwriting', emoji: '✏️' },
          { label: 'Science', emoji: '🔬' },
          { label: 'History', emoji: '🏛️' },
          { label: 'Languages', emoji: '🌍' },
          { label: 'Geography', emoji: '🗺️' },
          { label: 'Logic', emoji: '🧩' },
        ],
      },
    ],
    times: [
      { label: '15 min', emoji: '⚡' },
      { label: '30 min', emoji: '🕐' },
      { label: '1 hour', emoji: '⏳' },
      { label: 'Free', emoji: '🌟' },
    ],
    locations: [
      { label: 'Indoor', emoji: '🏠' },
      { label: 'Outdoor', emoji: '🌳' },
    ],
  },
};

// ─── EARTHY COLOUR TOKENS (WCAG AA ≥ 4.5:1) ─────────────────────────────────
const pillActive   = 'bg-amber-800 text-white scale-105 shadow-md';
const pillInactive = 'bg-amber-50 text-stone-800 hover:bg-amber-100';
const pillFocus    = 'focus-visible:ring-amber-700';

const difficultyColors = {
  easy:   { bg: 'bg-green-100',  text: 'text-green-800' },
  medium: { bg: 'bg-amber-100',  text: 'text-amber-900' },
  hard:   { bg: 'bg-red-100',    text: 'text-red-800'   },
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────
function PillButton({ active, onClick, emoji, label, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      aria-label={ariaLabel || label}
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold
        transition-all duration-150 focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-offset-2 ${pillFocus}
        ${active ? pillActive : pillInactive}`}
    >
      <span aria-hidden="true">{emoji}</span>
      <span>{label}</span>
    </button>
  );
}

function LoadingSkeleton() {
  return (
    <div
      className="mt-6 bg-white rounded-3xl shadow-lg overflow-hidden"
      role="status"
      aria-label="Cargando actividad..."
    >
      <div className="h-56 shimmer" />
      <div className="p-6 space-y-4" aria-hidden="true">
        <div className="h-7 shimmer rounded-xl w-3/4" />
        <div className="flex gap-3">
          <div className="h-6 shimmer rounded-full w-20" />
          <div className="h-6 shimmer rounded-full w-20" />
          <div className="h-6 shimmer rounded-full w-16" />
        </div>
        <div className="h-4 shimmer rounded-lg" />
        <div className="h-4 shimmer rounded-lg w-5/6" />
        <div className="space-y-2 pt-2">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-4 shimmer rounded-lg" style={{ width: `${68 + i * 6}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Tool() {
  const [lang, setLang]               = useState('es');
  const [age, setAge]                 = useState(1);
  const [catGroup, setCatGroup]       = useState(0);
  const [catItem, setCatItem]         = useState(0);
  const [time, setTime]               = useState(1);
  const [location, setLocation]       = useState(0);
  const [loading, setLoading]         = useState(false);
  const [loadingPdf, setLoadingPdf]   = useState(false);
  const [activity, setActivity]       = useState(null);
  const [error, setError]             = useState(null);
  const [imgLoaded, setImgLoaded]     = useState(false);

  const t            = translations[lang];
  const isEducation  = catGroup === 1;
  const selectedCat  = t.categoryGroups[catGroup].items[catItem];
  const affiliateTag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || 'kidspark0b-20';

  const langMap = { es: 'SPANISH', en: 'ENGLISH' };

  const generateActivity = async () => {
    setLoading(true);
    setError(null);
    setActivity(null);
    setImgLoaded(false);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          age: t.ages[age].label,
          category: `${selectedCat.emoji} ${selectedCat.label}`,
          time: t.times[time].label,
          location: t.locations[location].label,
          lang,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setActivity(data);
    } catch {
      setError(t.errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const downloadWorksheet = async () => {
    setLoadingPdf(true);
    try {
      const res = await fetch('/api/generate-worksheet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          age: t.ages[age].label,
          category: selectedCat.label,
          lang,
          responseLang: langMap[lang],
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      const win = window.open('', '_blank');
      win.document.write(data.html);
      win.document.close();
      setTimeout(() => win.print(), 600);
    } catch {
      setError(t.errorMsg);
    } finally {
      setLoadingPdf(false);
    }
  };

  const imageUrl = activity
    ? `https://image.pollinations.ai/prompt/${encodeURIComponent(
        activity.imagePrompt + ', children book illustration style, hand drawn, warm pastel colors, soft lines, whimsical and cozy, watercolor texture, no text, no letters'
      )}?width=600&height=400&nologo=true`
    : null;

  return (
    <>
      <Head>
        <title>{t.siteTitle}</title>
        <meta name="description" content={t.siteDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="actividades para niños, manualidades niños, activities for kids, crafts for children, fichas educativas, yoga niños" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t.siteTitle} />
        <meta property="og:description" content={t.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kids-one-ebon.vercel.app/tool" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kids-one-ebon.vercel.app/tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:bg-amber-800 focus:text-white focus:rounded-lg focus:font-bold"
      >
        Saltar al contenido
      </a>

      <div className="min-h-screen bg-white">

        <Header lang={lang} setLang={setLang} />

        {/* ── MAIN ── */}
        <main id="main-content" className="max-w-2xl mx-auto px-4 pb-16">

          {/* HERO */}
          <div className="text-center pt-10 pb-8">
            <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-4 leading-tight">
              {t.hero}
            </h1>
            <p className="text-stone-600 text-xl md:text-2xl max-w-md mx-auto font-medium">
              {t.subtitle}
            </p>
          </div>

          {/* FILTER CARD */}
          <section aria-label="Filtros de actividad" className="bg-white rounded-3xl shadow-sm border border-stone-200 p-6 space-y-7">

            {/* AGE */}
            <fieldset>
              <legend className="text-xs font-black text-stone-500 uppercase tracking-widest mb-3">
                {t.ageLabel}
              </legend>
              <div className="flex flex-wrap gap-3" role="group">
                {t.ages.map((a, i) => (
                  <PillButton key={i} active={age === i} onClick={() => setAge(i)}
                    emoji={a.emoji} label={a.label} />
                ))}
              </div>
            </fieldset>

            {/* CATEGORIES */}
            <fieldset>
              <legend className="text-xs font-black text-stone-500 uppercase tracking-widest mb-3">
                Actividad
              </legend>

              {/* Segmented control — pill style, warm brown */}
              <div className="flex bg-amber-100 rounded-full p-1 mb-5 gap-1" role="tablist">
                {t.categoryGroups.map((group, gi) => {
                  const isActive = catGroup === gi;
                  return (
                    <button
                      key={gi}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => { setCatGroup(gi); setCatItem(0); setActivity(null); }}
                      className={`flex-1 py-2.5 px-4 rounded-full
                        font-bold text-sm transition-all duration-200
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2
                        ${isActive
                          ? 'bg-amber-800 text-white shadow-sm'
                          : 'text-stone-600 hover:text-amber-900'
                        }`}
                    >
                      {group.groupLabel}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3" role="tabpanel" aria-label={t.categoryGroups[catGroup].groupLabel}>
                {t.categoryGroups[catGroup].items.map((item, ii) => (
                  <PillButton
                    key={ii}
                    active={catItem === ii}
                    onClick={() => { setCatItem(ii); setActivity(null); }}
                    emoji={item.emoji}
                    label={item.label}
                  />
                ))}
              </div>
            </fieldset>

            {/* TIME — only for Ocio */}
            {!isEducation && (
              <fieldset>
                <legend className="text-xs font-black text-stone-500 uppercase tracking-widest mb-3">
                  {t.timeLabel}
                </legend>
                <div className="flex flex-wrap gap-3" role="group">
                  {t.times.map((tm, i) => (
                    <PillButton key={i} active={time === i} onClick={() => setTime(i)}
                      emoji={tm.emoji} label={tm.label} />
                  ))}
                </div>
              </fieldset>
            )}

            {/* LOCATION — only for Ocio */}
            {!isEducation && (
              <fieldset>
                <legend className="text-xs font-black text-stone-500 uppercase tracking-widest mb-3">
                  {t.locationLabel}
                </legend>
                <div className="flex flex-wrap gap-3" role="group">
                  {t.locations.map((loc, i) => (
                    <PillButton key={i} active={location === i} onClick={() => setLocation(i)}
                      emoji={loc.emoji} label={loc.label} />
                  ))}
                </div>
              </fieldset>
            )}
          </section>

          {/* BUTTONS */}
          <div className="mt-5 flex flex-col gap-3">
            <button
              onClick={generateActivity}
              disabled={loading || loadingPdf}
              aria-busy={loading}
              className="w-full py-3.5 rounded-full text-base font-black text-white shadow-lg
                bg-amber-800 hover:bg-amber-900
                active:scale-95 transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-700
                disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t.generatingBtn}
                </span>
              ) : t.generateBtn}
            </button>

            <button
              onClick={isEducation ? downloadWorksheet : undefined}
              disabled={!isEducation || loading || loadingPdf}
              aria-busy={loadingPdf}
              aria-disabled={!isEducation}
              className={`w-full py-3.5 rounded-full text-base font-black transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                active:scale-95
                ${isEducation
                  ? 'bg-stone-700 hover:bg-stone-800 text-white shadow-lg focus-visible:ring-stone-600'
                  : 'bg-stone-100 text-stone-400 cursor-not-allowed shadow-none'
                }`}
            >
              {loadingPdf ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t.generatingWorksheet}
                </span>
              ) : `📄 ${t.generateWorksheet}`}
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <div role="alert" className="mt-5 bg-red-50 border border-red-200 rounded-2xl p-4 text-red-800 text-center font-semibold">
              {error}
            </div>
          )}

          {/* SKELETON */}
          {loading && <LoadingSkeleton />}

          {/* RESULT CARD */}
          {activity && !loading && (
            <article
              className="mt-6 bg-white rounded-3xl shadow-md border border-stone-100 overflow-hidden"
              aria-live="polite"
              aria-atomic="true"
            >
              {/* Image */}
              <div className="relative h-60 bg-gradient-to-br from-amber-50 to-stone-100 overflow-hidden">
                {!imgLoaded && <div className="absolute inset-0 shimmer" aria-hidden="true" />}
                <img
                  src={imageUrl}
                  alt={`Ilustración de la actividad: ${activity.title}`}
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => { e.target.style.display = 'none'; setImgLoaded(true); }}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              <div className="p-6 space-y-6">

                {/* Title + Badges */}
                <div>
                  <h2 className="text-2xl font-black text-stone-900 mb-4 leading-tight">
                    {activity.title}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full">
                      {t.ages[age].label}
                    </span>
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full">
                      {activity.duration}
                    </span>
                    {activity.difficulty && difficultyColors[activity.difficulty] && (
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full
                        ${difficultyColors[activity.difficulty].bg}
                        ${difficultyColors[activity.difficulty].text}`}>
                        {t.difficulty[activity.difficulty]}
                      </span>
                    )}
                    <span className="bg-stone-100 text-stone-700 text-xs font-bold px-3 py-1.5 rounded-full">
                      {selectedCat.label}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-stone-700 text-lg leading-relaxed">{activity.description}</p>

                {/* Steps */}
                <section aria-label={t.stepsTitle}>
                  <h3 className="font-black text-stone-900 text-lg mb-4">{t.stepsTitle}</h3>
                  <ol className="space-y-3">
                    {activity.steps && activity.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span
                          aria-hidden="true"
                          className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-800
                            text-white text-xs font-black flex items-center justify-center mt-0.5 shadow-sm"
                        >
                          {i + 1}
                        </span>
                        <span className="text-stone-700 text-sm leading-relaxed pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* Materials */}
                {activity.materials && activity.materials.length > 0 && (
                  <section aria-label={t.materialsTitle}>
                    <h3 className="font-black text-stone-900 text-lg mb-4">{t.materialsTitle}</h3>
                    <ul className="space-y-2">
                      {activity.materials.map((mat, i) => (
                        <li key={i}>
                          <a
                            href={`https://www.amazon.com/s?k=${encodeURIComponent(mat.amazonSearch)}&tag=${affiliateTag}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${mat.name} — ${t.buyOnAmazon}`}
                            className="flex items-center justify-between bg-amber-50 hover:bg-amber-100
                              border border-amber-200 rounded-2xl px-4 py-3 transition-all group
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
                          >
                            <div className="flex items-center gap-2.5">
                              <span aria-hidden="true" className="text-xl">🛍️</span>
                              <span className="text-sm font-bold text-stone-800">{mat.name}</span>
                            </div>
                            <span className="text-xs text-amber-800 font-black group-hover:underline whitespace-nowrap">
                              {t.buyOnAmazon} →
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Generate another */}
                <button
                  onClick={generateActivity}
                  disabled={loading}
                  className="w-full py-4 rounded-full text-base font-black text-white
                    bg-amber-800 hover:bg-amber-900
                    active:scale-95 transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-700
                    disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                >
                  {t.generateAnother}
                </button>
              </div>
            </article>
          )}
        </main>

        {/* FOOTER */}
        <footer className="text-center py-8 text-stone-400 text-sm border-t border-stone-100">
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

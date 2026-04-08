import { useState } from 'react';
import Head from 'next/head';

const translations = {
  es: {
    siteTitle: 'KidSpark — Actividades para Niños',
    siteDesc: 'Genera actividades únicas, divertidas y educativas para niños en segundos. Manualidades, juegos, yoga, cocina y más.',
    hero: '¿Qué hacemos hoy?',
    heroEmoji: '✨',
    subtitle: 'Genera actividades únicas y divertidas para tus hijos en segundos',
    ageLabel: 'Edad del niño',
    categoryLabel: 'Tipo de actividad',
    timeLabel: 'Tiempo disponible',
    locationLabel: 'Dónde',
    generateBtn: '¡Generar actividad!',
    generating: 'Creando magia...',
    generateAnother: 'Generar otra actividad',
    materialsTitle: 'Materiales necesarios',
    stepsTitle: 'Cómo hacerlo',
    buyOnAmazon: 'Ver en Amazon',
    ages: [
      { label: '0–2 años', emoji: '👶' },
      { label: '3–5 años', emoji: '🧒' },
      { label: '6–8 años', emoji: '🧑' },
      { label: '9–12 años', emoji: '👦' },
    ],
    categories: [
      { label: 'Manualidades', emoji: '🎨' },
      { label: 'Juegos', emoji: '🎮' },
      { label: 'Naturaleza', emoji: '🌿' },
      { label: 'Educativo', emoji: '📚' },
      { label: 'Yoga', emoji: '🧘' },
      { label: 'Cocina', emoji: '👨‍🍳' },
    ],
    times: [
      { label: '15 min', emoji: '⚡' },
      { label: '30 min', emoji: '🕐' },
      { label: '1 hora', emoji: '🕑' },
      { label: 'Libre', emoji: '🌟' },
    ],
    locations: [
      { label: 'Interior', emoji: '🏠' },
      { label: 'Exterior', emoji: '🌳' },
    ],
    difficulty: { easy: 'Fácil', medium: 'Medio', hard: 'Difícil' },
    errorMsg: 'Algo salió mal. ¡Inténtalo de nuevo!',
    footerText: 'Hecho con ❤️ para padres creativos',
  },
  en: {
    siteTitle: 'KidSpark — Activities for Kids',
    siteDesc: 'Generate unique, fun and educational activities for kids in seconds. Crafts, games, yoga, cooking and more.',
    hero: "What are we doing today?",
    heroEmoji: '✨',
    subtitle: 'Generate unique and fun activities for your kids in seconds',
    ageLabel: "Child's age",
    categoryLabel: 'Activity type',
    timeLabel: 'Time available',
    locationLabel: 'Where',
    generateBtn: 'Generate activity!',
    generating: 'Creating magic...',
    generateAnother: 'Generate another activity',
    materialsTitle: 'Materials needed',
    stepsTitle: 'How to do it',
    buyOnAmazon: 'See on Amazon',
    ages: [
      { label: '0–2 years', emoji: '👶' },
      { label: '3–5 years', emoji: '🧒' },
      { label: '6–8 years', emoji: '🧑' },
      { label: '9–12 years', emoji: '👦' },
    ],
    categories: [
      { label: 'Crafts', emoji: '🎨' },
      { label: 'Games', emoji: '🎮' },
      { label: 'Nature', emoji: '🌿' },
      { label: 'Educational', emoji: '📚' },
      { label: 'Yoga', emoji: '🧘' },
      { label: 'Cooking', emoji: '👨‍🍳' },
    ],
    times: [
      { label: '15 min', emoji: '⚡' },
      { label: '30 min', emoji: '🕐' },
      { label: '1 hour', emoji: '🕑' },
      { label: 'Free', emoji: '🌟' },
    ],
    locations: [
      { label: 'Indoor', emoji: '🏠' },
      { label: 'Outdoor', emoji: '🌳' },
    ],
    difficulty: { easy: 'Easy', medium: 'Medium', hard: 'Hard' },
    errorMsg: 'Something went wrong. Please try again!',
    footerText: 'Made with ❤️ for creative parents',
  },
};

const difficultyColors = {
  easy:   { bg: 'bg-green-100',  text: 'text-green-700',  label: '🟢' },
  medium: { bg: 'bg-amber-100',  text: 'text-amber-700',  label: '🟡' },
  hard:   { bg: 'bg-red-100',    text: 'text-red-700',    label: '🔴' },
};

function PillButton({ active, onClick, emoji, label, color }) {
  const colors = {
    purple: active ? 'bg-purple-500 text-white shadow-lg scale-105' : 'bg-purple-50 text-purple-700 hover:bg-purple-100',
    pink:   active ? 'bg-pink-500 text-white shadow-lg scale-105'   : 'bg-pink-50 text-pink-700 hover:bg-pink-100',
    amber:  active ? 'bg-amber-400 text-white shadow-lg scale-105'  : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
    green:  active ? 'bg-green-500 text-white shadow-lg scale-105'  : 'bg-green-50 text-green-700 hover:bg-green-100',
  };
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${colors[color]}`}
    >
      <span>{emoji}</span>
      <span>{label}</span>
    </button>
  );
}

function LoadingSkeleton() {
  return (
    <div className="mt-6 bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-56 shimmer" />
      <div className="p-6 space-y-4">
        <div className="h-7 shimmer rounded-xl w-3/4" />
        <div className="flex gap-2">
          <div className="h-6 shimmer rounded-full w-20" />
          <div className="h-6 shimmer rounded-full w-20" />
          <div className="h-6 shimmer rounded-full w-16" />
        </div>
        <div className="h-4 shimmer rounded-lg" />
        <div className="h-4 shimmer rounded-lg w-5/6" />
        <div className="space-y-2 pt-2">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="h-4 shimmer rounded-lg" style={{ width: `${70 + i * 5}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang]         = useState('es');
  const [age, setAge]           = useState(1);
  const [category, setCategory] = useState(0);
  const [time, setTime]         = useState(1);
  const [location, setLocation] = useState(0);
  const [loading, setLoading]   = useState(false);
  const [activity, setActivity] = useState(null);
  const [error, setError]       = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const t = translations[lang];

  const affiliateTag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || 'kidspark0b-20';

  const generateActivity = async () => {
    setLoading(true);
    setError(null);
    setActivity(null);
    setImgLoaded(false);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          age: t.ages[age].label,
          category: `${t.categories[category].emoji} ${t.categories[category].label}`,
          time: t.times[time].label,
          location: t.locations[location].label,
          lang,
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setActivity(data);
    } catch (err) {
      setError(t.errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const imageUrl = activity
    ? `https://image.pollinations.ai/prompt/${encodeURIComponent(
        activity.imagePrompt +
        ', colorful cartoon illustration for children, cute and friendly, no text, no letters, vibrant colors'
      )}?width=600&height=400&nologo=true&seed=${Date.now()}`
    : null;

  return (
    <>
      <Head>
        <title>{t.siteTitle}</title>
        <meta name="description" content={t.siteDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={t.siteTitle} />
        <meta property="og:description" content={t.siteDesc} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        {/*
          ╔══════════════════════════════════════════════╗
          ║  GOOGLE ADSENSE — Descomenta y pon tu ID     ║
          ╚══════════════════════════════════════════════╝
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
            crossOrigin="anonymous"
          />
        */}
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50">

        {/* ── HEADER ── */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-purple-100">
          <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl animate-bounce-gentle">🌟</span>
              <span className="text-xl font-black bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                KidSpark
              </span>
            </div>
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="bg-white border border-purple-200 rounded-full px-4 py-1.5 text-sm font-bold text-purple-700 hover:border-purple-400 hover:bg-purple-50 transition-all shadow-sm"
            >
              {lang === 'es' ? '🇺🇸 English' : '🇪🇸 Español'}
            </button>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 pb-16">

          {/* ── HERO ── */}
          <div className="text-center pt-10 pb-6">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-2 leading-tight">
              {t.hero} <span>{t.heroEmoji}</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto">{t.subtitle}</p>
          </div>

          {/* ── AD SLOT TOP (descomenta cuando tengas AdSense aprobado) ── */}
          {/*
          <div className="mb-4 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>
          */}

          {/* ── FILTER CARD ── */}
          <div className="bg-white rounded-3xl shadow-md border border-purple-50 p-6 space-y-6">

            {/* AGE */}
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">
                👶 {t.ageLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.ages.map((a, i) => (
                  <PillButton key={i} active={age === i} onClick={() => setAge(i)}
                    emoji={a.emoji} label={a.label} color="purple" />
                ))}
              </div>
            </div>

            {/* CATEGORY */}
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">
                🎯 {t.categoryLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.categories.map((c, i) => (
                  <PillButton key={i} active={category === i} onClick={() => setCategory(i)}
                    emoji={c.emoji} label={c.label} color="pink" />
                ))}
              </div>
            </div>

            {/* TIME */}
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">
                ⏱️ {t.timeLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.times.map((tm, i) => (
                  <PillButton key={i} active={time === i} onClick={() => setTime(i)}
                    emoji={tm.emoji} label={tm.label} color="amber" />
                ))}
              </div>
            </div>

            {/* LOCATION */}
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">
                📍 {t.locationLabel}
              </p>
              <div className="flex gap-3">
                {t.locations.map((loc, i) => (
                  <button
                    key={i}
                    onClick={() => setLocation(i)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${
                      location === i
                        ? 'bg-green-500 text-white shadow-lg scale-105'
                        : 'bg-green-50 text-green-700 hover:bg-green-100'
                    }`}
                  >
                    <span className="text-lg">{loc.emoji}</span>
                    <span>{loc.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── GENERATE BUTTON ── */}
          <button
            onClick={generateActivity}
            disabled={loading}
            className="mt-5 w-full py-5 rounded-3xl text-xl font-black text-white shadow-xl
              bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400
              hover:from-violet-600 hover:via-pink-600 hover:to-orange-500
              active:scale-95 transition-all duration-200
              disabled:opacity-60 disabled:cursor-not-allowed
              disabled:hover:from-violet-500 disabled:hover:via-pink-500 disabled:hover:to-orange-400"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                {t.generating}
              </span>
            ) : (
              <span>🎉 {t.generateBtn}</span>
            )}
          </button>

          {/* ── ERROR ── */}
          {error && (
            <div className="mt-5 bg-red-50 border border-red-200 rounded-2xl p-4 text-red-600 text-center font-semibold">
              ⚠️ {error}
            </div>
          )}

          {/* ── LOADING SKELETON ── */}
          {loading && <LoadingSkeleton />}

          {/* ── RESULT CARD ── */}
          {activity && !loading && (
            <div className="mt-6 bg-white rounded-3xl shadow-lg border border-purple-50 overflow-hidden animate-fade-in-up">

              {/* Image */}
              <div className="relative h-60 bg-gradient-to-br from-violet-100 to-pink-100 overflow-hidden">
                {!imgLoaded && (
                  <div className="absolute inset-0 shimmer" />
                )}
                <img
                  src={imageUrl}
                  alt={activity.title}
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => { e.target.style.display = 'none'; setImgLoaded(true); }}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              <div className="p-6 space-y-5">

                {/* Title */}
                <div>
                  <h2 className="text-2xl font-black text-gray-800 mb-3 leading-tight">
                    {activity.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full">
                      {t.ages[age].emoji} {t.ages[age].label}
                    </span>
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full">
                      ⏱️ {activity.duration}
                    </span>
                    {activity.difficulty && difficultyColors[activity.difficulty] && (
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${difficultyColors[activity.difficulty].bg} ${difficultyColors[activity.difficulty].text}`}>
                        {difficultyColors[activity.difficulty].label} {t.difficulty[activity.difficulty]}
                      </span>
                    )}
                    <span className="bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1.5 rounded-full">
                      {t.categories[category].emoji} {t.categories[category].label}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">{activity.description}</p>

                {/* AD SLOT MID (descomenta cuando tengas AdSense aprobado) */}
                {/*
                <ins className="adsbygoogle"
                  style={{ display: 'block', textAlign: 'center' }}
                  data-ad-layout="in-article"
                  data-ad-format="fluid"
                  data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                  data-ad-slot="XXXXXXXXXX" />
                */}

                {/* Steps */}
                <div>
                  <h3 className="font-black text-gray-800 text-lg mb-3">
                    📋 {t.stepsTitle}
                  </h3>
                  <ol className="space-y-3">
                    {activity.steps && activity.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-white text-xs font-black flex items-center justify-center mt-0.5 shadow-sm">
                          {i + 1}
                        </span>
                        <span className="text-gray-600 text-sm leading-relaxed pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Materials with Amazon links */}
                {activity.materials && activity.materials.length > 0 && (
                  <div>
                    <h3 className="font-black text-gray-800 text-lg mb-3">
                      🛒 {t.materialsTitle}
                    </h3>
                    <div className="space-y-2">
                      {activity.materials.map((mat, i) => (
                        <a
                          key={i}
                          href={`https://www.amazon.com/s?k=${encodeURIComponent(mat.amazonSearch)}&tag=${affiliateTag}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between bg-orange-50 hover:bg-orange-100 border border-orange-100 rounded-2xl px-4 py-3 transition-all group"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-xl">🛍️</span>
                            <span className="text-sm font-bold text-gray-700">{mat.name}</span>
                          </div>
                          <span className="text-xs text-orange-600 font-black group-hover:underline whitespace-nowrap">
                            {t.buyOnAmazon} →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Generate Another */}
                <button
                  onClick={generateActivity}
                  disabled={loading}
                  className="w-full py-4 rounded-2xl text-base font-black text-white
                    bg-gradient-to-r from-violet-500 to-pink-500
                    hover:from-violet-600 hover:to-pink-600
                    active:scale-95 transition-all duration-200
                    disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                >
                  🔄 {t.generateAnother}
                </button>
              </div>
            </div>
          )}

          {/* ── AD SLOT BOTTOM ── */}
          {/*
          <div className="mt-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>
          */}

        </main>

        {/* ── FOOTER ── */}
        <footer className="text-center py-8 text-gray-400 text-sm">
          {t.footerText}
        </footer>
      </div>
    </>
  );
}

import { useState } from 'react';
import Head from 'next/head';

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const translations = {
  es: {
    siteTitle: 'KidSpark — Actividades para Niños',
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
    footerText: 'Hecho con amor para padres creativos',
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
    footerCredits: 'Hecho con ❤️ para padres creativos',
  },
  en: {
    siteTitle: 'KidSpark — Activities for Kids',
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
    footerText: 'Made with love for creative parents',
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
    footerCredits: 'Made with ❤️ for creative parents',
  },
  fr: {
    siteTitle: 'KidSpark — Activités pour Enfants',
    siteDesc: 'Générez des activités uniques, amusantes et éducatives pour vos enfants en quelques secondes.',
    hero: "Qu'est-ce qu'on fait aujourd'hui ?",
    subtitle: 'Générez des activités uniques et amusantes pour vos enfants en quelques secondes',
    ageLabel: "Âge de l'enfant",
    timeLabel: 'Temps disponible',
    locationLabel: 'Où',
    groupOcio: 'Loisirs',
    groupEdu: 'Éducation',
    generateBtn: 'Générer une activité',
    generatingBtn: 'Création en cours...',
    generateWorksheet: 'Télécharger la fiche PDF',
    generatingWorksheet: 'Génération de la fiche...',
    generateAnother: 'Générer une autre activité',
    materialsTitle: 'Matériaux nécessaires',
    stepsTitle: 'Comment faire',
    buyOnAmazon: 'Voir sur Amazon',
    langLabel: 'Langue',
    difficulty: { easy: 'Facile', medium: 'Moyen', hard: 'Difficile' },
    errorMsg: "Quelque chose s'est mal passé. Réessayez.",
    ages: [
      { label: '0–2 ans', emoji: '👶' },
      { label: '3–5 ans', emoji: '🧒' },
      { label: '6–8 ans', emoji: '🧑' },
      { label: '9–12 ans', emoji: '👦' },
    ],
    categoryGroups: [
      {
        groupLabel: 'Loisirs',
        items: [
          { label: 'Bricolage', emoji: '🎨' },
          { label: 'Jeux', emoji: '🎮' },
          { label: 'Nature', emoji: '🌿' },
          { label: 'Yoga', emoji: '🧘' },
          { label: 'Cuisine', emoji: '👨‍🍳' },
          { label: 'Musique', emoji: '🎵' },
          { label: 'Théâtre', emoji: '🎭' },
          { label: 'Expériences', emoji: '🧪' },
          { label: 'Sport', emoji: '🏃' },
        ],
      },
      {
        groupLabel: 'Éducation',
        items: [
          { label: 'Mathématiques', emoji: '🔢' },
          { label: 'Lecture', emoji: '📖' },
          { label: 'Calligraphie', emoji: '✏️' },
          { label: 'Sciences', emoji: '🔬' },
          { label: 'Histoire', emoji: '🏛️' },
          { label: 'Langues', emoji: '🌍' },
          { label: 'Géographie', emoji: '🗺️' },
          { label: 'Logique', emoji: '🧩' },
        ],
      },
    ],
    times: [
      { label: '15 min', emoji: '⚡' },
      { label: '30 min', emoji: '🕐' },
      { label: '1 heure', emoji: '⏳' },
      { label: 'Libre', emoji: '🌟' },
    ],
    locations: [
      { label: 'Intérieur', emoji: '🏠' },
      { label: 'Extérieur', emoji: '🌳' },
    ],
    footerCredits: 'Fait avec ❤️ pour les parents créatifs',
  },
  it: {
    siteTitle: 'KidSpark — Attività per Bambini',
    siteDesc: 'Genera attività uniche, divertenti ed educative per i tuoi bambini in pochi secondi.',
    hero: 'Cosa facciamo oggi?',
    subtitle: 'Genera attività uniche e divertenti per i tuoi figli in pochi secondi',
    ageLabel: 'Età del bambino',
    timeLabel: 'Tempo disponibile',
    locationLabel: 'Dove',
    groupOcio: 'Svago',
    groupEdu: 'Educazione',
    generateBtn: 'Genera attività',
    generatingBtn: 'Creando magia...',
    generateWorksheet: 'Scarica scheda PDF',
    generatingWorksheet: 'Generando la scheda...',
    generateAnother: "Genera un'altra attività",
    materialsTitle: 'Materiali necessari',
    stepsTitle: 'Come farlo',
    buyOnAmazon: 'Vedi su Amazon',
    langLabel: 'Lingua',
    difficulty: { easy: 'Facile', medium: 'Medio', hard: 'Difficile' },
    errorMsg: 'Qualcosa è andato storto. Riprova.',
    ages: [
      { label: '0–2 anni', emoji: '👶' },
      { label: '3–5 anni', emoji: '🧒' },
      { label: '6–8 anni', emoji: '🧑' },
      { label: '9–12 anni', emoji: '👦' },
    ],
    categoryGroups: [
      {
        groupLabel: 'Svago',
        items: [
          { label: 'Lavoretti', emoji: '🎨' },
          { label: 'Giochi', emoji: '🎮' },
          { label: 'Natura', emoji: '🌿' },
          { label: 'Yoga', emoji: '🧘' },
          { label: 'Cucina', emoji: '👨‍🍳' },
          { label: 'Musica', emoji: '🎵' },
          { label: 'Teatro', emoji: '🎭' },
          { label: 'Esperimenti', emoji: '🧪' },
          { label: 'Sport', emoji: '🏃' },
        ],
      },
      {
        groupLabel: 'Educazione',
        items: [
          { label: 'Matematica', emoji: '🔢' },
          { label: 'Lettura', emoji: '📖' },
          { label: 'Calligrafia', emoji: '✏️' },
          { label: 'Scienze', emoji: '🔬' },
          { label: 'Storia', emoji: '🏛️' },
          { label: 'Lingue', emoji: '🌍' },
          { label: 'Geografia', emoji: '🗺️' },
          { label: 'Logica', emoji: '🧩' },
        ],
      },
    ],
    times: [
      { label: '15 min', emoji: '⚡' },
      { label: '30 min', emoji: '🕐' },
      { label: '1 ora', emoji: '⏳' },
      { label: 'Libero', emoji: '🌟' },
    ],
    locations: [
      { label: 'Interno', emoji: '🏠' },
      { label: 'Esterno', emoji: '🌳' },
    ],
    footerCredits: 'Fatto con ❤️ per genitori creativi',
  },
  de: {
    siteTitle: 'KidSpark — Aktivitäten für Kinder',
    siteDesc: 'Generiere einzigartige, lustige und lehrreiche Aktivitäten für deine Kinder in Sekunden.',
    hero: 'Was machen wir heute?',
    subtitle: 'Generiere einzigartige und lustige Aktivitäten für deine Kinder in Sekunden',
    ageLabel: 'Alter des Kindes',
    timeLabel: 'Verfügbare Zeit',
    locationLabel: 'Wo',
    groupOcio: 'Freizeit',
    groupEdu: 'Bildung',
    generateBtn: 'Aktivität generieren',
    generatingBtn: 'Magie erschaffen...',
    generateWorksheet: 'PDF-Arbeitsblatt herunterladen',
    generatingWorksheet: 'Arbeitsblatt wird erstellt...',
    generateAnother: 'Weitere Aktivität generieren',
    materialsTitle: 'Benötigte Materialien',
    stepsTitle: 'So geht es',
    buyOnAmazon: 'Bei Amazon ansehen',
    langLabel: 'Sprache',
    difficulty: { easy: 'Einfach', medium: 'Mittel', hard: 'Schwer' },
    errorMsg: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
    ages: [
      { label: '0–2 Jahre', emoji: '👶' },
      { label: '3–5 Jahre', emoji: '🧒' },
      { label: '6–8 Jahre', emoji: '🧑' },
      { label: '9–12 Jahre', emoji: '👦' },
    ],
    categoryGroups: [
      {
        groupLabel: 'Freizeit',
        items: [
          { label: 'Basteln', emoji: '🎨' },
          { label: 'Spiele', emoji: '🎮' },
          { label: 'Natur', emoji: '🌿' },
          { label: 'Yoga', emoji: '🧘' },
          { label: 'Kochen', emoji: '👨‍🍳' },
          { label: 'Musik', emoji: '🎵' },
          { label: 'Theater', emoji: '🎭' },
          { label: 'Experimente', emoji: '🧪' },
          { label: 'Sport', emoji: '🏃' },
        ],
      },
      {
        groupLabel: 'Bildung',
        items: [
          { label: 'Mathematik', emoji: '🔢' },
          { label: 'Lesen', emoji: '📖' },
          { label: 'Schreiben', emoji: '✏️' },
          { label: 'Wissenschaft', emoji: '🔬' },
          { label: 'Geschichte', emoji: '🏛️' },
          { label: 'Sprachen', emoji: '🌍' },
          { label: 'Geographie', emoji: '🗺️' },
          { label: 'Logik', emoji: '🧩' },
        ],
      },
    ],
    times: [
      { label: '15 Min', emoji: '⚡' },
      { label: '30 Min', emoji: '🕐' },
      { label: '1 Std', emoji: '⏳' },
      { label: 'Offen', emoji: '🌟' },
    ],
    locations: [
      { label: 'Drinnen', emoji: '🏠' },
      { label: 'Draußen', emoji: '🌳' },
    ],
    footerCredits: 'Mit ❤️ für kreative Eltern gemacht',
  },
};

// ─── WCAG COLOUR TOKENS ──────────────────────────────────────────────────────
// Single violet family — verified ≥ 4.5:1 contrast ratio (WCAG AA)
const pillActive   = 'bg-violet-700 text-white scale-105 shadow-md';
const pillInactive = 'bg-violet-50 text-violet-900 hover:bg-violet-100';
const pillFocus    = 'focus-visible:ring-violet-600';

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
export default function Home() {
  const [lang, setLang]               = useState('es');
  const [age, setAge]                 = useState(1);
  const [catGroup, setCatGroup]       = useState(0);   // 0=Ocio 1=Edu
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

  const langMap = { es: 'SPANISH', en: 'ENGLISH', fr: 'FRENCH', it: 'ITALIAN', de: 'GERMAN' };

  // ── Generate activity ──
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

  // ── Download PDF worksheet (education only) ──
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

      // Open printable HTML in new tab
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
        <meta property="og:url" content="https://kids-one-ebon.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kids-one-ebon.vercel.app/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Skip to main content — WCAG 2.4.1 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:bg-purple-700 focus:text-white focus:rounded-lg focus:font-bold"
      >
        Saltar al contenido
      </a>

      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50">

        {/* ── HEADER ── */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
          <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="/" aria-label="KidSpark — inicio" className="flex items-center gap-2
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-lg">
              <span className="text-xl font-black bg-gradient-to-r from-violet-700 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                KidSpark
              </span>
            </a>

            <label htmlFor="lang-select" className="sr-only">{t.langLabel}</label>
            <select
              id="lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-white border border-purple-300 rounded-full pl-4 pr-8 py-1.5
                text-sm font-bold text-purple-900 hover:border-purple-500 cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600
                focus-visible:ring-offset-2 appearance-none transition-colors shadow-sm"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237C3AED' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="it">Italiano</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main id="main-content" className="max-w-2xl mx-auto px-4 pb-16">

          {/* HERO */}
          <div className="text-center pt-10 pb-8">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
              {t.hero}
            </h1>
            <p className="text-gray-600 text-xl md:text-2xl max-w-md mx-auto font-medium">
              {t.subtitle}
            </p>
          </div>

          {/* FILTER CARD */}
          <section aria-label="Filtros de actividad" className="bg-white rounded-3xl shadow-md border border-purple-100 p-6 space-y-7">

            {/* AGE */}
            <fieldset>
              <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">
                {t.ageLabel}
              </legend>
              <div className="flex flex-wrap gap-3" role="group">
                {t.ages.map((a, i) => (
                  <PillButton key={i} active={age === i} onClick={() => setAge(i)}
                    emoji={a.emoji} label={a.label} />
                ))}
              </div>
            </fieldset>

            {/* CATEGORIES — tab group selector + items */}
            <fieldset>
              <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">
                Actividad
              </legend>

              {/* Tab selector: Ocio / Educación */}
              <div className="flex gap-1.5 p-1.5 bg-violet-100 rounded-full mb-5" role="tablist">
                {t.categoryGroups.map((group, gi) => (
                  <button
                    key={gi}
                    role="tab"
                    aria-selected={catGroup === gi}
                    onClick={() => { setCatGroup(gi); setCatItem(0); setActivity(null); }}
                    className={`flex-1 py-2.5 px-5 rounded-full text-sm font-black transition-all duration-200
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-1
                      ${catGroup === gi
                        ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-md'
                        : 'text-violet-700 hover:text-violet-900 hover:bg-violet-50'
                      }`}
                  >
                    {group.groupLabel}
                  </button>
                ))}
              </div>

              {/* Items for selected group */}
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

              {/* PDF button — inside card, only for education */}
              {isEducation && (
                <button
                  onClick={downloadWorksheet}
                  disabled={loading || loadingPdf}
                  aria-busy={loadingPdf}
                  className="mt-4 w-full py-3 rounded-full text-sm font-black text-purple-800
                    bg-purple-50 border-2 border-purple-200 hover:bg-purple-100 hover:border-purple-300
                    active:scale-95 transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2
                    disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loadingPdf ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t.generatingWorksheet}
                    </>
                  ) : (
                    <>📄 {t.generateWorksheet}</>
                  )}
                </button>
              )}
            </fieldset>

            {/* TIME — only for Ocio */}
            {!isEducation && <fieldset>
              <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">
                {t.timeLabel}
              </legend>
              <div className="flex flex-wrap gap-3" role="group">
                {t.times.map((tm, i) => (
                  <PillButton key={i} active={time === i} onClick={() => setTime(i)}
                    emoji={tm.emoji} label={tm.label} />
                ))}
              </div>
            </fieldset>}

            {/* LOCATION — only for Ocio */}
            {!isEducation && <fieldset>
              <legend className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">
                {t.locationLabel}
              </legend>
              <div className="flex flex-wrap gap-3" role="group">
                {t.locations.map((loc, i) => (
                  <PillButton key={i} active={location === i} onClick={() => setLocation(i)}
                    emoji={loc.emoji} label={loc.label} />
                ))}
              </div>
            </fieldset>}
          </section>

          {/* GENERATE BUTTON */}
          <button
            onClick={generateActivity}
            disabled={loading || loadingPdf}
            aria-busy={loading}
            className="mt-5 w-full py-5 rounded-full text-xl font-black text-white shadow-xl
              bg-gradient-to-r from-violet-700 via-pink-600 to-orange-500
              hover:from-violet-800 hover:via-pink-700 hover:to-orange-600
              active:scale-95 transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600
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

          {/* ERROR */}
          {error && (
            <div role="alert" className="mt-5 bg-red-50 border border-red-300 rounded-2xl p-4 text-red-800 text-center font-semibold">
              {error}
            </div>
          )}

          {/* SKELETON */}
          {loading && <LoadingSkeleton />}

          {/* RESULT CARD */}
          {activity && !loading && (
            <article
              className="mt-6 bg-white rounded-3xl shadow-lg border border-purple-50 overflow-hidden"
              aria-live="polite"
              aria-atomic="true"
            >
              {/* Image */}
              <div className="relative h-60 bg-gradient-to-br from-violet-100 to-pink-100 overflow-hidden">
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
                  <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                    {activity.title}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-purple-100 text-purple-900 text-xs font-bold px-3 py-1.5 rounded-full">
                      {t.ages[age].emoji} {t.ages[age].label}
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
                    <span className="bg-pink-100 text-pink-900 text-xs font-bold px-3 py-1.5 rounded-full">
                      {selectedCat.emoji} {selectedCat.label}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed">{activity.description}</p>

                {/* Steps */}
                <section aria-label={t.stepsTitle}>
                  <h3 className="font-black text-gray-900 text-lg mb-4">{t.stepsTitle}</h3>
                  <ol className="space-y-3">
                    {activity.steps && activity.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span
                          aria-hidden="true"
                          className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-violet-700 to-pink-600
                            text-white text-xs font-black flex items-center justify-center mt-0.5 shadow-sm"
                        >
                          {i + 1}
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* Materials */}
                {activity.materials && activity.materials.length > 0 && (
                  <section aria-label={t.materialsTitle}>
                    <h3 className="font-black text-gray-900 text-lg mb-4">{t.materialsTitle}</h3>
                    <ul className="space-y-2">
                      {activity.materials.map((mat, i) => (
                        <li key={i}>
                          <a
                            href={`https://www.amazon.com/s?k=${encodeURIComponent(mat.amazonSearch)}&tag=${affiliateTag}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${mat.name} — ${t.buyOnAmazon}`}
                            className="flex items-center justify-between bg-orange-50 hover:bg-orange-100
                              border border-orange-200 rounded-2xl px-4 py-3 transition-all group
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                          >
                            <div className="flex items-center gap-2.5">
                              <span aria-hidden="true" className="text-xl">🛍️</span>
                              <span className="text-sm font-bold text-gray-800">{mat.name}</span>
                            </div>
                            <span className="text-xs text-orange-700 font-black group-hover:underline whitespace-nowrap">
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
                    bg-gradient-to-r from-violet-700 to-pink-600
                    hover:from-violet-800 hover:to-pink-700
                    active:scale-95 transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600
                    disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                >
                  {t.generateAnother}
                </button>
              </div>
            </article>
          )}
        </main>

        {/* FOOTER */}
        <footer className="text-center py-8 text-gray-500 text-sm">
          {t.footerCredits}
        </footer>
      </div>
    </>
  );
}

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ lang, setLang }) {
  const router = useRouter();
  const isEs = lang === 'es';

  return (
    <header className="sticky top-0 z-50 bg-amber-50 border-b border-amber-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo + nav */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            aria-label="KidSpark — inicio"
            className="text-xl font-black text-amber-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded-lg"
          >
            KidSpark
          </Link>
          <nav className="hidden sm:flex items-center gap-5 text-sm font-semibold" aria-label="Main navigation">
            <Link
              href="/tool"
              className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded
                ${router.pathname === '/tool' ? 'text-amber-900 font-black' : 'text-stone-600 hover:text-amber-900'}`}
            >
              {isEs ? 'Generador' : 'Generator'}
            </Link>
            <Link
              href="/blog"
              className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded
                ${router.pathname.startsWith('/blog') ? 'text-amber-900 font-black' : 'text-stone-600 hover:text-amber-900'}`}
            >
              Blog
            </Link>
          </nav>
        </div>

        {/* Language select */}
        <div>
          <label htmlFor="header-lang" className="sr-only">
            {isEs ? 'Idioma' : 'Language'}
          </label>
          <select
            id="header-lang"
            value={lang}
            onChange={e => setLang(e.target.value)}
            className="bg-white border border-amber-300 rounded-full pl-3 pr-8 py-1.5
              text-sm font-bold text-stone-800 hover:border-amber-600 cursor-pointer
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700
              focus-visible:ring-offset-2 appearance-none transition-colors shadow-sm"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2392400e' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 10px center',
            }}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </header>
  );
}

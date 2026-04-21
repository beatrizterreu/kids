import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';

const content = {
  es: {
    title: 'Sobre KidSpark — Actividades para niños',
    desc: 'Conoce el proyecto KidSpark, quiénes somos y por qué creamos esta herramienta gratuita de actividades para niños.',
    hero: 'El porqué de KidSpark',
    heroSub: 'Una herramienta gratuita para padres que quieren hacer más con sus hijos, sin complicaciones.',
    mission: {
      h: 'Nuestra misión',
      p: 'Creemos que el tiempo en familia es uno de los regalos más valiosos que podemos dar a nuestros hijos. Pero encontrar ideas frescas, adaptadas a la edad y el momento del día, puede ser agotador después de una jornada de trabajo.\n\nKidSpark nació para resolver exactamente eso: en segundos, genera una actividad completa y original adaptada a la edad de tu hijo, el tiempo que tienes disponible y el lugar donde estáis. Manualidades, juegos, yoga, cocina, experimentos de ciencia, fichas educativas — todo en un solo lugar, sin registro, sin pago, sin trucos.',
    },
    values: [
      { emoji: '🆓', title: 'Siempre gratuito', desc: 'KidSpark es y seguirá siendo completamente gratuito. Nos financiamos mediante publicidad no intrusiva y enlaces de afiliados de Amazon, sin planes de suscripción ni muros de pago.' },
      { emoji: '🔒', title: 'Sin datos personales', desc: 'No pedimos email, no creamos cuentas, no guardamos información sobre ti ni tu familia. Usas la herramienta y ya.' },
      { emoji: '🌍', title: 'Bilingüe desde el inicio', desc: 'Disponible en español e inglés, con contenido culturalmente adaptado para familias de todo el mundo.' },
      { emoji: '🤖', title: 'IA al servicio de los padres', desc: 'Usamos inteligencia artificial (Groq + LLaMA) para generar actividades únicas cada vez. No son plantillas prefabricadas — cada actividad se crea en el momento.' },
    ],
    contact: {
      h: 'Contacto',
      p: '¿Tienes una sugerencia, has encontrado un error o simplemente quieres saludar? Escríbenos a:',
      email: 'kidspark.app@gmail.com',
    },
    disclaimer: {
      h: 'Aviso legal',
      p: 'KidSpark es un proyecto independiente no afiliado a ninguna institución educativa o empresa de entretenimiento. Las actividades generadas son orientativas y deben realizarse siempre con la supervisión de un adulto, especialmente en el caso de niños pequeños o actividades que impliquen materiales, agua o fuego.',
    },
    cta: 'Probar el generador →',
    back: '← Inicio',
  },
  en: {
    title: 'About KidSpark — Activities for kids',
    desc: 'Learn about the KidSpark project, who we are and why we built this free activities tool for kids.',
    hero: 'The story behind KidSpark',
    heroSub: 'A free tool for parents who want to do more with their kids, without the hassle.',
    mission: {
      h: 'Our mission',
      p: "We believe that family time is one of the most valuable gifts we can give our children. But finding fresh ideas, adapted to their age and the time of day, can be exhausting after a long working day.\n\nKidSpark was built to solve exactly that: in seconds, it generates a complete, original activity tailored to your child's age, how much time you have, and where you are. Crafts, games, yoga, cooking, science experiments, educational worksheets — all in one place, no sign-up, no payment, no tricks.",
    },
    values: [
      { emoji: '🆓', title: 'Always free', desc: 'KidSpark is and always will be completely free. We fund ourselves through non-intrusive advertising and Amazon affiliate links, with no subscription plans or paywalls.' },
      { emoji: '🔒', title: 'No personal data', desc: 'We don\'t ask for your email, don\'t create accounts, don\'t store information about you or your family. Use the tool and that\'s it.' },
      { emoji: '🌍', title: 'Bilingual from day one', desc: 'Available in Spanish and English, with culturally adapted content for families around the world.' },
      { emoji: '🤖', title: 'AI at the service of parents', desc: 'We use artificial intelligence (Groq + LLaMA) to generate unique activities every time. These are not pre-made templates — each activity is created on the spot.' },
    ],
    contact: {
      h: 'Contact',
      p: 'Do you have a suggestion, found a bug, or just want to say hello? Write to us at:',
      email: 'kidspark.app@gmail.com',
    },
    disclaimer: {
      h: 'Disclaimer',
      p: 'KidSpark is an independent project not affiliated with any educational institution or entertainment company. Generated activities are for guidance only and should always be carried out under adult supervision, especially for young children or activities involving materials, water or fire.',
    },
    cta: 'Try the generator →',
    back: '← Home',
  },
};

export default function About() {
  const [lang, setLang] = useState('es');
  const t = content[lang];

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.desc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kids-one-ebon.vercel.app/about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header lang={lang} setLang={setLang} />

        <main className="max-w-2xl mx-auto px-4 py-16">

          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-3xl font-black text-stone-900 mb-3">{t.hero}</h1>
            <p className="text-lg text-stone-500">{t.heroSub}</p>
          </div>

          {/* Mission */}
          <section className="mb-12">
            <h2 className="font-black text-stone-800 text-xl mb-4">{t.mission.h}</h2>
            <p className="text-stone-600 leading-relaxed whitespace-pre-line">{t.mission.p}</p>
          </section>

          {/* Values */}
          <section className="mb-12">
            <div className="grid sm:grid-cols-2 gap-4">
              {t.values.map((v, i) => (
                <div key={i} className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <span className="text-3xl block mb-3" aria-hidden="true">{v.emoji}</span>
                  <h3 className="font-black text-stone-900 text-base mb-1">{v.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-10 bg-stone-50 rounded-2xl p-6 border border-stone-200">
            <h2 className="font-black text-stone-800 text-lg mb-2">{t.contact.h}</h2>
            <p className="text-stone-600 text-sm mb-2">{t.contact.p}</p>
            <a
              href={`mailto:${t.contact.email}`}
              className="text-amber-700 font-bold hover:underline text-sm
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
            >
              {t.contact.email}
            </a>
          </section>

          {/* Disclaimer */}
          <section className="mb-12">
            <h2 className="font-black text-stone-800 text-base mb-2">{t.disclaimer.h}</h2>
            <p className="text-stone-500 text-sm leading-relaxed">{t.disclaimer.p}</p>
          </section>

          {/* CTA */}
          <Link
            href="/tool"
            className="inline-block bg-amber-800 text-white font-bold px-8 py-3.5 rounded-full
              hover:bg-amber-900 transition-colors shadow-md mb-8
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
          >
            {t.cta}
          </Link>

          <div className="mt-4">
            <Link href="/" className="text-amber-700 font-bold hover:underline text-sm">
              {t.back}
            </Link>
          </div>
        </main>

        <footer className="border-t border-stone-100 py-8 text-center text-stone-400 text-sm">
          <nav className="flex justify-center gap-6 mb-2 flex-wrap">
            <Link href="/" className="hover:text-amber-800 transition-colors font-semibold text-stone-600">KidSpark</Link>
            <Link href="/tool" className="hover:text-amber-800 transition-colors">{lang === 'es' ? 'Generador' : 'Generator'}</Link>
            <Link href="/blog" className="hover:text-amber-800 transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-amber-800 transition-colors">{lang === 'es' ? 'Sobre nosotros' : 'About'}</Link>
            <Link href="/privacy" className="hover:text-amber-800 transition-colors">{lang === 'es' ? 'Privacidad' : 'Privacy'}</Link>
          </nav>
        </footer>
      </div>
    </>
  );
}

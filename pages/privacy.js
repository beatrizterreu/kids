import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';

const content = {
  es: {
    title: 'Política de Privacidad — KidSpark',
    desc: 'Política de privacidad de KidSpark. Información sobre recopilación de datos, cookies, publicidad y tus derechos.',
    heading: 'Política de Privacidad',
    updated: 'Última actualización: abril de 2026',
    sections: [
      {
        h: '1. Responsable del sitio',
        p: 'KidSpark es un sitio web independiente operado por un particular. Si tienes preguntas sobre esta política, puedes escribirnos a: kidspark.app@gmail.com',
      },
      {
        h: '2. Qué datos recopilamos',
        p: 'KidSpark no requiere registro ni cuenta de usuario. No recopilamos nombre, correo electrónico ni datos personales de forma directa. Los únicos datos que se pueden recopilar son los generados automáticamente por los servicios de terceros que usamos (ver secciones 4 y 5), como dirección IP, tipo de navegador, páginas visitadas y tiempo de visita.',
      },
      {
        h: '3. Cookies',
        p: 'Este sitio utiliza cookies. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas una página web. Usamos cookies para:\n• Recordar tus preferencias de idioma.\n• Medir el tráfico del sitio mediante Google Analytics.\n• Mostrar publicidad personalizada mediante Google AdSense.\nPuedes desactivar las cookies en la configuración de tu navegador, aunque algunas funcionalidades del sitio pueden verse afectadas.',
      },
      {
        h: '4. Google AdSense y publicidad',
        p: 'KidSpark muestra anuncios a través de Google AdSense. Google, como proveedor externo, utiliza cookies para mostrar anuncios basados en visitas anteriores de los usuarios a este u otros sitios web. Los usuarios pueden inhabilitar la publicidad personalizada visitando la Configuración de anuncios de Google (www.google.com/settings/ads). Consulta también la política de privacidad de Google en www.google.com/privacy.',
      },
      {
        h: '5. Google Analytics',
        p: 'Utilizamos Google Analytics para analizar el uso del sitio y mejorar la experiencia del usuario. Google Analytics recopila datos de forma anónima sobre cómo los usuarios interactúan con nuestro sitio. Puedes inhabilitar Google Analytics instalando el complemento del navegador disponible en tools.google.com/dlpage/gaoptout.',
      },
      {
        h: '6. Amazon Associates',
        p: 'KidSpark participa en el Programa de Afiliados de Amazon (Amazon Associates). Cuando haces clic en un enlace de producto y realizas una compra, podemos recibir una pequeña comisión sin coste adicional para ti. Amazon puede utilizar cookies para rastrear estas referencias. Consulta la política de privacidad de Amazon en www.amazon.com/privacy.',
      },
      {
        h: '7. Servicio de generación de imágenes',
        p: 'Las imágenes del blog se generan mediante Pollinations.ai, un servicio de inteligencia artificial de acceso libre. Las descripciones de imagen se envían a este servicio para generar las ilustraciones. No se envían datos personales en este proceso.',
      },
      {
        h: '8. Tus derechos (RGPD)',
        p: 'Si eres residente en la Unión Europea, tienes derecho a acceder, rectificar, suprimir y portar tus datos personales, así como a oponerte a su tratamiento. Dado que no almacenamos datos personales propios, cualquier solicitud relacionada con datos gestionados por terceros (Google, Amazon) debe dirigirse directamente a esas empresas. Para cualquier consulta, escríbenos a kidspark.app@gmail.com.',
      },
      {
        h: '9. Cambios en esta política',
        p: 'Podemos actualizar esta Política de Privacidad ocasionalmente. La fecha de la última actualización aparece al inicio de esta página. Te recomendamos revisarla periódicamente.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy — KidSpark',
    desc: 'KidSpark Privacy Policy. Information about data collection, cookies, advertising and your rights.',
    heading: 'Privacy Policy',
    updated: 'Last updated: April 2026',
    sections: [
      {
        h: '1. Website operator',
        p: 'KidSpark is an independent website operated by an individual. If you have questions about this policy, you can contact us at: kidspark.app@gmail.com',
      },
      {
        h: '2. What data we collect',
        p: 'KidSpark does not require registration or a user account. We do not directly collect your name, email address or any personal data. The only data that may be collected is generated automatically by the third-party services we use (see sections 4 and 5), such as IP address, browser type, pages visited and visit duration.',
      },
      {
        h: '3. Cookies',
        p: 'This site uses cookies. Cookies are small text files stored on your device when you visit a webpage. We use cookies to:\n• Remember your language preferences.\n• Measure site traffic via Google Analytics.\n• Show personalised advertising via Google AdSense.\nYou can disable cookies in your browser settings, although some site features may be affected.',
      },
      {
        h: '4. Google AdSense and advertising',
        p: 'KidSpark displays ads through Google AdSense. Google, as a third-party vendor, uses cookies to serve ads based on users\' prior visits to this or other websites. Users may opt out of personalised advertising by visiting Google\'s Ad Settings (www.google.com/settings/ads). See also Google\'s privacy policy at www.google.com/privacy.',
      },
      {
        h: '5. Google Analytics',
        p: 'We use Google Analytics to analyse site usage and improve the user experience. Google Analytics collects data anonymously about how users interact with our site. You can opt out of Google Analytics by installing the browser add-on available at tools.google.com/dlpage/gaoptout.',
      },
      {
        h: '6. Amazon Associates',
        p: 'KidSpark participates in the Amazon Associates affiliate programme. When you click a product link and make a purchase, we may receive a small commission at no extra cost to you. Amazon may use cookies to track these referrals. See Amazon\'s privacy policy at www.amazon.com/privacy.',
      },
      {
        h: '7. Image generation service',
        p: 'Blog images are generated using Pollinations.ai, a free-access AI image service. Image descriptions are sent to this service to generate illustrations. No personal data is transmitted in this process.',
      },
      {
        h: '8. Your rights (GDPR)',
        p: 'If you are a resident of the European Union, you have the right to access, rectify, erase and port your personal data, and to object to its processing. Since we do not store personal data ourselves, any requests relating to data managed by third parties (Google, Amazon) must be directed to those companies. For any query, write to us at kidspark.app@gmail.com.',
      },
      {
        h: '9. Changes to this policy',
        p: 'We may update this Privacy Policy from time to time. The date of the last update appears at the top of this page. We recommend reviewing it periodically.',
      },
    ],
  },
};

export default function Privacy() {
  const [lang, setLang] = useState('es');
  const t = content[lang];

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.desc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kids-one-ebon.vercel.app/privacy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header lang={lang} setLang={setLang} />

        <main className="max-w-2xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-black text-stone-900 mb-2">{t.heading}</h1>
          <p className="text-stone-400 text-sm mb-10">{t.updated}</p>

          <div className="space-y-8">
            {t.sections.map((s, i) => (
              <section key={i}>
                <h2 className="font-black text-stone-800 text-lg mb-2">{s.h}</h2>
                <p className="text-stone-600 leading-relaxed text-sm whitespace-pre-line">{s.p}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-stone-100">
            <Link href="/" className="text-amber-700 font-bold hover:underline text-sm">
              ← {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
            </Link>
          </div>
        </main>

        <footer className="border-t border-stone-100 py-8 text-center text-stone-400 text-sm">
          <nav className="flex justify-center gap-6 mb-2">
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

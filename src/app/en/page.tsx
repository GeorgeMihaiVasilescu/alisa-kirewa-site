import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans px-6 py-24 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="w-full text-sm text-gray-500 text-right mb-10 pr-2">
          Available in: 
          <Link href="/de" className="underline mx-2">Deutsch</Link> | 
          <Link href="/en" className="underline mx-2">English</Link>
        </div>

        <header className="mb-10">
          <h1 className="text-5xl font-bold mb-2 text-left">Alisa Kirewa</h1>
          <h2 className="text-xl text-gray-600 text-left">Creative Partnerships Coordinator</h2>
        </header>

        <section className="mb-10 space-y-5 text-base leading-relaxed">
          <p>
            Alisa Kirewa holds a Bachelor of Arts degree in Media Management (Medienwirtschaft) from Hochschule der Medien Stuttgart, awarded in 2019.
          </p>
          <p>
            Alisa currently supports the Museum of Contemporary Tattoos in both creative and organizational roles — preparing visual materials, assisting with coordination, and contributing to the development of new partnerships.
          </p>
          <p>
            She has worked in media, cultural, and technology environments, including internships at ProSiebenSat.1 and a multi-year training program at TDS/Fujitsu, where she gained experience in project coordination, IT systems, marketing, and communication.
          </p>
          <p>
            Additionally, she holds certifications in NLP (Neuro-Linguistic Programming), Systemic Coaching, Agile Management, and HR Strategy — supporting her interdisciplinary approach to both cultural and organizational development.
          </p>
          <p>
            For professional inquiries, please contact her at <a href="mailto:alisa@alisakirewa.com" className="underline text-blue-600">alisa@alisakirewa.com</a>.
          </p>
        </section>

        <div className="text-left">
          <a
            href="mailto:alisa@alisakirewa.com"
            className="inline-block bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}





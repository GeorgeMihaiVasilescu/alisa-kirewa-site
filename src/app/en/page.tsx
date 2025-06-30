

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
            Bachelor of Arts in Media Management (Medienwirtschaft), Hochschule der Medien Stuttgart, 2019.
          </p>
          <p>
            Experience across media, cultural, and tech sectors, with a focus on project coordination, communication, and IT systems.
          </p>
          <p>
            Contributes to the Museum of Contemporary Tattoos in the areas of visual material production, coordination, and partnership development.
          </p>
          <p>
            Previous positions include internships at ProSiebenSat.1 and a multi-year program at TDS/Fujitsu.
          </p>
          <p>
            Certified in NLP, Systemic Coaching, Agile Management, and HR Strategy.
          </p>
          <p>
            Contact: <a href="mailto:alisa@alisakirewa.com" className="underline text-blue-600">alisa@alisakirewa.com</a>
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



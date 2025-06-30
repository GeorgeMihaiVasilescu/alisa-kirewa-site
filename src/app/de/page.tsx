import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans px-6 py-24 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="w-full text-sm text-gray-500 text-right mb-10 pr-2">
          Verfügbar in: 
          <Link href="/de" className="underline mx-2">Deutsch</Link> | 
          <Link href="/en" className="underline mx-2">English</Link>
        </div>

        <header className="mb-10">
          <h1 className="text-5xl font-bold mb-2 text-left">Alisa Kirewa</h1>
          <h2 className="text-xl text-gray-600 text-left">Koordinatorin für kreative Partnerschaften</h2>
        </header>

        <section className="mb-10 space-y-5 text-base leading-relaxed">
          <p>
            Bachelor of Arts in Medienwirtschaft, Hochschule der Medien Stuttgart, Abschlussjahr 2019.
          </p>
          <p>
            Berufserfahrung in Medien-, Kultur- und Technologiebereichen mit Schwerpunkt auf Projektkoordination, Kommunikation und IT-Systeme.
          </p>
          <p>
            Mitwirkung am Museum of Contemporary Tattoos im Bereich visuelle Inhalte, organisatorische Abläufe und Entwicklung von Partnerschaften.
          </p>
          <p>
            Frühere Stationen: Praktika bei ProSiebenSat.1 sowie ein mehrjähriges Ausbildungsprogramm bei TDS/Fujitsu.
          </p>
          <p>
            Zertifiziert in NLP, Systemischem Coaching, Agilem Management und HR-Strategie.
          </p>
          <p>
            Kontakt: <a href="mailto:alisa@alisakirewa.com" className="underline text-blue-600">alisa@alisakirewa.com</a>
          </p>
        </section>

        <div className="text-left">
          <a
            href="mailto:alisa@alisakirewa.com"
            className="inline-block bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </main>
  );
}





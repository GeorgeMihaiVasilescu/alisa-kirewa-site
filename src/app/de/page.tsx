export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans px-6 py-24 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="w-full text-sm text-gray-500 text-right mb-10 pr-2">
          Verfügbar in: 
          <a href="/de" className="underline mx-2">Deutsch</a> | 
          <a href="/en" className="underline mx-2">Englisch</a>
        </div>

        <header className="mb-10">
          <h1 className="text-5xl font-bold mb-2 text-left">Alisa Kirewa</h1>
          <h2 className="text-xl text-gray-600 text-left">Koordinatorin für kreative Partnerschaften</h2>
        </header>

        <section className="mb-10 space-y-5 text-base leading-relaxed">
          <p>
            Alisa Kirewa hat 2019 ihren Bachelor of Arts in Medienwirtschaft an der Hochschule der Medien Stuttgart abgeschlossen.
          </p>
          <p>
            Derzeit unterstützt sie das Museum of Contemporary Tattoos in kreativen und organisatorischen Rollen — sie bereitet visuelle Materialien vor, hilft bei der Koordination und trägt zur Entwicklung neuer Partnerschaften bei.
          </p>
          <p>
            Sie hat in Medien-, Kultur- und Technologieumfeldern gearbeitet, darunter Praktika bei ProSiebenSat.1 und ein mehrjähriges Ausbildungsprogramm bei TDS/Fujitsu, wo sie Erfahrungen in Projektkoordination, IT-Systemen, Marketing und Kommunikation sammelte.
          </p>
          <p>
            Außerdem besitzt sie Zertifizierungen in NLP (Neuro-Linguistisches Programmieren), Systemischem Coaching, Agilem Management und HR-Strategie — was ihren interdisziplinären Ansatz für kulturelle und organisatorische Entwicklung unterstützt.
          </p>
          <p>
            Für berufliche Anfragen kontaktieren Sie sie bitte unter <a href="mailto:alisa@alisakirewa.com" className="underline text-blue-600">alisa@alisakirewa.com</a>.
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




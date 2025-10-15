import SearchList from "./components/SearchList";
mport MultiplicationTable from "./components/MultiplicationTable";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-8">
      <main className="max-w-2xl mx-auto flex flex-col gap-8">
        {/* Etiqueta para Buscador de Nombres */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Buscador de Nombres
          </h2>
          <SearchList />
        </section>
        {/* Etiqueta para Tabla de Multiplicar */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Tabla de Multiplicar
          </h2>
          <MultiplicationTable />
        </section>
      </main>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}

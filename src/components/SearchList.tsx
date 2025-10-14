import { useState } from "react";

const NAMES = ["Juan", "María", "Pedro", "Ana", "Luis", "Lucía", "Carlos", "Sofía"];

export default function SearchList() {
  const [query, setQuery] = useState("");

  const filteredNames = NAMES.filter(name =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Buscar nombre..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
      />
      <ul className="space-y-1">
        {filteredNames.length > 0 ? (
          filteredNames.map(name => (
            <li key={name} className="text-gray-700">{name}</li>
          ))
        ) : (
          <li className="text-gray-500">No encontrado</li>
        )}
      </ul>
    </div>
  );
}
import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
  { id: 3, name: "Auguste Rodin" },
];

export default function App() {
  const [artists, setArtists] = useState(initialArtists);

  const handleAddArtist = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newArtist = {
        id: artists.length > 0 ? Math.max(...artists.map((a) => a.id)) + 1 : 0,
        name: e.target.value.trim(),
      };
      setArtists([...artists, newArtist]);
      e.target.value = "";
    }
  };

  const handleDeleteArtist = (id) => {
    setArtists(artists.filter((a) => a.id !== id));
  };

  return (
    <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Liste des artistes inspirants
      </h1>

      <input
        type="text"
        placeholder="Ajouter un artiste et appuyer sur Entrée"
        onKeyDown={handleAddArtist}
        className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mb-6"
      />

      <ul className="list-none p-0 max-w-md mx-auto text-left">
        {artists.map((artist) => (
          <li
            key={artist.id}
            className="flex justify-between items-center p-3 mb-2 bg-gray-50 border border-gray-100 rounded-md transition-all duration-150 ease-in-out"
          >
            <span className="text-gray-700">{artist.name}</span>

            <button
              onClick={() => handleDeleteArtist(artist.id)}
              className="bg-red-500 text-white py-1 px-3 cursor-pointer hover:bg-red-600 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

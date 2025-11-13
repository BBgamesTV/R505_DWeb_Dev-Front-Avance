import { useState } from "react";

let initialArtists = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson", },
    { id: 3, name: "Auguste Rodin" },
];

export default function App() {
  const [artists, setArtists] = useState(initialArtists);
    return (
    <div className="mot-container">
            <h1> Liste des artistes inspirants </h1>
            <input type="text" placeholder="Ajouter un artiste" onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value.trim() !== '') {
                    const newArtist = {
                        id: artists.length > 0 ? artists[artists.length - 1].id + 1 : 0,
                        name: e.target.value.trim(),}
                    setArtists([...artists, newArtist]);
                    e.target.value = '';
                }
            }} />
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}<button onClick={() => {setArtists(artists.filter(a => a.id !== artist.id));}}>Supprimer</button></li>
                ))}
            </ul>
    </div>
  );
}

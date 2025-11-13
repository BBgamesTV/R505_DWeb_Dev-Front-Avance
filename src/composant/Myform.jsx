import { useState } from "react";
// import "./styles/ageStyles.css"; // Supprimé - remplacé par Tailwind

function Myform() {
  const [form, setForm] = useState({
    firstName: "Lea",
    lastName: "Dupont",
    email: "Lea@dupont@gmail.com",
  });

  return (
    // Conteneur principal - style de carte
    <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-center">
      {/* Conteneur pour les champs de saisie */}
      <div className="flex flex-col gap-4 max-w-md mx-auto mb-4">
        {/* Champ Prénom */}
        <div className="flex flex-col text-left">
          <label
            htmlFor="firstName"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Prénom
          </label>
          <input
            id="firstName"
            type="text"
            value={form.firstName}
            onChange={(p) => setForm({ ...form, firstName: p.target.value })}
            placeholder="Prénom"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Champ Nom */}
        <div className="flex flex-col text-left">
          <label
            htmlFor="lastName"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Nom
          </label>
          <input
            id="lastName"
            type="text"
            value={form.lastName}
            onChange={(n) => setForm({ ...form, lastName: n.target.value })}
            placeholder="Nom"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Champ Email */}
        <div className="flex flex-col text-left">
          <label
            htmlFor="email"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Affichage des résultats */}
      <h2 className="text-lg my-4 font-medium text-gray-800 break-words">
        {form.firstName} {form.lastName} - {form.email}
      </h2>

      {/* Bouton de réinitialisation */}
      <button
        onClick={() => setForm({ firstName: "", lastName: "", email: "" })}
        className="bg-blue-500 text-white py-2 px-4 cursor-pointer hover:bg-blue-600 rounded-md shadow-sm transition-colors"
      >
        Réinitialiser
      </button>
    </div>
  );
}

export default Myform;

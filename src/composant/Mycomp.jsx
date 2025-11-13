import { useState } from "react";

function MyComp() {
  const [mot, setMot] = useState("Hello !");
  return (
    <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-center">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="text"
          value={mot}
          onChange={(e) => setMot(e.target.value)}
          placeholder={mot}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        <button
          onClick={() => setMot("")}
          className="bg-blue-500 text-white py-2 px-4 cursor-pointer hover:bg-blue-600 rounded-md shadow-sm transition-colors"
        >
          Réinitialiser
        </button>
      </div>

      <h2 className="text-xl my-4 text-gray-700 break-words">
        Mot saisi : <span className="font-semibold text-gray-900">{mot}</span>
      </h2>
    </div>
  );
}

export default MyComp;

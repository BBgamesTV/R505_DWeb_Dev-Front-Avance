import { useState } from "react";
import "./styles/ageStyles.css";

function Ex5() {
  const [age, setAge] = useState(21);
  const [nom, setNom] = useState("Bastien");

  function handleClick() {
    setAge((age) => age + 1);
    setAge((age) => age + 1);
    setAge((age) => age + 1);
  }

  return (
    <div className="mot-container">
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder={nom}
      />
      <button onClick={handleClick}>+</button>
      <button onClick={() => setAge(age - 1)}>-</button>
      <h2>
        Prenom : {nom}, Age : {age}
      </h2>
      <button onClick={() => setNom("") && setAge()}>Réinitialiser</button>
    </div>
  );
}

export default Ex5;

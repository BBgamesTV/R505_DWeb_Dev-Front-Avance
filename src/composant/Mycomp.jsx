import { useState } from "react";    
import "./styles/MyCompStyle.css";

function MyComp() {
    const [mot, setMot] = useState("Hello !");
    return (
      <div className="mot-container">
        <input
          type="text"
          value={mot}
          onChange={(e) => setMot(e.target.value)}
          placeholder={mot}
        />
        <h2>Mot saisi : {mot}</h2>
        <button onClick={() => setMot("")}>Réinitialiser</button>
      </div>
    );
}

export default MyComp;

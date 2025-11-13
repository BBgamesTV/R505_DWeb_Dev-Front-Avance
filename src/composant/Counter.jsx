import { useState } from "react";    
import "./styles/CounterStyle.css";

function Compteur() {
    const [count, setCount] = useState(0);
    return (
        <div className="counter-container">
            <h2>Compteur : {count}</h2>
            <div className="button-group">
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(0)}>Réinitialiser</button>
            </div>
        </div>
    );
}

export default Compteur;

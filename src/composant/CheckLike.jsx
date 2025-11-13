import { useState } from "react";    
import "./styles/ChkStyle.css";

function MyComp() {
    const [like, setLike] = useState(false);
    return (
      <div className="like-container">
        <input
            type="checkbox"
            value={like}
            checked={like}
            onChange={(event) => setLike(event.target.checked)}
        />
            <h2>{ like ? "Aimé" : "Pas Aimé"}</h2>
      </div>
    );
}

export default MyComp;

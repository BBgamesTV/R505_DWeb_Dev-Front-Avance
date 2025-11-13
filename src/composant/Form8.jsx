import { useState } from "react";
import "./styles/ageStyles.css";

function Ex5() {
  const [form, setForm] = useState({
    Titre: "Cars",
    Ville: "Paris",
    ImageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwE5dG2ntLx0HpEWHrI1Q6PFj3M4Jd--dPBD0os_YWj_VnmFvle0QGgdjVakaGatFFEfapzj78XVWP_FYLZhik5h1bjNpA2GEwX7Xpu7ASnw&s=10",
  });

  return (
    <div className="mot-container">
      <input
        type="text"
        value={form.Titre}
        onChange={(t) => setForm({ ...form, Titre: t.target.value })}
        placeholder={form.Titre}
      />
      <input
        type="text"
        value={form.Ville}
        onChange={(n) => setForm({ ...form, Ville: n.target.value })}
        placeholder={form.Ville}
      />
      <input
        type="text"
        value={form.ImageURL}
        onChange={(e) => setForm({ ...form, ImageURL: e.target.value })}
        placeholder={form.ImageURL}
        label="ImageURL"
          />
          <h2>{ form.Titre +"  "+ form.Ville }</h2>
        <img src={form.ImageURL} alt={form.Titre} width="200" />
      <button onClick={() => setForm({firstName: "", lastName: "", email: ""})}>
        Réinitialiser
      </button>
    </div>
  );
}

export default Ex5;

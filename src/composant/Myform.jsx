import { useState } from "react";
import "./styles/ageStyles.css";

function Ex5() {
  const [form, setForm] = useState({ firstName: 'Lea', lastName: 'Dupont', email: 'Lea@dupont@gmail' });

  return (
    <div className="mot-container">
      <input
        type="text"
        value={form.firstName}
        onChange={(p) => setForm({ ...form, firstName: p.target.value })}
        placeholder={form.firstName}
      />
      <input
        type="text"
        value={form.lastName}
        onChange={(n) => setForm({ ...form, lastName: n.target.value })}
        placeholder={form.lastName}
      />
      <input
        type="text"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder={form.email}
        label="email"
      />
      <h2>{ form.firstName +"  "+ form.lastName +" - "+ form.email}</h2>
      <button onClick={() => setForm({firstName: "", lastName: "", email: ""})}>
        Réinitialiser
      </button>
    </div>
  );
}

export default Ex5;

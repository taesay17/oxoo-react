import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ARTIFACTS } from "../data/artifacts";
import "../pages/Artifacts.css";


export default function ArtifactsPage() {
  const [category, setCategory] = useState("all");

  const filtered = category === "all"
    ? ARTIFACTS
    : ARTIFACTS.filter(a => a.category === category);

  return (
    <section className="artifacts-page">
      <h2>Артефакты</h2>

      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Все категории</option>
          <option value="family">Семья</option>
          <option value="labor">Труд</option>
          <option value="professions">Профессии</option>
        </select>
      </div>

      <div className="artifacts-grid">
        {filtered.map(a => (
          <Link to={`/artifacts/${a.id}`} className="artifact-card" key={a.id}>
            <img src={a.image} alt={a.title} />
            <h4>{a.title}</h4>
            <small>{a.region}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

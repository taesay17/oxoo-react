// src/pages/IslandsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ISLANDS } from "../data/islands";
import "../styles/islands.css";

export default function IslandsPage() {
  return (
    <div className="page islands-page">
      <h1>Острова</h1>

      <div className="islands-list">
        {ISLANDS.map((i) => (
          <Link key={i.id} to={`/islands/${i.id}`} className="island-card">
  <img src={i.image} alt={i.title} className="island-img" />
  <h2>{i.title}</h2>
  <p>{i.description}</p>
</Link>

        ))}
      </div>
    </div>
  );
}

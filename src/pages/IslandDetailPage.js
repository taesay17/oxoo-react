// src/pages/IslandDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { ISLANDS } from "../data/islands";
import "../styles/islands.css";

export default function IslandDetailPage() {
  const { islandId } = useParams();

  const island = ISLANDS.find((i) => i.id === islandId);

  return (
    <div className="page island-detail-page">
      <h1>{island.title}</h1>
      <p>{island.description}</p>

      <section>
        <h2>Артефакты</h2>
        <p>Артефакты будут добавлены позже.</p>
      </section>

      <section>
        <h2>Истории</h2>
        <p>Истории будут добавлены позже.</p>
      </section>
    </div>
  );
}

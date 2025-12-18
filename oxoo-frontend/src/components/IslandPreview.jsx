import React from "react";
import { Link } from "react-router-dom";
import "../components/IslandPreview.css";

export default function IslandsPreview() {
  const items = [
    {
      id: "family",
      title: "Семья",
      color: "#00A8FF",
      icon: "👨‍👩‍👧",
      description: "Истории родства, быта и традиций.",
    },
    {
      id: "labor",
      title: "Труд",
      color: "#9B59B6",
      icon: "⚙️",
      description: "Ремёсла, работа и повседневная жизнь.",
    },
    {
      id: "professions",
      title: "Профессии",
      color: "#F39C12",
      icon: "💼",
      description: "Выбор пути, мечты и образование.",
    },
  ];

  return (
    <section className="islands-preview">
      <h2>Острова музея ОХОО</h2>
      <p className="islands-subtitle">
        Выберите тематический остров и начните исследование.
      </p>

      <div className="islands-grid">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/islands/${item.id}`}
            className="island-card"
          >
            <div
              className="island-icon"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button className="open-btn">Открыть →</button>
          </Link>
        ))}
      </div>
    </section>
  );
}

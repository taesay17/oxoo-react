import React, { useState } from "react";
import { Link } from "react-router-dom";
import HoloAvatar from "../components/HoloAvatar";
import STORIES from "../data/stories";
import "./StoriesPage.css";

export default function StoriesPage() {
  const [region, setRegion] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = STORIES.filter((story) => {
    const matchesRegion = region === "all" || story.region === region;
    const matchesCategory = category === "all" || story.category === category;
    const matchesSearch =
      story.name.toLowerCase().includes(search.toLowerCase()) ||
      story.quote.toLowerCase().includes(search.toLowerCase());

    return matchesRegion && matchesCategory && matchesSearch;
  });

  return (
    <section className="stories-page">
      <h1>Истории тех, кто создавал, работал, решал</h1>

      {/* Фильтры */}
      <div className="filters">
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="all">Все регионы</option>
          <option value="Баткен">Баткен</option>
          <option value="Ош">Ош</option>
          <option value="Джалал-Абад">Джалал-Абад</option>
          <option value="Нарын">Нарын</option>
          <option value="Ысык-Көл">Ысык-Көл</option>
          <option value="Талас">Талас</option>
          <option value="Чуй">Чуй</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Все категории</option>
          <option value="family">Семья</option>
          <option value="labor">Труд</option>
          <option value="professions">Профессии</option>
        </select>

        <input
          type="text"
          placeholder="Поиск по имени или цитате..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Галерея историй */}
      <div className="stories-grid">
        {filtered.map((story) => (
          <Link to={`/stories/${story.id}`} className="story-card" key={story.id}>
            <HoloAvatar img={story.images[0]} />

            <div className="story-card-info">
              <h3>{story.name}</h3>
              <p className="story-region">{story.region}</p>
              <p className="story-quote">“{story.quote}”</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

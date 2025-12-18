import React from "react";
import { Link, useParams } from "react-router-dom";
import STORIES from "../data/stories";
import HoloAvatar from "../components/HoloAvatar";
import "./StoryDetailPage.css";

export default function StoryDetailPage() {
  const { id } = useParams();
  const story = STORIES.find((s) => s.id === Number(id));

  if (!story) {
    return <h2>История не найдена</h2>;
  }

  // похожие истории той же категории
  const related = STORIES.filter(
    (s) => s.category === story.category && s.id !== story.id
  ).slice(0, 3);

  return (
    <section className="story-detail-page">
      <Link className="back-btn" to="/stories">
        ← Назад к историям
      </Link>

      <div className="story-header">
        <HoloAvatar img={story.images[0]} />

        <div className="story-meta">
          <h1>{story.name}</h1>
          <p className="story-region">Регион: {story.region}</p>
          <p className={`story-category cat-${story.category}`}>
            Категория: {story.category}
          </p>
        </div>
      </div>

      <div className="story-text">
        <p>{story.fullText}</p>
      </div>

      {/* Галерея изображений */}
      <h3>Фотографии</h3>
      <div className="story-gallery">
        {story.images.map((img, i) => (
          <img src={img} key={i} alt="" />
        ))}
      </div>

      {/* Похожие истории */}
      <h3>Похожие истории</h3>
      <div className="related-stories">
        {related.map((s) => (
          <Link to={`/stories/${s.id}`} key={s.id} className="related-card">
            <HoloAvatar img={s.images[0]} />
            <div>{s.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

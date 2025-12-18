import React from "react";
import { useParams, Link } from "react-router-dom";
import { ARTIFACTS } from "../data/artifacts";
import { STORIES } from "../data/stories";

export default function ArtifactDetailPage() {
  const { id } = useParams();
  const artifact = ARTIFACTS.find(a => a.id === id);

  if (!artifact) return <p>Артефакт не найден</p>;

  return (
    <section className="artifact-detail">
      <img className="artifact-large" src={artifact.image} alt={artifact.title} />
      <h2>{artifact.title}</h2>

      <p>{artifact.description}</p>

      <div className="artifact-meta">
        <p><b>Регион:</b> {artifact.region}</p>
        <p><b>Категория:</b> {artifact.category}</p>
        <p><b>Период:</b> {artifact.period}</p>
      </div>

      <h3>Связанные истории</h3>
      <div className="related-stories">
        {artifact.relatedStories.map(storyId => {
          const story = STORIES.find(s => s.id === storyId);
          return (
            <Link key={storyId} to={`/stories/${storyId}`} className="story-card-mini">
              <img src={story.images[0]} />
              <div>{story.name}</div>
            </Link>
          );
        })}
      </div>

      <h3>На карте</h3>
      <Link
        className="btn-map"
        to={`/map?lat=${artifact.coords[0]}&lng=${artifact.coords[1]}`}
      >
        Посмотреть на карте →
      </Link>
    </section>
  );
}

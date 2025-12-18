import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import IslandFlyThrough from "../components/IslandFlyThrough";
import "../styles/home.css"

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-modern">

      {/* HERO */}
      <section className="hero-modern">
        <div className="hero-left">
          <h1 className="title-big">
            Музей общества <span className="gradient-text">ОХОО!</span>
          </h1>
          <h1 className="title-big">
  TEST Музей общества <span className="gradient-text">ОХОО!</span>
</h1>

          <p className="subtitle-big">
            Исследуй три мира — Семья, Труд и Профессии через цифровое пространство и живые истории.
          </p>

          <div className="hero-buttons">
            <Link to="/islands" className="btn-start">Начать путешествие</Link>
            <Link to="/about" className="btn-outline">О проекте</Link>
          </div>

          <p className="voice-hint">
            Голосовой помощник: скажи <b>«Открыть остров Семья»</b>
          </p>
        </div>

        {/* 3D ОСТРОВКИ */}
        <div className="hero-visual">
          <Canvas camera={{ position: [0, 0, 12], fov: 40 }}>
            <ambientLight intensity={1}/>
            <directionalLight position={[4, 4, 4]} intensity={1}/>

            <IslandFlyThrough
              size={2.2}     // <── Увеличили !
              onIslandClick={(id) => navigate(`/islands/${id}`)}
            />
          </Canvas>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-modern">
        <h2>О проекте</h2>
        <p>
          «ОХОО!» — это цифровая живая среда о людях Кыргызстана. 
          Здесь собраны истории, артефакты, профессии и то, чем живут поколения.
        </p>
        <Link to="/about" className="btn-more">Подробнее</Link>
      </section>

      {/* THREE HALLS */}
      <section className="section halls-modern">
        <h2>Три зала музея</h2>
        <div className="halls-grid">
          <Link to="/islands/family" className="hall-card hall-family">
            <span className="hall-icon">🌀</span>
            <h3>Семья</h3>
            <p>Связи, память и традиции.</p>
          </Link>

          <Link to="/islands/labor" className="hall-card hall-labor">
            <span className="hall-icon">⚙️</span>
            <h3>Труд</h3>
            <p>Работа, ремёсла, миграция.</p>
          </Link>

          <Link to="/islands/prof" className="hall-card hall-prof">
            <span className="hall-icon">💼</span>
            <h3>Профессии</h3>
            <p>Выбор, мечты и будущее.</p>
          </Link>
        </div>
      </section>

      
    </div>
  );
}

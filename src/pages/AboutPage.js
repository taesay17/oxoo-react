import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import "./AboutPage.css";

export default function AboutPage() {
  const [open, setOpen] = useState(null);
  const parallaxRef = useRef(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  const FAQ = [
    {
      q: "Могу ли я добавить свою историю?",
      a: "Да! Через страницу «Истории» вы можете отправить свой рассказ. Он попадёт на модерацию."
    },
    {
      q: "Кто модерирует контент?",
      a: "Команда проекта ОХОО! совместно с исследователями AUCA и экспертами по цифровой культуре."
    },
    {
      q: "Можно ли использовать материалы?",
      a: "Да. Материалы доступны по лицензии CC BY-SA при указании источника."
    },
    {
      q: "Как связаться с командой?",
      a: "Используйте контактную форму ниже или email: ohoproject@mail.com."
    },
    {
      q: "Какие данные вы собираете?",
      a: "Только необходимые для работы сайта. Мы соблюдаем GDPR."
    }
  ];

  return (
    <div className="about-wrapper">
      {/* ===== ПАРАЛЛАКС ФОН ===== */}
      <div className="parallax-bg" ref={parallaxRef}></div>

      {/* ===== 3D КОМПОЗИЦИЯ — фон ===== */}
      <Canvas className="about-3d">
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[2, 1, 3]} />

        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
          <mesh>
            <icosahedronGeometry args={[1.6, 0]} />
            <meshStandardMaterial
              color="#4A90E2"
              metalness={0.6}
              roughness={0.2}
            />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* ===== ОСНОВНОЙ КОНТЕНТ ===== */}
      <section className="about-page">
        
        <div className="fade-block">
          <h1>Миссия ОХОО!</h1>
          <p>
            Мы собираем истории, артефакты и смыслы, чтобы показать, как 
            меняется общество Кыргызстана через призму семьи, труда и профессий. 
            Наш музей — это живой организм, который развивается вместе с людьми.
          </p>
        </div>

        <div className="partners fade-block">
          <h2>Партнёры проекта</h2>
          <div className="partner-logos">
            <img src="/img/eu.png" alt="EU" />
            <img src="/img/undp.png" alt="UNDP" />
            <img src="/img/auca.png" alt="AUCA" />
            <img src="/img/osoo.png" alt="Osoo" />
          </div>
        </div>

        <div className="faq fade-block">
          <h2>FAQ — Частые вопросы</h2>

          {FAQ.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-question" onClick={() => toggle(i)}>
                {item.q}
                <span>{open === i ? "−" : "+"}</span>
              </div>
              {open === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>

        <div className="contact fade-block">
          <h2>Связаться с нами</h2>
          <form className="contact-form">
            <input type="text" placeholder="Ваше имя" required />
            <input type="email" placeholder="Email" required />
            <textarea rows="5" placeholder="Сообщение" required></textarea>
            <button>Отправить</button>
          </form>
        </div>

        <footer className="legal-footer fade-block">
          <p>© 2025 OXOO Project · Лицензия CC BY-SA</p>
          <p>Сайт соответствует требованиям GDPR</p>
        </footer>
      </section>
    </div>
  );
}

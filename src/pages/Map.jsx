
import React, { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

// Категории и их стили
const FILTERS = [
  { id: "all", label: "Все", color: "#7f8fa6" },
  { id: "profession", label: "Профессии", color: "#00E1FF", icon: "⚒️" },
  { id: "legend", label: "Легенды", color: "#F8C800", icon: "✨" },
  { id: "food", label: "Кухня", color: "#FF6B6B", icon: "🍲" },
];

// Точки на карте (примерные координаты по Кыргызстану)
const MEMORY_POINTS = [
  {
    id: 1,
    type: "profession",
    title: "Мастера по felt'у (кииз)",
    region: "Ошская область",
    lat: 40.53,
    lng: 72.80,
    description:
      "Традиция изготовления войлочных ковров и изделий, передаётся через поколения.",
    link: "/stories/1",
  },
  {
    id: 2,
    type: "legend",
    title: "Легенда о Иссык-Куле",
    region: "Иссык-Кульская область",
    lat: 42.45,
    lng: 77.20,
    description:
      "Одна из самых известных легенд о том, как озеро появилось на месте разрушенного города.",
    link: "/stories/2",
  },
  {
    id: 3,
    type: "food",
    title: "Бешбармак в Нарыне",
    region: "Нарынская область",
    lat: 41.43,
    lng: 75.99,
    description:
      "Классическое блюдо из мяса и лапши, связанное с семейными праздниками и туями.",
    link: "/stories/3",
  },
  {
    id: 4,
    type: "profession",
    title: "Чабаны и кочевой труд",
    region: "Тянь-Шань",
    lat: 41.8,
    lng: 78.5,
    description:
      "Пастухи, которые проводят месяцы в горах с отарой — символ труда и устойчивости.",
    link: "/stories/4",
  },
  {
    id: 5,
    type: "legend",
    title: "Манасчи из Таласа",
    region: "Таласская область",
    lat: 42.52,
    lng: 72.23,
    description:
      "Устная традиция эпоса «Манас», легендарные рассказчики, хранящие память народа.",
    link: "/stories/5",
  },
  {
    id: 6,
    type: "food",
    title: "Курут и айран",
    region: "Чуйская область",
    lat: 42.88,
    lng: 74.60,
    description:
      "Молочные продукты, которые всегда рядом — от базаров Бишкека до горных пастбищ.",
    link: "/stories/6",
  },
];

// Фабрика кастомных иконок
const createMemoryIcon = (color, emoji) =>
  L.divIcon({
    className: "memory-marker",
    html: `
      <div class="memory-marker-dot" style="border-color:${color}">
        <span class="memory-marker-emoji">${emoji}</span>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });

const ICONS = {
  profession: createMemoryIcon("#00E1FF", "⚒️"),
  legend: createMemoryIcon("#F8C800", "✨"),
  food: createMemoryIcon("#FF6B6B", "🍲"),
};

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPoints = useMemo(() => {
    if (activeFilter === "all") return MEMORY_POINTS;
    return MEMORY_POINTS.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  const center = [41.2044, 74.7661]; // центр Кыргызстана примерный
  const zoom = 6.3;

  const getFilterColor = (id) => {
    const f = FILTERS.find((x) => x.id === id);
    return f?.color || "#7f8fa6";
  };

  const getFilterIcon = (id) => {
    const f = FILTERS.find((x) => x.id === id);
    return f?.icon || "●";
  };

  return (
    <div className="map-page">
      <header className="map-header">
        <div>
          <h1>Карта памяти</h1>
          <p>
            Культура как географическая ткань: профессии, легенды и кухня,
            связанные с регионами Кыргызстана.
          </p>
        </div>
        <div className="map-header-actions">
          <Link to="/" className="btn btn-ghost">
            ← На главную
          </Link>
          <button className="btn btn-outline" disabled>
            Смотреть на временной линии (скоро)
          </button>
        </div>
      </header>

      <section className="map-layout">
        {/* Левая панель с фильтрами и списком */}
        <aside className="map-sidebar">
          <h2>Слои карты</h2>

          <div className="filter-chips">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={
                  "filter-chip" +
                  (activeFilter === f.id ? " filter-chip-active" : "")
                }
                style={
                  activeFilter === f.id
                    ? { borderColor: f.color, boxShadow: `0 0 0 1px ${f.color}55` }
                    : {}
                }
                onClick={() => setActiveFilter(f.id)}
              >
                <span
                  className="filter-dot"
                  style={{ background: f.color || "#7f8fa6" }}
                />
                {f.icon && <span className="filter-emoji">{f.icon}</span>}
                <span>{f.label}</span>
              </button>
            ))}
          </div>

          <div className="map-sidebar-list">
            <h3>
              Точки ({filteredPoints.length}){" "}
              {activeFilter !== "all" && (
                <span
                  style={{
                    fontSize: 12,
                    color: getFilterColor(activeFilter),
                    marginLeft: 4,
                  }}
                >
                  {getFilterIcon(activeFilter)}
                </span>
              )}
            </h3>
            <ul>
              {filteredPoints.map((p) => (
                <li key={p.id} className="map-list-item">
                  <div className="map-list-tag">
                    {p.type === "profession" && "Профессии"}
                    {p.type === "legend" && "Легенды"}
                    {p.type === "food" && "Кухня"}
                  </div>
                  <div className="map-list-title">{p.title}</div>
                  <div className="map-list-region">{p.region}</div>
                  <p className="map-list-desc">{p.description}</p>
                  <Link to={p.link} className="map-list-link">
                    Открыть историю →
                  </Link>
                </li>
              ))}
              {filteredPoints.length === 0 && (
                <li className="map-list-empty">
                  Нет точек для выбранного фильтра.
                </li>
              )}
            </ul>
          </div>
        </aside>

        {/* Карта */}
        <div className="map-container">
          <MapContainer
            center={center}
            zoom={zoom}
            minZoom={5}
            maxZoom={10}
            className="leaflet-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>, © OpenStreetMap'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {filteredPoints.map((p) => (
              <Marker
                key={p.id}
                position={[p.lat, p.lng]}
                icon={ICONS[p.type]}
              >
                <Popup>
                  <div className="memory-popup">
                    <div className="memory-popup-tag">
                      {p.type === "profession" && "Профессии"}
                      {p.type === "legend" && "Легенды"}
                      {p.type === "food" && "Кухня"}
                    </div>
                    <h3>{p.title}</h3>
                    <span className="memory-popup-region">{p.region}</span>
                    <p>{p.description}</p>
                    <Link to={p.link} className="memory-popup-link">
                      Перейти к истории
                    </Link>
                    <button className="memory-popup-timeline" disabled>
                      Смотреть на временной линии (скоро)
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>
    </div>
  );
}

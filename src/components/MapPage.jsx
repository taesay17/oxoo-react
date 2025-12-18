import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSearchParams, Link } from "react-router-dom";
import { fetchMapPoints } from "../api";

export default function MapPage() {
  const [points, setPoints] = useState([]);
  const [searchParams] = useSearchParams();

  const activePointId = searchParams.get("point");

  useEffect(() => {
    fetchMapPoints()
      .then(res => setPoints(res.data))
      .catch(err => console.error("Map points error:", err));
  }, []);

  const center = useMemo(() => {
    if (activePointId) {
      const p = points.find(p => String(p.id) === String(activePointId));
      if (p) return [p.lat, p.lng];
    }
    return [41.3, 74]; // центр Кыргызстана
  }, [points, activePointId]);

  return (
    <section className="map-page">
      <h2>Карта памяти</h2>

      <MapContainer
        center={center}
        zoom={7}
        style={{ height: "70vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {points.map(p => (
          <Marker key={p.id} position={[p.lat, p.lng]}>
            <Popup>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.imageUrl && (
                <img src={p.imageUrl} alt="" style={{ width: "100%" }} />
              )}

              <Link to={`/artifacts?mapPoint=${p.id}`}>
                Смотреть артефакты →
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSearchParams, Link } from "react-router-dom";
import { fetchMapPoints } from "../api";

export default function MapPage() {
  const [points, setPoints] = useState([]);
  const [searchParams] = useSearchParams();

  const activePointId = searchParams.get("point");

  useEffect(() => {
    fetchMapPoints()
      .then(res => setPoints(res.data))
      .catch(err => console.error("Map points error:", err));
  }, []);

  const center = useMemo(() => {
    if (activePointId) {
      const p = points.find(p => String(p.id) === String(activePointId));
      if (p) return [p.lat, p.lng];
    }
    return [41.3, 74]; // центр Кыргызстана
  }, [points, activePointId]);

  return (
    <section className="map-page">
      <h2>Карта памяти</h2>

      <MapContainer
        center={center}
        zoom={7}
        style={{ height: "70vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {points.map(p => (
          <Marker key={p.id} position={[p.lat, p.lng]}>
            <Popup>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.imageUrl && (
                <img src={p.imageUrl} alt="" style={{ width: "100%" }} />
              )}

              <Link to={`/artifacts?mapPoint=${p.id}`}>
                Смотреть артефакты →
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}

// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import IslandsPage from "./pages/IslandsPage";
import IslandDetailPage from "./pages/IslandDetailPage";
import ArtifactsPage from "./pages/Artifacts";
import StoriesPage from "./pages/StoriesPage";
import AboutPage from "./pages/AboutPage";
import TicketsPage from "./pages/TicketsPage";
import MapPage  from "./pages/Map";

export default function App() {
  return (
    <>
      <Navbar />   {/* ЕДИНСТВЕННЫЙ НАВБАР */}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/islands" element={<IslandsPage />} />
          <Route path="/islands/:islandId" element={<IslandDetailPage />} />
          <Route path="/artifacts" element={<ArtifactsPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </main>

      <Footer />   {/* ЕДИНСТВЕННЫЙ ФУТЕР */}
    </>
  );
}

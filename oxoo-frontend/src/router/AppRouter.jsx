import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Map from "../pages/Map";
import Stories from "../pages/Stories";
import Artifacts from "../pages/Artifacts";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/artifacts" element={<Artifacts />} />
      </Routes>
    </BrowserRouter>
  );
}

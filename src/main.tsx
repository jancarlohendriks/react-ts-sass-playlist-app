import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import App from "./pages/App";
import Artist from "./pages/ArtistDetail";
import { Playlists } from "./pages/Playlists";
import "./styles/app.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route index element={<App />} />
        <Route path="/playlist/" element={<Playlists />} />
        <Route path="/artist/:name" element={<Artist />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

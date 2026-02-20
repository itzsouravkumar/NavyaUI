import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SpotlightCardPage from "./pages/components/SpotlightCardPage";
import MovingBorderPage from "./pages/components/MovingBorderPage";
import FlipWordsPage from "./pages/components/FlipWordsPage";
import TextGeneratePage from "./pages/components/TextGeneratePage";
import ThreeDCardPage from "./pages/components/ThreeDCardPage";
import BackgroundBeamsPage from "./pages/components/BackgroundBeamsPage";
import MeteorsPage from "./pages/components/MeteorsPage";
import InfiniteMovingCardsPage from "./pages/components/InfiniteMovingCardsPage";
import FloatingDockPage from "./pages/components/FloatingDockPage";
import GettingStartedPage from "./pages/GettingStartedPage";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("navyaui-theme") as "dark" | "light") || "dark";
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("navyaui-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Routes>
      <Route path="/" element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
        <Route index element={<Home />} />
        <Route path="getting-started" element={<GettingStartedPage />} />
        <Route path="components/spotlight-card" element={<SpotlightCardPage />} />
        <Route path="components/moving-border" element={<MovingBorderPage />} />
        <Route path="components/flip-words" element={<FlipWordsPage />} />
        <Route path="components/text-generate-effect" element={<TextGeneratePage />} />
        <Route path="components/3d-card" element={<ThreeDCardPage />} />
        <Route path="components/background-beams" element={<BackgroundBeamsPage />} />
        <Route path="components/meteors" element={<MeteorsPage />} />
        <Route path="components/infinite-moving-cards" element={<InfiniteMovingCardsPage />} />
        <Route path="components/floating-dock" element={<FloatingDockPage />} />
      </Route>
    </Routes>
  );
}

export default App;

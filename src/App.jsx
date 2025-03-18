import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import useTheme from "./context/useTheme"; // Ispravljeno: sada koristimo useTheme.js
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <div className={`app-container ${theme}`}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;

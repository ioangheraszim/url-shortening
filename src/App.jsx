import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <main className="container">
      <Navbar />
      <HeroSection />
    </main>
  );
}

export default App;

import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AddLinks from "./components/AddLinks";

function App() {
  return (
    <main className="container">
      <Navbar />
      <HeroSection />
      <AddLinks/>
    </main>
  );
}

export default App;

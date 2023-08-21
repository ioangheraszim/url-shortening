import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AddLinks from "./components/AddLinks";
import AdvancedStatistics from "./components/AdvancedStatistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="container">
      <Navbar />
      <HeroSection />
      <AddLinks />
      <AdvancedStatistics />
      <Boost />
      <Footer />
    </main>
  );
}

export default App;

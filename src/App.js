import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Ingredients from "./components/Ingredients";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import CardGrid from "./components/CardGrid";


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Ingredients />
      <Blog/>
   <CardGrid/>
      <Footer />
    </div>
  );
}

export default App;

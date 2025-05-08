import React from "react";
import Home from "./components/Home";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Home />
      <Features />
      <Pricing />
      <Contact />
    </div>
  );
}
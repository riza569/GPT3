import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Header from "./container/header";
import Brand from "./components/brand";
import WhatGP
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;

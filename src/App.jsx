import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // Main part of app
  return (
    <div className="app">
      {/* Header  */}
      <Header/>

      <div class="content"> <Content/> </div>

      {/* Footer  */}
      <Footer/> 
      
    </div>
  );
}

export default App;
import React, { useState } from "react";

// import components
import Dashboard from "./components/Dashboard";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <h1>The Game of Life</h1>
      <div>
        <Dashboard />
        <About />
      </div>
    </div>
  );
}

export default App;

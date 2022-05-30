import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/:roomId" element={<Game/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
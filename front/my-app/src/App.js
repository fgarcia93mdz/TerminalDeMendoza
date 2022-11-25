import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import ArrivalsBoard from "./pages/board-tv/ArrivalsBoard";
import DeparturesBoard from "./pages/board-tv/DeparturesBoard";
import AppWebRouter from "./AppWebRouter";


function App() {

  return (
    <div className="App">
        <Routes>
          <Route exact path="/arribos" element={<ArrivalsBoard />} />
          <Route exact path="/partidas" element={<DeparturesBoard />} />
          <Route component={AppWebRouter}/>
        </Routes>
    </div>
  );
}

export default App;

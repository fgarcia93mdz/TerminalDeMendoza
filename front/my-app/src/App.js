import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'

// import NavBar2 from './components/navbar/NavBar2';
import NavBar from './components/navbar/NavBar';
import NavBarAdmin from './components/navbar/NavBarAdmin';


import Home from './pages/home/Home';
import ArrivalsBoard from './pages/board-tv/ArrivalsBoard'
import DeparturesBoard from './pages/board-tv/DeparturesBoard'
import Login from './pages/login/Login'
import Footer from './components/footer/Footer';
// import CustomizedTables from './components/table/Table';
import FormTicket from './pages/ticket/FormTicket';


function App() {
  // aca voy a crear que segun el tipo de usuario que se renderice diferentes navbars
  // navbars adminitrativo/seguridad y navbar de cliente/publico normal
  const [ isAdmin, setIsAdmin ] = useState(true)

  return (
    <div className="App">
      {isAdmin ? <NavBarAdmin /> : <NavBar />}
      

      <>
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route path='/tablero-arribos' element={<ArrivalsBoard />} />
          <Route path='/tablero-partidas' element={<DeparturesBoard />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/ticket/crear' element={<FormTicket />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;

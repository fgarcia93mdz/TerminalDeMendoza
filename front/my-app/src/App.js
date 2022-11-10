import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'

// import NavBar2 from './components/navbar/NavBar2';
import NavBar from './components/navbar/NavBar';
import NavBarAdmin from './components/navbar/NavBarAdmin';
import jwt_decode from "jwt-decode";


import Home from './pages/home/Home';
import ArrivalsBoard from './pages/board-tv/ArrivalsBoard'
import DeparturesBoard from './pages/board-tv/DeparturesBoard'
import Login from './pages/login/Login'
import Footer from './components/footer/Footer';
// import CustomizedTables from './components/table/Table';
import FormTicket from './pages/ticket/FormTicket';
import ArrivalsTable from './pages/table-admin/ArrivalsTable';


function App() {
  // aca voy a crear que segun el tipo de usuario que se renderice diferentes navbars
  // navbars adminitrativo/seguridad y navbar de cliente/publico normal
  const [ isAdmin, setIsAdmin ] = useState(false)
  const [ userRole, setUserRole ] = useState('')



  React.useEffect(() => {
    const token = window.sessionStorage.getItem("jwt")
    if (token === undefined || token === null) {
      setIsAdmin(false)
    } else if(token !== undefined || token !== null) {
      const tokenDecoded = jwt_decode(token);
      console.log('tokenDecoded', tokenDecoded)
      setUserRole(tokenDecoded.rol)
      setIsAdmin(true)
      // setUserInfo(state => ({ ...state, tokenDecoded: tokenDecoded }));
      // console.log('decoded', userInfo);
      console.log('decoded', userRole);
    } },[userRole, isAdmin])



  

  return (
    <div className="App">
      {!isAdmin ? <NavBar /> : <NavBarAdmin />}
      <>
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route path='/tablero-arribos' element={<ArrivalsBoard />} />
          <Route path='/tablero-partidas' element={<DeparturesBoard />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/ticket/crear' element={<FormTicket />} />

          {/* Admin Routes */}
          <Route path='/tabla/arribos' element={<ArrivalsTable />} />

        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;

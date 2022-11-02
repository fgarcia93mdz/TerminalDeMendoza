import './App.css';
import { Route, Routes } from 'react-router-dom'

import NavBar2 from './components/navbar/NavBar2';

import Home from './pages/home/Home';
import ArrivalsBoard from './pages/board-tv/ArrivalsBoard'
import DeparturesBoard from './pages/board-tv/DeparturesBoard'
import Login from './pages/login/Login'
import Footer from './components/footer/Footer';
// import CustomizedTables from './components/table/Table';


function App() {
  return (
    <div>
      <NavBar2 />

      <div className="App">
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route path='/tablero-arribos' element={<ArrivalsBoard />} />
          <Route path='/tablero-partidas' element={<DeparturesBoard />} />
          <Route exact path='/login' element={<Login />} />

        </Routes>
      </div>
      <Login />
      {/* <CustomizedTables /> */}

      <Footer />
    </div>
  );
}

export default App;

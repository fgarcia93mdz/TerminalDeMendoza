import React, { useState } from "react";

import { Routes, Route } from 'react-router-dom'

// import Home from './pages/home/Home';
import ArrivalsBoard from "./pages/board-tv/ArrivalsBoard";
import DeparturesBoard from "./pages/board-tv/DeparturesBoard";
import Login from "./pages/login/Login";
import Ingreso from "./pages/login/Ingreso";
// import CustomizedTables from './components/table/Table';
import FormTicket from "./pages/ticket/FormTicket";
// import ArrivalsTable from './pages/table-admin/ArrivalsTable';
import FormEditUser from "./pages/RRHHUser.jsx/FormEditUser";
import FormCreateUser from "./components/profile/FormCreateUser";
import SecurityHome from "./pages/securityUser/SecurityHome";
import InformsHome from "./pages/informsUser/InformsHome";
import Protected from "./components/protected/Protected";
import ListUsers from "./pages/RRHHUser.jsx/ListUsers";
import jwt_decode from "jwt-decode";
import NavBarContainer from "./components/navbar/NavBarContainer";
import Footer from "./components/footer/Footer";


const AppWebRouter = () => {
     // aca voy a crear que segun el tipo de usuario que se renderice diferentes navbars
  // navbars adminitrativo/seguridad y navbar de cliente/publico normal
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  const token = window.sessionStorage.getItem("jwt");

  React.useEffect(() => {
    if (token === undefined || token === null) {
      setIsLoggedIn(false);
    } else if (token !== undefined || token !== null) {
      const tokenDecoded = jwt_decode(token);
      // console.log('tokenDecoded', tokenDecoded)
      setUserRole(tokenDecoded.rol);
      setIsLoggedIn(true);
      setUserId(tokenDecoded.id);
      // setUserInfo(state => ({ ...state, tokenDecoded: tokenDecoded }));
      // console.log('decoded', userInfo);
      // console.log('decoded', userRole);
    }
  }, [userRole, isLoggedIn, token]);


    return (
        <>
            <NavBarContainer isAdmin={isLoggedIn} />

            <Routes>
                <Route exact path="/" element={<ArrivalsBoard />} />

                {/* == TABLEROS DE LA TERMINAL - para el publico == */}
                <Route path="/tablero-arribos" element={<ArrivalsBoard />} />
                <Route path="/tablero-partidas" element={<DeparturesBoard />} />

                {/* == LOGIN == */}
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/ingreso" element={<Ingreso />} />

                {/* == SEGURIDAD - CRUD TICKET == */}
                {/* crea un ticket sin plataforma ni horarios */}
                <Route
                exact
                path="/seguridad/ticket/crear"
                element={
                    <Protected isLoggedIn={isLoggedIn}>
                    <FormTicket id={userId} />
                    </Protected>
                }
                />
                <Route
                exact
                path="/seguridad"
                element={
                    <Protected isLoggedIn={isLoggedIn}>
                    <SecurityHome />
                    </Protected>
                }
                />
                {/* Arribos desde seguridad */}
                <Route
                exact
                path="/seguridad/arribos"
                element={
                    <Protected isLoggedIn={isLoggedIn}>
                    <ArrivalsBoard />
                    </Protected>
                }
                />
                {/* Partidas desde seguridad */}
                <Route
                exact
                path="/seguridad/partidas"
                element={<DeparturesBoard />}
                />
                {/* == INFORMES - CRUD TICKET == */}
                <Route exact path="/ticket/editar" element={<FormTicket />} />
                {/* edita o termina un ticket, le agrega plataforma y horario */}
                <Route exact path="/informes" element={<InformsHome />} />
                {/* cera un registro de ser necesario */}
                <Route
                exact
                path="/informes/ticket/crear"
                element={
                    <Protected isLoggedIn={isLoggedIn}>
                    <FormTicket id={userId} />
                    </Protected>
                }
                />
                {/* Arribos desde informes */}
                <Route
                exact
                path="/informes/arribos"
                element={
                    <Protected isLoggedIn={isLoggedIn}>
                    <ArrivalsBoard />
                    </Protected>
                }
                />
                {/* Partidas desde informes */}
                <Route
                exact
                path="/informes/partidas"
                element={<DeparturesBoard />}
                />

                {/* == RECURSOS HUMANOS - CRUD USER == */}
                <Route exact path="/usuarios/editar/:id" element={<FormEditUser />} />
                <Route exact path="/usuarios/crear" element={<FormCreateUser />} />
                <Route exact path="/usuarios" element={<ListUsers />} />

            </Routes>
            <Footer />

        </>
    )
}

export default AppWebRouter
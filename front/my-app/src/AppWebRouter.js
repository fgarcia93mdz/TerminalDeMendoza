import React, { useState } from "react";

import { Routes, Route } from 'react-router-dom'

import ArrivalsBoard from "./pages/board-tv/ArrivalsBoard";
import DeparturesBoard from "./pages/board-tv/DeparturesBoard";
import Login from "./pages/login/Login";
import Ingreso from "./pages/login/Ingreso";
import FormTicket from "./pages/securityUser/SecurityCreateTicket";
import FormEditUser from "./pages/RRHHUser.jsx/FormEditUser";
import FormCreateUser from "./components/profile/FormCreateUser";
import SecurityHome from "./pages/securityUser/SecurityHome";
import InformsHome from "./pages/informsUser/InformsHome";
import Protected from "./components/protected/Protected";
import ListUsers from "./pages/RRHHUser.jsx/ListUsers";
import jwt_decode from "jwt-decode";
import NavBarContainer from "./components/navbar/NavBarContainer";
import Footer from "./components/footer/Footer";
import NotFoundPage from './pages/not-found/NotFound';
import PageResetPassword from "./pages/RRHHUser.jsx/PageResetPassword";
import WritePassword from "./components/forms/FormWritePassword";
import InformsEditTicket from "./pages/informsUser/InformsEditTicketEntry";
import InformsEditTicketOnPlatform from "./pages/informsUser/InformsEditTicketOnPlatform";


const AppWebRouter = () => {
     // aca voy a crear que segun el tipo de usuario que se renderice diferentes navbars
  // navbars adminitrativo/seguridad y navbar de cliente/publico normal
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);
//   const [ tokenState, setTokenState ] = useState(null);


    const token = window.sessionStorage.getItem("jwt");

React.useEffect(() => {
    // if (token.length > 0) { setTokenState(token) }
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
        <NavBarContainer />

        <Routes>
          <Route exact path="/" element={<ArrivalsBoard />} />
          <Route path="/tablero-arribos" element={<ArrivalsBoard />} />
          <Route path="/tablero-partidas" element={<DeparturesBoard />} />
          <Route exact path="/login" element={<Login />} />
          <Route 
            exact 
            path="/ingreso" 
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Ingreso />
              </Protected>
          } />
          <Route 
            path="/perfil/editar" 
            element={
              <Protected isLoggedIn={isLoggedIn}>
                  <FormEditUser />
              </Protected>
            } />
          <Route 
            path="/perfil/password" 
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <WritePassword />
              </Protected>
          } />

          <Route
            exact
            path="/seguridad"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <SecurityHome />
              </Protected>
            }
          />

          <Route
            exact
            path="/seguridad/ticket/crear"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <FormTicket />
              </Protected>
            }
          />

          <Route
            exact
            path="/seguridad/arribos"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <ArrivalsBoard />
              </Protected>
            }
          />
          <Route
            exact
            path="/seguridad/partidas"
            element={<DeparturesBoard />}
          />

          <Route 
            exact 
            path="/informes" 
            element={<InformsHome />} 
          />

          <Route
            exact
            path="/informes/ticket/crear"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <FormTicket id={userId} />
              </Protected>
            }
          />

          <Route
            exact
            path="/informes/arribos"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <ArrivalsBoard />
              </Protected>
            }
          />

          <Route
            exact
            path="/informes/partidas"
            element={<DeparturesBoard />}
          />

          <Route
            exact
            path="/informes/editar/ingreso/:id"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <InformsEditTicket />
              </Protected>
            }
          />

          <Route
            exact
            path="/informes/editar/en-plataforma/:id"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <InformsEditTicketOnPlatform />
              </Protected>
            }
          />

          <Route 
            exact 
            path="/usuarios" 
            element={<ListUsers />} 
          />

          <Route 
            exact 
            path="/usuarios/crear" 
            element={<FormCreateUser />} 
          />

          <Route
            exact
            path="/usuarios/resetPass"
            element={<PageResetPassword token={token} />}
          />

          <Route 
            exact 
            path="/usuarios/editar/:id" 
            element={<FormEditUser />} 
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </>
    );
}

export default AppWebRouter
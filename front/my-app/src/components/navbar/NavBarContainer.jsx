import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";

// import NavBarPublic from './NavBarPublic'
// import NavBarSecurity from './NavBarSecurity'
// import NavBarRRHH from './NavBarRRHH'
// import NavBarInforms from './NavBarInforms';
// import NavBarAccountant from './NavBarAccountant';

const NavBarPublic = React.lazy(() => import('./NavBarPublic'))
const NavBarSecurity = React.lazy(() => import('./NavBarSecurity'))
const NavBarRRHH = React.lazy(() => import('./NavBarRRHH'))
const NavBarInforms = React.lazy(() => import('./NavBarInforms'))
const NavBarAccountant = React.lazy(() => import('./NavBarAccountant'))



const NavBarContainer = () => {
    const [ rol, setRol ] = useState(null)
    const [ name, setName ] = useState(null)

    const token = window.sessionStorage.getItem("jwt")
    
    useEffect(() => {
        
        if(token){
            const tokenDecoded = jwt_decode(token);
            setRol(tokenDecoded.rol)
            setName(tokenDecoded.nombre)
        } else if (token === null){
            return null
        }

        return () => {
            setRol(null)
        }
    }, [token])

    // return isAdminState ? <NavBarAdmin /> : <NavBar />
    return (
        <>
        {(() => {
            switch (rol) {

              // RRHH
              case 2 : 
                return <NavBarRRHH name={name} />
              // Contabilidad
              case 3 :
                return <NavBarAccountant name={name}/>
              // Seguridad  
              case 4 :
                return <NavBarSecurity name={name} />
              // Informes
              case 5 :
                return <NavBarInforms name={name} />
              default:
                return <NavBarPublic />
            }
          })()}
        </>
    )
    
}

export default NavBarContainer
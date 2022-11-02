import React from 'react';
import './NavBar.styles.css'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

import { Box, Stack } from '@mui/system';

const NavBar = () => {
    return (<nav>
        <>
        
  
            <Marquee gradient={false} style={{padding: '0', maxHeight:'100px', color: '#0E315A', margin:'0'}}>
                <span className="texto" >
                NUESTRO NUMERO DE ATENCION AL CLIENTE ES: 0800 - 555 - 555 /
                EMPRESA FLECHA BUS FUERA DE SERVICIO EN LAS FECHAS 31 DE DICIEMBRE DESDE LAS 00:00HS HASTA LAS 6:00HS DEL MISMO 
                </span>
            </Marquee>
            <Stack position={'sticky'} direction={'row'} py={2} px={12} justifyContent={'space-between'} alignItems={'end'} sx={{ maxHeight: '100px'}}>

            
            
                <Link to='/' exact='true'> 
                    <img className="icon" src={require("../../assets/img/icono-colectivo.png")} alt="icono colectivo" />
                </Link> 

                {/* <ul>
                    <li> <Link to='/tablero-arribos' > TABLERO ARRIBOS </Link> </li>
                    <li> <Link to='/tablero-partidas' > TABLERO PARTIDAS </Link> </li>
                    <li> <Link to='/login' > LOGIN </Link> </li>
                </ul> */}
                <p className="hour" >18:00</p>
            </Stack>
        </>
       </nav>
    );
}

export default NavBar;


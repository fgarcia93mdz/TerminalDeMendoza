import React from 'react';
import './Footer.styles.css'

import { Stack } from '@mui/material';

const Footer = () => {
    return (
        <Stack role='footer' px={12} py={0}  direction={"row"} justifyContent={'space-between'} alignItems={'center'} sx={{color:'#0b2748', backgroundColor: 'white', maxWidth: '100%',  bottom: '0'}}> 
            
            <div> <img style={{maxWidth: '85%', height:'auto'}} className="icon" src={require("../../assets/img/icono-colectivo.png")} alt="icono colectivo" /></div>
            <div>
               <p> Terminal de Mendoza</p> 
               <p> Copyrights 2022 </p>

            </div>
        </Stack>
    );
}

export default Footer;

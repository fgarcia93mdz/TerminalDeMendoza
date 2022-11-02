import React from 'react';
import './Footer.styles.css'

import { Stack } from '@mui/material';

const Footer = () => {
    return (
        <footer>
        <Stack px={12} py={2} direction={"row"} justifyContent={'center'} alignItems={'end'} sx={{fontColor:'#1c68c0'}}> 
            
            <div> <img style={{width: '85%'}} className="icon" src={require("../../assets/img/icono-colectivo.png")} alt="icono colectivo" /></div>
            <div>
               <p> Terminal de Mendoza</p> 
               <p> Copyrights 2022 </p>

            </div>
        </Stack>
        </footer>
    );
}

export default Footer;

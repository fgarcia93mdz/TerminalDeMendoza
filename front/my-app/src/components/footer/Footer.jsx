import React from 'react';
import './Footer.styles.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import { ThemeProvider } from '@mui/material/styles';
import colors from '../../colors'

import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';



const Footer = () => {


    return (
        
        <Stack role='footer' gap={4} px={12} py={2}   direction={{xs:'column', sm:'row'}} justifyContent={'space-between'} alignItems={{xs:'center',sm:'end'}} sx={{color:'#0b2748', backgroundColor: 'white', maxWidth: '100%',  bottom: '0'}}> 
            <ThemeProvider theme={colors}>
                <Box
                    component='img'
                    className="" 
                    src={require("../../assets/img/logoTerminalMdz.png")} 
                    alt="icono colectivo" 
                    
                    sx={{ maxWidth: '90px'}}
                />
                <Box textAlign={{ xs: 'center', sm: 'center', fontSize: 15, }}>
                    
                    <a href="https://www.google.com.ar/maps/place/Terminal+De+%C3%93mnibus+de+Mendoza/@-32.8956179,-68.8314464,17z/data=!4m12!1m6!3m5!1s0x967e093c495d1ce3:0x7798543506fb42c6!2sTerminal+De+%C3%93mnibus+de+Mendoza!8m2!3d-32.8955869!4d-68.8302405!3m4!1s0x967e093c495d1ce3:0x7798543506fb42c6!8m2!3d-32.8955869!4d-68.8302405" ><Typography>¿Cómo llegar?</Typography></a>
                    <a href="https://www.terminalmendoza.com.ar/institucional.html"><Typography textAlign="center">Institutcional</Typography></a>
                    <a href="https://www.terminalmendoza.com.ar/contacto.html"><Typography textAlign="center">Contacto</Typography></a>
                    
                </Box>
                <Box textAlign={{ xs: 'center', sm: 'center', fontSize: 15, }}>
                 
                    <a href="https://www.terminalmendoza.com.ar/agencias.html" ><Typography>Agencias</Typography></a>
                    <a href="https://www.terminalmendoza.com.ar/locales.html"><Typography textAlign="center">Locales comerciales</Typography></a>
                    <a href="https://www.terminalmendoza.com.ar/#servicios"><Typography textAlign="center">Servicios</Typography></a>
                    {/* <a href="https://shop.terminalmendoza.com.ar/search"><Typography textAlign="center">Venta de pasajes online</Typography></a> */}

                </Box>
                <Box textAlign={{ xs: 'center', sm: 'center' }}>
                    <a href="https://www.facebook.com/terminalmendoza"><FacebookIcon color='facebook' sx={{ fontSize: 40, marginLeft: 2, }} /> </a>
                    <a href="https://www.instagram.com/terminalmendoza/"><InstagramIcon color='instagram' sx={{ fontSize: 40, marginLeft: 2, }} /></a>
                    <a href="https://twitter.com/terminaltm"><TwitterIcon color='twitter' sx={{ fontSize: 40, marginLeft: 2, }} /></a>
                   
            </Box>
            <Box textAlign={{xs: 'center', sm: 'rigth'}}>
                    <Typography variant='body2'>Terminal de Mendoza</Typography>
                <Typography variant='body2'>Copyrights 2022</Typography>
            </Box>
            </ThemeProvider>
            
        </Stack>
    );
}

export default Footer;

                {/* <img style={{maxWidth: '85%', height:'auto'}} className="icon" src={require("../../assets/img/icono-colectivo.png")} alt="icono colectivo" /></div> */}
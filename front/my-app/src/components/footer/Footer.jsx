import React from 'react';
import './Footer.styles.css'

import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Footer = () => {
    return (
        <Stack role='footer' gap={4} px={12} py={4}   direction={{xs:'column', sm:'row'}} justifyContent={'space-between'} alignItems={{xs:'center',sm:'end'}} sx={{color:'#0b2748', backgroundColor: 'white', maxWidth: '100%',  bottom: '0'}}> 
            
                <Box
                    component='img'
                    className="" 
                    src={require("../../assets/img/icono-colectivo.png")} 
                    alt="icono colectivo" 
                    
                    sx={{ maxWidth: '90px'}}
                />
            <Box textAlign={{xs: 'center', sm: 'left'}}>
                <Typography variant='body2'>Terminal de Mendoza</Typography>
                <Typography variant='body2'>Copyrights 2022</Typography>
            </Box>
        </Stack>
    );
}

export default Footer;

                {/* <img style={{maxWidth: '85%', height:'auto'}} className="icon" src={require("../../assets/img/icono-colectivo.png")} alt="icono colectivo" /></div> */}
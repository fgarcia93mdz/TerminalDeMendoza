import React from 'react';
import './NavBar.styles.css'
// import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

// inicio
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
// import AdbIcon from '@mui/icons-material/Adb';


// final

// import { Box, Stack } from '@mui/system';

const NavBarPublic = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };
    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <>
            <Marquee gradient={false} style={{padding: '0', maxHeight:'100px', color: '#0E315A', margin:'0', background: 'white'}}>
                <span className="texto" >
                NUESTRO NUMERO DE ATENCION AL CLIENTE ES: 0800 - 555 - 555 /
                EMPRESA FLECHA BUS FUERA DE SERVICIO EN LAS FECHAS 31 DE DICIEMBRE DESDE LAS 00:00HS HASTA LAS 6:00HS DEL MISMO 
                </span>
            </Marquee>
            <AppBar position="sticky" style={{background: 'white', color: '#0E315A'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="" >
                        <Box
                            component='img'
                            className="" 
                            src={require("../../assets/img/icono-colectivo.png")} 
                            alt="icono colectivo" 
                            p={2}
                            sx={{ width: '40%'}}
                        />
                    </Link>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
                    <Box className="" sx={{width: '70px'}} display={{xs:'block', md:'hidden'}} src={require("../../assets/img/icono-colectivo.png")} alt="icono colectivo" />
                   
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        
                                <Link to='/arribos'> 
                            <MenuItem key={'/arribos'} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">ARRIBOS</Typography>
                            </MenuItem>
                        </Link>
                                <Link to='/partidas'> 
                            <MenuItem key={'/partidas'} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">PARTIDAS</Typography>
                            </MenuItem>
                                </Link>
                               
                                <a href="https://shop.terminalmendoza.com.ar/search">
                                            <Button sx={{ color: '#0E315A'}}>
                                                Venta de pasajes
                                            </Button>
                                        </a>
                          
                        
                                
                    </Menu>

                </Box>
                {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                    
                        <Link to='/arribos'>
                            <Button
                                key={'arribos'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#0E315A', display: 'block' }}
                            >
                                Arribos
                            </Button>
                        </Link>
                        <Link to='/partidas'>
                            <Button
                                key={'partidas'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#0E315A', display: 'block' }}
                            >
                                Partidas
                            </Button>
                        </Link>
                    
                    <a href="https://shop.terminalmendoza.com.ar/search">
                        <Button sx={{ my: 2, color: '#0E315A', display: 'block' }}>
                                Venta de pasajes
                        </Button>
                    </a>
                    
                </Box>
                <Button> <Link to='/login'> Iniciar sesion </Link> </Button> 

                {/* <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box> */}
                </Toolbar>
            </Container>
            </AppBar>
        </>
      
    );
}

export default NavBarPublic;


            // <Stack position={'sticky'} direction={'row'} py={2} px={12} justifyContent={'space-between'} alignItems={'end'} sx={{ maxHeight: '100px'}}>

            
            
            //     <Link to='/' exact='true'> 
            //         <img className="icon" src={require("../../assets/img/icono-colectivo.png")} alt="icono colectivo" />
            //     </Link> 

            //     {/* <ul>
            //         <li> <Link to='/tablero-arribos' > TABLERO ARRIBOS </Link> </li>
            //         <li> <Link to='/tablero-partidas' > TABLERO PARTIDAS </Link> </li>
            //         <li> <Link to='/login' > LOGIN </Link> </li>
            //     </ul> */}
            //     <p className="hour" >18:00</p>
            // </Stack>
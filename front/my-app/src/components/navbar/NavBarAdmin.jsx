import React from 'react';
import './NavBar.styles.css'
// import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import jwt_decode from "jwt-decode";

import MyClock from '../clock/Clock'



// import jwt from 'jsonwebtoken'

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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = ['Inicio', 'Pantallas', 'Carga de ingreso', 'Cambiar contraseña', 'Cerrar sesión'];
const settings = ['Inicio', 'Pantallas', 'Carga de ingreso', 'Cambiar contraseña', 'Cerrar sesión'];

// final



// import { Box, Stack } from '@mui/system';

const NavBarAdmin = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [ userInfo, setUserInfo ] = React.useState({})
    const [ userNombre, setUserNombre ] = React.useState('')

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const closeSession = () => {
        handleCloseUserMenu()
        setUserInfo({})
        return window.sessionStorage.removeItem("jwt");
    }

    
    React.useEffect(() => {
        const token = window.sessionStorage.getItem("jwt")
        
        if(token){
            const tokenDecoded = jwt_decode(token);
            console.log('tokenDecoded', tokenDecoded)
            // return setUserInfo(tokenDecoded)
            // setUserInfo(state => ({ ...state, tokenDecoded: tokenDecoded }));
            // console.log('decoded', decoded);
            // setUserNombre(userInfo.nombre)
        } else if (token === null){
            return null
        }
    }, [userInfo])

    


        return (
            <>
                <AppBar position="sticky" style={{background: 'white', color: '#0E315A'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
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
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'start' }}>
                       
                            <Button
                                key={'inicio'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#0E315A', display: 'block' }}
                            >
                                <Link to='/ticket/crear'>
                                    INICIO
                                </Link>
                            </Button>
                            <Button
                                key={'inicio2'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#0E315A', display: 'block' }}
                            >
                                <Link to='/'>
                                    PANTALLAS
                                </Link>
                            </Button>
                            <Button
                                key={'inicio3'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#0E315A', display: 'block' }}
                            >
                                <Link to='/'>
                                    INFORME
                                </Link>
                            </Button>
                            <Button
                                key={'inicio4'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#0E315A', display: 'block' }}
                            >
                                <Link to='/'>
                                    CAMBIAR CONTRASEÑA
                                </Link>
                            
                            </Button>
                            <Button
                                key={'inicio5'}
                                onClick={() => closeSession()}
                                sx={{ my: 2, color: '#0E315A', display: 'block' }}
                            >
                                
                                    CERRAR SESION
                                
                            </Button>

                            {userInfo && !userInfo.nombre && 
                            <Button
                                key={'inicio6'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#0E315A', display: 'block' }}
                            >
                                <Link to='/login'>
                                    LOGIN
                                </Link>
                            </Button>
                           } 

                            

                            {/* {userInfo && userInfo.nombre &&  */}
                                <Typography variant='body'>
                                    Bienvenido {userInfo.length === 0 ? 'Invitado' : userInfo.nombre  }
                                </Typography>
                            {/* } */}
                      
                    </Box>

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

                    <MyClock />
                    </Toolbar>

                </Container>
                </AppBar>
            </>
        
        );
}

export default NavBarAdmin;

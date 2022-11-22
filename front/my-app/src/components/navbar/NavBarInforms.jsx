import React from 'react';
import './NavBar.styles.css'
// import { Link } from 'react-router-dom'
import jwt_decode from "jwt-decode";


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
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { Avatar, Tooltip } from '@mui/material';

// const pages = ['Inicio', 'Pantallas', 'Carga de ingreso', 'Cambiar contraseña', 'Cerrar sesión'];
// const settings = ['Inicio', 'Pantallas', 'Carga de ingreso', 'Cambiar contraseña', 'Cerrar sesión'];

// final



// import { Box, Stack } from '@mui/system';

const NavBarInforms = ({ name }) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [ userInfo, setUserInfo ] = React.useState({})
    // const [ userName, setUserName ] = React.useState('')

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

    const token = window.sessionStorage.getItem("jwt")
    
    React.useEffect(() => {
        
        if(token){
            const tokenDecoded = jwt_decode(token);
            console.log('tokenDecoded', tokenDecoded)
            setUserInfo(tokenDecoded)
            setUserInfo(state => ({ ...state, tokenDecoded }));
            // console.log('decoded', userInfo);
            // console.log('decoded', userNombre);
        } else if (token === null){
            return null
        }

        return () => {
            setUserInfo({})
        }
    }, [token])

    


        return (
            <>
                <AppBar position="sticky" style={{background: 'white', color: '#0E315A'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display:{ xs: 'flex', md: 'none' }}}>
                        <Box className="" sx={{width: '70px'}} display={{xs:'block', md:'hidden'}} src={require("../../assets/img/icono-colectivo.png")} alt="icono colectivo" />
                    
                       
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
                                display: { xs: 'flex', md: 'none' },
                                flexDirection: 'column'
                            }}
                        >
                                    <Link to='/informes'>
                                        <MenuItem key={'/informes'} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">Plataformas e Ingresos</Typography>
                                        </MenuItem>
                                    </Link>
                                    <Link to='/informes/ticket/crear'>
                                        <MenuItem key={'/informes/ticket/crear'} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">Crear Ingreso</Typography>
                                        </MenuItem>
                                    </Link>
                                    <Link to="/arribos">
                                        <MenuItem key={"/seguridad/arribos"} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">Arribos</Typography>
                                        </MenuItem>
                                    </Link>
                                    <Link to="/partidas">
                                        <MenuItem key={"/seguridad/partidas"} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">Partidas</Typography>
                                        </MenuItem>
                                    </Link>
                        </Menu>
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
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'start' }}>
                    
                        <Button
                            key={'inicio'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#0E315A', display: 'block' }}
                        >
                            
                            <Link to='/tablas'>
                                'informes' INICIO
                            </Link>
                        </Button>
                        {/* <Button
                            key={'inicio2'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#0E315A', display: 'block' }}
                        >
                            <Link to='/tabla/arribos'>
                                VER PANTALLA ARRIBOS
                            </Link>
                        </Button> */}
                        <Link to='/seguridad/ticket/crear'>
                            <Button
                                key={'crearTicket'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#0E315A', display: 'block' }}
                            >
                            
                                CREAR TICKET
                            </Button>
                        </Link>
                        <Button
                            key={'cambiarContraseña'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#0E315A', display: 'block' }}
                        >
                            <Link to='/'>
                                CAMBIAR CONTRASEÑA
                            </Link>
                        
                        </Button>
                        <Button
                            key={'cerrarSesion'}
                            onClick={() => closeSession()}
                            sx={{ my: 2, color: '#0E315A', display: 'block' }}
                        >
                            
                                CERRAR SESION
                            
                        </Button>

                        {userInfo && !userInfo.nombre && 
                            <Button
                                key={'login'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#0E315A', display: 'block' }}
                            >
                                <Link to='/login'>
                                    LOGIN
                                </Link>
                            </Button>
                        } 

                        

                        {userInfo && userInfo.nombre && 
                            <Typography variant='body' my='auto' marginLeft={4}>
                                Bienvenido {userInfo.nombre}  
                            </Typography>
                        }
                      
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
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
                  
                            <MenuItem key={'setting'} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">settings</Typography>
                            </MenuItem>
                       
                        </Menu>
                    </Box>

                    
                    </Toolbar>

                </Container>
                </AppBar>
            </>
        
        );
}

export default NavBarInforms;

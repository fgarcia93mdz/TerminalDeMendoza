import React from "react";
import "./NavBar.styles.css";
// import { Link } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

// import jwt from 'jsonwebtoken'

// inicio
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import { Avatar, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

// const pages = ['Inicio', 'Pantallas', 'Carga de ingreso', 'Cambiar contraseña', 'Cerrar sesión'];
// const settings = ['Inicio', 'Pantallas', 'Carga de ingreso', 'Cambiar contraseña', 'Cerrar sesión'];

// final

// import { Box, Stack } from '@mui/system';

const NavBarInforms = ({ name }) => {
    const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userInfo, setUserInfo] = React.useState({});
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
    handleCloseUserMenu();
    setUserInfo({});
    window.sessionStorage.removeItem("jwt");
    navigate("/arribos");
    window.location.reload();
  };

  const token = window.sessionStorage.getItem("jwt");

  React.useEffect(() => {
    if (token) {
      const tokenDecoded = jwt_decode(token);
      console.log("tokenDecoded", tokenDecoded);
      setUserInfo(tokenDecoded);
      setUserInfo((state) => ({ ...state, tokenDecoded }));
      // console.log('decoded', userInfo);
      // console.log('decoded', userNombre);
    } else if (token === null) {
      return null;
    }

    return () => {
      setUserInfo({});
    };
  }, [token]);

  return (
    <>
      <AppBar
        position="sticky"
        style={{ background: "white", color: "#0E315A" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Box
                className=""
                sx={{ width: "70px" }}
                display={{ xs: "block", md: "hidden" }}
                src={require("../../assets/img/icono-colectivo.png")}
                alt="icono colectivo"
              />

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexDirection: "column",
                }}
              >
                <Link to="/informes">
                  <MenuItem key={"/informes"} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      Plataformas e Ingresos
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/informes/ticket/crear">
                  <MenuItem
                    key={"/informes/ticket/crear"}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Crear Ingreso</Typography>
                  </MenuItem>
                </Link>
                <Link to="/arribos">
                  <MenuItem
                    key={"/seguridad/arribos"}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Arribos</Typography>
                  </MenuItem>
                </Link>
                <Link to="/partidas">
                  <MenuItem
                    key={"/seguridad/partidas"}
                    onClick={handleCloseNavMenu}
                  >
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

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "start",
              }}
            >
              <Button
                key={"inicio"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#0E315A", display: "block" }}
              >
                <Link to="/informes">Plataformas e Ingresos</Link>
              </Button>
              <Button
                key={"crearRegistro"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#0E315A", display: "block" }}
              >
                <Link to="/informes/ticket/crear">Crear Ingreso</Link>
              </Button>
              <Button
                key={"arribos"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#0E315A", display: "block" }}
              >
                <Link to="/informes/arribos">Arribos</Link>
              </Button>
              <Button
                key={"partidas"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#0E315A", display: "block" }}
              >
                <Link to="/informes/partidas">Partidas</Link>
              </Button>

              {/* {userInfo && !userInfo.nombre && (
                <Button
                  key={"login"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#0E315A", display: "block" }}
                >
                  <Link to="/login">LOGIN</Link>
                </Button>
              )} */}
            </Box>
            {userInfo && userInfo.nombre && (
              <Typography
                variant="body"
                my="auto"
                marginRight="50px"
                xs={{ fontSize: "15px" }}
              >
                Hola {userInfo.nombre}!
              </Typography>
            )}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Configuración Usuario">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>
                    <SettingsIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key={"inicio4"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#0E315A", display: "block" }}
                >
                  CAMBIAR CONTRASEÑA
                </MenuItem>
                <MenuItem
                  key={"inicio5"}
                  onClick={() => closeSession()}
                  sx={{ my: 2, color: "#0E315A", display: "block" }}
                >
                  CERRAR SESION
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBarInforms;

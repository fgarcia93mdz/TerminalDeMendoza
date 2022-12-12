import React from "react";
import "./NavBar.styles.css";
// import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

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
import { Link } from "react-router-dom";
//import LoginIcon from '@mui/icons-material/Login';
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import NorthIcon from "@mui/icons-material/North";
// import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
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

  const mobileNavbarStyle = {
    background: 'white',
    height: '60px',
    width: '100%',
    position: 'fixed',
    bottom: '0',
    zIndex: '99',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    boxShadow: '0px -3px 9px 0px #0000004d',

  }

  const mobileNavbarIconStyle = {
    width: "45px",
    padding: '13px',

    
  }

  const mobileNavbarIconContainer = {
    background: 'white',
    borderRadius: '42%',
    boxShadow: '0px -3px 9px 0px #0000004d',

  }

  // const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  // };
  // const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  // };

  return (
    <>
      <Box display={{ xs: "none", sm: "block" }}>
        {/* <Marquee
          gradient={false}
          style={{
            padding: "0",
            maxHeight: "100px",
            color: "#0E315A",
            margin: "0",
            background: "white",
          }}
        >
          <span className="texto">
            NUESTRO NUMERO DE ATENCION AL CLIENTE ES: 0800 - 555 - 555 / EMPRESA
            FLECHA BUS FUERA DE SERVICIO EN LAS FECHAS 31 DE DICIEMBRE DESDE LAS
            00:00HS HASTA LAS 6:00HS DEL MISMO
          </span>
        </Marquee> */}
        <AppBar
          position="sticky"
          style={{ background: "white", color: "#0E315A" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to="/login">
                <Box
                  component="img"
                  className=""
                  src={require("../../assets/img/icono-colectivo.png")}
                  alt="icono colectivo"
                  p={2}
                  sx={{ width: "40%" }}
                />
              </Link>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "end",
                }}
              >
                <Box
                  className=""
                  sx={{ width: "70px" }}
                  display={{ xs: "block", sm: "hidden" }}
                  src={require("../../assets/img/icono-colectivo.png")}
                  alt="icono colectivo"
                />

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
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Link to="/tablero-arribos">
                    <MenuItem
                      key={"/tablero-arribos"}
                      onClick={handleCloseNavMenu}
                    >
                      {/* <ArrowDownwardIcon /> */}
                      <Typography textAlign="center">ARRIBOS</Typography>
                    </MenuItem>
                  </Link>
                  <Link to="/tablero-partidas">
                    <MenuItem
                      key={"/tablero-partidas"}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">PARTIDAS</Typography>
                    </MenuItem>
                  </Link>

                  <a href="https://shop.terminalmendoza.com.ar/search">
                    <MenuItem
                      key={"/tablero-arribos"}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">
                        VENTA DE PASAJES
                      </Typography>
                    </MenuItem>
                  </a>
                </Menu>
              </Box>
              {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                }}
              >
                <Link to="/tablero-arribos">
                  <Button
                    key={"arribos"}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#0E315A",
                      display: "block",
                      fontSize: "20px",
                      marginRight: "50px",
                    }}
                  >
                    Arribos
                    {/* <ArrowDownwardIcon  sx={{ marginLeft: '10px'}}/> */}
                  </Button>
                </Link>
                <Link to="/tablero-partidas">
                  <Button
                    key={"partidas"}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "#0E315A",
                      display: "block",
                      fontSize: "20px",
                      marginRight: "50px",
                    }}
                  >
                    Partidas
                    {/* <NorthIcon sx={{ marginLeft: '10px'}}/>  */}
                  </Button>
                </Link>

                <a href="https://shop.terminalmendoza.com.ar/search">
                  <Button
                    sx={{
                      my: 2,
                      color: "#0E315A",
                      display: { sm: "none", md: "hidden" },
                      fontSize: "20px",
                      marginRight: "50px",
                    }}
                  >
                    Venta de pasajes
                    {/* <ConfirmationNumberIcon sx={{ marginLeft: '10px'}} /> */}
                  </Button>
                </a>
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
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      <Box display={{ xs: "flex", sm: "none" }} style={mobileNavbarStyle}>
        <span>
          <Link to="/tablero-partidas">
            <MenuItem key={"/tablero-partidas"} onClick={handleCloseNavMenu}>
              <Typography textAlign="center" fontWeight='bold' color='#0e315a'>PARTIDAS</Typography>
            </MenuItem>
          </Link>
        </span>
        <Box style={mobileNavbarIconContainer} mt={-3}>
          <Link to="/login">
          <Box
            component="img"

            src={require("../../assets/img/icono-colectivo.png")}
            alt="colectivo azul icono terminal de mendoza"
            style={mobileNavbarIconStyle}
          />
          </Link>
        </Box>
        <span>
          <Link to="/tablero-arribos">
            <MenuItem key={"/tablero-arribos"} onClick={handleCloseNavMenu}>
              {/* <ArrowDownwardIcon /> */}
              <Typography textAlign="center" fontWeight='bold' color='#0e315a' >ARRIBOS</Typography>
            </MenuItem>
          </Link>
        </span>
      </Box>
    </>
  );
};

export default NavBarPublic;



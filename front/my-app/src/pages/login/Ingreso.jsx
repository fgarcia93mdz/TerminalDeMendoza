import * as React from 'react';
import './login.css';
import Box from '@mui/material/Box';

const styles = {
    cajaFoto: {
        width: '100%',
        height: '100%',
        margin: 'auto',
    },
    foto: { 
        width: '90%',
        padding: '5%'
    }
}


const Ingreso = () => {
    
    return (

<Box>
        <div className="box" style={styles.cajaFoto}>
                <img className="" style={styles.foto} src={require("../../assets/img/terminal-front.jpg")} alt="icono colectivo" />
  </div>
                </Box>
        
          
            

    );
}

export default Ingreso;

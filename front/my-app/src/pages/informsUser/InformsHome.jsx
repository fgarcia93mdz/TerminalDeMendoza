import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios'

import TableAdmin from '../../components/table/TableAdmin';
import TableAdmin2 from "../../components/table/TableAdmin2";



const InformsHome = () => {
  const [ingresando, setIngresando] = useState([])
    const [ enPlataforma, setEnPlataforma ] = useState([])
    const [ fueraDePlataforma, setFueraDePlataforma ] = useState([])


    const token = window.sessionStorage.getItem("jwt")

    useEffect(()=> {
        // FETCH INGRESANTES
        const url = 'http://localhost:8080/informes/listadoSeparado'
        const config = { headers: { authorization: `Bearer ${token}` } }
      
        // FETCH ARRIBOS
        axios.get(url, config)
        .then(data => {
          setIngresando(data.data.respuesta.ingresando)
            setEnPlataforma(data.data.respuesta.enPlataforma)
            setFueraDePlataforma(data.data.respuesta.fueraDePlataforma)
        })
        .catch(error => { throw new Error('Error fetch arribos', error) })

    }, [token])

    const style = {
        background: '#0b2748',
        color: 'white',
    }

    const boxStyle = {
        margin:'auto', 
        width: '100%',
        background: '#0b2748'
    }

    return (
      <Stack>
        <Box style={boxStyle}>
          <Typography align="center" variant="h4" style={style}>
            {" "}
            Ingresantes{" "}
          </Typography>
          <TableAdmin edit={true} data={ingresando} />
        </Box>
        <Box style={boxStyle}>
          <Typography align="center" variant="h4" style={style}>En plataforma</Typography>
          <TableAdmin2 edit={true} data={enPlataforma} />
        </Box>
        <Box style={boxStyle}>
          <Typography align="center" variant="h4" style={style}>
            Fuera de plataforma{" "}
          </Typography>
          <TableAdmin edit={true} data={fueraDePlataforma} />
        </Box>
      </Stack>
    );
}

export default InformsHome
import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios'

import TableAdmin from '../../components/table/TableAdmin';


const SecurityHome = () => {
    const [ arrivals, setArrivals ] = useState([])

    const token = window.sessionStorage.getItem("jwt")

    // FETCH DATA
    const url = 'http://localhost:8080/informes/listadoSeparado'
    const headers = { headers: { "authorization": `Bearer ${token}` } }
    useEffect(()=> {
        axios.get(url, headers)
        .then(data => {
            setArrivals(data.data.respuesta)
        })
        .catch(error => { throw new Error('Error fetch arribos', error) })

    }, [])

    const styles = {
        margin:'auto', 
        width: '100%',
        background: '#0e315a',
        color: 'white',
    }

    const typographyStyles = {
        paddingBlock: '2vh'
    }

    return (
        <Stack >
            <Box style={styles}>
                <Typography align='center' variant='h4' style={typographyStyles}>INGRESANDO</Typography>
                <TableAdmin data={arrivals?.ingresando} />
            </Box>
            <Box style={styles}>
                <Typography align='center' variant='h4' style={typographyStyles}>EN PLATAFORMA</Typography>
                <TableAdmin data={arrivals?.enPlataforma} />
            </Box>
            <Box style={styles}>
                <Typography align='center' variant='h4' style={typographyStyles}>FUERA DE PLATAFORMA</Typography>
                <TableAdmin data={arrivals?.fueraDePlataforma} />
            </Box>
           
        </Stack>
    )
}

export default SecurityHome
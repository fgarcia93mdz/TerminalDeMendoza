import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios'

import TableAdmin from '../../components/table/TableAdmin';


const InformsHome = () => {
    const [ arrivals, setArrivals ] = useState([])


    const token = window.sessionStorage.getItem("jwt")

    useEffect(()=> {
        // FETCH INGRESANTES
        const url = 'http://localhost:8080/informes/listadoSeparado'
        const headers = { headers: { "authorization": `Bearer ${token}` } }
      
        // FETCH ARRIBOS
        axios.get(url, headers)
        .then(data => {
            console.log('data::', data.data.respuesta)
            setArrivals(data)
        })
        .catch(error => { throw new Error('Error fetch arribos', error) })

        // // FETCH SALIDAS
        // axios.get('http://localhost:8080/api/plataforma/arribos')
        // .then(response =>  response.json())
        // .then(data => {
        //     console.log('data::', data)
        //     return setArrivals(data)
        // })
        // .catch(error => { throw new Error('Error fetch arribos', error) })
        
    })

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
                <Typography align='center' variant='h4' style={style} > Ingresantes </Typography>
                <TableAdmin data={arrivals} />
            </Box>
            <Box style={boxStyle}>
                <Typography align='center' variant='h4' style={style} >Fuera de plataforma </Typography>
                <TableAdmin data={arrivals} />
            </Box>
            <Box style={boxStyle}>
                <Typography align='center' variant='h4' style={style} >En Plataforma</Typography>
                <TableAdmin data={arrivals} />
            </Box>
        </Stack>
    )
}

export default InformsHome
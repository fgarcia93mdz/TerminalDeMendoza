/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios'

import TableAdmin from '../../components/table/TableAdmin';


const SecurityHome = () => {
    const [ arrivals, setArrivals ] = useState([])

    const token = window.sessionStorage.getItem('jwt')
    console.log('token', token)

    // FETCH DATA
    useEffect(()=> {
        
        axios.get('http://localhost:8080/informes/listadoSeparado', { headers: {authorization: `Bearer ${token}` }} )
        .then(data => {
            console.log('listado:',data)})
            // setUsers(data.data.usuarios)})
        .catch(error => console.log('error security home', error))
    

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
                <TableAdmin data={arrivals} />
            </Box>
        </Stack>
    )
}

export default SecurityHome
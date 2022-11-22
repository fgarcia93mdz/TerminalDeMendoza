import React, { useEffect, useState } from 'react'
import TableUsers from '../../components/table/TableUsers';

import axios from 'axios'
import { Typography } from '@mui/material';

const ListUsers = () => {
    const token = sessionStorage.getItem('jwt')
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/users', { headers: {"authorization": `Bearer ${token}` }} )
        .then(data => setUsers(data.data.usuarios))
        .catch(error => console.log('error users', error))
    }, [])
    
    const style ={
        background: '#0b2748',
        color: 'white',
        minWidth: '100%',
        paddingBlock: '2vh',
        textAlign: 'center'
    }
    

    return (
        <>
            <Typography variant='h4' style={style}>Listado de usuarios</Typography>
            <TableUsers data={users} />
        </>
    )
}

export default ListUsers
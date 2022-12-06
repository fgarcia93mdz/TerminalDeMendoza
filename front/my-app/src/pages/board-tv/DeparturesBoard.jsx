import { CircularProgress } from '@mui/material';
import { Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import GenericTable from '../../components/table/TableDepartures';

import './ArrivalsBoard.styles.css';

const DeparturesBoard = () => {
    const [  partidas, setPArtidas ] = React.useState([]);
    
    const getPartidas = () => {
        axios.get('http://localhost:8080/plataforma/partidas')
        .then(data => {
            return setPArtidas(data.data)
        })
        .catch( err => console.log('Error GET departures:', err))
    }

    useEffect(() => {
        getPartidas()

        setInterval(() => {
            getPartidas()
        }, 10000);

    }, [])


    return (
        <>
            <div className="containerBoard" >
                <div>
                    {partidas.length === 0 &&
                        <Stack justifyContent={'center'} alignItems={'center'} height={'40vh'}>
                            <CircularProgress />
                        </Stack>
                    }
                    {partidas.length > 0 && <GenericTable props={partidas} />}
                </div>
            </div>
        </>
    );
}

export default DeparturesBoard;

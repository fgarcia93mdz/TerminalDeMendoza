import { CircularProgress } from '@mui/material';
import { Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import GenericTable from '../../components/table/TableArrivals';

import './ArrivalsBoard.styles.css';

// import { useSelector } from 'react-redux';


const ArrivalsBoard = () => {
    const [ arribos, setArribos ] = React.useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/plataforma/arribos')
        .then( data => {
          setArribos(data.data)
        })
        .catch( error => console.log('error', error))
    }, [])

    return (
      <>
        <div className="containerBoard" >
          <div>
            {arribos.length === 0 && 
              <Stack justifyContent={'center'} alignItems={'center'} height={'40vh'}>
                <CircularProgress />
              </Stack>
            }
            {arribos.length > 0 && <GenericTable props={arribos} />}
          </div>
        </div>
      </>
    );
}

export default ArrivalsBoard;

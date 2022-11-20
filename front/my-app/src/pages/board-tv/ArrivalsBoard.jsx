import { CircularProgress } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';
import GenericTable from '../../components/table/TableArrivals';

import './ArrivalsBoard.styles.css';

// import { useSelector } from 'react-redux';


const ArrivalsBoard = () => {

    const [ estado, setEstado ] = React.useState([]);

    // const colectivosRedux  = useSelector( state => state.estado);

    useEffect(() => {

      fetch('http://localhost:8080/api/plataforma/arribos')
        .then( data => {
          return data.json()
        })
        .then( result => {
           console.log('result:', result)
           return setEstado(result)
        })

        
        
    }, [])

    console.log(estado)
    

    return (
      <>
        <div className="containerBoard" >
          <div>
            {estado.length === 0 && 
              <Stack justifyContent={'center'} alignItems={'center'} height={'40vh'}>

                <CircularProgress />
              </Stack>
            }

            {estado.length > 0 && <GenericTable props={estado} />}
            {/* <GenericTable props={estado} /> */}
          </div>
        </div>
      </>
    );
}

export default ArrivalsBoard;

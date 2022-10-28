import React, { useEffect } from 'react';
import GenericTable from '../../components/table/Table';

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
        <div className="container" >
          <div>
            {estado.length > 0 && <GenericTable props={estado} />}
            {/* <GenericTable props={estado} /> */}
          </div>
        </div>
      </>
    );
}

export default ArrivalsBoard;

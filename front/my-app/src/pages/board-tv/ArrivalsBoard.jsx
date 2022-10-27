import React from 'react';
import GenericTable from '../../components/table/Table';

import './ArrivalsBoard.styles.css';

import { useSelector } from 'react-redux';

const ArrivalsBoard = () => {

    const colectivosRedux  = useSelector( state => state.estado);

    console.log('data:', colectivosRedux)

    return (
      <>
        <div className="container" >
          <div>
            <GenericTable props={colectivosRedux} />
          </div>
        </div>
      </>
    );
}

export default ArrivalsBoard;

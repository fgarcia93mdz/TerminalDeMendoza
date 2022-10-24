import  GenericTable from '../../components/table/Table';
import React from 'react';

import { useSelector } from 'react-redux';


const ArrivalsBoard = () => {

    const colectivosRedux  = useSelector( state => state.estado);

    console.log('data:', colectivosRedux)

    return (
        <div>
            <GenericTable props={colectivosRedux} />
        </div>
    );
}

export default ArrivalsBoard;

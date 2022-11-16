import React, { useState, useEffect } from 'react';
import TableAdmin from '../../components/table/TableAdmin';


// LISTADO TOTAL DE TICKETS CREADOS
// VISTA DE INFORMES, PARA LUEGO EDITAR LOS TICKETS O TERMINARLOS


const ArrivalsTable = () => {
    const [ data, setData ] = useState({})

   

    return (
        <div >
            <h2>Tablero de Arribos </h2>
            {data.length > 0 && 
                <>
                    <TableAdmin data={data} />
                </>
            }
        </div>
    );
}

export default ArrivalsTable;

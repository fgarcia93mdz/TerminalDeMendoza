import React, { useState, useEffect } from 'react';
import TableAdmin from '../../components/table/TableAdmin';


// LISTADO DE PARTIDAS DE TICKETS
// VISTA DE TORRE DE SEGURIDAD


const DeparturesTable = () => {
    const [ data, setData ] = useState({})

    

    useEffect(() => {
       


        fetch('http://localhost:8080/api/plataforma/partidas')
                .then(response =>  response.json())
                .then(data => {
                    console.log('data::', data)
                    return setData(data)
                })
                .catch(error => console.log(error))
       
    }, [])

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

export default DeparturesTable;

import { useSelector } from 'react-redux'

export const traerEmpresas = () => {

    return fetch('http://localhost:3000/api/')
    .then( data => 
            data.json()
    ) 

    return 

}
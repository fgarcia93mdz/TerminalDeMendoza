import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';




//  RECIBE UN OBJETO DE ESTE TIPO === HABRIA QUE MEJORAR ESA API IGUAL
// { 
//     "id": 1,
//     "fecha_ingreso": "2022-01-01",
//     "hora_ingreso": "19:53:00",
//     "interno": 123,
//     "fecha_salida": null,
//     "hora_salida": null,
//     "destino": "mar de ajo",
//     "empresa_id": 2,
//     "servicios_id": 1,
//     "usuarios_id": 1,
//     "plataformas_id": 1,
//     "estado_id": 1,
//     "registro_empresa": {
//       "id": 2,
//       "empresa": "Iselin",
//       "siglas": "ISL",
//       "img": "iselin.png",
//       "cuit": "20-4457-88"
//     },
//     "registro_estado": {
//       "id": 1,
//       "tipo": "En plataforma"
//     },
//     "registro_servicio": {
//       "id": 1,
//       "siglas": "SMD",
//       "tipo_servicio": "Servicio de media distancia"
//     }
//   },

export default function TableAdmin({ data }) {
  return (
   
      <TableContainer component={Paper} >
         <Box px={4}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Destino</TableCell>
              <TableCell align="right">Interno</TableCell>
              <TableCell align="right">Empresa</TableCell>
              <TableCell align="right">Horario <br></br>Salida</TableCell>
              <TableCell align="right">Plat</TableCell>
              <TableCell align="right">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log('DATA..:', data)}
            {data.reverse().map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.destino} </TableCell>
                <TableCell align="right">{row.interno}</TableCell>
                <TableCell align="right">{row.registro_empresa.empresa}</TableCell>
                <TableCell align="right">{row.hora_ingreso}</TableCell>
                <TableCell align="right">{row.plataformas_id}</TableCell>
                <TableCell align="right">{row.registro_estado.tipo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      </TableContainer>
  );
}

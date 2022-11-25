import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';






export default function TableAdmin({ data }) {
  return (
   
      <TableContainer component={Paper} sx={{width: '98%', margin:'auto'}}>
         <Box px={4}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Destino/Origen</TableCell>
              <TableCell align="right">Interno</TableCell>
              <TableCell align="right">Empresa</TableCell>
              <TableCell align="right">Horario <br></br>Salida</TableCell>
              <TableCell align="right">Plat</TableCell>
              <TableCell align="right">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {console.log('DATA en tabla admin..:', data)} */}
            {data.length > 0 && data.reverse().map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.destino} </TableCell>
                <TableCell align="right">{row.interno}</TableCell>
                <TableCell align="right">{row.empresa}</TableCell>
                <TableCell align="right">{row.hora_salida}</TableCell>
                <TableCell align="right">{row.pltaforma}</TableCell>
                <TableCell align="right">{row.estado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      </TableContainer>
  );
}

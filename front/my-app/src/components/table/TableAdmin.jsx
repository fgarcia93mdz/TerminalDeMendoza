import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import ReactHTMLTableToExcel from "@goodev/react-html-table-to-excel";

const day = `Informe de ingresos_${new Date().toJSON().slice(0, 10)}`;



export default function TableAdmin({ data }) {
  return (
    <TableContainer component={Paper} sx={{ width: "98%", margin: "auto" }}>
      <Box px={4}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="informes">
          <TableHead>
            <TableRow>
              <TableCell align="left">Fecha de ingreso</TableCell>
              <TableCell align="left">Horario de ingreso</TableCell>
              <TableCell align="left">Destino/Origen/Servicio</TableCell>
              <TableCell align="right">Interno</TableCell>
              <TableCell align="center">Empresa</TableCell>
              <TableCell align="center">Plataforma</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">Horario de egreso</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {console.log('DATA en tabla admin..:', data)} */}
            {data.length > 0 &&
              data.reverse().map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {row.fecha_ingreso}{" "}
                  </TableCell>
                  <TableCell align="left">{row.hora_ingreso}{" "}</TableCell>
                  <TableCell align="left">{row.destino} </TableCell>
                  <TableCell align="right">{row.interno}</TableCell>
                  <TableCell align="center">{row.empresa}</TableCell>
                  <TableCell align="center">{row.plataforma}</TableCell>
                  <TableCell align="right">{row.estado}</TableCell>
                  <TableCell align="right">{row.hora_salida}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
      <br />
      <br />
      <div>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="informes"
          filename={day}
          sheet="ingresos"
          buttonText="Descargar Excel"

        />
      </div>
      <br />
    </TableContainer>
  );
}

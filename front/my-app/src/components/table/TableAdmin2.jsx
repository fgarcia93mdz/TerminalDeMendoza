import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import ReactHTMLTableToExcel from "@goodev/react-html-table-to-excel";



export default function TableAdmin2({ data, edit }) {
  // edit. if edit is true so the table will have a column with edit button

  const day = `Registro de en plataforma en informes_${new Date()
    .toJSON()
    .slice(0, 10)}`;

  console.log('data table admin:', data)

  return (
    <TableContainer component={Paper} sx={{ width: "98%", margin: "auto" }}>
      <Box px={4}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="informes">
          <TableHead>
            <TableRow>
              <TableCell align="left">Fecha de ingreso</TableCell>
              <TableCell align="center">
                Horario <br></br> de ingreso
              </TableCell>
              <TableCell align="center">Destino/Origen/Servicio</TableCell>
              <TableCell align="center">Interno</TableCell>
              <TableCell align="center">Empresa</TableCell>
              <TableCell align="center">Fecha Salida</TableCell>
              <TableCell align="center">
                Horario <br></br>Salida
              </TableCell>
              <TableCell align="center">Plat</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">TV</TableCell>
              {edit && <TableCell align="right">Editar</TableCell>}
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
                  <TableCell align="left">{row.fecha_ingreso}</TableCell>
                  <TableCell align="center">{row.horario_ingreso}</TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.destino}{" "}
                  </TableCell>
                  <TableCell align="center">{row.interno}</TableCell>
                  <TableCell align="center">{row.empresa}</TableCell>
                  <TableCell align="center"> {row.fecha_salida} </TableCell>
                  <TableCell align="center"> {row.horario_salida} </TableCell>
                  <TableCell align="center">{row.plataforma}</TableCell>
                  <TableCell align="center">{row.estado}</TableCell>
                  <TableCell align="center">{row.tipo_tv}</TableCell>
                  {edit && (
                    <TableCell align="right">
                      <Link to={`/informes/editar/en_plataforma/${row.id}`}>
                        {" "}
                        <SettingsIcon />{" "}
                      </Link>
                    </TableCell>
                  )}
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

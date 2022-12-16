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

import image from '../../assets/img/empresas/chevallier-1.png'

export default function TableAdminCompanies({ data }) {   
  // edit. if edit is true so the table will have a column with edit button

  const day = `Registro de Listado de Empresas ${new Date().toJSON().slice(0, 10)}`;

  console.log('data table admin:', data)

  return (
    <TableContainer component={Paper} sx={{ width: "98%", margin: "auto", borderRadius: '30px' }}>
      <Box px={2}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="informes">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Siglas</TableCell>
              <TableCell align="center">Imagen</TableCell>
              <TableCell align="center">CUIT</TableCell>
              <TableCell align="right">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.map((row) => 
                
              (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell align="center">{row.empresa}</TableCell>
                    <TableCell component="th" scope="row" align="center">{row.siglas}</TableCell>
                    <TableCell align="center">
                        {/* {row.img !== undefined && <Box 
                            component="img" 
                            src={require(`../../assets/img/empresas/${row.img}`)}
                            sx={{ width: '150px', height: '100px' }} />} */}
                            {row.img}
                    </TableCell>
                    <TableCell align="center">{row.cuit}</TableCell>
                    <TableCell align="right">
                        <Link to={`/empresas/editar/${row.id}`}>
                        {" "}
                        <SettingsIcon />{" "}
                        </Link>
                    </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
      <br />
      <br />
      <Box pl={3} >
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="informes"
          filename={day}
          sheet="Listado Empresas"
          buttonText="Descargar Listado Empresas"
        />
      </Box>
      <br />
    </TableContainer>
  );
}

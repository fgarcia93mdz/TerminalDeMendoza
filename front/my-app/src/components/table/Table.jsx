import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({


  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


// const rows = [
//   {
//     "id": 1,
//     "empresa": "flecha-bus",
//     "siglas": "fb",
//     "img": "img1"
//   },
//   {
//     "id": 2,
//     "empresa": "andesmar",
//     "siglas": "adm",
//     "img": "img2"
//   },
//   {
//     "id": 3,
//     "empresa": "jovi-bus",
//     "siglas": "jvb",
//     "img": "img3"
//   },
//   {
//     "id": 4,
//     "empresa": "nuevo expreso",
//     "siglas": "ne",
//     "img": "img4"
//   },
//   {
//     "id": 5,
//     "empresa": "cuchuflito",
//     "siglas": "cft",
//     "img": "img5"
//   }
// ];

export default function GenericTable( {props} ) {

  // const colectivosRedux  = useSelector(state => state.estado);

  // console.log('data:', colectivosRedux)
  if(props){
    console.log('PROPSS table:', props)
  }
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Horario de salida</StyledTableCell>
            <StyledTableCell align="center">Horario estimado</StyledTableCell>
            <StyledTableCell align="center">Destino</StyledTableCell>
            <StyledTableCell align="center">Empresa</StyledTableCell>
            <StyledTableCell align="center">Plataforma</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props && props.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.empresa}</StyledTableCell>
              <StyledTableCell align="center">{row.img}</StyledTableCell>
              <StyledTableCell align="center">{row.siglas}</StyledTableCell>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

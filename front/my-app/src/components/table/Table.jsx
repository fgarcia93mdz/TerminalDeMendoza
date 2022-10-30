import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import imgCompany from "../../assets/img/empresas/iselin.png"

// import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0E315A",
    height: "80px",
  },
  [`&.${tableCellClasses.body}`]: {},
  [`&.${tableCellClasses.root}`]: {
    borderBottom: "none",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    padding: "10px",
    marginLeft: '2rem'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#1C68C0",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#124178",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  height: '77px',
  paddingLeft: '2rem'
}));


const styles = {
  cajaFoto: {
    width: '152px',
    height: '56px',
    border: '1px solid white',
    color: 'black',
    margin: 'auto',
    overflow: 'hidden'
  }
}


export default function GenericTable( {props} ) {
  
  // const HOUR_ESTIMATED 
  // const HOUR_ARRIVAL
  // const HOUR_DEPARTURE
  // const COMPANY
  // const IMG
  // const STATE


  // const colectivosRedux  = useSelector(state => state.estado);

  // console.log('data:', colectivosRedux)
  if(props){
    console.log('PROPSS table:', props)
  }
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ fontSize: '20px' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">DESTINO</StyledTableCell>
            <StyledTableCell align="center">INTERNO</StyledTableCell>
            <StyledTableCell align="center">EMPRESA</StyledTableCell>
            <StyledTableCell align="center">
              HORARIO<br></br>SALIDA
            </StyledTableCell>
            <StyledTableCell align="center">
              
            </StyledTableCell>
            <StyledTableCell align="center">PLAT</StyledTableCell>
            <StyledTableCell align="center">ESTADO</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {props &&
            props.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{row.destino}</StyledTableCell>
                <StyledTableCell align="center">{row.interno}</StyledTableCell>
                <StyledTableCell align="center">{row.registro_empresa.empresa}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.hora_salida}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className="box" style={styles.cajaFoto}>
                    <img
                      src={imgCompany}
                      alt=""
                    />
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                 Plat. {row.plataformas_id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.registro_estado.tipo}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

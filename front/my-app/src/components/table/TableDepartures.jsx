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
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    padding: "10px",
    marginLeft: '2rem'
  },
}));
const StyledTableCell2 = styled(TableCell)(({ theme }) => ({
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
    border: 'none',
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
            <StyledTableCell2 align="center">DESTINO</StyledTableCell2>
            <StyledTableCell2 align="center">EMPRESA</StyledTableCell2>
            <StyledTableCell2 align="center">
              HORARIO<br></br>SALIDA
            </StyledTableCell2>
            <StyledTableCell2 align="center">ESTADO</StyledTableCell2>
            <StyledTableCell2 align="center">PLAT</StyledTableCell2>
            <StyledTableCell2 align="center">
              
            </StyledTableCell2>
            <StyledTableCell2 align="center">INTERNO</StyledTableCell2>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {props &&
            props.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{row.destino}</StyledTableCell>
                <StyledTableCell align="center">{row.registro_empresa.empresa}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.hora_salida}
                </StyledTableCell>
                <StyledTableCell align="center">{row.registro_estado.tipo}</StyledTableCell>
                <StyledTableCell align="center">
                 {row.plataformas_id}
                </StyledTableCell>
                <StyledTableCell align="center">
                    <div className="box" style={styles.cajaFoto}>
                      {row.registro_empresa.img != null &&
                        <img
                          src={require("../../assets/img/empresas/" + row.registro_empresa.img)}
                          alt=""
                        />
                      }
                    </div>
                </StyledTableCell>
                <StyledTableCell align="center">{row.interno}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

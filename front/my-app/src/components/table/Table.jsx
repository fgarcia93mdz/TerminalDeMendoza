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
    // backgroundColor: theme.palette.common.black,
    backgroundColor: "#0E315A",
    height: "102px",
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {},
  [`&.${tableCellClasses.root}`]: {
    borderBottom: "none",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
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
  height: '77px'
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

  // const colectivosRedux  = useSelector(state => state.estado);

  // console.log('data:', colectivosRedux)
  if(props){
    console.log('PROPSS table:', props)
  }
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">DESTINO</StyledTableCell>
            <StyledTableCell align="center">
              HORARIO<br></br>SALIDA
            </StyledTableCell>
            <StyledTableCell align="center">
              HORARIO<br></br>ESTIMADO
            </StyledTableCell>
            <StyledTableCell align="center">EMPRESA</StyledTableCell>
            <StyledTableCell align="center">PLAT</StyledTableCell>
            <StyledTableCell align="center">ESTADO</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props &&
            props.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{row.destino}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.horarioSalida}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.horarioEstimado}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className="box" style={styles.cajaFoto}>
                    <img
                      src={require("../../assets/img/flechaBus.png")}
                      alt=""
                    />
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.plataforma}
                </StyledTableCell>
                <StyledTableCell align="center">{row.estado}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

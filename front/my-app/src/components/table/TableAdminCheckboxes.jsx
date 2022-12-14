/* TABLERO DE SEGURIDAD */

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import ReactHTMLTableToExcel from "@goodev/react-html-table-to-excel";
import Typography from "@mui/material/Typography";

export default function TableAdminCheckboxes({ data, edit }) {
  // edit. if edit is true so the table will have a column with edit button

    const [ stateShowID, setStateShowID ] = React.useState(true)
    const [ stateShowArrivalDate, setStateShowArrivalDate ] = React.useState(true)
    const [ stateShowArrivalTime, setStateShowArrivalTime ] = React.useState(true)
    const [ stateShowDestiny, setStateShowDestiny ] = React.useState(true)
    const [ stateShowIntern, setStateShowIntern ] = React.useState(true)
    const [ stateShowCompany, setStateShowCompany ] = React.useState(true)
    const [ stateShowTypeService, setStateShowTypeService ] = React.useState(true)
    const [ stateShowDepartureDate, setStateShowDepartureDate ] = React.useState(true)
    const [ stateShowDepartureTime, setStateShowDepartureTime ] = React.useState(true)
    const [ stateShowPlatform, setStateShowPlatform ] = React.useState(true)
    const [ stateShowState, setStateShowState ] = React.useState(true)
    const [ stateShowTV, setStateShowTV ] = React.useState(true)


  const day = `Registro de ingresantes en informes_${new Date()
    .toJSON()
    .slice(0, 10)}`;

  console.log("data table admin:", data);

    const showID = (event) => {
        setStateShowID(event.target.checked)
    }

    const showArrivalDate = (event) => {
        setStateShowArrivalDate(event.target.checked)
    }

    const showArrivalTime = (event) => {
        setStateShowArrivalTime(event.target.checked)
    }

    const showDestiny = (event) => {
        setStateShowDestiny(event.target.checked)
    }

    const showIntern = (event) => {
        setStateShowIntern(event.target.checked)
    }

    const showCompany = (event) => {
        setStateShowCompany(event.target.checked)
    }

    const showTypeService = (event) => {
        setStateShowTypeService(event.target.checked)
    }

    const showDepartureDate = (event) => {
        setStateShowDepartureDate(event.target.checked)
    }

    const showDepartureTime = (event) => {
        setStateShowDepartureTime(event.target.checked)
    }

    const showPlatform = (event) => {
        setStateShowPlatform(event.target.checked)
    }

    const showTV = (event) => {
        setStateShowTV(event.target.checked)
    }

    const showState = (event) => {
        setStateShowState(event.target.checked)
    }
    
    const checkboxStyle = {
        color:'#1976d2'
    }

    const styleCheckboxList = {
        display:'flex',
        flexDirection:'column',
    }

  return (
    <Box sx={{background:'#0B2748', color:'white', paddingBottom:'32px'}}>
        <Typography variant='h3' textAlign='center' color='white' py={3}>Registro Administrativo Total</Typography>
        <FormGroup sx={{ width:'95%', margin: 'auto' }}>
        <Grid container sx={{width:'100%', justifyContent:'center'}} display='flex' mb={3} >
            <Grid item sm={2} style={styleCheckboxList}>
                <FormControlLabel
                control={
                <Checkbox
                    size="small"
                    color="secondary"
                    name="showID"
                    value={true}
                    onChange={showID}
                    defaultChecked={true}
                    style={checkboxStyle}
                />
                }
                label="Nº de Registro"
            />
                <FormControlLabel
                    control={
                    <Checkbox
                        size="small"
                        color="secondary"
                        name="showArrivalDate"
                        value={true}
                        defaultChecked={true}
                        style={checkboxStyle}
                        onChange={showArrivalDate}
                    />
                    }
                    label="Fecha Ingreso"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        size="small"
                        color="secondary"
                        name="showTimeArrival"
                        style={checkboxStyle}
                        defaultChecked={true}
                        value={true}
                        onChange={showArrivalTime}
                    />
                    }
                    label="Horario Ingreso"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        size="small"
                        color="secondary"
                        name="showDestiny"
                        defaultChecked={true}
                        value={true}
                        style={checkboxStyle}
                        onChange={showDestiny}
                    />
                    }
                    label="Destino/Origen/Servicio"
                />
            </Grid>
            <Grid item sm={2} style={styleCheckboxList}>
                <FormControlLabel
                    control={
                        <Checkbox
                        size="small"
                        color="secondary"
                        name="showIntern"
                        defaultChecked={true}
                        value={true}
                        onChange={showIntern}
                        style={checkboxStyle}
                        />
                    }
                    label="Interno"
                    />
                <FormControlLabel
                    control={
                        <Checkbox
                        size="small"
                        color="secondary"
                        defaultChecked={true}
                        name="showCompany"
                        style={checkboxStyle}
                        value={true}
                        onChange={showCompany}
                    />
                }
                label="Empresa"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                        size="small"
                        color="secondary"
                        name="showTypeService"
                        value={true}
                        style={checkboxStyle}
                        defaultChecked={true}
                        onChange={showTypeService}
                    />
                    }
                    label="Servicio"
                    />
                <FormControlLabel
                    control={
                        <Checkbox
                        size="small"
                        color="secondary"
                        name="showDepartureDate"
                        value={true}
                        style={checkboxStyle}
                        onChange={showDepartureDate}
                        defaultChecked={true}
                        />
                    }
                    label="Fecha Salida"
                    />
            </Grid>
            <Grid item xs={2} style={styleCheckboxList}>
                <FormControlLabel
                    control={
                    <Checkbox
                        size="small"
                        color="secondary"
                        name="showDepartureTime"
                        defaultChecked={true}
                        style={checkboxStyle}
                        value={true}
                        onChange={showDepartureTime}
                    />
                    }
                    label="Horario de salida"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        size="small"
                        color="secondary"
                        name="showPlatform"
                        style={checkboxStyle}
                        defaultChecked={true}
                        value={true}
                        onChange={showPlatform}
                    />
                    }
                    label="Plataforma"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        size="small"
                        color="secondary"
                        name="showState"
                        style={checkboxStyle}
                        defaultChecked={true}
                        value={true}
                        onChange={showState}
                    />
                    }
                    label="Estado"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        size="small"
                        color="secondary"
                        name="showTV"
                        style={checkboxStyle}
                        value={true}
                        defaultChecked={true}
                        onChange={showTV}
                    />
                    }
                    label="TV"
                />
             </Grid>
        </Grid>
            </FormGroup>
      <TableContainer component={Paper} sx={{ width: "98%", margin: "auto", borderRadius: '20px' }}>
      <Box px={4}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="informes">
          <TableHead>
            <TableRow>
                {stateShowID && 
                    <TableCell align="left">
                        <Typography textTransform="uppercase">
                            Nº de <br></br> Registro
                        </Typography>
                    </TableCell>
                }
                {stateShowArrivalDate &&
                    <TableCell align="left">
                        <Typography textTransform="uppercase">
                            Fecha de ingreso
                        </Typography>
                    </TableCell>
                }
                {stateShowArrivalTime &&
                    <TableCell align="center">
                        <Typography textTransform="uppercase">
                            {" "}
                            Horario <br></br> de ingreso
                        </Typography>
                    </TableCell>
                }
                {stateShowDestiny &&
                    <TableCell align="center">
                       <Typography textTransform="uppercase">
                            Destino/Origen/Servicio
                        </Typography>
                    </TableCell>
                }
                {stateShowIntern &&
                    <TableCell align="center" textTransform="uppercase">
                        <Typography textTransform="uppercase">Interno</Typography>
                    </TableCell>
                }
                {stateShowCompany &&
                    <TableCell align="center" textTransform="uppercase">
                        <Typography textTransform="uppercase">Empresa</Typography>
                    </TableCell>
                }
                {stateShowTypeService &&
                    <TableCell align="center" textTransform="uppercase">
                        <Typography textTransform="uppercase">Servicio</Typography>
                    </TableCell>
                }
                {stateShowDepartureDate &&
                    <TableCell align="center" textTransform="uppercase">
                        <Typography textTransform="uppercase">Fecha Salida</Typography>
                    </TableCell>
                }
                {stateShowDepartureTime &&
                    <TableCell align="center" textTransform="uppercase">
                        <Typography textTransform="uppercase">
                        Horario <br></br>Salida
                        </Typography>
                    </TableCell>
                }
                {stateShowPlatform &&
                    <TableCell align="center" textTransform="uppercase">
                        <Typography textTransform="uppercase">Plat</Typography>
                    </TableCell>
                }
                {stateShowState &&
                    <TableCell align="center" textTransform="uppercase">
                        <Typography textTransform="uppercase">Estado</Typography>
                    </TableCell>
                }
                {stateShowTV &&
                    <TableCell align="center" textTransform="uppercase">
                        <Typography textTransform="uppercase">TV</Typography>
                    </TableCell>
                }
                    {edit && <TableCell align="right">Editar</TableCell>}
                </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.reverse().map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.fecha_ingreso}</TableCell>
                  <TableCell align="center">{row.horario_ingreso}</TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.destino}{" "}
                  </TableCell>
                  <TableCell align="center">{row.interno}</TableCell>
                  <TableCell align="center">{row.empresa}</TableCell>
                  <TableCell align="center">{row.servicio}</TableCell>
                  <TableCell align="center"> {row.fecha_salida} </TableCell>
                  <TableCell align="center"> {row.horario_salida} </TableCell>
                  <TableCell align="center">{row.plataforma}</TableCell>
                  <TableCell align="center">{row.estado}</TableCell>
                  <TableCell align="center">{row.tipo_tv}</TableCell>
                  {edit && (
                    <TableCell align="right">
                      <Link to={`/informes/editar/ingreso/${row.id}`}>
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
      <Box ml={5} mt={5}>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="informes"
          filename={day}
          sheet="ingresos"
          buttonText="Descargar Reporte"
        />
      </Box>
      <br />
    </TableContainer>
    </Box>
  );
}

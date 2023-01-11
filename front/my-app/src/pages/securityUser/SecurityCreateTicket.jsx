import React, { useState } from "react";
import { Autocomplete, Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
// import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import BasicModal from "../../components/modals/Modal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const FormTicket = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dataDropdown, setDataDropdown] = useState({});
  // const navigate = useNavigate()
  const [ valueEmpresa, setValueEmpresa ] = useState(null)
  const token = sessionStorage.getItem("jwt");
  const config = { headers: { authorization: `Bearer ${token}` } };

  // Fecha actual
  const dateNow = new Date(); // Creating a new date object with the current date and time
  const year = dateNow.getFullYear(); // Getting current year from the created Date object
  const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
  const month = // Setting current Month number from current Date object
    monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 if not to adjust for date input.
      ? `0${monthWithOffset}`
      : monthWithOffset;
  const date =
    dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
      ? `0${dateNow.getUTCDate()}`
      : dateNow.getUTCDate();
      
  
  // HORA ACTUAL
  const hours = dateNow.getHours()
  const minutes = dateNow.getMinutes();
  const minutess = (`${minutes}` < 10) ? "0" + `${minutes}` : `${minutes}`;

  console.log('minutess',minutess, 'hours:', hours, 'minutes:', minutes)

  
  const initialTicket = {
    fecha_ingreso: `${year}-${month}-${date}`, // '01-01-2022'
    hora_ingreso: `${hours}:${minutess}`, // '12:00'
    interno: "", // 123
    empresa_id: valueEmpresa, // 2
    servicios_id: "", // 2
    estado_id: "", // '0'
    destino: "", // 'Mar de Ajo'
    tipo_tv_id: 3,
  };

  const resetForm = () => {
    formik.resetForm();
    setValueEmpresa(null)
  }

  const validationSchema = yup.object({
    fecha_ingreso: yup.string().required("Campo requerido"),
    hora_ingreso: yup.string().required("Campo requerido"),
    interno: yup.number().required("Campo requerido"),
    empresa_id: yup.number().required("Campo requerido"),
    servicios_id: yup.number().required("Campo requerido"),
    estado_id: yup.string().required("Campo requerido"),
    destino: yup.string().required("Campo requerido"),
  });

  React.useEffect(() => {
    const url = "http://localhost:8080/informes/dataDropdown";
    axios
      .get(url, config)
      .then((response) => setDataDropdown(response.data))
      .catch((error) => console.log("error jwt:", error.response.data.mensaje));
  }, [token]);

  const formik = useFormik({
    validateOnChange: true,
    initialValues: initialTicket,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const url = "http://localhost:8080/informes/nuevo";
      const data = formik.values;
      // console.log("data form create ticket", data);

      
      axios.post(url, data, config)
        .then((res) => {
          if (res.status === 200) {
            setOpenModal(true);
            resetForm();

          }
        })
        .catch(function (error) {
          console.log("Error:", error);
        });

    },
  });

  const inputStyle = {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      transition: '250ms all ease'
    },
    ".MuiInputBase-root": {
      color: "white",
      transition:'250ms all ease'
    },
    ".MuiSvgIcon-root": {
      color: "white",
    },
    ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      color: "white",
    },
    "input:hover": {
      background:'transparent',
      // color: "#29507e",
    },
    ".MuiInputBase-root:hover ":{
      // backgroundColor: "rgb(255, 255, 255)",
      // color: "#29507e",
      boxShadow:' inset 0 0 9px rgb(63, 100, 143)'
    },
    ".MuiInputBase-root:hover .MuiSvgIcon-root":{
      color: "rgb(19, 46, 77)",
      border:'none'

    },
    ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
      border:'none'
    },
    ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
      borderColor:'white'
    }
  }

  return (
    <Stack
      sx={{ background: "#0b2748", borderRadius: "25px", shadow: 4 }}
      my={4}
      mx={{ xs: 1, sm: 6 }}
      p={4}
      sm={6}
    >
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h4" color="white">
          Crear nuevo Registro:
        </Typography>
        <Grid container my={4}>
          <Grid
            item
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            gap={2}
            xs={12}
            sm={12}
            my={2}                 
          >
            <Typography variant="subtitle1" color="white" mb={{ xs: 1, sm: 0 }}>
              Interno:
            </Typography>
            <TextField
              sx={inputStyle}
              InputProps={{
                type: "text",
              }}
              value={formik.values.interno}
              name="interno"
              onChange={formik.handleChange}
              // error={formik.errors.interno?.length > 0}
              error={formik.errors.interno}
              helperText={formik.errors.interno ? 'Campo requerido': null}
            />
          </Grid>
          <Grid
            item
            display={{ xs: "none", sm: "none" }}
            alignItems="center"
            gap={2}
            xs={6}
            sm={6}
            my={2}
          >
            <Typography
              variant="subtitle1"
              color="white"
              mb={{ xs: 1, sm: 0 }}
              display={{ xs: "none", sm: "block" }}
            >
              tipo tv id:
            </Typography>
            <TextField
              sx={{
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                ".MuiInputBase-root": {
                  color: "white",
                },
                
              }}
              InputProps={{
                type: "number",
              }}
              defaultValue={3}
              name="tipo_tv_id"
            />
          </Grid>

          <Grid
            item
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            gap={2}
            xs={12}
            sm={6}
            my={2}
          >
            <Typography variant="subtitle1" color="white" mb={{ xs: 1, sm: 0 }}>
              Fecha de ingreso:
            </Typography>
            <TextField
              // sx={{
              //   ".MuiOutlinedInput-notchedOutline": {
              //     borderColor: "white",
              //   },
              //   ".MuiInputBase-root": {
              //     color: "white",
              //   },
              //   'input:hover':{
              //     backgroundColor: "#ffffff8",
              //   }
              // }}
              sx={inputStyle}
              InputProps={{
                type: "date",
              }}
              name="fecha_ingreso"
              value={formik.values.fecha_ingreso}
              onChange={formik.handleChange}
              // error={formik.errors.length > 0}
              error={formik.errors.fecha_ingreso}
              helperText={formik.errors?.fecha_ingreso}
            />
          </Grid>
          <Grid
            item
            display={{ xs: "block", sm: "flex" }}
            alignItems="center"
            gap={2}
            xs={12}
            sm={6}
            my={2}
          >
            <Typography variant="subtitle1" color="white" mb={{ xs: 1, sm: 0 }}>
              Hora de ingreso:
            </Typography>
            <TextField
              // sx={{
              //   ".MuiOutlinedInput-notchedOutline": {
              //     borderColor: "white",
              //   },
              //   ".MuiInputBase-root": {
              //     color: "white",
              //   },
              //   "& .MuiSvgIcon-root": {
              //     color: "white",
              //   },
              //   'input:hover':{
              //     backgroundColor: "rgb(255 255 255)",
              //     color: "#29507e",
              //     fontWeight: '500'
              //   }
              // }}
              sx={inputStyle}
              InputProps={{
                type: "time",
              }}
              value={formik.values.hora_ingreso}
              name="hora_ingreso"
              onChange={formik.handleChange}
              // error={formik.errors.length > 0}
              error={formik.errors?.hora_ingreso}
              helperText={formik.errors?.hora_ingreso}
            />
          </Grid>

          <Grid
            item
            // display={{ xs: "block", md: "flex" }}
            alignItems="center"
            gap={2}
            xs={12}
            sm={6}
            my={2}
            pr={{xs:0,md:8}}
            
          >
            <Typography
              variant="subtitle1"
              color="white"
              mb={{ xs: 1, sm: 0 }}
              // display={{ xs: "none", sm: "block" }}
              style={{marginBottom:'3px'}}
            >
              Empresa:
            </Typography>
            {/* {console.log('dataDropdown.empresas', dataDropdown.empresas)} */}
            
            {dataDropdown.empresas && 
              <Autocomplete
                          fullWidth
                          clearOnEscape
                          value={valueEmpresa}
                          options={dataDropdown.empresas}
                          
                          // autoHighlight
                          // sx={{
                          //   ".MuiOutlinedInput-notchedOutline": {
                          //     borderColor: "white",
                          //     transition: '250ms all ease'
                          //   },
                          //   ".MuiInputBase-root": {
                          //     color: "white",
                          //   },
                          //   ".MuiSvgIcon-root": {
                          //     color: "white",
                          //   },
                          //   ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
                          //     color: "white",
                          //   },
                          //   "input:hover": {
                          //     background:'transparent',
                          //     color: "#29507e",
                          //     fontWeight: 500,
                          //   },
                          //   ".MuiInputBase-root:hover ":{
                          //     backgroundColor: "rgb(255, 255, 255)",
                          //     border:'none',
                          //     color: "#29507e",
                          //     fontWeight: 500
                          //   },
                          //   ".MuiInputBase-root:hover .MuiSvgIcon-root":{
                          //     color: "rgb(19, 46, 77)",
                          //   },
                          //   ".MuiAutocomplete-endAdornment:hover .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root ":{
                          //     color: "rgb(19, 46, 77)",
                          //   },
                          // }}
                          sx={inputStyle}
                          // onChange={(event, newValue) => {
                          //   // console.log('event:', event, 'newValue:', newValue)
                          //   formik.setFieldValue('empresa_id', newValue.id)
                          // }}
                          onChange={(event, newValue) => {
                            setValueEmpresa(newValue);
                            formik.setFieldValue('empresa_id', newValue.id)
                          }}
                          getOptionLabel={(option) => option.empresa}
                          renderInput={(params) => 
                            <TextField 
                              error={formik.errors.empresa_id}
                              {...params} 
                              label='Busque una empresa' 
                              style={{
                                color: "#f5f5f0",
                              }}
                              sx={{
                                ".css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
                                  color: "#f5f5f0",
                                },
                              }}
                            />}
              />
            }
           
          
          </Grid>
          <Grid
            item
            // display={{ xs: "block", md: "flex" }}
            alignItems="center"
            gap={2}
            xs={12}
            md={6}
            my={2}
            pr={{xs:0,md:2}}
          >
            <Typography
              variant="subtitle1"
              style={{marginBottom:'3px'}}
              color="white"
            >
              Tipo de servicio:
            </Typography>
            <TextField
              fullWidth
              select
              label="Seleccione tipo de servicio"
              // sx={{
              //   ".MuiOutlinedInput-notchedOutline": {
              //     borderColor: "white",
              //   },
              //   ".MuiInputBase-root": {
              //     color: "white",
              //   },
              //   "& .MuiSvgIcon-root": {
              //     color: "white",
              //   },

              //   // minWidth: "260px",
              // }}
              sx={inputStyle}
              // sx={{
              //   ".MuiOutlinedInput-notchedOutline": {
              //     borderColor: "white",
              //     transition: '250ms all ease'
              //   },
              //   ".MuiInputBase-root": {
              //     color: "white",
              //   },
              //   ".MuiSvgIcon-root": {
              //     color: "white",
              //   },
              //   ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
              //     color: "white",
              //   },
              //   "input:hover": {
              //     background:'transparent',
              //     color: "#29507e",
              //     fontWeight: 500,
              //   },
              //   ".MuiInputBase-root:hover ":{
              //     backgroundColor: "rgb(255, 255, 255)",
              //     border:'none',
              //     color: "#29507e",
              //     fontWeight: 500
              //   },
              //   ".MuiInputBase-root:hover .MuiSvgIcon-root":{
              //     color: "rgb(19, 46, 77)",
              //   },
              //   ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
              //     border:'none'
              //   }
              // }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              name="servicios_id"
              value={formik.values.servicios_id}
              onChange={formik.handleChange}
              // error={formik.errors.length > 0}
              error={formik.errors?.servicios_id}
              helperText={formik.errors?.servicios_id}
            >
              {dataDropdown.servicios?.map((servicio) => (
                <MenuItem
                  value={servicio.id}
                  key={servicio.tipo_servicio}
                  selected={true}
                >
                  {servicio.tipo_servicio} - {servicio.siglas}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            alignItems="center"
            gap={2}
            xs={12}
            pr={{xs:0,md:8}}
            sm={6}
            my={2}
          >
            <Typography
              variant="subtitle1"
              style={{ marginBottom:'3px' }}
              color="white"
            >
              Estado:
            </Typography>
            <TextField
              select
              fullWidth
              label="Seleccione estado"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
             
              // sx={{
              //   ".MuiOutlinedInput-notchedOutline": {
              //     borderColor: "white",
              //     transition: '250ms all ease'
              //   },
              //   ".MuiInputBase-root": {
              //     color: "white",
              //   },
              //   ".MuiSvgIcon-root": {
              //     color: "white",
              //   },
              //   ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
              //     color: "white",
              //   },
              //   "input:hover": {
              //     background:'transparent',
              //     color: "#29507e",
              //     fontWeight: 500,
              //   },
              //   ".MuiInputBase-root:hover ":{
              //     backgroundColor: "rgb(255, 255, 255)",
              //     border:'none',
              //     color: "#29507e",
              //     fontWeight: 500
              //   },
              //   ".MuiInputBase-root:hover .MuiSvgIcon-root":{
              //     color: "rgb(19, 46, 77)",
              //   },
              //   ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
              //     border:'none'
              //   }
              // }}
              sx={inputStyle}
              name="estado_id"
              value={formik.values.estado_id}
              // error={formik.errors.length > 0}
              onChange={formik.handleChange}
              error={formik.errors?.estado_id}
              helperText={formik.errors?.estado_id}
            >
              {dataDropdown.estados?.map((estado) => (
                <MenuItem value={estado.id} key={estado.tipo} selected={true}>
                  {estado.tipo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            // display={{ xs: "block", md: "flex" }}
            alignItems="center"
            gap={2}
            xs={12}
            md={6}
            pr={{xs:0,md:2}}
            my={2}
          >
            <Typography
              variant="subtitle1"
              color="white"
              style={{ marginBottom:'3px' }}
            >
              Destino / Origen / Servicio:
            </Typography>
            <TextField
              fullWidth
              sx={
                // ".MuiOutlinedInput-notchedOutline": {
                //   borderColor: "white",
                // },
                // ".MuiInputBase-root": {
                //   color: "white",
                // },
                inputStyle
              }
              InputLabelProps={{
                style: { color: "#fff" },
                texttransform: "uppercase",
              }}
              label="Inserte destino / origen / servicio"
              name="destino"
              value={formik.values.destino}
              onChange={formik.handleChange}
              // error={formik.errors.length > 0}
              error={formik.errors?.destino}
              helperText={formik.errors?.destino}
            />
          </Grid>

          <Grid
            item
            xs={12}
            align="center"
            pt={{ xs: 4, sm: 6 }}
            
          >
            <Button
              variant="outlined"
              onClick={resetForm}
              py={2}
              my={4}
              mx={4}
              
              sx={{ color:'white' }}
            >
              Limpiar registro
            </Button>
            <Button
              variant="contained"
              type="submit"
              py={2}
              my={4}
              mx={4}
              // sx={{ backgroundColor: "blue" }}
            >
              Crear registro
            </Button>
          </Grid>
          {openModal && (
            <BasicModal
              title=<CheckCircleOutlineIcon
                sx={{ fontSize: "50px", marginLeft: "-25px" }}
              />
              message="Registro creado con éxito"
              openModal={openModal}
              redirectTo={'/seguridad/ticket/crear'}
            />
          )}
        </Grid>
      </form>
    </Stack>
  );
};

export default FormTicket;

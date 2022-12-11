import React, { useState } from 'react'
import { Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
// import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import BasicModal from '../modals/Modal';




const validationSchema = yup.object({
    fecha_ingreso: yup.string().required('Campo requerido'),
    hora_ingreso: yup.string().required('Campo requerido'),
    interno: yup.number().required('Campo requerido'),
    empresa_id: yup.number().required('Campo requerido'),
    servicios_id: yup.number().required('Campo requerido'),
    estado_id: yup.string().required('Campo requerido'),
    destino: yup.string().required('Campo requerido'),
    usuarios_id: yup.string().required('Campo requerido')
    // plataformas: yup.string().required('Campo requerido')
  });

const FormEditTicket = ({ ticket }) => { 
    const [ openModal, setOpenModal ] = useState(false)
    const [ dataDropdown, setDataDropdown ] = useState({})
    // const navigate = useNavigate()
    const token = sessionStorage.getItem('jwt')

    const PLATAFORMAS = ["Sin asignar",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65]

    console.log('ticket prop:', ticket)

    const initialTicket = {
        fecha_ingreso: "", // '01-01-2022'
        hora_ingreso: "", // '12:00'
        interno: "", // 123
        empresa_id: "", // 2
        servicios_id: "", // 2
        usuarios_id: "", // 2
        plataformas: "" || null, // ? 1
        estado_id: "" , // '0'
        destino: "", // 'Mar de Ajo'
        hora_salida: "",
        fecha_salida: ""
    }

    const editTicket = {
        fecha_ingreso: ticket.fecha_ingreso, // '01-01-2022'
        hora_ingreso: ticket.hora_ingreso, // '12:00'
        interno: ticket.interno, // 123
        empresa_id: ticket.registro_empresa?.id, // 2
        servicios_id: ticket.registro_servicio.id, // 2
        usuarios_id: ticket.usuarios_id, // 2
        plataformas: ticket.registro_plataforma.id|| null, // ? 1
        estado_id: ticket.registro_estado.id, // '0'
        destino: ticket.destino, // 'Mar de Ajo'
        tipo_tv_id: ticket.tipo_tv_id, // 1 o 2
        fecha_salida: ticket.fecha_salida,
        hora_salida: ticket.hora_salida
    }

    
    React.useEffect(() => {
        const url = 'http://localhost:8080/informes/dataDropdown'

        axios.get(url, { headers: {"authorization": `Bearer ${token}` }} )
        .then(response =>  setDataDropdown(response.data))
        .catch(error => console.log('error jwt:', error.response.data.mensaje))

          console.log('datadropdown:', dataDropdown)
        // console.log('dataDropdown:', dataDropdown)

    }, [token])
    
    const formik = useFormik({
        initialValues: editTicket || initialTicket,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            const config = { headers: { authorization: `Bearer ${token}`}}
            const url = `http://localhost:8080/informes/modificar/${ticket.id}`
            const data = formik.values

            console.log('data to send:', data)

            axios.patch(url, data, config)
                .then((res) => {
                    // console.log('response', res)
                    // 
                    if(res.status === 200){
                        // const jwt = res.data
                        // escribe el jwt en session
                        // window.sessionStorage.setItem("jwt", jwt);
                        // redirecciona a la pagina principal
                        setOpenModal(true)
                        // navigate("/")
                        // return alert('ok')
                    }
                })
                .catch(function (error) {
                    console.log('Error:', error);
                });

        //   alert(JSON.stringify(values, null, 2));
        },
      });


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
            Editar ticket de ingresos:
          </Typography>
          <Grid container my={2}>
            <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              md={6}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Plataforma:
              </Typography>
              <TextField
                select
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    width: "200%",
                  },
                  ".MuiInputBase-root": {
                    color: "#fff",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{
                  type: "text",
                }}
                label="Seleccione plataforma"
                name="plataformas_id"
                value={formik.values.plataformas}
                onChange={formik.handleChange}
                error={formik.errors.plataformas}
                helperText={formik.errors.plataformas}
              >
                {dataDropdown.plataformas?.map((plataformas) => (
                  <MenuItem value={plataformas.id} >
                    {plataformas.plataforma}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              sm={6}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Estado:
              </Typography>
              <TextField
                select
                label="Seleccione estado"
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  ".MuiInputBase-root": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                  minWidth: "250px",
                }}
                name="estado_id"
                value={formik.values.estado_id}
                onChange={formik.handleChange}
                error={formik.errors.estado_id}
                helperText={formik.errors.estado_id}
              >
                {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                {dataDropdown.estados?.map((estado) => (
                  <MenuItem value={estado.id} selected={true}>
                    {estado.tipo}
                  </MenuItem>
                ))}
                {/* <MenuItem value={1} selected={true}>Sin servicio de plataforma</MenuItem> */}
                {/* <MenuItem value={2}>Ingresando</MenuItem> */}
              </TextField>
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
              <Typography
                variant="subtitle1"
                color="white"
                mb={{ xs: 1, sm: 0 }}
              >
                Fecha de salida:
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
                  type: "date",
                }}
                name="fecha_salida"
                value={formik.values.fecha_salida}
                onChange={formik.handleChange}
                error={formik.errors.fecha_salida}
                helperText={formik.errors.fecha_salida}
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
              <Typography
                variant="subtitle1"
                color="white"
                mb={{ xs: 1, sm: 0 }}
              >
                Hora de salida:
              </Typography>
              <TextField
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  ".MuiInputBase-root": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
                InputProps={{
                  type: "time",
                }}
                value={formik.values.hora_salida}
                name="hora_salida"
                onChange={formik.handleChange}
                error={formik.errors.hora_salida}
                helperText={formik.errors.hora_salida}
              />
            </Grid>
            <Grid item xs={12} py={4}>
              <Divider color='whitesmoke' />
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
              <Typography
                variant="subtitle1"
                color="white"
                mb={{ xs: 1, sm: 0 }}
              >
                Interno:
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
                  type: "text",
                }}
                value={formik.values.interno}
                name="interno"
                onChange={formik.handleChange}
                error={formik.errors.interno}
                helperText={formik.errors.interno}
              />
            </Grid>
            <Grid
              item
              display={{ xs: "none", md: "none" }}
              alignItems="center"
              gap={2}
              xs={12}
              sm={6}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Usuario ID:
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
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                label="Inserte usuario ID"
                name="usuarios_id"
                value={formik.values.usuarios_id}
                onChange={formik.handleChange}
                error={formik.errors.usuarios_id}
                helperText={formik.errors.usuarios_id}
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
              <Typography
                variant="subtitle1"
                color="white"
                mb={{ xs: 1, sm: 0 }}
              >
                Fecha de ingreso:
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
                  type: "date",
                }}
                name="fecha_ingreso"
                value={formik.values.fecha_ingreso}
                onChange={formik.handleChange}
                error={formik.errors.fecha_ingreso}
                helperText={formik.errors.fecha_ingreso}
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
              <Typography
                variant="subtitle1"
                color="white"
                mb={{ xs: 1, sm: 0 }}
              >
                Hora de ingreso:
              </Typography>
              <TextField
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  ".MuiInputBase-root": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
                InputProps={{
                  type: "time",
                }}
                value={formik.values.hora_ingreso}
                name="hora_ingreso"
                onChange={formik.handleChange}
                error={formik.errors.hora_ingreso}
                helperText={formik.errors.hora_ingreso}
              />
            </Grid>

            <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              md={6}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                mb={{ xs: 1, sm: 0 }}
                display={{ xs: "none", sm: "block" }}
              >
                Empresa:
              </Typography>
              <TextField
                select
                label="Seleccione Empresa"
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  ".MuiInputBase-root": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                  minWidth: "200px",
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                name="empresa_id"
                value={formik.values.empresa_id}
                onChange={formik.handleChange}
                error={formik.errors.empresa_id}
                helperText={formik.errors.empresa_id}
              >
                {dataDropdown.empresas?.map((empresa) => (
                  <MenuItem value={empresa.id} selected={true}>
                    {" "}
                    {empresa.empresa}{" "}
                  </MenuItem>
                ))}
                {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                {/* <MenuItem value={2}>ISL - Iselin</MenuItem> */}
                {/* <MenuItem value={3}>FLB - Flecha Bus </MenuItem> */}
              </TextField>
            </Grid>
            <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              md={6}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Tipo de servicio:
              </Typography>
              <TextField
                select
                label="Seleccione tipo de servicio"
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  ".MuiInputBase-root": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                  minWidth: "260px",
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                name="servicios_id"
                value={formik.values.servicios_id}
                onChange={formik.handleChange}
                error={formik.errors.servicios_id}
                helperText={formik.errors.servicios_id}
              >
                {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                {dataDropdown.servicios?.map((servicio) => (
                  <MenuItem value={servicio.id} selected={true}>
                    {servicio.tipo_servicio} - {servicio.siglas}
                  </MenuItem>
                ))}
                {/* <MenuItem value={1} selected={true}>Media distancia</MenuItem>
                            <MenuItem value={2}>Larga distancia</MenuItem>
                            <MenuItem value={3}>Corta distancia </MenuItem> */}
              </TextField>
            </Grid>
            {/* <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              sm={6}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Estado:
              </Typography>
              <TextField
                select
                label="Seleccione estado"
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  ".MuiInputBase-root": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                  minWidth: "250px",
                }}
                name="estado_id"
                value={formik.values.estado_id}
                onChange={formik.handleChange}
                error={formik.errors.estado_id}
                helperText={formik.errors.estado_id}
              >
                {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                {/* {dataDropdown.estados?.map((estado) => (
                  <MenuItem value={estado.id} selected={true}>
                    {estado.tipo}
                  </MenuItem>
                ))} */}
                {/* <MenuItem value={1} selected={true}>Sin servicio de plataforma</MenuItem> */}
                {/* <MenuItem value={2}>Ingresando</MenuItem> */}
              {/* </TextField>
            </Grid> */} 
            
            <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              md={6}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Destino / Origen:
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
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                label="Inserte destino..."
                name="destino"
                value={formik.values.destino}
                onChange={formik.handleChange}
                error={formik.errors.destino}
                helperText={formik.errors.destino}
              />
            </Grid>

            <Grid item sx={{ marginLeft: "auto" }} align='center' xs={12} pt={4}>
              <Button variant="contained" ml="auto" type="submit" my={2}>
                Modificar ingreso
              </Button>
            </Grid>
            {openModal && (
              <BasicModal
                title="Éxito"
                message="El registro fue modificado"
                openModal={openModal}
              />
            )}
          </Grid>
        </form>
      </Stack>
    );

}

export default FormEditTicket
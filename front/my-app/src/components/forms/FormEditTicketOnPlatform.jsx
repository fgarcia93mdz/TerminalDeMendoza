import React, { useState } from 'react'
import { Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
// import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import BasicModal from '../modals/Modal';




const validationSchema = yup.object({
    fecha_salida: yup.string().required('Campo requerido'),
    hora_salida: yup.string().required('Campo requerido'),
    // interno: yup.number().required('Campo requerido'),
    // empresa_id: yup.number().required('Campo requerido'),
    // servicios_id: yup.number().required('Campo requerido'),
    estado_id: yup.string().required('Campo requerido'),
    // destino: yup.string().required('Campo requerido'),
    usuarios_id: yup.string().required('Campo requerido')
    // plataformas: yup.string().required('Campo requerido')
  });

const FormEditTicketOnPlatform = ({ ticket }) => { 
    const [ openModal, setOpenModal ] = useState(false)
    const [ dataDropdown, setDataDropdown ] = useState({})
    // const navigate = useNavigate()
    const token = sessionStorage.getItem('jwt')

    const PLATAFORMAS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    console.log('ticket prop:', ticket)

    const initialTicket = {
      fecha_ingreso: "", // '01-01-2022'
      hora_ingreso: "", // '12:00'
      interno: "", // 123
      empresa_id: "", // 2
      servicios_id: "", // 2
      usuarios_id: "", // 2
      plataformas_id: "" || null, // ? 1
      estado_id: "", // '0'
      tipo_tv: "", // '0'
      destino: "", // 'Mar de Ajo'
      hora_salida: "",
      fecha_salida: "",
    };

    const editTicket = {
        fecha_ingreso: ticket.fecha_ingreso, // '01-01-2022'
        hora_ingreso: ticket.hora_ingreso, // '12:00'
        interno: ticket.interno, // 123
        empresa_id: ticket.registro_empresa?.id, // 2
        servicios_id: ticket.registro_servicio.id, // 2
        usuarios_id: ticket.usuarios_id, // 2
        plataformas_id: ticket.registro_plataforma.plataforma || null, // ? 1
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

        console.log('dataDropdown:', dataDropdown)

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


    // React.useEffect(() => {
    //     if(!formik.errors){
    //         // alert('no hay errores')
    //     }
    //     // if(formik.isValid) return alert('valido')
    //     // console.log('ticket', formik.values)
    // }, [formik])


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
            Editar ticket en plataforma:
          </Typography>
          <Grid container my={4}>
            <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              md={12}
              my={2}
            >
              {/* <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Plataforma:
              </Typography> */}
              <TextField
                select
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  ".MuiInputBase-root": {
                    color: "#fff",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                label="Plataforma asiganada"
                name="plataformas_id"
                value={formik.values.plataformas_id}
                onChange={formik.handleChange}
                error={formik.errors.plataformas_id}
                helperText={formik.errors.plataformas_id}
              >
                {PLATAFORMAS.map((plataforma) => (
                  <MenuItem value={plataforma} key={plataforma} selected={true}>
                    {plataforma}
                  </MenuItem>
                ))}
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
                Tipo de tv:
              </Typography>
              <TextField
                select
                label="Arribo, Partida o Sin asignar TV"
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
                name="tipo_tv_id"
                value={formik.values.tipo_tv_id}
                onChange={formik.handleChange}
                error={formik.errors.tipo_tv_id}
                helperText={formik.errors.tipo_tv_id}
              >
                {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                {dataDropdown.tipo_tv?.map((tipo_tv) => (
                  <MenuItem value={tipo_tv.id} selected={true}>
                    {tipo_tv.tipo}
                  </MenuItem>
                ))}
                {/* <MenuItem value={1} selected={true}>Sin servicio de plataforma</MenuItem> */}
                {/* <MenuItem value={2}>Ingresando</MenuItem> */}
              </TextField>
            </Grid>
            <Grid item xs={12} py={4}>

              <Divider color='white' />
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
              {/* <Typography
                variant="subtitle1"
                color="white"
                mb={{ xs: 1, sm: 0 }}
              >
                Interno:
              </Typography> */}
              <TextField
                label="Interno"
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
                  readOnly: true,
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
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
                  readOnly: true,
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
              {/* <Typography
                variant="subtitle1"
                color="white"
                mb={{ xs: 1, sm: 0 }}
              >
                Fecha de ingreso:
              </Typography> */}
              <TextField
                label="Fecha Ingreso"
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  ".MuiInputBase-root": {
                    color: "white",
                    width: "100%",
                  },
                }}
                InputProps={{
                  type: "date",
                  readOnly: true,
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
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
              {/* <Typography
                variant="subtitle1"
                color="white"
                mb={{ xs: 1, sm: 0 }}
              >
                Hora de ingreso:
              </Typography> */}
              <TextField
                label="Hora Ingreso"
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    width: "200%",
                  },
                  ".MuiInputBase-root": {
                    color: "white",
                  },
                }}
                InputProps={{
                  type: "time",
                  readOnly: true,
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
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
              {/* <Typography
                variant="subtitle1"
                color="white"
                mb={{ xs: 1, sm: 0 }}
                display={{ xs: "none", sm: "block" }}
              >
                Empresa:
              </Typography> */}
              <TextField
                label="Empresa"
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
                InputProps={{
                  type: "text",
                  readOnly: true,
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
              {/* <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Tipo de servicio:
              </Typography> */}
              <TextField
                label="Tipo de servicio"
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
                InputProps={{
                  readOnly: true,
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
            <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              md={6}
              my={2}
            >
              {/* <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Destino / Origen:
              </Typography> */}
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
                InputProps={{
                  readOnly: true,
                }}
                label=" Destino / Origen"
                name="destino"
                value={formik.values.destino}
                onChange={formik.handleChange}
                error={formik.errors.destino}
                helperText={formik.errors.destino}
              />
            </Grid>

            <Grid item sx={{ marginRight: "auto" }} align='center' xs={12} pt={4}>
              <Button variant="contained" ml="auto" type="submit" my={2}>
                Editar ingreso
              </Button>
            </Grid>
            {openModal && (
              <BasicModal
                title="Éxito"
                message="Ticket de ingreso creado"
                openModal={openModal}
              />
            )}
          </Grid>
        </form>
      </Stack>
    );

}

export default FormEditTicketOnPlatform
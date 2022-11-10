import React, { useState } from 'react'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import BasicModal from '../../components/modals/Modal';

const initialTicket = {
    fecha_ingreso: "", // '01-01-2022'
    hora_ingreso: "", // '12:00'
    interno: "", // 123
    empresa_id: "", // 2
    servicios_id: "", // 2
    usuarios_id: "", // 2
    plataformas_id: "", // ? 1
    estado_id: "", // '0'
    destino: "" // 'Mar de Ajo'
}


const validationSchema = yup.object({
    fecha_ingreso: yup.string().required('Campo requerido'),
    hora_ingreso: yup.string().required('Campo requerido'),
    interno: yup.number().required('Campo requerido'),
    empresa_id: yup.number().required('Campo requerido'),
    servicios_id: yup.number().required('Campo requerido'),
    estado_id: yup.string().required('Campo requerido'),
    destino: yup.string().required('Campo requerido'),
    usuarios_id: yup.string().required('Campo requerido'),
    plataformas_id: yup.string().required('Campo requerido')
  });

const FormTicket = () => { 
    const [ openModal, setOpenModal ] = useState(false)
    // const navigate = useNavigate()

   
    const formik = useFormik({
        initialValues: initialTicket,
        validationSchema: validationSchema,
        onSubmit: (values) => {
      
            const url = 'http://localhost:8080/api/plataforma/ticket/crear'
            const data = formik.values

            axios.post(url, data)
                .then((res) => {
                    console.log('response', res)
                    // 
                    if(res.status === 200){
                        // const jwt = res.data
                        // escribe el jwt en session
                        // window.sessionStorage.setItem("jwt", jwt);
                        // redirecciona a la pagina principal
                        return setOpenModal(true)
                        // navigate("/")
                        // return alert('ok')
                    }
                })
                .catch(function (error) {
                    console.log('Error:', error);
                });

          alert(JSON.stringify(values, null, 2));
          
        },
      });


    React.useEffect(() => {
        if(!formik.errors){
            alert('no hay errores')
        }
        // if(formik.isValid) return alert('valido')
        console.log('ticket', formik.values)
    }, [formik])


    return ( 
        <Stack sx={{background: '#0b2748', borderRadius: '25px', shadow:4}} my={4} mx={{xs: 1, sm: 6}} p={4} sm={6}>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h4" color='white'>Crear nuevo Ticket:</Typography>
                <Grid container my={4}>
                <Grid item display={{ xs: 'block', sm: 'flex'}} alignItems='center' gap={2} xs={12} sm={8}  my={2}>
                        <Typography variant='subtitle1' color='white' mb={{xs: 1, sm:0}}>Interno:</Typography>
                        <TextField 
                            sx={{
                                '.MuiOutlinedInput-notchedOutline':{
                                    borderColor: 'white'
                                },
                                '.MuiInputBase-root':{
                                    color: 'white'
                                }
                            }}
                            InputProps={{
                                type: "text"
                            }} 
                            value={formik.values.interno}
                            name='interno'
                            onChange={formik.handleChange}
                            error={formik.errors.interno}
                            helperText={formik.errors.interno}

                        />
                    </Grid>
                    
                    <Grid item  display={{ xs: 'block', sm: 'flex'}}  alignItems='center' gap={2} xs={12} sm={6} my={2}>
                        <Typography variant='subtitle1' color='white' mb={{xs: 1, sm: 0}}>Fecha de ingreso:</Typography>
                        <TextField 
                            sx={{
                                '.MuiOutlinedInput-notchedOutline':{
                                    borderColor: 'white'
                                },
                                '.MuiInputBase-root':{
                                    color: 'white'
                                }
                            }}
                            
                            InputProps={{
                                type: "date",
                            }} 
                            name='fecha_ingreso'
                            value={formik.values.fecha_ingreso}
                            onChange={formik.handleChange}
                            error={formik.errors.fecha_ingreso}
                            helperText={formik.errors.fecha_ingreso}
                        />
                    </Grid>
                    <Grid item  display={{ xs: 'block', sm: 'flex'}} alignItems='center' gap={2} xs={12} sm={6} my={2}>
                        <Typography variant='subtitle1' color='white'  mb={{xs: 1, sm: 0}}>Hora de ingreso:</Typography>
                        <TextField 
                            sx={{
                                '.MuiOutlinedInput-notchedOutline':{
                                    borderColor: 'white'
                                },
                                '.MuiInputBase-root':{
                                    color: 'white'
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'white',
                                },
                            }}
                            InputProps={{
                                type: "time"
                            }} 
                            value={formik.values.hora_ingreso}
                            name='hora_ingreso'
                            onChange={formik.handleChange}
                            error={formik.errors.hora_ingreso}
                            helperText={formik.errors.hora_ingreso}

                        />
                    </Grid>
                   
                    <Grid item display={{ xs: 'block', md: 'flex'}} alignItems='center' gap={2} xs={12} md={6} my={2}>
                        <Typography variant='subtitle1' color='white' mb={{xs: 1, sm:0}}>Empresa:</Typography>
                        <TextField
                            select
                            label='Seleccione Empresa'
                            sx={{
                                '.MuiOutlinedInput-notchedOutline':{
                                    borderColor: 'white'
                                },
                                '.MuiInputBase-root':{
                                    color: 'white'
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'white',
                                },
                                minWidth:'200px'
                            }}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            name='empresa_id'
                            value={formik.values.empresa_id}
                            onChange={formik.handleChange}
                            error={formik.errors.empresa_id}
                            helperText={formik.errors.empresa_id}
                        >
                            {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                            <MenuItem value={1} selected={true}>AND - Andesmar</MenuItem>
                            <MenuItem value={2}>ISL - Iselin</MenuItem>
                            <MenuItem value={3}>FLB - Flecha Bus </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item display={{ xs: 'block', md: 'flex'}}  alignItems='center' gap={2} xs={12} md={6} my={2}>
                        <Typography variant='subtitle1' color='white' display={{xs: 'none', sm: 'block'}}>Tipo de servicio:</Typography>
                        <TextField
                            select
                            label='Tipo de servicio'
                            sx={{
                                '.MuiOutlinedInput-notchedOutline':{
                                    borderColor: 'white'
                                },
                                '.MuiInputBase-root':{
                                    color: 'white'
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'white',
                                },
                                minWidth:'180px'
                            }}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            name='servicios_id'
                            value={formik.values.servicios_id}
                            onChange={formik.handleChange}
                            error={formik.errors.servicios_id}
                            helperText={formik.errors.servicios_id}
                        >
                            {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                            <MenuItem value={1} selected={true}>Media distancia</MenuItem>
                            <MenuItem value={2}>Larga distancia</MenuItem>
                            <MenuItem value={3}>Corta distancia </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item display={{ xs: 'block', md: 'flex'}}  alignItems='center' gap={2} xs={12} sm={6} my={2}>
                        <Typography variant='subtitle1' color='white' display={{xs:'none', sm:'block'}}>Tipo de servicio:</Typography>
                        <TextField
                            select
                            label='Seleccione tipo de servicio:'
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            sx={{
                                '.MuiOutlinedInput-notchedOutline':{
                                    borderColor: 'white'
                                },
                                '.MuiInputBase-root':{
                                    color: 'white'
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'white',
                                },
                                minWidth: '250px'
                            }}
                            name='estado_id'
                            value={formik.values.estado_id}
                            onChange={formik.handleChange}
                            error={formik.errors.estado_id}
                            helperText={formik.errors.estado_id}
                        >
                            {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                            <MenuItem value={1} selected={true}>Sin servicio de plataforma</MenuItem>
                            <MenuItem value={2}>Ingresando</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item display={{ xs: 'block', md: 'flex'}}  alignItems='center' gap={2} xs={12} md={6} my={2}>
                        <Typography variant='subtitle1' color='white' display={{xs:'none', sm:'block'}}>Destino / Servicio:</Typography>
                        <TextField
                            sx={{
                                '.MuiOutlinedInput-notchedOutline':{
                                    borderColor: 'white'
                                },
                                '.MuiInputBase-root':{
                                    color: 'white'
                                }
                            }}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            label='Inserte destino...'
                            name='destino'
                            value={formik.values.destino}
                            onChange={formik.handleChange}
                            error={formik.errors.destino}
                            helperText={formik.errors.destino}
                        />
                    </Grid>
                    <Grid item display={{ xs: 'block', md: 'flex'}}  alignItems='center' gap={2} xs={12} md={6} my={2}>
                        <Typography variant='subtitle1' color='white' display={{xs: 'none', sm: 'block'}}>Plataforma:</Typography>
                        <TextField
                            sx={{
                                '.MuiOutlinedInput-notchedOutline':{
                                    borderColor: 'white'
                                },
                                '.MuiInputBase-root':{
                                    color: 'white'
                                }
                            }}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            label='Inserte plataforma'
                            name='plataformas_id'
                            value={formik.values.plataformas_id}
                            onChange={formik.handleChange}
                            error={formik.errors.plataformas_id}
                            helperText={formik.errors.plataformas_id}
                        />
                    </Grid>
                    <Grid item display={{ xs: 'block', md: 'flex'}}  alignItems='center' gap={2} xs={12} sm={6} my={2}>
                        <Typography variant='subtitle1' color='white' display={{xs: 'none', sm: 'block'}}>Usuario ID:</Typography>
                        <TextField
                            sx={{
                                '.MuiOutlinedInput-notchedOutline':{
                                    borderColor: 'white'
                                },
                                '.MuiInputBase-root':{
                                    color: 'white'
                                }
                            }}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            label='Inserte usuario ID'
                            name='usuarios_id'
                            value={formik.values.usuarios_id}
                            onChange={formik.handleChange}
                            error={formik.errors.usuarios_id}
                            helperText={formik.errors.usuarios_id}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button  variant="contained" ml='auto' type="submit" my={2}>Crear ticket</Button>
                    </Grid>
                    {openModal && 
                        <BasicModal title='Exito' message='Ticket creado con exito' openModal={openModal} />
                    }
                </Grid>
            </form>
        </Stack>
    )

}

export default FormTicket
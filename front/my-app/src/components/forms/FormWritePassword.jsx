import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  Stack } from '@mui/system'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import * as yup from 'yup';
import BasicModal from '../modals/Modal';
import { useFormik } from 'formik';



const validationSchema = yup.object({
    password: yup.string().required('Campo requerido'),
    passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Las contraseñas tienen que ser iguales')
  });

const WritePassword = () => {
    const [ openModal, setOpenModal ] = useState(false)
    const token = window.sessionStorage.getItem('jwt')
    // const navigate = useNavigate()


    const initialValues = {
        password: '', // string
        passwordConfirmation: '' // number
    }
    const url = 'http://localhost:8080/users/modifyUser/:id'
    const config =  { headers: { 'authorization': `Bearer ${token}` } }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            const data = formik.values

            axios.post(url, data, config)
                .then((res) => {
                    if(res.status === 200){
                        setOpenModal(true)
                    }
                })
                .catch(function (error) {
                    console.log('Error send reset pasword:', error);
                });
        },
      });

    return (
        <Stack sx={{background: '#0b2748', borderRadius: '25px', shadow:4}} my={4} mx={{xs: 1, sm: 6}} p={4} sm={6}>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h4" color='white' align='center'>Necesitamos que ingreses una contraseña para continuar:</Typography>
                <Grid container my={4} sx={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                   
                    <Grid item display={{ xs: 'block', md: 'flex'}} alignItems='center' justifyContent='center' sx={{margin: 'auto'}} gap={2} xs={12} md={8} my={2}>
                        <Typography variant='subtitle1' color='white' mb={{xs: 1, sm:0}} display={{xs: 'none', sm: 'block'}}>Nueva Contraseña:</Typography>
                        <TextField
                            label='Escriba su contraseña'
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
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.errors.password}
                            helperText={formik.errors.password}
                        >
                            
                        </TextField>
                    </Grid>
                    <Grid item display={{ xs: 'block', sm: 'flex'}} alignItems='center' justifyContent='center' gap={2} xs={12}  my={2}>
                        <Typography variant='subtitle1' color='white' mb={{xs: 1, sm:0}}>Confirmar contraseña:</Typography>
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
                            value={formik.values.passwordConfirmation}
                            name='passwordConfirmation'
                            onChange={formik.handleChange}
                            error={formik.errors.passwordConfirmation}
                            helperText={formik.errors.passwordConfirmation}
                        />
                    </Grid>
                    <Grid item sx={{marginRight: 'auto'}} xs={12}>
                        <Button  variant="contained" ml='auto' type="submit" my={2}>Resetear contraseña</Button>
                    </Grid>
                    {openModal && 
                        <BasicModal title='Exito' message='Contraseña reseteada con exito' openModal={openModal}  />
                    }
                </Grid>
            </form>
        </Stack>
    )
}

export default WritePassword
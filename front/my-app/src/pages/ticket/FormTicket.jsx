import React from 'react'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Stack, shadows } from '@mui/system'

const FormTicket = () => { 


    return ( 
        <Stack sx={{background: '#0b2748', borderRadius: '25px', shadow:4}} my={4} mx={6} p={4} mb={6}>
            <form>
                <Typography variant="h4" color='white'>Crear nuevo Ticket:</Typography>
                <Grid container my={4}>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} md={4} my={2}>
                        <Typography variant='subtitle1' color='white'>Fecha de ingreso:</Typography>
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
                            
                        />
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} md={4} my={2}>
                        <Typography variant='subtitle1' color='white'>Hora de ingreso:</Typography>
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
                        />
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} md={4} my={2}>
                        <Typography variant='subtitle1' color='white'>Interno:</Typography>
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
                        />
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} md={6} my={2}>
                        <Typography variant='subtitle1' color='white'>Empresa:</Typography>
                        <TextField
                            select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={company}
                            // label="Age"
                            // onChange={handleChange}
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
                        >
                            {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                            <MenuItem value={10} selected={true}>AND - Andesmar</MenuItem>
                            <MenuItem value={20}>ISL - Iselin</MenuItem>
                            <MenuItem value={30}>FLB - Flecha Bus </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} md={6} my={2}>
                        <Typography variant='subtitle1' color='white'>Tipo de servicio:</Typography>
                        <TextField
                            select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={company}
                            // label="Age"
                            // onChange={handleChange}
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
                           
                        >
                            {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                            <MenuItem value={10} selected={true}>Media distancia</MenuItem>
                            <MenuItem value={20}>Larga distancia</MenuItem>
                            <MenuItem value={30}>Corta distancia </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} my={2}>
                        <Typography variant='subtitle1' color='white'>Estado:</Typography>
                        <TextField
                            select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={company}
                            // label="Age"
                            // onChange={handleChange}
                            label='Seleccione Estado'
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
                        >
                            {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                            <MenuItem value={10} selected={true}>Sin servicio de plataforma</MenuItem>
                            <MenuItem value={20}>Ingresando</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} my={2}>
                        <Typography variant='subtitle1' color='white'>Destino / Servicio:</Typography>
                        <TextField
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={company}
                            // label="Age"
                            // onChange={handleChange}
                            autoWidth
                            sx={{
                                '.MuiOutlinedInput-notchedOutline':{
                                    borderColor: 'white'
                                },
                                '.MuiInputBase-root':{
                                    color: 'white'
                                }
                            }}
                            placeholder='Inserte destino...'
                        />
                    </Grid>
                    <Button variant="contained" my={2}>Crear ticket</Button>
                </Grid>
            </form>
        </Stack>
    )

}

export default FormTicket
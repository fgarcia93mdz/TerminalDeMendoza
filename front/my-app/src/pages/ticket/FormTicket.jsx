import React from 'react'
import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'

const FormTicket = () => { 

    return ( 
        <Stack my={8} mx={8}>
            <form>
                <Typography variant="h4" color='white'>Crear nuevo Ticket:</Typography>
                <Grid container my={4}>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} md={4}>
                        <Typography variant='subtitle1' color='white'>Fecha de ingreso:</Typography>
                        <TextField 
                            InputProps={{
                                type: "date"
                            }} 
                        />
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} md={4}>
                        <Typography variant='subtitle1' color='white'>Hora de ingreso:</Typography>
                        <TextField 
                            InputProps={{
                                type: "time"
                            }} 
                        />
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} md={4}>
                        <Typography variant='subtitle1' color='white'>Interno:</Typography>
                        <TextField 
                            InputProps={{
                                type: "numer"
                            }} 
                        />
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} md={6}>
                        <Typography variant='subtitle1' color='white'>Empresa:</Typography>
                        <TextField
                            select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={company}
                            // label="Age"
                            // onChange={handleChange}
                            autoWidth
                        >
                            {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                            <MenuItem value={10} selected={true}>AND - Andesmar</MenuItem>
                            <MenuItem value={20}>ISL - Iselin</MenuItem>
                            <MenuItem value={30}>FLB - Flecha Bus</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12} md={6}>
                        <Typography variant='subtitle1' color='white'>Tipo de servicio:</Typography>
                        <TextField
                            select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={company}
                            // label="Age"
                            // onChange={handleChange}
                            autoWidth
                        >
                            {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                            <MenuItem value={10} selected={true}>Media distancia</MenuItem>
                            <MenuItem value={20}>Larga distancia</MenuItem>
                            <MenuItem value={30}>Corta distancia </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12}>
                        <Typography variant='subtitle1' color='white'>Estado:</Typography>
                        <TextField
                            select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={company}
                            // label="Age"
                            // onChange={handleChange}
                            autoWidth
                        >
                            {/* <MenuItem value={'default'} disabled >Seleccione una opcion</MenuItem> */}
                            <MenuItem value={10} selected={true}>Sin servicio de plataforma</MenuItem>
                            <MenuItem value={20}>Ingresando</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item display='flex' alignItems='center' gap={2} xs={12}>
                        <Typography variant='subtitle1' color='white'>Destino / Servicio:</Typography>
                        <TextField
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={company}
                            // label="Age"
                            // onChange={handleChange}
                            autoWidth
                        />
                    </Grid>
                    <Button variant="contained">Crear ticket</Button>
                </Grid>
            </form>
        </Stack>
    )

}

export default FormTicket
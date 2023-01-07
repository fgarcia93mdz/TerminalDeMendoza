import React, { useState } from 'react'
import { Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
// import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import BasicModal from '../modals/Modal';




const validationSchema = yup.object({
    empresa: yup.string().required('Campo requerido'),
    siglas: yup.string().required('Campo requerido'),
    // img: yup.string().required('Campo requerido'),
    cuit: yup.string().required('Campo requerido'),
  });

const FormCompany = ({ company }) => { 
    const [ openModal, setOpenModal ] = useState(false)
    const [ dataDropdown, setDataDropdown ] = useState({})
    // const navigate = useNavigate()
    const token = sessionStorage.getItem('jwt')

    console.log('company from prop:', company)

    const initialCompany =  {
          "empresa": "",
          "siglas": "",
          "img": "",
          "cuit": ""
        }

    const editCompany = {
        "empresa": company?.empresa, // 'Andesmar'
        "siglas": company?.siglas, // 'AND'
        "img": company?.img, // andesmar.png
        "cuit": company?.cuit, // 32536515
    }

    
    const formik = useFormik({
        initialValues: editCompany || initialCompany,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            const config = { headers: { authorization: `Bearer ${token}`}}
            const url = `http://localhost:8080/empresas/${company.id}`
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
            Editar Empresa:
          </Typography>
          <Grid container my={2}>
            <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              md={12}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Nombre de la Empresa:
              </Typography>
              <TextField
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
                label=""
                name="empresa"
                value={formik.values.empresa}
                onChange={formik.handleChange}
                error={formik.errors.empresa}
                helperText={formik.errors.empresa}
              >
               
              </TextField>
            </Grid>
            <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              sm={12}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Siglas de la empresa:
              </Typography>
              <TextField
                label=""
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
                InputProps={{
                    type: "text",
                }}
                name="siglas"
                value={formik.values.siglas}
                onChange={formik.handleChange}
                error={formik.errors.siglas}
                helperText={formik.errors.siglas}
              >
                
              </TextField>
            </Grid>
            {/* <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              sm={12}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                Imagen de la empresa:
              </Typography>
              <TextField
                label=""
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
                InputProps={{
                    type: "file",
                }}
                name="img"
                value={formik.values.img}
                onChange={formik.handleChange}
                error={formik.errors.img}
                helperText={formik.errors.img}
              >
                
              </TextField>
            </Grid> */}
            <Grid
              item
              display={{ xs: "block", md: "flex" }}
              alignItems="center"
              gap={2}
              xs={12}
              sm={12}
              my={2}
            >
              <Typography
                variant="subtitle1"
                color="white"
                display={{ xs: "none", sm: "block" }}
              >
                CUIT de la empresa:
              </Typography>
              <TextField
                label=""
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
                InputProps={{
                    type: "text",
                }}
                name="cuit"
                value={formik.values.cuit}
                onChange={formik.handleChange}
                error={formik.errors.cuit}
                helperText={formik.errors.cuit}
              >
                
              </TextField>
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

export default FormCompany
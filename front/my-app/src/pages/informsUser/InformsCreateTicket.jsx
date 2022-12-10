import React, { useState } from "react";
import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
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
  const token = sessionStorage.getItem("jwt");
  const config = { headers: { authorization: `Bearer ${token}` } };

  const initialTicket = {
    fecha_ingreso: "", // '01-01-2022'
    hora_ingreso: "", // '12:00'
    interno: "", // 123
    empresa_id: "", // 2
    servicios_id: "", // 2
    estado_id: "", // '0'
    destino: "", // 'Mar de Ajo'
    tipo_tv_id: 3,
  };

  const validationSchema = yup.object({
    fecha_ingreso: yup.string().required("Campo requerido"),
    hora_ingreso: yup.string().required("Campo requerido"),
    interno: yup.number().notRequired(),
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
    initialValues: initialTicket,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const url = "http://localhost:8080/informes/nuevo";
      const data = formik.values;
      console.log("data form create ticket", data);

      
      axios.post(url, data, config)
        .then((res) => {
          if (res.status === 200) {
            setOpenModal(true);
          }
        })
        .catch(function (error) {
          console.log("Error:", error);
        });

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
              // error={formik.errors.interno?.length > 0}
              error={formik.errors.interno}
              helperText={formik.errors?.interno}
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
              // error={formik.errors.length > 0}
              error={formik.errors?.hora_ingreso}
              helperText={formik.errors?.hora_ingreso}
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
              // error={formik.errors.length > 0}
              error={formik.errors?.empresa_id}
              helperText={formik.errors?.empresa_id}
            >
              {dataDropdown.empresas?.map((empresa) => (
                <MenuItem
                  value={empresa.id}
                  key={empresa.empresa}
                  selected={true}
                >
                  {" "}
                  {empresa.empresa}{" "}
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
              Destino / Origen / Servicio:
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
              // error={formik.errors.length > 0}
              error={formik.errors?.destino}
              helperText={formik.errors?.destino}
            />
          </Grid>

          <Grid
            item
            // sx={{
            //   display: "flex",
            //   justifyContent: "flex-end",
            //   marginRight: { xs: 0, sm: 8 },
            // }}
            xs={12}
            align='center'
            pt={{xs: 4, sm: 6}}
          >
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
            />
          )}
        </Grid>
      </form>
    </Stack>
  );
};

export default FormTicket;

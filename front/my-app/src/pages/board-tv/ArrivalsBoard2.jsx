import { CircularProgress } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GenericTable from "../../components/table/TableArrivals";
import Greating from "../../components/clock2/Greating";
// inicio
import Typography from "@mui/material/Typography";

import "./ArrivalsBoard.styles.css";
import TicketCard from "../../components/ticketCards/TicketCard";

// import { useSelector } from 'react-redux';

const ArrivalsBoard = () => {
  const [time, changeTime] = useState(new Date().toLocaleTimeString());
  /*const ap = ( time < 12) ? "<span>AM</span>":"<span>PM</span>";*/

  useEffect(function () {
    setInterval(() => {
      changeTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const [arribos, setArribos] = React.useState([]);

  const getArrivals = () => {
    axios
      .get("http://localhost:8080/plataforma/arribos")
      .then((data) => {
        setArribos(data.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getArrivals();

    setInterval(() => {
      getArrivals();
    }, 10000);
  }, []);

  return (
    <>
      <div className="containerBoard">
        {/* ACA VA ARRIBOS O PARTIDAS EN ESPANOL O INGLES, SOLO PARA LOS TELEVISORES ME PIDIO MI VIEJO */}
        <div className="div_reloj">
          <Typography
            textAlign="left"
            fontSize={{ xs: "15px", sm: "20px", md: "30px" }}
            marginLeft={{ xs: "5%", sm: "2%" }}
            fontFamily="Roboto"
            textTransform=" uppercase"
          >
            Arribos - Arrivals
          </Typography>
          {/* RELOJ */}
          <Greating text={time} />
        </div>
        <div>
          {arribos.length === 0 && (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              height={"40vh"}
            >
              <CircularProgress />
            </Stack>
          )}
          {arribos.length > 0 && <GenericTable props={arribos} />}
        </div>
      </div>
    </>
  );
};

export default ArrivalsBoard;

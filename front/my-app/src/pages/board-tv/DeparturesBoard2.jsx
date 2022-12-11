import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import GenericTable from "../../components/table/TableDepartures";
import Typography from "@mui/material/Typography";
import Greating from "../../components/clock2/Greating";
import "./ArrivalsBoard.styles.css";

const DeparturesBoard = () => {
  const [time, changeTime] = useState(new Date().toLocaleTimeString());
  /*const ap = ( time < 12) ? "<span>AM</span>":"<span>PM</span>";*/

  useEffect(function () {
    setInterval(() => {
      changeTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const [partidas, setPArtidas] = React.useState([]);

  const getPartidas = () => {
    axios
      .get("http://localhost:8080/plataforma/partidas")
      .then((data) => {
        return setPArtidas(data.data);
      })
      .catch((err) => console.log("Error GET departures:", err));
  };

  useEffect(() => {
    getPartidas();
    setInterval(() => {
      getPartidas();
    }, 10000);
  }, []);

  return (
    <>
      <div className="containerBoard">
        <div className="div_reloj">
          {/* ACA VA ARRIBOS O PARTIDAS EN ESPANOL O INGLES, SOLO PARA LOS TELEVISORES ME PIDIO MI VIEJO */}
          <Typography
            textAlign="left"
            fontSize={{ xs: "15px", sm: "20px", md: "30px" }}
            marginLeft={{ xs: "5%", sm: "2%" }}
            fontFamily="Roboto"
            textTransform=" uppercase"
          >
            Partidas - Departures
          </Typography>
          {/* RELOJ */}
          <Greating text={time} />
        </div>

        <div>
          {partidas.length === 0 && (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              height={"40vh"}
            >
              <CircularProgress />
            </Stack>
          )}
          {partidas.length > 0 && <GenericTable props={partidas} />}
        </div>
      </div>
    </>
  );
};

export default DeparturesBoard;

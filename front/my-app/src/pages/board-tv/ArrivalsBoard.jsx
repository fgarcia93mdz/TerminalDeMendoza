import { Box, CircularProgress } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import GenericTable from "../../components/table/TableArrivals";

// inicio

import "./ArrivalsBoard.styles.css";
import TicketCard from "../../components/ticketCards/TicketCard";

// import { useSelector } from 'react-redux';

const ArrivalsBoard = () => {
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
          {arribos.length > 0 && 
            <Box display={{xs:'none', sm:'block'}}>
              <GenericTable props={arribos} />
            </Box>
          }
          {arribos.length > 0 && 
            arribos.map( ticket => <TicketCard />)}
          {arribos.length > 0 && 
            arribos.map( ticket => <TicketCard />)}
            {arribos.length > 0 && 
            arribos.map( ticket => <TicketCard />)}
        </div>
      </div>
    </>
  );
};

export default ArrivalsBoard;

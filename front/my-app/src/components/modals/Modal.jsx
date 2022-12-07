import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";
import { fontSize } from '@mui/system';
import { Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "15px"
};
const titulo = {
  color: '#1C40C0',
  // marginLeft: '50%',
  textAlign: 'center',
  fontWeight: 'bold'
}

// title: 'Exito' string
// message: 'El ticket se ha creado correctamente' string
// isOpen: true boolean abre el modal


const closeSession = () => {
  window.location.reload();
};
export default function BasicModal({ title , message, openModal }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log('openModal', openModal)

  React.useEffect(() => {
    setOpen(openModal)
  }, [openModal]);

  

  return (
    <Stack >
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={titulo}
          >
            {title}
          </Typography>
          <Typography
            textAlign="center"
            id="modal-modal-description"
            sx={{ mt:1, fontSize: "20px", fontWeight: "semi-bold", color: "#1C40C0" }}
          >
            {message}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              fontSize: "15px",
              left: "27%",
              borderRadius: '25px',
              px: 5
            }}
            size='small'
            onClick={() => closeSession()}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Stack>
  );
}
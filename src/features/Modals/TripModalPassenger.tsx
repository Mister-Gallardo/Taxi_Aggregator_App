import { Typography, Modal, Box, Button } from "@mui/material";
import { modalStyle } from "./Modals.styles";
import { TripModalPassengerProps } from "./Modals.types";

const TripModalPassenger: React.FC<TripModalPassengerProps> = ({
  open,
  handleClose,
  trip,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h4" textAlign="center">
          Детали поездки
        </Typography>
        <Box
          sx={{
            width: "100%",
            marginTop: 4,
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            justifyContent: { lg: "space-around", xs: "none" },
            alignItems: { lg: "none", xs: "center" },
            gap: { lg: 0, xs: 2 },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography sx={{ fontSize: 20 }}>
              <strong>Регион:</strong> {trip.region}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              <strong>Тариф:</strong> {trip.tariff}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography sx={{ fontSize: 20 }}>
              <strong>Куда:</strong> {trip.to}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              <strong>Откуда:</strong> {trip.from}
            </Typography>
          </Box>
        </Box>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{ mt: 8, width: "60%", fontSize: 18, fontWeight: "bold" }}
        >
          Закрыть
        </Button>
      </Box>
    </Modal>
  );
};

export default TripModalPassenger;

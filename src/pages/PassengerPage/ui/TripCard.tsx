import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Modal,
  Box,
  Button,
} from "@mui/material";

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  minWidth: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

interface TripCardProps {
  region: string;
  from: string;
  to: string;
  tariff: string;
}

const TripCard: React.FC<TripCardProps> = ({ region, from, to, tariff }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          width: '100%',
          minWidth: 270,
          margin: "16px auto",
          cursor: "pointer",
          background:
            "linear-gradient(135deg,rgb(230, 237, 241),rgb(171, 187, 200))",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
          borderRadius: "16px",
          padding: "16px",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
        onClick={handleOpen}
      >
        <CardContent sx={{}}>
          <Typography variant="h5" fontWeight="bold">
            🚗 Регион: {region}
          </Typography>
          <Box
            sx={{
              width: { lg: "70%", md: "100%" },
              marginTop: "15px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "none", sm: "space-between" },
              gap: { xs: 1, sm: "none" },
            }}
          >
            <Typography variant="body1">
              <strong>Откуда:</strong> {from}
            </Typography>
            <Typography variant="body1">
              <strong>Куда:</strong> {to}
            </Typography>
            <Typography variant="body1">
              <strong>Тариф:</strong> {tariff}
            </Typography>
          </Box>
        </CardContent>
      </Card>

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
                <strong>Регион:</strong> {region}
              </Typography>
              <Typography sx={{ fontSize: 20 }}>
                <strong>Тариф:</strong> {tariff}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography sx={{ fontSize: 20 }}>
                <strong>Куда:</strong> {to}
              </Typography>
              <Typography sx={{ fontSize: 20 }}>
                <strong>Откуда:</strong> {from}
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
    </>
  );
};

export default TripCard;

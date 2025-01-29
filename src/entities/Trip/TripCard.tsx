import { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import TripModalDriver from "../../features/Modals/TripModalDriver";
import TripModalPassenger from "../../features/Modals/TripModalPassenger";
import { TripCardProps } from "./Trip.types";

const TripCard: React.FC<TripCardProps> = ({
  trip,
  markAsDone
}) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ModalComponent =
    location.pathname === "/driver" ? (
      <TripModalDriver open={open} handleClose={handleClose} markAsDone={markAsDone as (id: number) => void} tripId={trip.id} />
    ) : (
      <TripModalPassenger
        open={open}
        handleClose={handleClose}
        trip={trip}
      />
    );

  return (
    <>
      <Card
        sx={{
          width: "100%",
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
        onClick={() => {
          if (
            (location.pathname === "/driver" && trip.status !== "Завершенные") ||
            location.pathname !== "/driver"
          ) {
            handleOpen();
          } else alert("Поездка уже завершена");
        }}
      >
        <CardContent sx={{}}>
          <Typography variant="h5" fontWeight="bold">
            🚗 Регион: {trip.region}
          </Typography>
          <Box
            sx={{
              width: { lg: "70%", md: "100%" },
              marginTop: "15px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "none", sm: "space-between" },
              gap: { xs: 1, sm: "none" },
            }}
          >
            <Typography variant="body1">
              <strong>Откуда:</strong> {trip.from}
            </Typography>
            <Typography variant="body1">
              <strong>Куда:</strong> {trip.to}
            </Typography>
            <Typography variant="body1">
              <strong>Тариф:</strong> {trip.tariff}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {ModalComponent}
    </>
  );
};

export default TripCard;

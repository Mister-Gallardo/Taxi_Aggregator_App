import { Typography, Modal, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { modalStyle } from "./Modals.styles";
import { TripModalDriverProps } from "./Modals.types";

const TripModalDriver: React.FC<TripModalDriverProps> = ({
  open,
  handleClose,
  markAsDone,
  tripId,
}) => {
  const [status, setStatus] = useState<
    "initial" | "started" | "arrived" | "completed"
  >("initial");

  useEffect(() => {
    if (!open) {
      setStatus("initial");
    }
  }, [open]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h4" textAlign="center">
          Опции поездки
        </Typography>
        <Box
          sx={{
            width: "100%",
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Button
            sx={{ width: "100%", fontSize: 18 }}
            variant="contained"
            color="primary"
            onClick={() => setStatus("started")}
            disabled={status !== "initial"}
          >
            Начать поездку
          </Button>
          <Button
            sx={{ width: "100%", fontSize: 18 }}
            variant="contained"
            color="warning"
            onClick={() => setStatus("arrived")}
            disabled={status !== "started"}
          >
            На месте
          </Button>
          <Button
            sx={{ width: "100%", fontSize: 18 }}
            variant="contained"
            color="success"
            onClick={() => {
              markAsDone(tripId);
              handleClose();
            }}
            disabled={status !== "arrived"}
          >
            Завершить поездку
          </Button>
        </Box>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{ mt: 8, width: "60%", fontSize: 18, fontWeight: "bold" }}
          color="error"
        >
          Отменить
        </Button>
      </Box>
    </Modal>
  );
};

export default TripModalDriver;

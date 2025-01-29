import {
  Box,
  Button,
  InputLabel,
  Modal,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { ITrip, store } from "../../../app/store";

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

const ModalComponent: React.FC<{
  trips: ITrip[];
  open: boolean;
  setOpen: (newVal: boolean) => void;
}> = ({
  trips,
  open,
  setOpen,
}: {
  trips: ITrip[];
  open: boolean;
  setOpen: (newVal: boolean) => void;
}) => {
  const regionRef = useRef<HTMLInputElement>(null);
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);
  const tariffRef = useRef<HTMLSelectElement>(null);

  const handleAddTrip = () => {
    if (
      !regionRef.current?.value ||
      !fromRef.current?.value ||
      !toRef.current?.value ||
      !tariffRef.current?.value
    ) {
      alert("Введите все значения.");
      return;
    }

    const trip: ITrip = {
      id: trips.length + 1,
      region: regionRef.current.value,
      from: fromRef.current.value,
      to: toRef.current.value,
      tariff: tariffRef.current.value,
      status: "active",
    };

    trips.unshift(trip);
    store.set(trips);
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={modalStyle}>
        <Typography variant="h4" textAlign="center">
          Добавить поездку
        </Typography>
        <Box
          sx={{
            width: "70%",
            minWidth: 250,
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            inputRef={regionRef}
            label="Регион"
            variant="outlined"
            required
          />
          <TextField
            inputRef={fromRef}
            label="Откуда"
            variant="outlined"
            required
          />
          <TextField
            inputRef={toRef}
            label="Куда"
            variant="outlined"
            required
          />
          <Box>
            <InputLabel
              sx={{ marginBottom: 0 }}
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Тариф
            </InputLabel>
            <NativeSelect
              inputRef={tariffRef}
              defaultValue="Эконом"
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value="Эконом">Эконом</option>
              <option value="Комфорт">Комфорт</option>
              <option value="Бизнес">Бизнес</option>
            </NativeSelect>
          </Box>
        </Box>
        <Button
          onClick={handleAddTrip}
          variant="contained"
          sx={{ mt: 8, width: "60%", fontSize: 18, fontWeight: "bold" }}
        >
          Добавить
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalComponent;

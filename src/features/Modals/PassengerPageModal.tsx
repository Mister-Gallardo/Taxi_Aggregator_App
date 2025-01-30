import {
  Autocomplete,
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { regions, store } from "../../app/store";
import { fetchAddress } from "../../pages/PassengerPage/model/DaData.service";
import { ITrip } from "../../entities/Trip/Trip.types";
import { modalStyle } from "./Modals.styles";
import MyInputLabel from "../../shared/ui/MyInputLabel";

const ModalComponent: React.FC<{
  trips: ITrip[];
  setTrips: (newVal: ITrip[]) => void;
  open: boolean;
  setOpen: (newVal: boolean) => void;
}> = ({ trips, setTrips, open, setOpen }) => {
  const [addressOptions, setAddressOptions] = useState<string[]>([]);
  const [fromValue, setFromValue] = useState<string>("");

  const regionRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);
  const tariffRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (fromValue.length > 2) {
      fetchAddress(fromValue).then((response) => {
        setAddressOptions(response.suggestions.map((s: any) => s.value));
      });
    }
  }, [fromValue]);

  const handleAddTrip = () => {
    if (
      !regionRef.current?.value ||
      !fromValue ||
      !toRef.current?.value ||
      !tariffRef.current?.value
    ) {
      alert("Введите все значения.");
      return;
    }

    const trip: ITrip = {
      id: trips.length + 1,
      region: regionRef.current.value,
      from: fromValue,
      to: toRef.current.value,
      tariff: tariffRef.current.value,
      status: "Активные",
    };

    setTrips([trip, ...trips]);
    store.set([trip, ...trips]);
    setFromValue("");
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
          <>
            <MyInputLabel value="Регион" />
            <Select
              inputRef={regionRef}
              defaultValue="Московская область"
              variant="outlined"
              fullWidth
              displayEmpty
            >
              {regions.map((region) => (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </>

          <Autocomplete
            freeSolo
            disablePortal
            options={addressOptions}
            inputValue={fromValue}
            onInputChange={(_, newValue) => setFromValue(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Откуда"
                required
                inputProps={{
                  ...params.inputProps,
                  maxLength: 200,
                }}
              />
            )}
          />

          <TextField
            inputRef={toRef}
            label="Куда"
            variant="outlined"
            inputProps={{ maxLength: 200 }}
            required
          />
          <Box>
            <MyInputLabel value="Тариф" />
            <Select
              inputRef={tariffRef}
              defaultValue="Эконом"
              variant="outlined"
              fullWidth
              displayEmpty
              data-testid="tariff_select"
            >
              {["Эконом", "Комфорт", "Бизнес"].map((tariff) => (
                <MenuItem key={tariff} value={tariff}>
                  {tariff}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        <Button
          onClick={handleAddTrip}
          variant="contained"
          sx={{ mt: 4, width: "60%", fontSize: 18, fontWeight: "bold" }}
        >
          Добавить
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalComponent;

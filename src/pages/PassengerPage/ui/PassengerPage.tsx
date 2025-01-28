import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  NativeSelect,
  Pagination,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TripCard from "./TripCard";
import { ITrip, store } from "../lib/Data";

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

const PassengerPage: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const regionRef = useRef<HTMLInputElement>(null);
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);
  const tariffRef = useRef<HTMLSelectElement>(null);

  const navigate = useNavigate();

  useEffect(() => {

  }, [])

  const trips: ITrip[] = store.get();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTrips: ITrip[] = trips.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(trips.length / itemsPerPage);

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
    };

    store.set([trip, ...trips]);
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "70vw",
          minWidth: 310,
          maxWidth: 900,
          margin: "0 auto",
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ paddingBottom: "20px", textAlign: 'center' }}>
          Страница пассажира
        </Typography>
        <Button
          onClick={() => setOpen(true)}
          sx={{ alignSelf: "start", fontSize: "18px", borderRadius: "10px" }}
          variant="contained"
        >
          Добавить поездку
        </Button>
        {currentTrips.map((trip) => (
          <TripCard
            key={trip.id}
            region={trip.region}
            from={trip.from}
            to={trip.to}
            tariff={trip.tariff}
          />
        ))}

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, sm: 4 },
          }}
        >
          <Select
            sx={{ order: { xs: 2, sm: 1 } }}
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={5}>Пять</MenuItem>
            <MenuItem value={10}>Десять</MenuItem>
            <MenuItem value={20}>Двадцать</MenuItem>
          </Select>
          <Pagination
            sx={{ order: { xs: 1, sm: 2 } }}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            count={totalPages}
            variant="outlined"
            size="large"
            shape="rounded"
            siblingCount={0}
          />
        </Box>

        <Button
          variant="outlined"
          sx={{ margin: "50px 0px 20px" }}
          onClick={() => navigate("/")}
        >
          Вернуться к выбору роли
        </Button>
      </Box>

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
    </>
  );
};

export default PassengerPage;

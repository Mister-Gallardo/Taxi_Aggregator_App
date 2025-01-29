import { Box, Button, SelectChangeEvent, Typography } from "@mui/material";
import React, { useState } from "react";
import TripCard from "../../../shared/ui/TripCard";
import { ITrip, store } from "../../../app/store";
import PaginationComponent from "../../../shared/ui/Pagination";
import PreviousButton from "../../../shared/ui/PreviousButton";
import Filter from "../../../shared/ui/Filter";
import ModalComponent from "./ModalComponent";

// вынесем за комопонент, чтоб get() не вызывался при каждом рендене
const trips: ITrip[] = store.get();

const PassengerPage: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredTrips =
    filter === "all"
      ? trips
      : filter === "active"
      ? trips.filter((trip) => trip.status === "active")
      : trips.filter((trip) => trip.status === "inactive");

  const currentTrips = filteredTrips.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);

  const handleChangeFilter = (e: SelectChangeEvent) => {
    setCurrentPage(1);
    setFilter(e.target.value);
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
        <Typography
          variant="h3"
          sx={{ paddingBottom: "20px", textAlign: "center" }}
        >
          Страница пассажира
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={() => setOpen(true)}
            sx={{ alignSelf: "start", fontSize: "18px", borderRadius: "10px" }}
            variant="contained"
          >
            Добавить поездку
          </Button>
          <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
        </Box>
        {currentTrips.map((trip) => (
          <TripCard
            key={trip.id}
            region={trip.region}
            from={trip.from}
            to={trip.to}
            tariff={trip.tariff}
          />
        ))}

        <PaginationComponent
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />

        <PreviousButton />
      </Box>

      <ModalComponent trips={trips} open={open} setOpen={setOpen} />
    </>
  );
};

export default PassengerPage;

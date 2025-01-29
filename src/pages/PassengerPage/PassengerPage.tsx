import { Box, Button, SelectChangeEvent, Typography } from "@mui/material";
import React, { useState } from "react";
import TripCard from "../../entities/Trip/TripCard";
import { store } from "../../app/store";
import PaginationComponent from "../../features/Pagination/PaginationComponent";
import PreviousButton from "../../shared/ui/PreviousButton";
import StatusFilter from "../../features/Filters/StatusFilter";
import PassengerPageModal from "../../features/Modals/PassengerPageModal";
import { ITrip } from "../../entities/Trip/Trip.types";
import NoTripsMessage from "../../shared/ui/NoTripsMessage";

const PassengerPage: React.FC = () => {
  const [trips, setTrips] = useState<ITrip[]>(() => store.get());
  const [filter, setFilter] = useState<"Все" | "Активные" | "Завершенные">(
    "Все"
  );
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredTrips =
    filter === "Все"
      ? trips
      : filter === "Активные"
      ? trips.filter((trip) => trip.status === "Активные")
      : trips.filter((trip) => trip.status === "Завершенные");

  const currentTrips = filteredTrips.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);

  const handleChangeStatusFilter = (e: SelectChangeEvent) => {
    setCurrentPage(1);
    setFilter(e.target.value as "Все" | "Активные" | "Завершенные");
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

          <StatusFilter
            filter={filter}
            handleChangeFilter={handleChangeStatusFilter}
          />
        </Box>

        {currentTrips ? (
          currentTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)
        ) : (
          <NoTripsMessage />
        )}

        <PaginationComponent
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />

        <PreviousButton />
      </Box>

      <PassengerPageModal
        trips={trips}
        setTrips={setTrips}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default PassengerPage;

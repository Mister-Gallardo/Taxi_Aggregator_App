import {
  Box,
  Button,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TripCard from "../../entities/Trip/TripCard";
import { regions, store } from "../../app/store";
import PaginationComponent from "../../features/Pagination/PaginationComponent";
import PreviousButton from "../../shared/ui/PreviousButton";
import StatusFilter from "../../features/Filters/StatusFilter";
import TariffFilter from "../../features/Filters/TariffFilter";
import { ITrip } from "../../entities/Trip/Trip.types";
import NoTripsMessage from "../../shared/ui/NoTripsMessage";

const DriverPage: React.FC = () => {
  const [trips, setTrips] = useState<ITrip[]>(() => store.get());
  const [statusFilter, setStatusFilter] = useState<
    "Все" | "Активные" | "Завершенные"
  >("Все");
  const [tariffFilter, setTariffFilter] = useState<
    "Все" | "Эконом" | "Комфорт" | "Бизнес"
  >("Все");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredTrips = trips.filter((trip) => {
    // Фильтр по региону
    if (selectedRegion && trip.region !== selectedRegion) {
      return false;
    }

    // Фильтр по статусу
    if (statusFilter !== "Все" && trip.status !== statusFilter) {
      return false;
    }

    // Фильтр по тарифу
    if (tariffFilter !== "Все" && trip.tariff !== tariffFilter) {
      return false;
    }

    return true;
  });

  const currentTrips = filteredTrips.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);

  const handleChangeStatusFilter = (e: SelectChangeEvent) => {
    setCurrentPage(1);
    setStatusFilter(e.target.value as "Все" | "Активные" | "Завершенные");
  };

  const handleChangeTariffFilter = (e: SelectChangeEvent) => {
    setCurrentPage(1);
    setTariffFilter(e.target.value as "Все" | "Эконом" | "Комфорт" | "Бизнес");
  };

  const markAsDone = (id: number) => {
    store.set(
      trips.map((trip) =>
        trip.id === id ? { ...trip, status: "Завершенные" } : trip
      )
    );
    setTrips(store.get());
  };

  if (!selectedRegion) {
    return (
      <Stack spacing={3} alignItems="center" mt="18vh">
        <Typography variant="h4">Выберите регион</Typography>
        {regions.map((region) => (
          <Button
            key={region}
            sx={{
              width: "310px",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px 0px",
            }}
            variant="contained"
            onClick={() => {
              setSelectedRegion(region);
            }}
          >
            {region}
          </Button>
        ))}
      </Stack>
    );
  }

  console.log(123);

  return (
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
        Страница водителя
      </Typography>

      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "end", gap: 2 }}
      >
        <TariffFilter
          filter={tariffFilter}
          handleChangeFilter={handleChangeTariffFilter}
        />
        <StatusFilter
          filter={statusFilter}
          handleChangeFilter={handleChangeStatusFilter}
        />
      </Box>

      {currentTrips.length ? (
        currentTrips.map((trip: ITrip) => (
          <TripCard
            key={trip.id}
            trip={trip}
            markAsDone={() => markAsDone(trip.id)}
          />
        ))
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
  );
};

export default DriverPage;

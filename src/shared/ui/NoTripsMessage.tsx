import { Typography } from "@mui/material";
import React from "react";

const NoTripsMessage: React.FC = () => (
  <Typography variant="h5" sx={{ margin: 10 }}>
    По заданным параметрам поездок нет
  </Typography>
);

export default NoTripsMessage;
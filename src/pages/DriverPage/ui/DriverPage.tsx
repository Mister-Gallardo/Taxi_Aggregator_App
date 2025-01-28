import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const DriverPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack spacing={2} alignItems="center" mt={5}>
      <Typography variant="h5">Страница водителя</Typography>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Вернуться назад
      </Button>
    </Stack>
  );
};

export default DriverPage;

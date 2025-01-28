import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack spacing={3} alignItems="center" mt='18vh'>
      <Typography variant="h3">Выберите роль</Typography>
      <Button sx={{fontSize: '18px', fontWeight: 'bold', padding: '10px 50px'}} variant="contained" onClick={() => navigate("/passenger")}>
        Я пассажир
      </Button>
      <Button sx={{fontSize: '18px', fontWeight: 'bold', padding: '10px 50px'}} variant="outlined" onClick={() => navigate("/driver")}>
        Я водитель
      </Button>
    </Stack>
  );
};

export default Home;

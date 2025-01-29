import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PreviousButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      sx={{ margin: "50px 0px 20px" }}
      onClick={() => navigate("/")}
    >
      Вернуться к выбору роли
    </Button>
  );
};

export default PreviousButton;

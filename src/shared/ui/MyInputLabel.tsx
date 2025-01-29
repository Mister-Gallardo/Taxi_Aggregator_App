import { InputLabel } from "@mui/material";
import React from "react";

const MyInputLabel: React.FC<{ value: string }> = ({ value }) => (
  <InputLabel
    sx={{ marginBottom: 0 }}
    variant="standard"
    htmlFor="uncontrolled-native"
  >
    {value}
  </InputLabel>
);

export default MyInputLabel;

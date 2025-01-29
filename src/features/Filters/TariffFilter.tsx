import {
  Box,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const TariffFilter: React.FC<{
  filter: string;
  handleChangeFilter: (e: SelectChangeEvent) => void;
}> = ({
  filter,
  handleChangeFilter,
}: {
  filter: string;
  handleChangeFilter: (e: SelectChangeEvent) => void;
}) => (
  <Box>
    <Select
      value={filter}
      onChange={handleChangeFilter}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      size="small"
    >
      {["Все", "Эконом", "Комфорт", "Бизнес"].map((tariff) => (
        <MenuItem key={tariff} value={tariff}>
          {tariff}
        </MenuItem>
      ))}
    </Select>
    <FormHelperText>Тариф</FormHelperText>
  </Box>
);

export default TariffFilter;

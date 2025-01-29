import {
  Box,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const Filter: React.FC<{
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
      <MenuItem value="all">Все</MenuItem>
      <MenuItem value="active">Активные</MenuItem>
      <MenuItem value="inactive">Завершенные</MenuItem>
    </Select>
    <FormHelperText>Фильтрация</FormHelperText>
  </Box>
);

export default Filter;

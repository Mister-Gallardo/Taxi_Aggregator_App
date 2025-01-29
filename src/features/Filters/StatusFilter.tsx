import {
  Box,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const StatusFilter: React.FC<{
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
      {["Все", "Активные", "Завершенные"].map((status) => (
        <MenuItem key={status} value={status}>
          {status}
        </MenuItem>
      ))}
    </Select>
    <FormHelperText>Статус</FormHelperText>
  </Box>
);

export default StatusFilter;

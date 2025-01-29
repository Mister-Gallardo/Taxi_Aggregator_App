import { Box, MenuItem, Select, Pagination } from "@mui/material";
import React from "react";

const PaginationComponent: React.FC<{
  itemsPerPage: number;
  setItemsPerPage: (newVal: number) => void;
  currentPage: number;
  setCurrentPage: (newVal: number) => void;
  totalPages: number;
}> = ({
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  itemsPerPage: number;
  setItemsPerPage: (newVal: number) => void;
  currentPage: number;
  setCurrentPage: (newVal: number) => void;
  totalPages: number;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      justifyContent: "center",
      alignItems: "center",
      gap: { xs: 2, sm: 4 },
    }}
  >
    <Select
      sx={{ order: { xs: 2, sm: 1 } }}
      value={itemsPerPage}
      onChange={(e) => {
        setCurrentPage(1);
        setItemsPerPage(Number(e.target.value));
      }}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value={5}>Пять</MenuItem>
      <MenuItem value={10}>Десять</MenuItem>
      <MenuItem value={20}>Двадцать</MenuItem>
    </Select>
    <Pagination
      sx={{ order: { xs: 1, sm: 2 } }}
      page={currentPage}
      onChange={(_, page) => setCurrentPage(page)}
      count={totalPages}
      variant="outlined"
      size="large"
      shape="rounded"
      siblingCount={0}
    />
  </Box>
);

export default PaginationComponent;

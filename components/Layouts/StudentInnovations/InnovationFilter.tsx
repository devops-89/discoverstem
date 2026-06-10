"use client";

import { innovationFilters } from "@/assets/Generic-data";
import { InnovationFilter } from "@/utils/Types";
import { Box, Chip, TextField, Typography } from "@mui/material";

interface InnovationFilterSectionProps {
  filter: InnovationFilter;
  setFilter: (value: InnovationFilter) => void;
  search: string;
  setSearch: (value: string) => void;
  showingCount: number;
  totalCount: number;
}

export default function InnovationFilterSection({
  filter,
  setFilter,
  search,
  setSearch,
  showingCount,
  totalCount,
}: InnovationFilterSectionProps) {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #E5E5E5",
          borderRadius: "999px",
          p: "12px",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          flexWrap: "wrap",
          mb: 2,
          boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        {innovationFilters.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => setFilter(item)}
            sx={{
              height: "40px",
              borderRadius: "999px",
              fontWeight: 600,
              backgroundColor: filter === item ? "#7B53A1" : "#F5F5F5",
              color: filter === item ? "#fff" : "#171717",
            }}
          />
        ))}

        <TextField
          size="small"
          placeholder="Search innovations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: { xs: "100%", md: "320px" },
            ml: { xs: 0, md: "auto" },
            "& .MuiOutlinedInput-root": {
              height: "44px",
              borderRadius: "999px",
              backgroundColor: "#F5F5F5",
              fontSize: "14px",
            },
          }}
        />
      </Box>

      <Typography sx={{ fontSize: "14px", color: "#737373", mb: 8 }}>
        Showing <b>{showingCount}</b> of {totalCount} students
      </Typography>
    </>
  );
}
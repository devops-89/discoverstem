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
          // 🔥 FIX: Reverted all layout properties to 'sm'. Now 768px and 1024px will be 100% identical to 1440px Desktop!
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          flexWrap: { xs: "wrap", sm: "nowrap" },
          alignItems: { xs: "center", sm: "center" },
          gap: 1.5,
          mb: 2,
          
          border: "1px solid #E5E5E5",
          borderRadius: { xs: "24px", sm: "999px" },
          p: "12px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
          
          position: { xs: "sticky", sm: "static" },
          top: { xs: "10px", sm: "auto" },
          zIndex: { xs: 10, sm: "auto" },
          backgroundColor: { xs: "#fff", sm: "transparent" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            
            flexWrap: { xs: "wrap", sm: "nowrap" },
            overflowX: { xs: "visible", sm: "auto" },
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            
            border: "none",
            borderRadius: 0,
            p: 0,
            width: { xs: "100%", sm: "auto" },
            boxShadow: "none",
          }}
        >
          {innovationFilters.map((item) => (
            <Chip
              key={item}
              label={item}
              onClick={() => setFilter(item)}
              sx={{
                height: { xs: "32px", sm: "40px" },
                fontSize: { xs: "12px", sm: "14px" },
                borderRadius: "999px",
                fontWeight: 600,
                backgroundColor: filter === item ? "#7B53A1" : "#F5F5F5",
                color: filter === item ? "#fff" : "#171717",
                flexShrink: 0,
              }}
            />
          ))}
        </Box>

        <TextField
          size="small"
          placeholder="Search innovations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: { xs: "100%", sm: "320px" },
            ml: { xs: 0, sm: "auto" },
            flexShrink: 0,
            "& .MuiOutlinedInput-root": {
              height: { xs: "38px", sm: "44px" },
              borderRadius: "999px",
              backgroundColor: "#F5F5F5",
              fontSize: { xs: "13px", sm: "14px" },
            },
          }}
        />
      </Box>

      <Typography sx={{ fontSize: "14px", color: "#737373", mb: 8 }}>
        Showing <b>{showingCount}</b> of {totalCount} innovations
      </Typography>
    </>
  );
}
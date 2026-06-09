"use client";

import { TextField } from "@mui/material";

interface PatentFacesFilterProps {
  search: string;
  setSearch: (value: string) => void;
  placeholder: string;
}

export default function PatentFacesFilter({
  search,
  setSearch,
  placeholder,
}: PatentFacesFilterProps) {
  return (
    <TextField
      size="small"
      placeholder={placeholder}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{
        width: {
          xs: "100%",
          sm: "384px",
        },
        "& .MuiOutlinedInput-root": {
          height: "45.6px",
          borderRadius: "999px",
          backgroundColor: "#FAFAFA",
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          color: "#737373",

          "& fieldset": {
            border: "0.8px solid #0000001A",
          },
        },
        "& input": {
          px: "20px",
          py: "12px",
        },
      }}
    />
  );
}
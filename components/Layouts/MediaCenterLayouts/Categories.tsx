"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Chip, Typography } from "@mui/material";
import { useState } from "react";

const categories = [
  "Technology",
  "Apps Development",
  "Business",
  "Social Marketing",
  "Business Intelligence",
  "Marketing",
];

const Categories = () => {
  const [active, setActive] = useState("Technology");

  return (
    <Box
      sx={{
        width:{xs:"100%",md:"420px"},
        height:{xs:"auto",md:"491px"},
        p: 3,
        background: "#FAF5FF",
        borderRadius: "16px",
        mb: 6,
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          width:"auto",
          maxWidth:"123px",
          height:"16px",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight:"34px",
          letterSpacing:"-0.01em",
          mb: 6,
          color: "#1C2539",
        }}
      >
        Categories
      </Typography>

      {/* CHIPS */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {categories.map((item) => {
          const isActive = active === item;

          return (
            <Chip
              key={item}
              label={item}
              onClick={() => setActive(item)}
              deleteIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              onDelete={() => {}}
              sx={{
                justifyContent: "space-between",
                px: 2,
                width:"auto",
                maxWidth:"348px",
                height: "50px",
                borderRadius: "10px",
                fontSize: "18px",
                lineHeight:"32px",
                transition: "all 0.2s ease",

                backgroundColor: isActive ? "#7B53A1" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#374151",

                "& .MuiChip-label": {
                  width: "100%",
                  textAlign: "left",
                },

                "& .MuiChip-deleteIcon": {
                  color: isActive ? "#fff" : "#6B7280",
                },

                "&:hover": {
                  backgroundColor: isActive ? "#68458c" : "#F3F4F6",
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Categories;
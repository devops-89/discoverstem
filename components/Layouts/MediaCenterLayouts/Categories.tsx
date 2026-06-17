"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const categories = [
  "Home",
  "Latest News",
  "College Acceptence",
  "Patents",
  "Awards",
  "Young Innovators",
  "In The Press",
  "Blog",
  "Contact Us",
];

const Categories = () => {
  const [active, setActive] = useState("Home");

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "420px" },
        height: { xs: "auto", md: "auto" },
        background: "#FAF5FF",
        borderRadius: "10px",
        p: { xs: "24px", md: "40px 36px" },
        mb: 6,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "34px",
          letterSpacing: "-0.01em",
          color: "#1C2539",
          mb: "25px",
        }}
      >
        Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {categories.map((item) => {
          const isActive = active === item;

          return (
            <Box
              key={item}
              onClick={() => setActive(item)}
              sx={{
                width: "100%",
                maxWidth: "348px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: isActive ? "#7B53A1" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#474A55",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: "20px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxSizing: "border-box",

                "&:hover": {
                  backgroundColor: isActive ? "#7B53A1" : "#FFFFFF",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "32px",
                  color: "inherit",
                }}
              >
                {item}
              </Typography>

              {isActive && (
                <ArrowForwardIcon
                  sx={{
                    fontSize: "24px",
                    color: "#FFFFFF",
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Categories;
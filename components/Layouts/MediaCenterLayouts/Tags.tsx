"use client";

import { Box, Chip, Typography } from "@mui/material";
import { useState } from "react";

const tags = [
  
  "Latest News",
  "Acceptence",
  "Patents",
  "Awards",
  "Young Innovators",
  "Press",
  "Blog",
  "Contact Us",
];

const Tags = () => {
  const [active, setActive] = useState<string | null>("Mobile");

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "420px" },
        height: { xs: "auto", md: "350px" },
        p: 4,
        background: "#FAF5FF",
        borderRadius: "16px",
        mb: 3,
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          width: { xs: "100%", md: "59px" },
          height: { xs: "auto", md: "17px" },
          fontSize: "24px",
          fontWeight: 600,
          lineHeight:"34px",
          letterSpacing:"-0.01em",
          mb: 4,
        }}
      >
        Tags
      </Typography>

      {/* CHIPS */}
      <Box
        sx={{
          width: { xs: "100%", md: "fit-content" },
          maxWidth:"329px",
          height: { xs: "auto", md: "fit-content" },
          maxHeight:"40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
        }}
      >
        {tags.map((tag) => {
          const isActive = active === tag;

          return (
            <Chip
              key={tag}
              label={tag}
              onClick={() => setActive(tag)}
              sx={{
                borderRadius: "999px",
                fontSize: "14px",
                px: 1.4,
                height: "36px",
                cursor: "pointer",
                transition: "0.2s",

                backgroundColor: isActive ? "#7B53A1" : "#FFFFFF",
                color: isActive ? "#fff" : "#374151",

                "&:hover": {
                  backgroundColor: isActive ? "#68458c" : "#FFFFFF",
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Tags;
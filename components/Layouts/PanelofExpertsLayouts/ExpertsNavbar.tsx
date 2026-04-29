"use client";

import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Chip, Container } from "@mui/material";
import { useState } from "react";

const categories = [
  "All experts",
  "BioTech & Health",
  "AI & Tech",
  "Finance & Fintech",
  "Aerospace",
  "Energy & Inv",
  "Design & Business",
];

export default function ExpertsNavbar() {
  const [active, setActive] = useState("All experts");

  return (
    <Container
    maxWidth={false}
    sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
    }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "64px",
          px: { xs: "12px", md: "16px" },
          borderRadius: "30px",
          backgroundColor: "#F3EDF7",
        }}
      >
        {categories.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => setActive(item)}
            sx={{
              height: "44px",
              px: "16px",
              borderRadius: "30px",
              fontFamily: FONT_FAMILY.heading,
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "20px",
              whiteSpace: "nowrap",

              backgroundColor:
                active === item ? "#7B53A1" : "transparent",

              color: active === item ? "#fff" : "#111827",

              "&:hover": {
                backgroundColor:
                  active === item ? "#7B53A1" : "#E6DDF5",
              },
            }}
          />
        ))}
      </Box>
    </Container>
  );
}
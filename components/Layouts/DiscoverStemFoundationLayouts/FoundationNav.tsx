"use client";

import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Chip, Container } from "@mui/material";

const categories = [
    "Foundation",
    "Stem",
    "Filing of Patent",
    "Seed Funding",
    "Office Infrastructure",
    "Free CPA",
    "Legal Support",
    "Mentoring"
];

interface FoundationNavProps {
  active: string;
  onChange: (category: string) => void;
}

export default function FoundationNav({ active, onChange }: FoundationNavProps) {
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
          gap: { xs: 1, md: 1.5 },
          width: "100%",
          minHeight: "64px",
          px: { xs: "12px", md: "16px" },
          py: 1.5,
          borderRadius: "30px",
          backgroundColor: "#F3EDF7",
          overflowX: "auto",
          flexWrap: "nowrap",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {categories.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => onChange(item)}
            sx={{
              height: "44px",
              px: "8px",
              borderRadius: "30px",
              fontFamily: FONT_FAMILY.heading,
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "20px",
              whiteSpace: "nowrap",
              flexShrink: 0,

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
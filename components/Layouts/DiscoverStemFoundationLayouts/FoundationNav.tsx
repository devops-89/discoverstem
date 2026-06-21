"use client";

import { FONT_FAMILY } from "@/utils/Fonts";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Chip, Container, IconButton } from "@mui/material";

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
  // Find the index of the currently active category
  const currentIndex = categories.indexOf(active);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onChange(categories[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < categories.length - 1) {
      onChange(categories[currentIndex + 1]);
    }
  };

  // 🧮 SLIDING WINDOW CALCULATIONS:
  // 1. Mobile (xs, <600px): Shows 1
  const start1 = currentIndex;

  // 2. Tablet (sm, covers 768px): Shows 4
  let start4 = currentIndex - 1; // Try to keep active item near the middle
  if (start4 < 0) start4 = 0;
  if (start4 > categories.length - 4) start4 = categories.length - 4;

  // 3. Small Desktop (md, covers 1024px): Shows 5
  let start5 = currentIndex - 2; // Try to keep active item perfectly centered
  if (start5 < 0) start5 = 0;
  if (start5 > categories.length - 5) start5 = categories.length - 5;

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
          px: { xs: "8px", lg: "16px" }, // Tighter padding when arrows are visible
          borderRadius: "30px",
          backgroundColor: "#F3EDF7",
        }}
      >
        <IconButton
          onClick={handlePrev}
          disabled={currentIndex === 0}
          sx={{
            display: { xs: "flex", lg: "none" }, // Hide arrows entirely on 1440px
            color: currentIndex === 0 ? "rgba(17, 24, 39, 0.3)" : "#111827",
          }}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        <Box 
          sx={{ 
            display: "flex", 
            gap: { xs: "8px", lg: 0 }, 
            justifyContent: { xs: "center", lg: "space-between" }, // Centers the window items, but spreads them on 1440px
            flexGrow: 1 
          }}
        >
          {categories.map((item, index) => (
            <Chip
              key={item}
              label={item}
              onClick={() => onChange(item)}
              sx={{
                // ✨ CSS MAGIC: Dynamically toggle visibility based on index and breakpoints!
                display: {
                  xs: index === start1 ? "flex" : "none", // < 600px: Show 1
                  sm: index >= start4 && index < start4 + 4 ? "flex" : "none", // 600-899px (includes 768px): Show 4
                  md: index >= start5 && index < start5 + 5 ? "flex" : "none", // 900-1199px (includes 1024px): Show 5
                  lg: "flex", // 1200px+ (1440px): Show all 8 (Restores your original design!)
                },
                height: "44px",
                px: { xs: "12px", lg: "16px" },
                borderRadius: "30px",
                fontFamily: FONT_FAMILY.heading,
                fontWeight: 500,
                fontSize: { xs: "13px", sm: "14px", lg: "15px" }, // Scaled gracefully for narrow views
                lineHeight: "20px",
                whiteSpace: "nowrap",
                flexShrink: 0, // Prevents chips from squishing

                backgroundColor: active === item ? "#7B53A1" : "transparent",
                color: active === item ? "#fff" : "#111827",
                "&:hover": {
                  backgroundColor: active === item ? "#7B53A1" : "#E6DDF5",
                },
              }}
            />
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          disabled={currentIndex === categories.length - 1}
          sx={{
            display: { xs: "flex", lg: "none" }, // Hide arrows entirely on 1440px
            color:
              currentIndex === categories.length - 1
                ? "rgba(17, 24, 39, 0.3)"
                : "#111827",
          }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Container>
  );
}
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
 
  const currentIndex = categories.indexOf(active);

  const handlePrev = () => {
    
    const prevIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    onChange(categories[prevIndex]);
  };

  const handleNext = () => {
  
    const nextIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
    onChange(categories[nextIndex]);
  };

  
  const start1 = currentIndex;

  
  let start4 = currentIndex - 1; 
  if (start4 < 0) start4 = 0;
  if (start4 > categories.length - 4) start4 = categories.length - 4;

  let start5 = currentIndex - 2; 
  if (start5 < 0) start5 = 0;
  if (start5 > categories.length - 5) start5 = categories.length - 5;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        pt: { xs: 5, md: 7 },
        pb: { xs: 3, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: { xs: "48px", md: "64px" },
          px: { xs: "8px", lg: "16px" }, 
          borderRadius: "30px",
          backgroundColor: "#F3EDF7",
        }}
      >
        <IconButton
          onClick={handlePrev}
          
          sx={{
            display: { xs: "flex", lg: "none" }, 
            color: "#111827",
            padding: { xs: "6px", md: "8px" },
          }}
        >
          <KeyboardArrowLeftIcon sx={{ fontSize: { xs: "20px", md: "24px" } }} />
        </IconButton>

        <Box 
          sx={{ 
            display: "flex", 
            gap: { xs: "8px", lg: 0 }, 
            justifyContent: { xs: "center", lg: "space-between" }, 
            flexGrow: 1 
          }}
        >
          {categories.map((item, index) => (
            <Chip
              key={item}
              label={item}
              onClick={() => onChange(item)}
              sx={{
               
                display: {
                  xs: index === start1 ? "flex" : "none", // < 600px: Show 1
                  sm: index >= start4 && index < start4 + 4 ? "flex" : "none", 
                  md: index >= start5 && index < start5 + 5 ? "flex" : "none", 
                  lg: "flex", 
                },
               
                height: { xs: "36px", md: "44px" },
                px: { xs: "12px", lg: "16px" },
                borderRadius: "30px",
                fontFamily: FONT_FAMILY.heading,
                fontWeight: 500,
                fontSize: { xs: "13px", sm: "14px", lg: "15px" }, 
                lineHeight: "20px",
                whiteSpace: "nowrap",
                flexShrink: 0, 

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
         
          sx={{
            display: { xs: "flex", lg: "none" }, 
           
            color: "#111827",
            padding: { xs: "6px", md: "8px" },
          }}
        >
          <KeyboardArrowRightIcon sx={{ fontSize: { xs: "20px", md: "24px" } }} />
        </IconButton>
      </Box>
    </Container>
  );
}
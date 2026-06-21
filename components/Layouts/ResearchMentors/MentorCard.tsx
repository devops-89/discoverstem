"use client";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function MentorCard({ data, onClick }: any) {
  return (
    <Box 
      onClick={onClick} 
      sx={{ 
        width: { xs: "100%", lg: "471px" }, 
        height: { xs: "auto", lg: "150px" }, 
        display: "flex", 
        flexDirection: { xs: "column", sm: "row" }, 
        // Slightly smaller gap on tablet to give text more horizontal room
        gap: { xs: 2, sm: 1.5, lg: 2 }, 
        alignItems: "flex-start", 
        cursor: "pointer" 
      }}
    >
      <Box 
        sx={{ 
          // 🔥 FIX: Image is now strictly locked to 150x150 on tablets and desktop!
          width: { xs: "100%", sm: "150px" }, 
          height: { xs: "250px", sm: "150px" }, 
          position: "relative", 
          borderRadius: "12px", 
          overflow: "hidden", 
          flexShrink: 0 
        }}
      >
        <Image src={data.image} alt={data.name} fill sizes="100vw" style={{ objectFit: "cover" }} />
      </Box>
      <Box sx={{ py: { sm: 1, lg: 0 } }}>
        <Typography 
          sx={{ 
            width: { xs: "100%", lg: "340px" }, 
            height: { xs: "auto", lg: "12px" }, 
            // 🔥 FIX: Decreased to 12px on tablets to prevent wrapping
            fontSize: { xs: "14px", sm: "12px", lg: "16px" }, 
            textDecoration: "underline", 
            color: "#000", 
            fontFamily: FONT_FAMILY.heading, 
            fontWeight: 300, 
            lineHeight: { xs: "20px", sm: "16px", lg: "20px" }, 
            mb: { xs: 1, sm: 0.5, lg: 1 } 
          }}
        >
          {data.category}
        </Typography>
        <Typography 
          sx={{ 
            // 🔥 FIX: Decreased to 16px on tablets
            fontSize: { xs: "20px", sm: "16px", lg: "22px" }, 
            fontWeight: 600, 
            fontFamily: FONT_FAMILY.body, 
            // Scaled down line-height so the gap isn't massive
            lineHeight: { xs: "28px", sm: "22px", lg: "60px" }, 
            letterSpacing: "-0.03em", 
            color: "#000" 
          }}
        >
          {data.name}
        </Typography>
        <Typography 
          sx={{ 
            // 🔥 FIX: Decreased to 12px on tablets
            fontSize: { xs: "14px", sm: "12px", lg: "16px" }, 
            color: "#646464", 
            fontFamily: FONT_FAMILY.body, 
            fontWeight: 300, 
            lineHeight: { xs: "22px", sm: "18px", lg: "32px" }, 
            mt: { xs: 0, lg: -2 } 
          }}
        >
          {data.degree}
        </Typography>
        <Typography 
          sx={{ 
            width: { xs: "100%", lg: "288px" }, 
            height: { xs: "auto", lg: "11px" }, 
            // 🔥 FIX: Decreased to 12px on tablets
            fontSize: { xs: "14px", sm: "12px", lg: "16px" }, 
            color: "#646464", 
            lineHeight: { xs: "22px", sm: "18px", lg: "32px" }, 
            mt: { xs: 0.5, sm: 0, lg: 0 } 
          }}
        >
          {data.org}
        </Typography>
      </Box>
    </Box>
  );
}
"use client";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ExpertCard({ data, onClick }: any) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: { xs: "100%", lg: "471px" }, // Pushed rigid 471px to desktop
        height: { xs: "auto", lg: "150px" },
        display: "flex",
        gap: { xs: 2, lg: 2 },
        alignItems: "flex-start",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          // FIXED: Gave the image a crisp, fixed square size on mobile so it doesn't collapse to 0 height!
          width: { xs: "110px", sm: "130px", lg: "150px" },
          height: { xs: "110px", sm: "130px", lg: "150px" },
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={data.image}
          alt={data.name}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          sx={{
            width: { xs: "100%", lg: "327px" },
            height: { xs: "auto", lg: "12px" }, // Pushed rigid clipping height to desktop
            fontSize: { xs: "14px", lg: "18px" }, // Scaled down for mobile text-wrapping
            textDecoration: "underline",
            color: "#000",
            fontFamily: FONT_FAMILY.heading,
            fontWeight: 300,
            lineHeight: { xs: "20px", lg: "32px" },
            mb: { xs: 0.5, lg: 1 },
          }}
        >
          {data.category}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "18px", lg: "22px" },
            fontWeight: 600,
            fontFamily: FONT_FAMILY.body,
            // FIXED: Removed the massive 60px line-height on mobile so it doesn't push text down!
            lineHeight: { xs: "24px", lg: "60px" },
            letterSpacing: "-0.03em",
            color: "#000",
          }}
        >
          {data.name}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "16px" },
            color: "#646464",
            fontFamily: FONT_FAMILY.body,
            fontWeight: 300,
            lineHeight: { xs: "20px", lg: "32px" },
            // FIXED: The -2 margin was a hack to fix the 60px line height above. Only applied to desktop now!
            mt: { xs: 0, lg: -2 },
          }}
        >
          {data.degree}
        </Typography>

        <Typography
          sx={{
            width: { xs: "100%", lg: "288px" },
            height: { xs: "auto", lg: "11px" }, // Pushed rigid clipping height to desktop
            fontSize: { xs: "14px", lg: "16px" },
            color: "#646464",
            lineHeight: { xs: "20px", lg: "32px" },
          }}
        >
          {data.org}
        </Typography>
      </Box>
    </Box>
  );
}
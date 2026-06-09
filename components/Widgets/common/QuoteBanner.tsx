"use client";

import { QuoteBannerData } from "@/utils/Types";
import { Box, Typography } from "@mui/material";

interface QuoteBannerProps {
  data: QuoteBannerData;
}

export default function QuoteBanner({ data }: QuoteBannerProps) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "260px", md: "329.1px" },
        backgroundColor: "#FAF5FF",
        px: { xs: 3, md: "247.6px" },
        py: { xs: 6, md: "84px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "976px" }}>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "28px", md: "36px" },
            lineHeight: { xs: "34px", md: "42px" },
            color: "#F9A51E",
            mb: 2,
          }}
        >
          “
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: { xs: "18px", md: "25.6px" },
            lineHeight: { xs: "28px", md: "34.56px" },
            letterSpacing: "-0.64px",
            color: "#000000",
            textAlign: "center",
            whiteSpace: "pre-line",
          }}
        >
          {data.quote}
        </Typography>

        <Box
          sx={{
            mt: { xs: 3, md: "24px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <Box sx={{ width: "44px", height: "1px", bgcolor: "#00000033" }} />

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#000000B2",
            }}
          >
            {data.author}
          </Typography>

          <Box sx={{ width: "44px", height: "1px", bgcolor: "#00000033" }} />
        </Box>
      </Box>
    </Box>
  );
}
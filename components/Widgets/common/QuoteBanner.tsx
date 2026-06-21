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
        // 🔥 FIX: Shifted large fixed height to lg! Let md and xs gracefully scale.
        minHeight: { xs: "auto", md: "260px", lg: "329.1px" },
        backgroundColor: "#FAF5FF",
        // 🔥 FIX: Shrunk the massive desktop padding for iPads so the text actually fits cleanly!
        px: { xs: 3, md: 8, lg: "247.6px" },
        py: { xs: 6, md: 8, lg: "84px" },
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
            // 🔥 FIX: Scaled the quote icon down smoothly across devices!
            fontSize: { xs: "28px", md: "32px", lg: "36px" },
            lineHeight: { xs: "34px", md: "38px", lg: "42px" },
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
            // 🔥 FIX: Shifted large exact font sizes up to lg to protect 1440px. Safely scaled down for iPads and phones!
            fontSize: { xs: "16px", md: "20px", lg: "25.6px" },
            lineHeight: { xs: "26px", md: "30px", lg: "34.56px" },
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
            mt: { xs: 3, lg: "24px" },
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
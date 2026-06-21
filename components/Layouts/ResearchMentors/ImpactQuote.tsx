"use client";

import { impactQuoteSectionData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";

export default function ImpactQuoteSection() {
  const data = impactQuoteSectionData;

  return (
    <Box
      sx={{
        width: "100%",
        background: "#FAF5FF",
        py: { xs: 6, sm: 8, lg: "80px" }, // Scaled down slightly for phones
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1160px",
          mx: "auto",
          // 🔥 FIX: Added 'sm: 5' and moved '0' to 'lg' so iPads/tablets don't have zero padding!
          px: { xs: 3, sm: 5, lg: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "14px", sm: "16px", lg: "22px" },
            // Added safe line-height for mobile to prevent overlapping if the tag wraps
            lineHeight: { xs: "20px", sm: "24px", lg: "16px" }, 
            letterSpacing: "2.4px",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#F9A51E",
            mb: { xs: 3, sm: 4, lg: "40px" },
          }}
        >
          {data.tag}
        </Typography>

        <Typography
          component="div"
          sx={{
            maxWidth: "1104px",
            mx: "auto",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "22px", sm: "26px", lg: "30px" },
            lineHeight: { xs: "36px", sm: "42px", lg: "48.75px" },
            textAlign: "center",
            color: "#171717",

            "& span": {
              color: "#F9A51E",
            },
          }}
          dangerouslySetInnerHTML={{
            __html: data.description,
          }}
        />

        <Typography
          sx={{
            mt: { xs: 4, sm: 5, lg: "32px" },
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "36px", lg: "48px" }, // Scaled smoothly for tablets
            lineHeight: "1.2",
            textAlign: "center",
            color: "#000",
          }}
        >
          {data.quote}
        </Typography>

        <Typography
          sx={{
            maxWidth: "446px",
            mx: "auto",
            mt: { xs: 3, sm: 4, lg: "28px" },
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "14px", sm: "15px", lg: "16px" }, // Scaled slightly for mobile readability
            lineHeight: { xs: "22px", sm: "24px", lg: "24px" },
            textAlign: "center",
            color: "rgba(0,0,0,0.7)",
          }}
        >
          {data.footerText}
        </Typography>
      </Container>
    </Box>
  );
}
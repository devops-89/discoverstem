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
        py: { xs: 8, md: "80px" },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1160px",
          mx: "auto",
          px: { xs: 3, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "14px", md: "22px" },
            lineHeight: "16px",
            letterSpacing: "2.4px",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#F9A51E",
            mb: { xs: 3, md: "40px" },
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
            fontSize: { xs: "22px", md: "30px" },
            lineHeight: { xs: "38px", md: "48.75px" },
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
            mt: { xs: 4, md: "32px" },
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "28px", md: "48px" },
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
            mt: { xs: 3, md: "28px" },

            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
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
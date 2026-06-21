"use client";

import { VideoSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface VideoSectionProps {
  data: VideoSectionData;
}

export default function VideoSection({ data }: VideoSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        // 🔥 FIX: Added md: 4 to protect iPad edges. 1440px is safely locked to 0!
        px: { xs: 3, md: 4, lg: 0 },
        // 🔥 FIX: Shifted large padding to lg and scaled down gracefully!
        py: { xs: 6, md: 8, lg: 10 },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          // 🔥 FIX: Shifted massive text sizes up to lg. Safely scaled down for iPads and phones!
          fontSize: { xs: "24px", md: "40px", lg: "48px" },
          lineHeight: { xs: "30px", md: "50px", lg: "62px" },
          letterSpacing: "-0.03em",
          color: "#111827",
          mb: 1,
        }}
      >
        {data.title}
      </Typography>

      {data.subtitle && (
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "13px", md: "15px", lg: "16px" },
            color: "#777777",
            mb: { xs: 5, lg: "55px" },
          }}
        >
          {data.subtitle}
        </Typography>
      )}

      <Box
        sx={{
          width: "100%",
          // 🔥 FIX: iPads (md) now smoothly scale to 540px height to maintain 16:9 ratio. 1440px strictly stays at 658px!
          height: { xs: "220px", sm: "350px", md: "540px", lg: "658px" },
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <iframe
          src={data.videoUrl}
          title={data.title}
          width="100%"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            border: "none",
          }}
        />
      </Box>
    </Container>
  );
}
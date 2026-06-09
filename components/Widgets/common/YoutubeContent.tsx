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
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          fontSize: { xs: "30px", md: "48px" },
          lineHeight: { xs: "40px", md: "62px" },
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
            fontSize: { xs: "13px", md: "16px" },
            color: "#777777",
            mb: { xs: 5, md: "55px" },
          }}
        >
          {data.subtitle}
        </Typography>
      )}

      <Box
        sx={{
          width: "100%",
          height: { xs: "220px", sm: "350px", md: "658px" },
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
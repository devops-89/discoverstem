"use client";

import { AerospacevideoData } from "@/assets/Generic-data";
import { Box, Container } from "@mui/material";
import { VideoData } from "@/utils/Types";


export default function AerospaceVideoSection({ youtubeUrl, title }: VideoData) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: "20px", md: 0 },
        py: { xs: "50px", md: "80px" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: "220px",
            sm: "380px",
            md: "658px",
          },
          bgcolor: "#000000",
          borderRadius: "29px",
          overflow: "hidden",
        }}
      >
        <Box
          component="iframe"
          src={youtubeUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </Box>
    </Container>
  );
}
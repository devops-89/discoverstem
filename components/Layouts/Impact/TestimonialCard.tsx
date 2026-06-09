"use client";

import { successStoriesData } from "@/assets/Generic-data";
import { SuccessStoryCard } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

function TestimonialCard({ item }: { item: SuccessStoryCard }) {
  
  const isLarge = item.size === "large";



  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "560px",
        
        minHeight: {xs: "auto", md: isLarge ? "630px" : "342px",},
        borderRadius: "16px",
        backgroundColor: "#F5F5F5",
        p: { xs: "22px", md: "27px 20px 27px 27px" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: "28px", md: "37px" },
        mx: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "480px",
          display: "flex",
          gap: { xs: "20px", md: "32px" },
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "144px",
            height: "144px",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#C3C3C3",
            flexShrink: 0,
          }}
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.name}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "304px" } }}>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "22.4px",
              lineHeight: "26.88px",
              letterSpacing: "-0.56px",
              color: "#111827",
              mb: 1,
            }}
          >
            {item.name}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              whiteSpace: "pre-line",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "18px",
              color: "#555555",
            }}
          >
            {item.designation}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          width: "100%",
          maxWidth: "513px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "15px", md: "16px" },
          lineHeight: { xs: "28px", md: "32px" },
          letterSpacing: "-0.03em",
          color: "#777777",
          whiteSpace: "pre-line",
        }}
      >
        {item.description}
      </Typography>
    </Box>
  );
}

export default function TestimonialGrid() {
  const leftCards = successStoriesData.filter(
    (item) => item.position === "left"
  );

  const rightCards = successStoriesData.filter(
    (item) => item.position === "right"
  );

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 5, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, 1fr)",
          },
          gap: { xs: "32px", md: "40px" },
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "32px", md: "40px" },
          }}
        >
          {leftCards.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "32px", md: "40px" },
          }}
        >
          {rightCards.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
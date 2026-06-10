"use client";

import { innovationDayHighlightsData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function ImageContentSplitSection() {
  const data = innovationDayHighlightsData;

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
      {/* Top Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "563px 510px" },
          gap: { xs: 4, md: "87px" },
          alignItems: "start",
          mb: { xs: 6, md: "100px" },
        }}
      >
        <ContentBlock paragraphs={data.topSection.description} />

        <ImageBlock
          image={data.topSection.image}
          alt="Innovation Day Highlight"
        />
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "510px 563px" },
          gap: { xs: 4, md: "87px" },
          alignItems: "start",
        }}
      >
        <ImageBlock
          image={data.bottomSection.image}
          alt="Innovation Day Celebration"
        />

        <ContentBlock paragraphs={data.bottomSection.description} />
      </Box>
    </Container>
  );
}

function ContentBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "563px",
      }}
    >
      {paragraphs.map((text, index) => (
        <Typography
          key={index}
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", md: "20px" },
            lineHeight: { xs: "30px", md: "36px" },
            letterSpacing: "-0.03em",
            color: "#777777",
            mb: index === paragraphs.length - 1 ? 0 : { xs: 3, md: "36px" },
          }}
        >
          {text}
        </Typography>
      ))}
    </Box>
  );
}

function ImageBlock({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "510px",
        height: { xs: "280px", md: "401px" },
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#C4C4C4",
      }}
    >
      <Image
        src={image}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
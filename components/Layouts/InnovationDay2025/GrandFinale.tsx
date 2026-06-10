"use client";

import { grandFinaleSectionData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function GrandFinale() {
  const data = grandFinaleSectionData;

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
          width: "100%",
          whiteSpace: "pre-line",
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          fontSize: {
            xs: "32px",
            md: "48px",
          },
          lineHeight: {
            xs: "46px",
            md: "65px",
          },
          textAlign: "center",
          color: "#101010",
          mb: {
            xs: 4,
            md: "35px",
          },
        }}
      >
        {data.title}
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1022.73px",
          height: {
            xs: "280px",
            sm: "400px",
            md: "515px",
          },
          mx: "auto",
          mb: {
            xs: 5,
            md: "70px",
          },
          overflow: "hidden",
        }}
      >
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      <Typography
        component="div"
        sx={{
          width: "100%",
          maxWidth: "1160px",
          mx: "auto",

          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,

          fontSize: {
            xs: "16px",
            md: "22px",
          },

          lineHeight: {
            xs: "30px",
            md: "43px",
          },

          letterSpacing: "-0.03em",
          textAlign: "center",
          color: "#777777",

          "& strong": {
            fontWeight: 600,
            color: "#101010",
          },

          "& p": {
            margin: 0,
            marginBottom: "24px",
          },

          "& p:last-child": {
            marginBottom: 0,
          },
        }}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </Container>
  );
}
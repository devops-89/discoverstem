"use client";

import { ImageTextHighlightSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface GrandFinaleSectionProps {
  data: ImageTextHighlightSectionData;
}

export default function GrandFinaleSection({
  data,
}: GrandFinaleSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        // 🔥 FIX: Added padding for iPads. Desktop (lg) is safely locked to 0!
        px: { xs: "20px", md: "32px", lg: 0 },
        pt: { xs: "30px", md: "50px", lg: "0px" },
        pb: { xs: "30px", md: "60px", lg: "0px" },
      }}
    >
      <Typography
        sx={{
          width: "100%",
          minHeight: { lg: "130px" },
          whiteSpace: "pre-line",
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          // 🔥 FIX: Smoothly scaled fonts down for iPads. 1440px stays strictly at 48px!
          fontSize: { xs: "28px", sm: "36px", md: "40px", lg: "48px" },
          lineHeight: { xs: "38px", sm: "48px", md: "52px", lg: "65px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#101010",
          mb: { xs: "35px", lg: "35px" },
        }}
      >
        {data.title}
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1022.73px",
          // 🔥 FIX: Shrunk the image height slightly on iPads so it doesn't take up the whole screen!
          height: { xs: "230px", sm: "360px", md: "400px", lg: "515px" },
          mx: "auto",
          mb: { xs: "42px", md: "56px", lg: "70px" },
          overflow: "hidden",
        }}
      >
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill sizes="100vw"
          priority
          style={{
            objectFit: "cover",
            borderRadius: "16px", // Added optional slight border radius if you want it (you can remove this line if it's supposed to be sharp!)
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
          fontStyle: "normal",
          fontWeight: 400,
          // 🔥 FIX: Smoothly scaled fonts down for iPads. 1440px stays strictly at 22px!
          fontSize: { xs: "15px", sm: "18px", md: "20px", lg: "22px" },
          lineHeight: { xs: "28px", sm: "34px", md: "38px", lg: "43px" },
          letterSpacing: "-0.03em",
          textAlign: "center",
          color: "#777777",

          "& strong": {
            fontWeight: 600,
            color: "#101010",
          },

          "& p": {
            m: 0,
          },
        }}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </Container>
  );
}
"use client";

import { ilmSuccessStoryData } from "@/assets/Generic-data";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function IlmSuccessStorySection() {
  const data = ilmSuccessStoryData;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: "80px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "608px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, md: "28px" },
          }}
        >
          {/* Top Title + Description */}
          <Box
            sx={{
              width: "100%",
              minHeight: { xs: "auto", md: "221px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "32px", md: "48px" },
                lineHeight: { xs: "42px", md: "62px" },
                letterSpacing: "-0.03em",
                color: "#111827",
                mb: { xs: 3, md: "70px" },
              }}
            >
              {data.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "16px", md: "22px" },
                lineHeight: { xs: "30px", md: "43px" },
                letterSpacing: "-0.03em",
                color: "#777777",
              }}
            >
              {data.description}
            </Typography>
          </Box>

          {/* Bottom Points + Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              minHeight: { xs: "auto", md: "283px" },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "594px 397px" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: 4, md: 0 },
            }}
          >
            <Box
              component="ul"
              sx={{
                pl: { xs: "22px", md: "24px" },
                m: 0,
                maxWidth: "594px",
              }}
            >
              {data.points.map((point) => (
                <Typography
                  key={point}
                  component="li"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "16px", md: "22px" },
                    lineHeight: { xs: "30px", md: "43px" },
                    letterSpacing: "-0.03em",
                    color: "#000000",
                  }}
                >
                  {point}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "397px",
                height: { xs: "280px", md: "307px" },
                borderRadius: "13px",
                overflow: "hidden",
                backgroundColor: "#C4C4C4",
                mx: { xs: "auto", md: 0 },
              }}
            >
              {data.image && (
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>

        {/* Button */}
       <Button
  component={Link}
  href={data.buttonLink}
  sx={{
    mt: { xs: 4, md: "10px" },
    width: { xs: "100%", sm: "368px" },
    height: "56px",
    borderRadius: "30px",
    backgroundColor: "#7B53A1",
    color: "#FFFFFF",
    textTransform: "none",
    justifyContent: "space-between",
    pl: "24px",
    pr: "6px",

    "&:hover": {
      backgroundColor: "#6A448F",
    },
  }}
>
  <Typography
    component="span"
    dangerouslySetInnerHTML={{
      __html: data.buttonText,
    }}
    sx={{
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "-0.01em",
      color: "#FFFFFF",

      "& strong": {
        fontWeight: 700,
      },
    }}
  />

  <Box
    sx={{
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      backgroundColor: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <NorthEastIcon
      sx={{
        fontSize: "20px",
        color: "#111827",
      }}
    />
  </Box>
</Button>
      </Box>
    </Container>
  );
}
"use client";

import { entrepreneurshipFundingData } from "@/assets/Generic-data";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function EntrepreneurshipFunding() {
  const data = entrepreneurshipFundingData;

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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "688px 451.5px",
          },
          gap: { xs: 5, md: "20px" },
          alignItems: "start",
        }}
      >
        <Box>
          <Typography
            component="div"
            sx={{
              maxWidth: "702px",
              fontFamily: "Work Sans, sans-serif",
              fontWeight: 600,
              fontSize: { xs: "32px", md: "36px" },
              lineHeight: { xs: "40px", md: "41px" },
              letterSpacing: "-0.9px",
              color: "#171717",
              mb: "18px",

              "& strong": {
                color: "#7B53A1",
                fontWeight: 600,
              },
            }}
            dangerouslySetInnerHTML={{ __html: data.title }}
          />

          <Typography
            sx={{
              maxWidth: "687px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
              color: "#777777",
              mb: { xs: 4, md: "52px" },
            }}
          >
            {data.description}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 338.12px)",
              },
              gap: "12px",
            }}
          >
            {data.points.map((point) => (
              <Box
                key={point}
                sx={{
                  width: "100%",
                  maxWidth: "338.12px",
                  minHeight: "53.6px",
                  backgroundColor: "#FFFFFF",
                  border: "0.8px solid rgba(0, 0, 0, 0.05)",
                  borderRadius: "14px",
                  px: "16px",
                  py: "16px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <CheckCircleIcon
                  sx={{
                    fontSize: "20px",
                    color: "#7B53A1",
                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#262626",
                  }}
                >
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "451.5px",
            height: { xs: "320px", md: "465.54px" },
            borderRadius: "29px",
            overflow: "hidden",
            backgroundColor: "#C4C4C4",
            mx: { xs: "auto", md: 0 },
          }}
        >
          {data.image && (
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </Box>
      </Box>
    </Container>
  );
}
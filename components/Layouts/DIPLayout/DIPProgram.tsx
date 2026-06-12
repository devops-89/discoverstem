"use client";

import { dipProgramDetailsData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";

export default function DipProgramDetailsSection() {
  const data = dipProgramDetailsData;

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
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: "75px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "32px", md: "48px" },
            lineHeight: { xs: "42px", md: "62px" },
            textAlign: "center",
            letterSpacing: "-0.03em",
            color: "#111827",
          }}
        >
          {data.title}
        </Typography>

        <Box>
          {data.content.map((paragraph, index) => (
            <Typography
              key={index}
              component="div"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "16px", md: "22px" },
                lineHeight: { xs: "30px", md: "43px" },
                textAlign: "center",
                letterSpacing: "-0.03em",
                color: "#777777",
                mb: index === data.content.length - 1 ? 0 : { xs: 4, md: "43px" },

                "& strong": {
                  fontWeight: 700,
                  color: "#111827",
                },
              }}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
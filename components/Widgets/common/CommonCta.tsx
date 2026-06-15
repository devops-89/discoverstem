"use client";

import { CtaBannerData } from "@/utils/Types";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

interface CtaBannerProps {
  data: CtaBannerData;
}

export default function CtaBanner({ data }: CtaBannerProps) {
  return (
    <Box
      sx={{
        mt: { xs: 6, md: 8 },
        py: { xs: 6, sm: 7, md: 8 },
        px: { xs: 3, sm: 4, md: 2 },
        bgcolor: "#7b53a1",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontWeight: 600,
          fontSize: {
            xs: "30px",
            sm: "38px",
            md: "44px",
            lg: "48px",
          },
          lineHeight: {
            xs: "38px",
            sm: "46px",
            md: "56px",
            lg: "62px",
          },
          letterSpacing: "-0.03em",
          maxWidth: { xs: "100%", md: "900px", lg: "1100px" },
          mx: "auto",
        }}
      >
        {data.title}{" "}
        {data.highlight && (
          <Box component="span" sx={{ color: "#f8a51e" }}>
            {data.highlight}
          </Box>
        )}
      </Typography>

      {data.subtitle && (
        <Typography
          sx={{
            mt: { xs: 1.5, md: 2 },
            fontFamily: FONT_FAMILY.body,
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: "28px",
            color: "#fff",
          }}
        >
          {data.subtitle}
        </Typography>
      )}

      {data.buttonText && (
        <Button
         component={Link}
    href="/contact" 
          variant="contained"
          sx={{
            mt: { xs: 3, md: 2.5 },
            bgcolor: "#f8a51e",
            color: "#1a1a1a",
            borderRadius: "10px",
            px: { xs: 2.5, md: 3.5 },
            py: { xs: 1.2, md: 1.4 },
            fontFamily: FONT_FAMILY.body,
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#f8a51e",
            },
          }}
        >
          {data.buttonText}
        </Button>
      )}
    </Box>
  );
}
"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FONT_FAMILY } from "@/utils/Fonts";

export default function CtaBanner() {
  return (
    <Box
      sx={{
        mt: 8,
        py: 8,
        px: 2,
        bgcolor: "#7b53a1",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontSize: { xs: 30, md: 48 },
        }}
      >
        Want to be our next{" "}
        <Box component="span" sx={{ color: "#f8a51e" }}>
          young innovator & prodigy?
        </Box>
      </Typography>
      <Typography sx={{ mt: 1.5 }}>
        Innovation Quotient is the new IQ
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 2.5,
          bgcolor: "#f8a51e",
          color: "#1a1a1a",
          borderRadius: "10px",
          px: 3.5,
        }}
      >
        Request a FREE Information Session
      </Button>
    </Box>
  );
}

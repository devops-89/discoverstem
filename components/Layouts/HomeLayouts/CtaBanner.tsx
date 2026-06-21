"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FONT_FAMILY } from "@/utils/Fonts";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <Box
      sx={{
        mt: { xs: 0, md: 8 },
        py: { xs: 2, md: 8 },
        px: { xs: 3, md: 2 },
        bgcolor: "#7b53a1",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontSize: { xs: "28px", sm: "36px", md: 48 },
          lineHeight: { xs: 1.3, md: "normal" },
        }}
      >
        Want to be our next{" "}
        <Box 
          component="span" 
          sx={{ 
            color: "#f8a51e", 
            display: { xs: "block", sm: "inline" }, 
            mt: { xs: 1, sm: 0 } 
          }}
        >
          young innovator & prodigy?
        </Box>
      </Typography>
      
      <Typography 
        sx={{ 
          mt: { xs: 2, md: 1.5 },
          fontSize: { xs: "14px", md: "1rem" },
        }}
      >
        Innovation Quotient is the new IQ
      </Typography>
      
      <Button
        component={Link}
        href="/contact"
        variant="contained"
        sx={{
          mt: { xs: 4, md: 2.5 },
          bgcolor: "#f8a51e",
          color: "#1a1a1a",
          borderRadius: "10px",
          px: { xs: 2, md: 3.5 },
          py: { xs: 1.5, md: 1 }, 
          width: { xs: "100%", sm: "auto" },
          fontWeight: 600,
          "&:hover": {
            bgcolor: "#e59419",
          }
        }}
      >
        Request a FREE Information Session
      </Button>
    </Box>
  );
}
"use client";import { FONT_WEIGHT, FONT_SIZE, FONT_FAMILY } from "@/utils/theme";

import { CtaBannerData } from "@/utils/Types";

import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

interface CtaBannerProps {
  data: CtaBannerData;
}

export default function CtaBanner({ data }: CtaBannerProps) {
  return (
    <Box
      sx={{
        mt: { xs: 0, sm: 6, lg: 8 },
        py: { xs: 5, sm: 6, md: 6, lg: 8 },
        px: { xs: 3, sm: 4, lg: 2 },
        bgcolor: "#7b53a1",
        color: "#fff",
        textAlign: "center"
      }}>
      
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontWeight: FONT_WEIGHT.semiBold,
          fontSize: {
            xs: FONT_SIZE.titleLarge,
            sm: FONT_SIZE.articleHeading,
            md: FONT_SIZE.sectionHeadingSmall,
            lg: FONT_SIZE.pageHeadingSmall
          },
          lineHeight: {
            xs: "32px",
            sm: "40px",
            md: "50px",
            lg: "62px"
          },
          letterSpacing: "-0.03em",
          maxWidth: { xs: "100%", md: "900px", lg: "1100px" },
          mx: "auto"
        }}>
        
        {data.title}{" "}
        {data.highlight &&
        <Box component="span" sx={{ color: "#f8a51e" }}>
            {data.highlight}
          </Box>
        }
      </Typography>

      {data.subtitle &&
      <Typography
        sx={{
          mt: { xs: 2, lg: 2 },
          fontFamily: FONT_FAMILY.body,
          fontSize: { xs: FONT_SIZE.bodySmall, sm: FONT_SIZE.body, lg: FONT_SIZE.lead },
          lineHeight: { xs: "22px", sm: "24px", lg: "28px" },
          color: "#fff",
          maxWidth: { xs: "100%", lg: "800px" },
          mx: "auto",
          px: { xs: 1, lg: 0 }
        }}>
        
          {data.subtitle}
        </Typography>
      }

      {data.buttonText &&
      <Button
        component={Link}
        href="/contact"
        variant="contained"
        sx={{
          mt: { xs: 3, lg: 2.5 },
          bgcolor: "#f8a51e",
          color: "#1a1a1a",
          borderRadius: "10px",
          // Shrinks the actual padding of the button to make it a compact mobile button
          px: { xs: 2, sm: 2.5, lg: 3.5 },
          py: { xs: "6px", sm: "8px", lg: "14px" },
          fontFamily: FONT_FAMILY.body,
          // Decreased down to 10px on mobile
          fontSize: { xs: FONT_SIZE.caption, sm: FONT_SIZE.caption, lg: FONT_SIZE.lead },
          fontWeight: FONT_WEIGHT.semiBold,
          textTransform: "none",
          "&:hover": {
            bgcolor: "#f8a51e"
          }
        }}>
        
          {data.buttonText}
        </Button>
      }
    </Box>);

}
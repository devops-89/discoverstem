"use client";import { FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { ProgramDetailsData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";

export default function ProgramDetailsSection() {
  const data = ProgramDetailsData;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1161px",
        mx: "auto",
        py: { xs: 1, sm: 4, lg: 10 },
        px: { xs: 3, sm: 5, lg: 0 }
      }}>
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 4, lg: "70px" }
        }}>
        
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.heading,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.titleLarge, sm: FONT_SIZE.subSectionHeading, lg: FONT_SIZE.pageHeadingSmall },
            lineHeight: { xs: "38px", sm: "46px", lg: "62px" },
            letterSpacing: "-0.03em",
            color: "#111827",
             textAlign: { xs: "center", sm: "left" }
          }}>
          
          {data.title}
        </Typography>

        <Typography
          sx={{
            textAlign: { xs: "center", sm: "left" },
            whiteSpace: "pre-line",
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.lead, lg: FONT_SIZE.title },
            lineHeight: { xs: "26px", sm: "32px", lg: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777"
          }}>
          
          {data.description}
        </Typography>
      </Box>
    </Container>);

}
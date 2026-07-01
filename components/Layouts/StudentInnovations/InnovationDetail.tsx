"use client";import { FONT_WEIGHT, FONT_SIZE, FONT_FAMILY } from "@/utils/theme";

import { StudentInnovationData } from "@/assets/Generic-data";

import { Box, Container, Typography } from "@mui/material";

export default function CenterTextSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 3, lg: 10 }
      }}>
      
      <Box
        sx={{
          width: "100%",

          display: "flex",
          flexDirection: "column",

          gap: { xs: "24px", md: "32px", lg: "68px" }
        }}>
        
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.bodyLarge, md: FONT_SIZE.lead, lg: FONT_SIZE.title },
            lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777"
          }}>
          
          {StudentInnovationData.paragraph1}
        </Typography>

        <Typography
          sx={{

            textAlign: "center",
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.bodyLarge, md: FONT_SIZE.lead, lg: FONT_SIZE.title },
            lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777"
          }}>
          
          {StudentInnovationData.paragraph2}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.bodyLarge, md: FONT_SIZE.lead, lg: FONT_SIZE.title },
            lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777"
          }}>
          
          {StudentInnovationData.paragraph3}
        </Typography>

        <Typography
          sx={{

            textAlign: "center",
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.bodyLarge, md: FONT_SIZE.lead, lg: FONT_SIZE.title },
            lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777"
          }}>
          
          {StudentInnovationData.paragraph4}
        </Typography>
      </Box>
    </Container>);

}
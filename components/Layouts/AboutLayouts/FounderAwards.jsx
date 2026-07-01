"use client";import { LINE_HEIGHT, FONT_WEIGHT, FONT_SIZE, FONT_FAMILY } from "@/utils/theme";

import { mirzaFaizan } from "@/assets/Generic-data";

import { Box, Container, Grid, Typography } from "@mui/material";

const FounderAwards = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 2, md: 7 },
        px: { xs: 3, md: 4 }
      }}>
      
      <Typography
        sx={{
          width: { xs: "100%", lg: "292px" },
          height: { xs: "auto", lg: "24px" },
          fontFamily: FONT_FAMILY.heading,
          fontWeight: FONT_WEIGHT.semiBold,
          fontSize: { xs: FONT_SIZE.titleLarge, sm: FONT_SIZE.cardHeading, md: FONT_SIZE.articleHeading, lg: FONT_SIZE.subSectionHeading },
          lineHeight: { xs: LINE_HEIGHT.extraLarge, md: "40px", lg: LINE_HEIGHT.xl5 },
          letterSpacing: "-0.02em",
          color: "#111827",
          mb: { xs: 3, md: 8 },
          // 🔥 FIX: Centered main heading on mobile
          textAlign: { xs: "center", md: "left" } 
        }}>
        
        Awards & Honors
      </Typography>
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ maxWidth: { xs: "100%", lg: "560px" } }}>
            <Typography
              sx={{
                width: { xs: "100%", lg: "533px" },
                height: { xs: "auto", lg: "77px" },
                fontFamily: FONT_FAMILY.body,
                fontSize: { xs: FONT_SIZE.body, md: FONT_SIZE.bodyXLarge, lg: FONT_SIZE.lead },
                lineHeight: LINE_HEIGHT.extraLarge,
                color: "#474A55",
                mb: { xs: 3, md: 5 },
                // 🔥 FIX: Centered column heading on mobile
                textAlign: { xs: "center", md: "left" }
              }}>
              
              {mirzaFaizan.awards.leftTitle}
            </Typography>

            {mirzaFaizan.awards.left.map((item, index) =>
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                mb: "10px"
              }}>
              
                <Box
                sx={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#111827",
                  mt: { xs: "13px", md: "10px" },
                  flexShrink: 0
                }} />
              

                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontSize: { xs: FONT_SIZE.body, md: FONT_SIZE.bodyXLarge, lg: FONT_SIZE.lead },
                  lineHeight: LINE_HEIGHT.extraLarge,
                  color: "#474A55"
                }}>
                
                  {item}
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ maxWidth: { xs: "100%", lg: "560px" } }}>
            <Typography
              sx={{
                width: { xs: "100%", lg: "533px" },
                height: { xs: "auto", lg: "77px" },
                fontFamily: FONT_FAMILY.body,
                fontSize: { xs: FONT_SIZE.body, md: FONT_SIZE.bodyXLarge, lg: FONT_SIZE.lead },
                lineHeight: LINE_HEIGHT.extraLarge,
                color: "#474A55",
                mb: { xs: 3, lg: "38px" },
                // 🔥 FIX: Centered column heading on mobile
                textAlign: { xs: "center", md: "left" }
              }}>
              
              {mirzaFaizan.awards.rightTitle}
            </Typography>

            {mirzaFaizan.awards.right.map((item, index) =>
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                mb: "10px"
              }}>
              
                <Box
                sx={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#111827",
                  mt: { xs: "13px", md: "10px" },
                  flexShrink: 0
                }} />
              

                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontSize: { xs: FONT_SIZE.body, md: FONT_SIZE.bodyXLarge, lg: FONT_SIZE.lead },
                  lineHeight: LINE_HEIGHT.extraLarge,
                  color: "#474A55"
                }}>
                
                  {item}
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>);

};

export default FounderAwards;
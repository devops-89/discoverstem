"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { InfoCardItem } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface InfoCardsSectionProps {
  data: InfoCardItem[];
  backgroundColor?: string;
}

export default function InfoCardsSection({
  data,
  backgroundColor = "#FAF5FF"
}: InfoCardsSectionProps) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor
      }}>
      
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1232px",
          mx: "auto",
          py: { xs: 5, sm: 6, lg: "103px" },
          px: { xs: 3, sm: 5, lg: 0 }
        }}>
        
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 290px)"
            },
            justifyContent: "center",
            gap: { xs: 3, lg: "24px" }
          }}>
          
          {data.map((item) =>
          <Box
            key={item.id}
            sx={{
              width: "100%",
              maxWidth: "290px",
              height: { xs: "auto", lg: "180.24px" },
              minHeight: "180.24px",
              backgroundColor: "#FFFFFF",
              border: "0.8px solid rgba(0, 0, 0, 0.05)",
              boxShadow:
              "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
              p: { xs: "20px", lg: "24.8px" },
              mx: "auto"
            }}>
            
              <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.regular,
                fontSize: FONT_SIZE.caption,
                lineHeight: LINE_HEIGHT.extraSmall,
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                color: "#737373",
                mb: "8px"
              }}>
              
                {item.label}
              </Typography>

              <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.semiBold,
                fontSize: { xs: FONT_SIZE.title, lg: FONT_SIZE.titleLarge },
                lineHeight: { xs: LINE_HEIGHT.medium, lg: LINE_HEIGHT.mediumLarge },
                letterSpacing: "-0.6px",
                color: item.color,
                mb: "12px"
              }}>
              
                {item.value}
              </Typography>

              <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.regular,
                fontSize: { xs: FONT_SIZE.small, lg: FONT_SIZE.bodySmall },
                lineHeight: { xs: LINE_HEIGHT.small, lg: "23px" },
                color: "#525252"
              }}>
              
                {item.description}
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>);

}
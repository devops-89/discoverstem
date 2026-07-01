"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { impactQuoteSectionData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";

export default function ImpactQuoteSection() {
  const data = impactQuoteSectionData;

  return (
    <Box
      sx={{
        width: "100%",
        background: "#FAF5FF",
        py: { xs: 6, sm: 8, lg: "80px" }
      }}>
      
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1160px",
          mx: "auto",
          px: { xs: 3, sm: 5, lg: 0 }
        }}>
        
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.bodySmall, sm: FONT_SIZE.bodyLarge, lg: FONT_SIZE.title },
            lineHeight: { xs: LINE_HEIGHT.small, sm: LINE_HEIGHT.medium, lg: LINE_HEIGHT.extraSmall },
            letterSpacing: "2.4px",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#F9A51E",
            mb: { xs: 3, sm: 4, lg: "40px" }
          }}>
          
          {data.tag}
        </Typography>

        <Typography
          component="div"
          sx={{
            maxWidth: "1104px",
            mx: "auto",
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.title, sm: FONT_SIZE.cardHeadingSmall, lg: FONT_SIZE.cardHeadingLarge },
            lineHeight: { xs: "36px", sm: "42px", lg: LINE_HEIGHT.xl6 },
            textAlign: "center",
            color: "#171717",

            "& span": {
              color: "#F9A51E"
            }
          }}
          dangerouslySetInnerHTML={{
            __html: data.description
          }} />
        

        <Typography
          sx={{
            mt: { xs: 4, sm: 5, lg: "32px" },
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.bold,
            fontSize: { xs: FONT_SIZE.cardHeading, sm: FONT_SIZE.subSectionHeading, lg: FONT_SIZE.pageHeadingSmall },
            lineHeight: LINE_HEIGHT.relativeTighter,
            textAlign: "center",
            color: "#000"
          }}>
          
          {data.quote}
        </Typography>

        <Typography
          sx={{
            maxWidth: "446px",
            mx: "auto",
            mt: { xs: 3, sm: 4, lg: "28px" },
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.bodySmall, sm: FONT_SIZE.body, lg: FONT_SIZE.bodyLarge },
            lineHeight: { xs: "22px", sm: LINE_HEIGHT.medium, lg: LINE_HEIGHT.medium },
            textAlign: "center",
            color: "rgba(0,0,0,0.7)"
          }}>
          
          {data.footerText}
        </Typography>
      </Container>
    </Box>);

}
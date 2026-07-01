"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { QuoteBannerData } from "@/utils/Types";
import { Box, Typography } from "@mui/material";

interface QuoteBannerProps {
  data: QuoteBannerData;
}

export default function QuoteBanner({ data }: QuoteBannerProps) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "260px", lg: "329.1px" },
        backgroundColor: "#FAF5FF",
        px: { xs: 3, md: 8, lg: "247.6px" },
        py: { xs: 6, md: 8, lg: "84px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
      
      <Box sx={{ width: "100%", maxWidth: "976px" }}>
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.cardHeading, md: FONT_SIZE.articleHeading, lg: FONT_SIZE.subSectionHeading },
            lineHeight: { xs: "34px", md: "38px", lg: "42px" },
            color: "#F9A51E",
            mb: 2
          }}>
          
          “
        </Typography>

        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.medium,
            fontSize: { xs: FONT_SIZE.bodyLarge, md: FONT_SIZE.leadLarge, lg: "25.6px" },
            lineHeight: { xs: LINE_HEIGHT.mediumLarge, md: "30px", lg: LINE_HEIGHT.xl2 },
            letterSpacing: "-0.64px",
            color: "#000000",
            textAlign: "center",
            whiteSpace: "pre-line"
          }}>
          
          {data.quote}
        </Typography>

        <Box
          sx={{
            mt: { xs: 3, lg: "24px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px"
          }}>
          
          <Box sx={{ width: "44px", height: "1px", bgcolor: "#00000033" }} />

          <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.regular,
              fontSize: FONT_SIZE.bodySmall,
              lineHeight: LINE_HEIGHT.small,
              color: "#000000B2"
            }}>
            
            {data.author}
          </Typography>

          <Box sx={{ width: "44px", height: "1px", bgcolor: "#00000033" }} />
        </Box>
      </Box>
    </Box>);

}
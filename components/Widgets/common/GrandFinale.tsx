"use client";import { FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { ImageTextHighlightSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface GrandFinaleSectionProps {
  data: ImageTextHighlightSectionData;
}

export default function GrandFinaleSection({
  data
}: GrandFinaleSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: "20px", md: "32px", lg: 0 },
        pt: { xs: "30px", md: "50px", lg: "0px" },
        pb: { xs: "30px", md: "60px", lg: "0px" }
      }}>
      
      <Typography
        sx={{
          width: "100%",
          minHeight: { lg: "130px" },
          whiteSpace: "pre-line",
          fontFamily: FONT_FAMILY.heading,
          fontWeight: FONT_WEIGHT.semiBold,
          fontSize: { xs: FONT_SIZE.titleLarge, sm: FONT_SIZE.subSectionHeading, md: FONT_SIZE.sectionHeadingSmall, lg: FONT_SIZE.pageHeadingSmall },
          lineHeight: { xs: "30px", sm: "48px", md: "52px", lg: "65px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#101010",
          mb: { xs: "35px", lg: "35px" }
        }}>
        
        {data.title}
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1022.73px",
          height: { xs: "230px", sm: "360px", md: "400px", lg: "515px" },
          mx: "auto",
          mb: { xs: "42px", md: "56px", lg: "70px" },
          overflow: "hidden"
        }}>
        
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill sizes="100vw"
          priority
          style={{
            objectFit: "cover",
            borderRadius: "16px"
          }} />
        
      </Box>

      <Typography
        component="div"
        sx={{
          width: "100%",
          maxWidth: "1160px",
          mx: "auto",
          fontFamily: FONT_FAMILY.body,
          fontStyle: "normal",
          fontWeight: FONT_WEIGHT.regular,
          fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.lead, md: FONT_SIZE.leadLarge, lg: FONT_SIZE.title },
          lineHeight: { xs: "28px", sm: "34px", md: "38px", lg: "43px" },
          letterSpacing: "-0.03em",
          textAlign: "center",
          color: "#777777",

          "& strong": {
            fontWeight: FONT_WEIGHT.semiBold,
            color: "#101010"
          },

          "& p": {
            m: 0
          }
        }}
        dangerouslySetInnerHTML={{
          __html: data.content
        }} />
      
    </Container>);

}
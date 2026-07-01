"use client";import { FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { dipProgramDetailsData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";

export default function DipProgramDetailsSection() {
  const data = dipProgramDetailsData;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        py: { xs: 5, sm: 6, lg: 10 },
        px: { xs: 3, sm: 5, lg: 0 }
      }}>
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 4, lg: "75px" }
        }}>
        
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.heading,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.cardHeading, sm: FONT_SIZE.subSectionHeading, lg: FONT_SIZE.pageHeadingSmall },
            lineHeight: { xs: "38px", sm: "46px", lg: "62px" },
            textAlign: "center",
            letterSpacing: "-0.03em",
            color: "#111827"
          }}>
          
          {data.title}
        </Typography>

        <Box>
          {data.content.map((paragraph, index) =>
          <Typography
            key={index}
            component="div"
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.regular,
              fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.lead, lg: FONT_SIZE.title },
              lineHeight: { xs: "26px", sm: "32px", lg: "43px" },
              textAlign: "center",
              letterSpacing: "-0.03em",
              color: "#777777",
              mb: index === data.content.length - 1 ? 0 : { xs: 3, sm: 4, lg: "43px" },

              "& strong": {
                fontWeight: FONT_WEIGHT.bold,
                color: "#111827"
              }
            }}
            dangerouslySetInnerHTML={{ __html: paragraph }} />

          )}
        </Box>
      </Box>
    </Container>);

}
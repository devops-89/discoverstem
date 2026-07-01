"use client";import { FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { CommonTextSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface CommonTextSectionProps {
  data: CommonTextSectionData;
}

export default function CommonTextSection({
  data
}: CommonTextSectionProps) {
  const hasContent =
  data.title || data.description || data.points?.length;

  if (!hasContent) return null;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",

        px: { xs: 3, md: 4, lg: 0 },
        pt: { xs: 6, lg: 10 },
        pb: { xs: 3, lg: 10 }
      }}>
      
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: {
            xs:
            data.title && (
            data.description || data.points?.length) ?
            4 :
            0,
            lg:
            data.title && (
            data.description || data.points?.length) ?
            "70px" :
            0
          }
        }}>
        
        {/* Heading */}
        {data.title &&
        <Typography
          sx={{
            // 🔥 FIX: Centers title on small screens, aligns left on lg screens
            textAlign: { xs: "center", md: "left" }, 
            fontFamily: FONT_FAMILY.heading,
            fontWeight: FONT_WEIGHT.semiBold,

            fontSize: {
              xs: FONT_SIZE.titleLarge,
              sm: FONT_SIZE.articleHeading,
              md: FONT_SIZE.subSectionHeading,
              lg: FONT_SIZE.pageHeadingSmall
            },
            lineHeight: {
              xs: "30px",
              sm: "40px",
              md: "44px",
              lg: "62px"
            },
            letterSpacing: "-0.03em",
            color: "#111827"
          }}>
          
            {data.title}
          </Typography>
        }

       
        {(data.description || data.points?.length) &&
        <Box>
            {data.description &&
          <Typography
            sx={{
              // 🔥 FIX: Centers description on small screens, aligns left on lg screens
              textAlign: { xs: "center", md: "left" }, 
              width: "100%",
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.regular,

              fontSize: {
                xs: FONT_SIZE.body,
                sm: FONT_SIZE.bodyLarge,
                md: FONT_SIZE.lead,
                lg: FONT_SIZE.title
              },
              lineHeight: {
                xs: "26px",
                sm: "28px",
                md: "32px",
                lg: "43px"
              },
              letterSpacing: "-0.03em",
              color: "#777777",
              whiteSpace: "pre-line",
              mb: data.points?.length ? 2 : 0
            }}>
            
                {data.description}
              </Typography>
          }

            {data.points?.length ?
          <Box
            component="ul"
            sx={{
              pl: 3,
              mt: 0,
              mb: 0
            }}>
            
                {data.points.map((point, index) =>
            <Typography
              component="li"
              key={index}
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.semiBold,

                fontSize: {
                  xs: FONT_SIZE.bodySmall,
                  md: FONT_SIZE.bodyLarge,
                  lg: FONT_SIZE.lead
                },
                lineHeight: {
                  xs: "26px",
                  md: "30px",
                  lg: "34px"
                },
                color: "#111827",
                mb: 1
              }}>
              
                    {point}
                  </Typography>
            )}
              </Box> :
          null}
          </Box>
        }
      </Box>
    </Container>);

}

"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { OtherProgramsData } from "@/utils/Types";
import { ArrowBackIosNew, ArrowForward, NorthEast } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

interface OtherProgramsSectionProps {
  data: OtherProgramsData;
}

export default function OtherProgramsSection({
  data
}: OtherProgramsSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        py: { xs: 3, sm: 6, lg: 6 },
        px: { xs: 3, sm: 5, lg: 0 }
      }}>
      
      <Box sx={{ mb: { xs: 4, lg: "50px" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            mb: "5px"
          }}>
          
          <Box sx={{ width: { xs: "30px", lg: "50px" }, height: "1px", bgcolor: "#6E6E6E" }} />

          <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.regular,
              fontSize: { xs: FONT_SIZE.small, sm: FONT_SIZE.bodyLarge, lg: FONT_SIZE.title }, // Scaled for mobile
              lineHeight: { xs: LINE_HEIGHT.small, sm: "28px", lg: LINE_HEIGHT.xl4 }, // Scaled for mobile
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#777777"
            }}>
            
            {data.eyebrow}
          </Typography>
        </Box>

        <Typography
          sx={{
             textAlign: { xs: "center", sm: "left" },
            fontFamily: FONT_FAMILY.heading,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.title, sm: FONT_SIZE.subSectionHeading, lg: FONT_SIZE.pageHeadingSmall },
            lineHeight: { xs: "30px", sm: LINE_HEIGHT.xl5, lg: LINE_HEIGHT.huge },
            letterSpacing: "-0.03em",
            color: "#111827"
          }}>
          
          {data.title}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "repeat(2, 570px)" },
          gap: { xs: 3, lg: "20px" },
          alignItems: "stretch"
        }}>
        
        {data.programs.map((program) =>
        <Box
          key={program.id}
          sx={{
            width: "100%",
            minHeight: "272px",
            bgcolor: "#FAF5FF",
            border: "0.8px solid rgba(0,0,0,0.05)",
            boxShadow:
            "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)",
            borderRadius: "16px",
            p: { xs: "20px", lg: "32.8px" }, // Softer padding for mobile screens
            display: "flex",
            flexDirection: "column",
            height: "100%"
          }}>
          
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              mb: "20px"
            }}>
            
              <Box
              sx={{
                width: { xs: "40px", lg: "48px" }, // Shrunk slightly for mobile
                height: { xs: "40px", lg: "48px" }, // Shrunk slightly for mobile
                borderRadius: "14px",
                background:
                "linear-gradient(135deg, #7B53A1 0%, #EE4823 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
              
                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.accent,
                  fontWeight: FONT_WEIGHT.bold,
                  fontSize: { xs: FONT_SIZE.bodySmall, lg: FONT_SIZE.bodyLarge }, // Shrunk for mobile
                  lineHeight: { xs: LINE_HEIGHT.small, lg: LINE_HEIGHT.medium },
                  color: "#FFFFFF"
                }}>
                
                  {program.shortName}
                </Typography>
              </Box>

              <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.semiBold,
                fontSize: { xs: FONT_SIZE.bodyLarge, lg: FONT_SIZE.lead }, // Shrunk for mobile
                lineHeight: { xs: LINE_HEIGHT.medium, lg: "27px" },
                letterSpacing: "-0.45px",
                color: "#171717"
              }}>
              
                {program.title}
              </Typography>
            </Box>

            <Typography
            sx={{
              maxWidth: "538.4px",
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.regular,
              fontSize: { xs: FONT_SIZE.bodySmall, lg: FONT_SIZE.bodyLarge }, // Shrunk for mobile
              lineHeight: { xs: "22px", lg: LINE_HEIGHT.mediumLarge }, // Shrunk for mobile
              color: "#404040",
              flexGrow: 1,
              mb: "24px"
            }}>
            
              {program.description}
            </Typography>

          <Button
            component={Link}
            href={program.href}
            endIcon={
            <ArrowForward
              sx={{
                fontSize: FONT_SIZE.bodyLarge
              }} />

            }
            sx={{
              minWidth: { xs: "110px", lg: "126px" },
              height: { xs: "32px", lg: "36px" },
              borderRadius: "999px",
              bgcolor: "#171717",
              color: "#FFFFFF",
              px: { xs: "14px", lg: "17px" },
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.medium,
              fontSize: { xs: FONT_SIZE.caption, lg: FONT_SIZE.bodySmall },
              lineHeight: LINE_HEIGHT.small,
              textTransform: "none",
              alignSelf: "flex-start",

              "&:hover": {
                bgcolor: "#171717"
              },

              "& .MuiButton-endIcon": {
                ml: "4px"
              }
            }}>
            
            {program.buttonText}
          </Button>
          </Box>
        )}
      </Box>
    </Container>);

}
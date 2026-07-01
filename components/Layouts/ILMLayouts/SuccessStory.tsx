"use client";import { FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { ilmSuccessStoryData } from "@/assets/Generic-data";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function IlmSuccessStorySection() {
  const data = ilmSuccessStoryData;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        py: { xs: 5, md: 6, lg: "80px" },
        px: { xs: 3, md: 4, lg: 0 }
      }}>
      
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", lg: "608px" }
        }}>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, lg: "28px" }
          }}>
          
          
          <Box
            sx={{
              width: "100%",
              minHeight: { xs: "auto", lg: "221px" }
            }}>
            
            <Typography
              sx={{
                 textAlign: { xs: "center", sm: "left" },
                fontFamily: FONT_FAMILY.heading,
                fontWeight: FONT_WEIGHT.semiBold,
                fontSize: { xs: FONT_SIZE.cardHeading, md: FONT_SIZE.subSectionHeading, lg: FONT_SIZE.pageHeadingSmall },
                lineHeight: { xs: "38px", md: "46px", lg: "62px" },
                letterSpacing: "-0.03em",
                color: "#111827",
                mb: { xs: 3, md: "40px", lg: "70px" }
              }}>
              
              {data.title}
            </Typography>

            <Typography
              sx={{
                 textAlign: { xs: "center", sm: "left" },
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.regular,
                fontSize: { xs: FONT_SIZE.body, md: FONT_SIZE.lead, lg: FONT_SIZE.title },
                lineHeight: { xs: "26px", md: "32px", lg: "43px" },
                letterSpacing: "-0.03em",
                color: "#777777"
              }}>
              
              {data.description}
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              minHeight: { xs: "auto", lg: "283px" },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr", lg: "594px 397px" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: 4, md: 4, lg: 0 }
            }}>
            
            <Box
              component="ul"
              sx={{
                pl: { xs: "22px", md: "24px", lg: "24px" },
                m: 0,
                maxWidth: { xs: "100%", lg: "594px" }
              }}>
              
              {data.points.map((point) =>
              <Typography
                key={point}
                component="li"
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: FONT_WEIGHT.semiBold,
                  fontSize: { xs: FONT_SIZE.bodySmall, md: FONT_SIZE.body, lg: FONT_SIZE.title },
                  lineHeight: { xs: "24px", md: "26px", lg: "43px" },
                  letterSpacing: "-0.03em",
                  color: "#000000",
                  mb: { xs: 1.5, md: 2, lg: 0 }
                }}>
                
                  {point}
                </Typography>
              )}
            </Box>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: "100%", lg: "397px" },
                height: { xs: "240px", md: "280px", lg: "307px" },
                borderRadius: "13px",
                overflow: "hidden",
                backgroundColor: "#C4C4C4",
                mx: { xs: "auto", md: 0 }
              }}>
              
              {data.image &&
              <Image
                src={data.image}
                alt={data.title}
                fill sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />

              }
            </Box>
          </Box>
        </Box>

        {/* Button */}
       <Button
          component={Link}
          href={data.buttonLink}
          sx={{
            mt: { xs: 5, lg: "10px" },
            width: { xs: "272px", sm: "368px" },
            maxWidth: "368px",
            height: { xs: "46px", sm: "56px" },
            borderRadius: "30px",
            backgroundColor: "#7B53A1",
            color: "#FFFFFF",
            textTransform: "none",
            justifyContent: "space-between",
            pl: { xs: "14px", sm: "24px" },
            pr: "6px",
            display: "flex",
            // 🔥 FIX: Center the button on xs screens only
            mx: { xs: "auto", sm: 0 },

            "&:hover": {
              backgroundColor: "#6A448F"
            }
          }}>
          
        <Typography
            component="span"
            dangerouslySetInnerHTML={{
              __html: data.buttonText
            }}
            sx={{
              
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.regular,
              fontSize: { xs: FONT_SIZE.footnote, sm: FONT_SIZE.bodyLarge },
              lineHeight: { xs: "16px", sm: "24px" },
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",

              "& strong": {
                fontWeight: FONT_WEIGHT.bold
              }
            }} />
          

        <Box
            sx={{
              
              width: { xs: "34px", sm: "44px" },
              height: { xs: "34px", sm: "44px" },
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              ml: 1
            }}>
            
          <NorthEastIcon
              sx={{
                fontSize: { xs: FONT_SIZE.bodySmall, sm: FONT_SIZE.leadLarge },
                color: "#111827"
              }} />
            
        </Box>
      </Button>
      </Box>
    </Container>);

}
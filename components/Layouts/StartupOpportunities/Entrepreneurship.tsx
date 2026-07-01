"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { entrepreneurshipFundingData } from "@/assets/Generic-data";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function EntrepreneurshipFunding() {
  const data = entrepreneurshipFundingData;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1159px",
        mx: "auto",

        px: { xs: 3, lg: 0 },
        py: { xs: 3, lg: 10 }
      }}>
      
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",

            lg: "688px 451.5px"
          },
          gap: { xs: 5, lg: "20px" },
          alignItems: "start"
        }}>
        
        <Box>
          <Typography
            component="div"
            sx={{
              textAlign: { xs: "center", lg: "left" },
              mx: { xs: "auto", lg: 0 },
              maxWidth: "702px",
              fontFamily: FONT_FAMILY.heading,
              fontWeight: 600,

              fontSize: { xs: "28px", md: "32px", lg: "36px" },
              lineHeight: { xs: "36px", md: "40px", lg: "41px" },
              letterSpacing: "-0.9px",
              color: "#171717",
              mb: "18px",

              "& strong": {
                color: "#7B53A1",
                fontWeight: 600
              }
            }}
            dangerouslySetInnerHTML={{ __html: data.title }} />
          

          <Typography
            sx={{
              maxWidth: "687px",
              textAlign: { xs: "center", lg: "left" },
              mx: { xs: "auto", lg: 0 },
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              fontSize: { xs: "14px", lg: "16px" },
              lineHeight: { xs: "24px", lg: "26px" },
              color: "#777777",
              mb: { xs: 4, lg: "52px" }
            }}>
            
            {data.description}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",

                sm: "repeat(2, 1fr)",
                lg: "repeat(2, 338.12px)"
              },
              gap: "12px"
            }}>
            
            {data.points.map((point) =>
            <Box
              key={point}
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", lg: "338.12px" },
                minHeight: "53.6px",
                backgroundColor: "#FFFFFF",
                border: "0.8px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "14px",
                px: "16px",
                py: "16px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px"
              }}>
              
                <CheckCircleIcon
                sx={{
                  fontSize: "20px",
                  color: "#7B53A1",
                  flexShrink: 0
                }} />
              

                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: 400,
                  fontSize: { xs: "13px", lg: "14px" },
                  lineHeight: "20px",
                  color: "#262626"
                }}>
                
                  {point}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: "100%", sm: "600px", lg: "451.5px" },
            height: { xs: "320px", md: "400px", lg: "465.54px" },
            borderRadius: "29px",
            overflow: "hidden",
            backgroundColor: "#C4C4C4",
            mx: { xs: "auto", lg: 0 }
          }}>
          
          {data.image &&
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill sizes="100vw"
            style={{ objectFit: "cover" }} />

          }
        </Box>
      </Box>
    </Container>);

}
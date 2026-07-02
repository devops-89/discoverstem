"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { mirzaFaizan } from "@/assets/Generic-data";

import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter } from
"@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import Image from "next/image";

const FounderSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1155px",
        width: "100%",
        mx: "auto",
        py: { xs: 4, md: 8, lg: 15 },
        px: { xs: 3, lg: 0 }
      }}>
      
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", lg: "650px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: 4, md: "4%", lg: "56px" }
        }}>
        
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "48%", lg: "537.986px" },
            height: { xs: "380px", sm: "550px", md: "550px", lg: "650px" },
            borderRadius: "18px",
            overflow: "hidden",
            flexShrink: 0
          }}>
          
          <Image
            src={mirzaFaizan.image}
            alt={mirzaFaizan.name}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              objectPosition: "top center"
            }}
            priority />
          
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "48%", lg: "561px" },
            minHeight: { xs: "auto", lg: "650px" },
            pt: { xs: 0, md: 3, lg: "42px" },
            display: "flex",
            flexDirection: "column",
            textAlign: { xs: "justify", md: "left" },
          }}>
          
          
          <Box
            sx={{
              width: "100%",
              mb: { xs: 3, md: 4, lg: 6 }
            }}>
            
            <Typography
              sx={{
                fontFamily: FONT_FAMILY.heading,
                fontWeight: 600,
                fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "48px" },
                lineHeight: { xs: "36px", sm: "42px", md: "46px", lg: "62px" },
                letterSpacing: "-0.03em",
                color: "#111827",
                mb: 1
              }}>
              
              {mirzaFaizan.name}
            </Typography>

            <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: 600,
                fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "22px" },
                lineHeight: { xs: "24px", md: "26px", lg: "30px" },
                letterSpacing: "-0.01em",
                color: "#111827"
              }}>
              
              {mirzaFaizan.role}
            </Typography>
          </Box>
          <Typography
            sx={{
              width: "100%",
              whiteSpace: "pre-line",
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              fontSize: { xs: "15px", md: "15px", lg: "18px" },
              lineHeight: { xs: "26px", md: "28px", lg: "32px" },
              color: "#474A55",
              opacity: 0.9
            }}>
            
            {mirzaFaizan.description}
          </Typography>
          <Box
            sx={{
              mt: { xs: 4, md: "auto" },
              pt: { xs: 0, md: 3, lg: 5 },
              width: "100%",
              mx: 0
            }}>
            
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" }, 
                alignItems: "center",
                gap: "10px",
                mb: 4
              }}>
              
              <Email
                sx={{
                  fontSize: "18px",
                  color: "#111827"
                }} />
              

              <Typography
                sx={{
                  width: "fit-content",
                  height: "auto",
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "16px" },
                  color: "#111827"
                }}>
                
                {mirzaFaizan.email}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" }, 
                gap: "8px"
              }}>
              
              {[Facebook, LinkedIn, Twitter, Instagram].map((Icon, i) =>
              <IconButton
                key={i}
                sx={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#F6EDFF",
                  color: "#4B5563",
                  "&:hover": {
                    backgroundColor: "#7B53A1",
                    color: "#F6EDFF"
                  }
                }}>
                
                  <Icon sx={{ fontSize: "18px" }} />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>);

};

export default FounderSection;
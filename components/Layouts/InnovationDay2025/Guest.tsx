"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function ChiefGuestSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#FAF5FF",
        py: { xs: 6, md: 8, lg: "107px" }
      }}>
      
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "944.23px",
          mx: "auto",
          px: { xs: 3, md: 4, lg: 0 }
        }}>
        
        <Box
          sx={{
            width: "100%",
            minHeight: { xs: "auto", lg: "395.6px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
              lg: "380px 414.23px"
            },
            gap: { xs: 5, md: 8, lg: "150px" },
            alignItems: "start"
          }}>
          
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "380px",
              height: { xs: "320px", sm: "380px" },
              borderRadius: "16px",
              overflow: "hidden",
              mx: { xs: "auto", md: 0 }
            }}>
            
            <Image
              src="/Images/finale/chiefguest.png"
              alt="Gurvinder Singh Ahluwalia"
              fill sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
            
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", lg: "414.23px" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" }
            }}>
            
            <Typography
              sx={{
                width: "100%",
                fontFamily: FONT_FAMILY.body,
                fontWeight: 300,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "16px",
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                color: "#F9A51E",
                mb: "15px"
              }}>
              
              Chief Guest · Innovation Day 2025
            </Typography>

            <Typography
              sx={{
                width: "100%",
                fontFamily: FONT_FAMILY.body,
                fontWeight: 600,
                fontSize: { xs: "24px", sm: "30px", lg: "32px" },
                lineHeight: { xs: "30px", sm: "38px", lg: "36.8px" },
                letterSpacing: "-0.8px",
                color: "#000000",
                mb: "4px"
              }}>
              
              Gurvinder Singh Ahluwalia
            </Typography>

            <Typography
              sx={{
                width: "100%",
                maxWidth: "205px",
                fontFamily: FONT_FAMILY.body,
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
                mb: "23.55px"
              }}>
              
              Founder, Digital Twin Labs
            </Typography>

            {[
            {
              label: "Founder",
              value: "Digital Twin Labs"
            },
            {
              label: "Advisor",
              value: "Gates Foundation · Berkeley Lab"
            },
            {
              label: "Formerly",
              value: "CTO, IBM"
            }].
            map((item) =>
            <Box
              key={item.label}
              sx={{
                width: "100%",
                maxWidth: "371px",
                height: "auto",
                minHeight: "68px",
                borderRadius: "14px",
                border: "0.8px solid #0000000D",
                backgroundColor: "#E9E3ED",
                pt: "16.8px",
                px: "16.8px",
                pb: { xs: "16px", lg: "0.8px" },
                mb: "8px",
                boxSizing: "border-box",
                textAlign: "left"
              }}>
              
                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                  color: "#171717",
                  mb: "4px"
                }}>
                
                  {item.label}
                </Typography>

                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#171717"
                }}>
                
                  {item.value}
                </Typography>
              </Box>
            )}

            <Box
              component="a"
              href="https://www.linkedin.com/in/gurvinderahluwalia" target="_blank" rel="noopener noreferrer"
              sx={{
                mt: "16px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "38px",
                px: "20px",
                borderRadius: "999px",
                backgroundColor: "#0A66C2",
                color: "#FFFFFF",
                fontFamily: FONT_FAMILY.body,
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "18px",
                textDecoration: "none",
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: "#084e96"
                }
              }}>
              
              LinkedIn
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>);

}
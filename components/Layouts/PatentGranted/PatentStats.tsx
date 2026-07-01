"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { Box, Container, Typography } from "@mui/material";
import { US, ZA } from "country-flag-icons/react/3x2";

const stats = [
{
  value: "44",
  label: "Patents Granted",
  color: "#7B53A1"
},
{
  value: "31",
  label: "US Patents",
  color: "#EE4823",
  Flag: US
},
{
  value: "13",
  label: "SA Patents",
  color: "#F9A51E",
  Flag: ZA
},
{
  value: "4",
  label: "Youngest Inventor (yrs)",
  color: "#619040"
}];


export default function PatentStats() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1232px",
        mx: "auto",
        px: { xs: 2, md: "32px", lg: 0 },
        py: { xs: 4, md: 5 }
      }}>
      
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "repeat(4, 1fr)"
          },
          backgroundColor: "#FFFFFF",
          border: "0.8px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
          borderRadius: "24px",
          overflow: "hidden"
        }}>
        
        {stats.map((item, index) => {
          const Flag = item.Flag;

          return (
            <Box
              key={index}
              sx={{
                minHeight: { xs: "127.25px", md: "100px", lg: "127.25px" },
                px: { xs: "20px", md: "16px", lg: "32px" },
                pt: { xs: "32px", md: "24px", lg: "32px" },
                pb: { xs: "24px", md: "24px", lg: 0 },
                borderLeft: {
                  xs: index % 2 === 1 ? "0.8px solid rgba(0,0,0,0.05)" : "none",
                  md: index !== 0 ? "0.8px solid rgba(0,0,0,0.05)" : "none"
                },
                borderTop: {
                  xs: index > 1 ? "0.8px solid rgba(0,0,0,0.05)" : "none",
                  md: "none"
                }
              }}>
              
              <Typography
                sx={{
                  fontFamily: FONT_FAMILY.accent,
                  fontWeight: 700,
                  fontSize: { xs: "28px", sm: "32px", md: "28px", lg: "36px" },
                  lineHeight: { xs: "28px", sm: "32px", md: "28px", lg: "36px" },
                  color: item.color,
                  mb: "8px"
                }}>
                
                {item.value}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                
                {Flag &&
                <Box
                  sx={{
                    width: "18px",
                    height: "13px",
                    flexShrink: 0
                  }}>
                  
                    <Flag
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block"
                    }} />
                  
                  </Box>
                }

                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.accent,
                    fontWeight: 400,
                    fontSize: { xs: "12px", sm: "13px", md: "12px", lg: "14px" },
                    lineHeight: { xs: "16px", sm: "17px", md: "16px", lg: "19px" },
                    color: "#525252"
                  }}>
                  
                  {item.label}
                </Typography>
              </Box>
            </Box>);

        })}
      </Box>
    </Container>);

}
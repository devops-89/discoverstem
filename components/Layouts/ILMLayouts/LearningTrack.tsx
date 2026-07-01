"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { ilmLearningTracksData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function IlmLearningTracksSection() {
  const data = ilmLearningTracksData;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1280px",
        mx: "auto",
        py: { xs: 4, sm: 8, lg: 16 },
        px: { xs: 3, sm: 5, lg: 0 }
      }}>
      
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontWeight: 600,
          fontSize: { xs: "24px", sm: "36px", lg: "48px" },
          lineHeight: { xs: "38px", sm: "46px", lg: "62px" },
          letterSpacing: "-0.03em",
          textAlign: "center",
          color: "#111827",
          mb: { xs: 4, sm: 5, lg: "75px" }
        }}>
        
        {data.title}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 290px)"
          },
          justifyContent: "center",
          gap: { xs: 3, lg: "24px" }
        }}>
        
        {data.tracks.map((track) =>
        <Box
          key={track.id}
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "290px",
            height: "383.14px",
            backgroundColor: "#FFFFFF",
            border: "0.8px solid rgba(0, 0, 0, 0.05)",
            boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            overflow: "hidden",
            mx: "auto"
          }}>
          
          
            <Box
            sx={{
              position: "absolute",
              width: "128px",
              height: "128px",
              left: "209.2px",
              top: "-47.2px",
              backgroundColor: track.color,
              opacity: 0.1,
              borderRadius: "999px"
            }} />
          

         
            <Box
            sx={{
              position: "absolute",
              width: "48px",
              height: "48px",
              left: "24.8px",
              top: "24.8px",
              borderRadius: "14px",
              backgroundColor: `${track.color}1A`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
            
              <Image
              src={track.icon}
              alt={track.title}
              width={24}
              height={24}
              style={{
                objectFit: "contain"
              }} />
            
            </Box>
            <Typography
            sx={{
              position: "absolute",
              width: "240.4px",
              left: "24.8px",
              top: "92.8px",
              fontFamily: FONT_FAMILY.body,
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: "-0.45px",
              color: "#171717"
            }}>
            
              {track.title}
            </Typography>
            <Typography
            sx={{
              position: "absolute",
              width: "240.4px",
              left: "24.8px",
              top: "127.8px",
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "23px",
              color: "#525252"
            }}>
            
              {track.description}
            </Typography>
            <Box
            sx={{
              position: "absolute",
              width: "240.4px",
              left: "24.8px",
              top: "271.8px",
              pt: "16.8px",
              borderTop: "0.8px solid rgba(0, 0, 0, 0.05)"
            }}>
            
              <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "16px",
                letterSpacing: "0.6px",
                textTransform: "uppercase",
                color: "#000000",
                mb: "4px"
              }}>
              
                Outcome
              </Typography>

              <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
                color: track.color
              }}>
              
                {track.outcome}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Container>);

}
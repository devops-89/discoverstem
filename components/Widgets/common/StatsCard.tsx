"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { StatItem } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface StatsCardProps {
  stats: StatItem[];
  maxWidth?: string;
}

export default function StatsCard({
  stats,
  maxWidth = "1232px"
}: StatsCardProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth,
        mx: "auto",

        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 3, md: 5 }
      }}>
      
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "128.85px" },
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: `repeat(${stats.length}, 1fr)`
          },
          backgroundColor: "#FFFFFF",
          border: "0.8px solid #E5E5E5",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0px 8px 10px -6px #0000001A"
        }}>
        
        {stats.map((item, index) =>
        <Box
          key={index}
          sx={{
            minHeight: { xs: "110px", md: "128.85px" },
            px: { xs: 3, md: "24px" },
            py: { xs: 2.5, md: "26px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            borderRight: {
              xs: "none",
              sm:
              index % 2 === 0 && index !== stats.length - 1 ?
              "0.8px solid #E5E5E5" :
              "none",
              md:
              index !== stats.length - 1 ?
              "0.8px solid #E5E5E5" :
              "none"
            },

            borderBottom: {
              xs:
              index !== stats.length - 1 ?
              "0.8px solid #E5E5E5" :
              "none",
              sm:
              index < Math.ceil(stats.length / 2) && stats.length > 2 ?
              "0.8px solid #E5E5E5" :
              "none",
              md: "none"
            }
          }}>
          
            <Typography
            sx={{
              fontFamily: FONT_FAMILY.accent,
              fontWeight: 700,

              fontSize: { xs: "24px", sm: "28px", md: "28px", lg: "36px" },
              lineHeight: { xs: "28px", sm: "32px", md: "32px", lg: "36px" },
              color: item.color
            }}>
            
              {item.value}
            </Typography>

            <Box
            sx={{
              mt: 1,
              minHeight: "20px",
              display: "flex",
              alignItems: "center"
            }}>
            
              {item.flag ?
            <Image
              src={item.flag}
              alt={item.label || item.value}
              width={140}
              height={20}
              style={{
                width: "auto",
                height: "20px",
                objectFit: "contain"
              }} /> :


            <Typography
              sx={{
                fontFamily: FONT_FAMILY.accent,
                fontWeight: 400,

                fontSize: { xs: "12px", md: "12px", lg: "14px" },
                lineHeight: "19.25px",
                color: "#525252"
              }}>
              
                  {item.label}
                </Typography>
            }
            </Box>
          </Box>
        )}
      </Box>
    </Container>);

}
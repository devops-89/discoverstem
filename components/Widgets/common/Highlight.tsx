"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { ImageContentSplitData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface ImageContentSplitSectionProps {
  data: ImageContentSplitData;
}

export default function ImageContentSplitSection({
  data
}: ImageContentSplitSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 1, md: 6, lg: 8 }
      }}>
      
    
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "563px 510px" },
          gap: { xs: 4, md: 6, lg: "87px" },
          alignItems: "start",
          mb: { xs: 3, md: 8, lg: "100px" }
        }}>
        
        <Box>
          {data.topSection.description.map((paragraph, index) =>
          <Typography
            key={index}
            sx={{
               textAlign: { xs: "center", md: "left" }, 
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              fontSize: { xs: "16px", md: "18px", lg: "20px" },
              lineHeight: { xs: "28px", md: "32px", lg: "36px" },
              letterSpacing: "-0.03em",
              color: "#777777",
              mb:
              index === data.topSection.description.length - 1 ?
              0 :
              { xs: 3, lg: "36px" }
            }}>
            
              {paragraph}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            mx: { xs: "auto", md: 0 },
            position: "relative",
            width: "100%",
            maxWidth: "510px",
            height: { xs: "280px", md: "350px", lg: "401px" },
            borderRadius: "16px",
            overflow: "hidden"
          }}>
          
          <Image
            src={data.topSection.image}
            alt="Top Section"
            fill sizes="100vw"
            style={{ objectFit: "cover" }} />
          
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "510px 563px" },
          gap: { xs: 4, md: 6, lg: "87px" },
          alignItems: "start"
        }}>
        
        <Box
          sx={{
            order: { xs: 2, md: 1 },
            mx: { xs: "auto", md: 0 },
            position: "relative",
            width: "100%",
            maxWidth: "510px",
            height: { xs: "280px", md: "350px", lg: "401px" },
            borderRadius: "16px",
            overflow: "hidden"
          }}>
          
          <Image
            src={data.bottomSection.image}
            alt="Bottom Section"
            fill sizes="100vw"
            style={{ objectFit: "cover" }} />
          
        </Box>

        <Box
          sx={{
            order: { xs: 1, md: 2 }
          }}>
          
          {data.bottomSection.description.map((paragraph, index) =>
          <Typography
            key={index}
            sx={{
               textAlign: { xs: "center", md: "left" }, 
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              fontSize: { xs: "16px", md: "18px", lg: "20px" },
              lineHeight: { xs: "28px", md: "32px", lg: "36px" },
              letterSpacing: "-0.03em",
              color: "#777777",
              mb:
              index === data.bottomSection.description.length - 1 ?
              0 :
              { xs: 3, lg: "36px" }
            }}>
            
              {paragraph}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>);

}
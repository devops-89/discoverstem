"use client";
import { FONT_FAMILY } from "@/utils/theme";

import { SimpleTextSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface SimpleTextSectionProps {
  data: SimpleTextSectionData;
}

export default function SimpleTextSection({ data }: SimpleTextSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, lg: "0px "},
        py: { xs: 6, lg: 10 }
      }}>
      
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, lg: "20px" }
        }}>
        
        {data.paragraphs.map((paragraph, index) =>
        <Typography
          key={index}
          sx={{
             textAlign: {xs:"center",sm:"left"},
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: { xs: "15px", sm: "16px", md: "18px", lg: "22px" },
            lineHeight: { xs: "26px", sm: "28px", md: "34px", lg: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777",
            
            whiteSpace: "pre-line"
          }}>
          
            {paragraph}
          </Typography>
        )}
      </Box>
    </Container>);

}
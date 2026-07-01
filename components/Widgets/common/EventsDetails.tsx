"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { ContentSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface ContentSectionProps {
  data: ContentSectionData;
}

export default function ContentSection({
  data
}: ContentSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, sm: 4, md: 4, lg: 0 },
        py: { xs: 2, sm: 3, md: 5, lg: "70px" }
      }}>
      
      <Box
        sx={{
          width: "100%",
          maxWidth: "1160px"
        }}>
        
        {data.paragraphs.map((paragraph, index) =>
        <Typography
          key={index}
          component="div"
          sx={{
            mb:
            index === data.paragraphs.length - 1 ?
            0 :
            { xs: 3, sm: 4, md: 4, lg: "48px" },

            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: {
              xs: "16px",
              sm: "17px",
              md: "18px",
              lg: "22px"
            },
            lineHeight: {
              xs: "26px",
              sm: "28px",
              md: "32px",
              lg: "43px"
            },
            letterSpacing: "-0.03em",
            textAlign: { xs: "center", md: "left" }, 
            color: "#777777",

            "& strong": {
              fontWeight: 700,
              color: "#111827"
            }
          }}
          dangerouslySetInnerHTML={{
            __html: paragraph
          }} />

        )}
      </Box>
    </Container>);

}
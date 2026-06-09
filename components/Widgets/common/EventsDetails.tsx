"use client";

import { ContentSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface ContentSectionProps {
  data: ContentSectionData;
}

export default function ContentSection({
  data,
}: ContentSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 0, md: "70px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1160px",
        }}
      >
        {data.paragraphs.map((paragraph, index) => (
          <Typography
            key={index}
            component="div"
            sx={{
              mb:
                index === data.paragraphs.length - 1
                  ? 0
                  : { xs: 4, md: "48px" },

              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: {
                xs: "16px",
                md: "22px",
              },
              lineHeight: {
                xs: "30px",
                md: "43px",
              },
              letterSpacing: "-0.03em",
              textAlign: "center",
              color: "#777777",

              "& strong": {
                fontWeight: 700,
                color: "#111827",
              },
            }}
            dangerouslySetInnerHTML={{
              __html: paragraph,
            }}
          />
        ))}
      </Box>
    </Container>
  );
}
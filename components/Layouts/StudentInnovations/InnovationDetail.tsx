"use client";


import { StudentInnovationData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Container, Typography } from "@mui/material";

export default function CenterTextSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1080px",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: { xs: "16px", md: "22px" },
            lineHeight: { xs: "30px", md: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777",
            mb: 3,
          }}
        >
          {StudentInnovationData.paragraph1}
        </Typography>

        <Typography
          sx={{
            textAlign: "left",
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: { xs: "16px", md: "22px" },
            lineHeight: { xs: "30px", md: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777",
            mb: 3,
          }}
        >
          {StudentInnovationData.paragraph2}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
           
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: { xs: "16px", md: "22px" },
            lineHeight: { xs: "30px", md: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777",
            mb: 3,
          }}
        >
          {StudentInnovationData.paragraph3}
        </Typography>

        <Typography
          sx={{
            textAlign: "left",
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: { xs: "16px", md: "22px" },
            lineHeight: { xs: "30px", md: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777",
          }}
        >
          {StudentInnovationData.paragraph4}
        </Typography>
      </Box>
    </Container>
  );
}
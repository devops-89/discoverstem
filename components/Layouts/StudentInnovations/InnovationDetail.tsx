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
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 3, lg: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          // 🔥 FIX: Switched to flex layout to perfectly match Figma's "Auto layout"
          display: "flex",
          flexDirection: "column",
          // 🔥 FIX: Applied the exact 68px gap for 1440px ('lg') from your Figma CSS! Scaled it down safely for mobile.
          gap: { xs: "24px", md: "32px", lg: "68px" },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: { xs: "15px", sm: "16px", md: "18px", lg: "22px" },
            lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777",
          }}
        >
          {StudentInnovationData.paragraph1}
        </Typography>

        <Typography
          sx={{
            // 🔥 FIX: Changed from 'left' to 'center' to perfectly match the Figma CSS!
            textAlign: "center",
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: { xs: "15px", sm: "16px", md: "18px", lg: "22px" },
            lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777",
          }}
        >
          {StudentInnovationData.paragraph2}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: { xs: "15px", sm: "16px", md: "18px", lg: "22px" },
            lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777",
          }}
        >
          {StudentInnovationData.paragraph3}
        </Typography>

        <Typography
          sx={{
            // 🔥 FIX: Changed from 'left' to 'center' to perfectly match the Figma CSS!
            textAlign: "center",
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: { xs: "15px", sm: "16px", md: "18px", lg: "22px" },
            lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "43px" },
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
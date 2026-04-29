"use client";

import { mirzaFaizan } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Container, Typography } from "@mui/material";

const FounderBio = () => {
  return (
    <Container
          maxWidth={false}
          sx={{
            maxWidth: "min(1196px, 100%)",
            py: { xs: 5, md: 7 },
            px: { xs: 3, md: 4 },
          }}
        >
        
          <Typography
            sx={{
              width: { xs: "100%", md: "273px" },
              height: { xs: "auto", md: "24px" },
              fontFamily: FONT_FAMILY.heading,
              fontWeight: 600,
              fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
              lineHeight: { xs: "32px", md: "40px", lg: "46px" },
              letterSpacing: "-0.02em",
              color: "#111827",
              textAlign: "left",
            }}
          >
            Short Biography
          </Typography>

          <Typography
            sx={{
              width: { xs: "100%", md: "1160px" },
              height: { xs: "auto", md: "77px" },
              mt: 6,
              fontFamily: FONT_FAMILY.body,
              fontSize: { xs: "14px", sm: "16px", md: "17px", lg: "18px" },
              lineHeight: { xs: "24px", md: "28px", lg: "32px" },
              color: "#474A55",
              textAlign: "left",

              width: "100%",
              maxWidth: "100%",
            }}
          >
            {mirzaFaizan.shortBio}
          </Typography>

    </Container>
  );
};

export default FounderBio;
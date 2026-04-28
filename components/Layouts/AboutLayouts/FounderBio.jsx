"use client";

import { mirzaFaizan } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Container, Typography } from "@mui/material";

const FounderBio = () => {
  return (
    <Box sx={{ mt: { xs: 4, md: 6, lg: 6 } }}>
      <Container maxWidth="xl">
        
        <Box
          sx={{
            px: { xs: 2, sm: 4, md: 6, lg: 12 },
          }}
        >
          <Typography
            sx={{
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
              mt: 2,
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
        </Box>

      </Container>
    </Box>
  );
};

export default FounderBio;
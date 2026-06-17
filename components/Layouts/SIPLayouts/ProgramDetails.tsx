"use client";

import { programDetailsData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function ProgramDetails() {
  return (
      <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >
        
        {/* Heading */}
        <Typography
          sx={{
            width: { xs: "100%", md: "358px" },
            height: { xs: "auto", md: "32px" },
            fontFamily: FONT_FAMILY.heading,
            fontSize: { xs: "28px", md: "48px" },
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: "#111827",
            mb: 4,
          }}
        >
          {programDetailsData.title}
        </Typography>

        <Typography
          sx={{
            width: { xs: "100%", md: "fit-content" },
            height: { xs: "auto", md: "144px" },
            fontFamily: FONT_FAMILY.body,
            mt: 8,
            fontWeight: 400,
            maxWidth: "1161px",
            fontSize: "22px",
            lineHeight: "43px",
            letterSpacing: "-0.03em",
            color: "#777777",
            whiteSpace: "pre-line",
            mb: 10,
          }}
        >
          {programDetailsData.description}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {programDetailsData.cards.map((card, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              
              {/* Card */}
              <Box sx={{ textAlign: "center" }}>
                
                {/* Image */}
                <Box
                  sx={{
                    width: { xs: "100%", md: "364px" },
                    height: { xs: "220px", md: "283px" },
                    position: "relative",
                    borderRadius: "13px",
                    overflow: "hidden",
                    mx: "auto", // ✅ center image
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    width: { xs: "100%", md: "151px" },
                    height: { xs: "auto", md: "15px" },
                    fontFamily: FONT_FAMILY.body,
                    lineHeight: "22px",
                    letterSpacing: "-0.03em",
                    mt: 2,
                    fontWeight: 600,
                    fontSize: "22px",
                    textAlign: "center",
                    color: "#111827",
                    mx: "auto",
                  }}
                >
                  {card.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    width: { xs: "100%", md: "364px" },
                    height: { xs: "auto", md: "157px" },
                    fontFamily:FONT_FAMILY.body,
                    fontWeight:400,
                    lineHeight:"36px",
                    letterSpacing:"-0.03em",
                    mt: 4,
                    fontSize: "18px",
                    color: "#777777",
                    textAlign: "left",
                  }}
                >
                  {card.description}
                </Typography>

                <Typography
                  sx={{
                    width: { xs: "100%", md: "364px" },
                    height: { xs: "auto", md: "157px" },
                    fontFamily:FONT_FAMILY.body,
                    fontWeight:400,
                    lineHeight:"36px",
                    letterSpacing:"-0.03em",
                    mt: 1,
                    fontSize: "18px",
                    color: "#777777",
                    textAlign: "left",
                  }}
                >
                  <Box component="span" sx={{color:"#000", fontWeight: 600 }}>
                    Outcome:{" "}
                  </Box>
                  {card.outcome}
                </Typography>

                {/* Footer */}
                <Typography
                  sx={{
                    width: { xs: "100%", md: "363px" },
                    height: { xs: "auto", md: "44px" },
                    fontFamily:FONT_FAMILY.body,
                    fontWeight:700,
                    lineHeight:"31px",
                    letterSpacing:"-0.03em",
                    mt: 4,
                    fontSize: "18px",
                    color: "#7B53A1",
                    textAlign: "left",
                  }}
                >
                  {card.footer}
                </Typography>

              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
  );
}
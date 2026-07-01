"use client";import { FONT_SIZE, FONT_WEIGHT, FONT_FAMILY } from "@/utils/theme";

import { programDetailsData } from "@/assets/Generic-data";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function ProgramDetails() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 3, lg: 7 },
        px: { xs: 3, lg: 4 }
      }}>
      
        
     
        <Typography
        sx={{
          width: { xs: "100%", lg: "358px" },
          height: { xs: "auto", lg: "32px" },
          fontFamily: FONT_FAMILY.heading,
          fontSize: { xs: FONT_SIZE.cardHeadingSmall, sm: FONT_SIZE.subSectionHeading, lg: FONT_SIZE.pageHeadingSmall },
          lineHeight: { xs: "36px", sm: "46px", lg: "normal" },
          fontWeight: FONT_WEIGHT.semiBold,
          letterSpacing: "-0.03em",
          color: "#111827",
          mb: { xs: 2, lg: 4 },
          // 🔥 FIX: Centered main heading on small screens
          textAlign: { xs: "center", md: "left" }
        }}>
        
          {programDetailsData.title}
        </Typography>

        <Typography
        sx={{
          width: { xs: "100%", lg: "fit-content" },
          height: { xs: "auto", lg: "144px" },
          fontFamily: FONT_FAMILY.body,
          mt: { xs: 2, lg: 8 },
          fontWeight: FONT_WEIGHT.regular,
          maxWidth: "1161px",
          fontSize: { xs: FONT_SIZE.bodyLarge, sm: FONT_SIZE.lead, lg: FONT_SIZE.title },
          lineHeight: { xs: "28px", sm: "34px", lg: "43px" },
          letterSpacing: "-0.03em",
          color: "#777777",
          whiteSpace: "pre-line",
          mb: { xs: 6, lg: 10 },
          // 🔥 FIX: Centered main description on small screens
          textAlign: { xs: "center", md: "left" }
        }}>
        
          {programDetailsData.description}
        </Typography>

        <Grid container spacing={{ xs: 4, lg: 4 }} sx={{ mt: { xs: 2, lg: 4 } }}>
          {programDetailsData.cards.map((card, index) =>
        <Grid size={{ xs: 12, md: 4 }} key={index}>
              
              {/* Card */}
              <Box sx={{ textAlign: "center" }}>
                
                {/* Image */}
                <Box
              sx={{
                width: { xs: "100%", lg: "364px" },
                height: { xs: "240px", sm: "300px", lg: "283px" },
                position: "relative",
                borderRadius: "13px",
                overflow: "hidden",
                mx: "auto"
              }}>
              
                  <Image
                src={card.image}
                alt={card.title}
                fill sizes="100vw"
                style={{ objectFit: "cover" }} />
              
                </Box>

                {/* Title */}
                <Typography
              sx={{
                width: { xs: "100%", lg: "151px" },
                height: { xs: "auto", lg: "15px" },
                fontFamily: FONT_FAMILY.body,
                lineHeight: { xs: "28px", lg: "22px" },
                letterSpacing: "-0.03em",
                mt: { xs: 3, lg: 2 },
                fontWeight: FONT_WEIGHT.semiBold,
                fontSize: { xs: FONT_SIZE.leadLarge, lg: FONT_SIZE.title },
                textAlign: "center",
                color: "#111827",
                mx: "auto"
              }}>
              
                  {card.title}
                </Typography>

                {/* Description */}
                <Typography
              sx={{
                width: { xs: "100%", lg: "364px" },
                height: { xs: "auto", lg: "157px" },
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.regular,
                lineHeight: { xs: "28px", lg: "36px" },
                letterSpacing: "-0.03em",
                mt: { xs: 2, lg: 4 },
                fontSize: { xs: FONT_SIZE.bodyLarge, lg: FONT_SIZE.lead },
                color: "#777777",
                // 🔥 FIX: Centered card description on small screens
                textAlign: { xs: "center", md: "left" }
              }}>
              
                  {card.description}
                </Typography>

                <Typography
              sx={{
                width: { xs: "100%", lg: "364px" },
                height: { xs: "auto", lg: "157px" },
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.regular,
                lineHeight: { xs: "28px", lg: "36px" },
                letterSpacing: "-0.03em",
                mt: 1,
                fontSize: { xs: FONT_SIZE.bodyLarge, lg: FONT_SIZE.lead },
                color: "#777777",
                // 🔥 FIX: Centered card text on small screens
                textAlign: { xs: "center", md: "left" }
              }}>
              
                  <Box component="span" sx={{ color: "#000", fontWeight: FONT_WEIGHT.semiBold }}>
                    Outcome:{" "}
                  </Box>
                  {card.outcome}
                </Typography>

                {/* Footer */}
                <Typography
              sx={{
                width: { xs: "100%", lg: "363px" },
                height: { xs: "auto", lg: "44px" },
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.bold,
                lineHeight: { xs: "26px", lg: "31px" },
                letterSpacing: "-0.03em",
                mt: { xs: 2, lg: 4 },
                fontSize: { xs: FONT_SIZE.bodyLarge, lg: FONT_SIZE.lead },
                color: "#7B53A1",
                // 🔥 FIX: Centered card footer on small screens
                textAlign: { xs: "center", md: "left" }
              }}>
              
                  {card.footer}
                </Typography>

              </Box>
            </Grid>
        )}
        </Grid>

      </Container>);

}
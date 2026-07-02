"use client";
import { FONT_FAMILY } from "@/utils/theme";
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
          fontSize: { xs: "26px", sm: "36px", lg: "48px" },
          lineHeight: { xs: "36px", sm: "46px", lg: "normal" },
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color: "#111827",
          mb: { xs: 2, lg: 4 },
          textAlign: { xs: "justify", md: "left" },
        }}>
        
          {programDetailsData.title}
        </Typography>

        <Typography
        sx={{
          width: { xs: "100%", lg: "fit-content" },
          height: { xs: "auto", lg: "144px" },
          fontFamily: FONT_FAMILY.body,
          mt: { xs: 2, lg: 8 },
          fontWeight: 400,
          maxWidth: "1161px",
          fontSize: { xs: "16px", sm: "18px", lg: "22px" },
          lineHeight: { xs: "28px", sm: "34px", lg: "43px" },
          letterSpacing: "-0.03em",
          color: "#777777",
          whiteSpace: "pre-line",
          mb: { xs: 6, lg: 10 },
          textAlign: { xs: "justify", md: "left" },
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

               
                <Typography
              sx={{
                width: { xs: "100%", lg: "151px" },
                height: { xs: "auto", lg: "15px" },
                fontFamily: FONT_FAMILY.body,
                lineHeight: { xs: "28px", lg: "22px" },
                letterSpacing: "-0.03em",
                mt: { xs: 3, lg: 2 },
                fontWeight: 600,
                fontSize: { xs: "20px", lg: "22px" },
                textAlign: "center",
                color: "#111827",
                mx: "auto"
              }}>
              
                  {card.title}
                </Typography>

               
                <Typography
              sx={{
                width: { xs: "100%", lg: "364px" },
                height: { xs: "auto", lg: "157px" },
                fontFamily: FONT_FAMILY.body,
                fontWeight: 400,
                lineHeight: { xs: "28px", lg: "36px" },
                letterSpacing: "-0.03em",
                mt: { xs: 2, lg: 4 },
                fontSize: { xs: "16px", lg: "18px" },
                color: "#777777",
               
               textAlign: { xs: "justify", md: "left" },
              }}>
              
                  {card.description}
                </Typography>

                <Typography
              sx={{
                width: { xs: "100%", lg: "364px" },
                height: { xs: "auto", lg: "157px" },
                fontFamily: FONT_FAMILY.body,
                fontWeight: 400,
                lineHeight: { xs: "28px", lg: "36px" },
                letterSpacing: "-0.03em",
                mt: 1,
                fontSize: { xs: "16px", lg: "18px" },
                color: "#777777",
                textAlign: { xs: "justify", md: "left" },
              }}>
              
                  <Box component="span" sx={{ color: "#000", fontWeight: 600 }}>
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
                fontWeight: 700,
                lineHeight: { xs: "26px", lg: "31px" },
                letterSpacing: "-0.03em",
                mt: { xs: 2, lg: 4 },
                fontSize: { xs: "16px", lg: "18px" },
                color: "#7B53A1",
                
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
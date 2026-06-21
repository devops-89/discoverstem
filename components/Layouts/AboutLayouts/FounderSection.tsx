"use client";

import { mirzaFaizan } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import Image from "next/image";

const FounderSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1155px",
        width: "100%",
        mx: "auto",
        pt: { xs: 5, md: 8, lg: 15 }, // Smoother padding scaling
        px: { xs: 3, lg: 0 }, 
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", lg: "650px" },
          display: "flex",
          // Stack vertically on Mobile/768px, Side-by-Side on 1024px/1440px
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: 4, md: "4%", lg: "56px" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            // 100% on Mobile/768px, 48% fluid on 1024px, rigid 537px on 1440px
            width: { xs: "100%", md: "48%", lg: "537.986px" },
            height: { xs: "380px", sm: "550px", md: "550px", lg: "650px" }, 
            borderRadius: "18px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src={mirzaFaizan.image}
            alt={mirzaFaizan.name}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              objectPosition: "top center", 
            }}
            priority
          />
        </Box>

        {/* Right Content */}
        <Box
          sx={{
            // 100% on Mobile/768px, 48% fluid on 1024px, rigid 561px on 1440px
            width: { xs: "100%", md: "48%", lg: "561px" },
            minHeight: { xs: "auto", lg: "650px" },
            pt: { xs: 0, md: 3, lg: "42px" },
            display: "flex",
            flexDirection: "column",
            // Left alignment is much cleaner and more readable for large blocks of text on mobile!
            textAlign: "left", 
          }}
        >
          {/* Heading + Subheading */}
          <Box
            sx={{
              width: "100%",
              mb: { xs: 3, md: 4, lg: 6 },
            }}
          >
            <Typography
              sx={{
                fontFamily: FONT_FAMILY.heading,
                fontWeight: 600,
                // Scaled down font sizes for tablets so it doesn't overflow
                fontSize: { xs: "28px", sm: "32px", md: "36px", lg: "48px" },
                lineHeight: { xs: "36px", sm: "42px", md: "46px", lg: "62px" },
                letterSpacing: "-0.03em",
                color: "#111827",
                mb: 1,
              }}
            >
              {mirzaFaizan.name}
            </Typography>

            <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: 600,
                fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "22px" },
                lineHeight: { xs: "24px", md: "26px", lg: "30px" },
                letterSpacing: "-0.01em",
                color: "#111827",
              }}
            >
              {mirzaFaizan.role}
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            sx={{
              width: "100%",
              whiteSpace: "pre-line",
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              // Scaled font size slightly for 1024px so it fits the percentage width
              fontSize: { xs: "15px", md: "15px", lg: "18px" },
              lineHeight: { xs: "26px", md: "28px", lg: "32px" },
              color: "#474A55",
              opacity: 0.9,
            }}
          >
            {mirzaFaizan.description}
          </Typography>

          {/* Email + Social */}
          <Box
            sx={{
              mt: { xs: 4, md: "auto" }, 
              pt: { xs: 0, md: 3, lg: 5 },
              width: "100%",
              mx: 0, 
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start", // Left align on all screens
                alignItems: "center",
                gap: "10px",
                mb: 4,
              }}
            >
              <Email
                sx={{
                  fontSize: "18px",
                  color: "#111827",
                }}
              />

              <Typography
                sx={{
                  width: "fit-content",
                  height: "auto",
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "16px" },
                  color: "#111827",
                }}
              >
                {mirzaFaizan.email}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start", // Left align on all screens
                gap: "8px",
              }}
            >
              {[Facebook, LinkedIn, Twitter, Instagram].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#F6EDFF",
                    color: "#4B5563",
                    "&:hover": {
                      backgroundColor: "#7B53A1",
                      color: "#F6EDFF",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: "18px" }} />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FounderSection;
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
        pt: { xs: 5, md: 15 },
        px: { xs: 3, md: 0 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "650px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: "56px" },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "537.986px" },
            height: { xs: "420px", md: "650px" },
            borderRadius: "18px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src={mirzaFaizan.image}
            alt={mirzaFaizan.name}
            fill
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </Box>

        {/* Right Content */}
        <Box
          sx={{
            width: { xs: "100%", md: "561px" },
            minHeight: { xs: "auto", md: "650px" },
            pt: { xs: 0, md: "42px" },
            display: "flex",
            flexDirection: "column",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Heading + Subheading */}
          <Box
            sx={{
              width: { xs: "100%", md: "431px" },
              mb: { xs: 4, md: 6 },
            }}
          >
            <Typography
              sx={{
                fontFamily: FONT_FAMILY.heading,
                fontWeight: 600,
                fontSize: { xs: "32px", md: "42px", lg: "48px" },
                lineHeight: { xs: "42px", md: "54px", lg: "62px" },
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
                fontSize: { xs: "18px", md: "20px", lg: "22px" },
                lineHeight: "30px",
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
              width: { xs: "100%", md: "561px" },
              whiteSpace: "pre-line",
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              fontSize: { xs: "15px", md: "17px", lg: "18px" },
              lineHeight: "32px",
              color: "#474A55",
              opacity: 0.9,
            }}
          >
            {mirzaFaizan.description}
          </Typography>

          {/* Email + Social */}
          <Box
            sx={{
              mt: "auto",
              pt: { xs: 4, md: 5 },
              width: { xs: "100%", md: "316px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
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
                  fontSize: "16px",
                  color: "#111827",
                }}
              >
                {mirzaFaizan.email}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
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
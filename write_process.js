const fs = require('fs');
const content = `
"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { stepsData } from "@/assets/Generic-data";
import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import CreateIcon from "@mui/icons-material/Create";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const STEP_ICONS = [
  CreateIcon,
  LightbulbIcon,
  GroupsIcon,
  EmojiEventsIcon,
  RocketLaunchIcon,
];

const Colors = {
  PRIMARY: "#EE4823",
  SECONDARY: "#7E57C2",
  BLACK: "#000",
  TEXT_MUTED: "#777",
  WHITE: "#fff",
  BUTTON_SHADOW: "rgba(126, 87, 194, 0.2)",
};

export default function ProcessSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "min(1196px, 100%)",
          px: { xs: 3, sm: 5, lg: 4 },
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          textAlign="center"
          sx={{ mb: { xs: 6, md: 8 } }}
        >
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.heading,
              fontWeight: 600,
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              color: Colors.BLACK,
              lineHeight: 1.2,
              mb: 2.5,
              maxWidth: 800,
              letterSpacing: "-0.03em",
            }}
          >
            A Simple 5-step process
          </Typography>

          <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              fontSize: { xs: "15px", sm: "18px", md: "20px" },
              color: Colors.TEXT_MUTED,
              maxWidth: 900,
              lineHeight: 1.6,
            }}
          >
            From signing up to presenting your breakthrough idea at the finale,
            this journey helps you build confidence, gain mentorship, and move
            closer to becoming America’s Top Young Innovator.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {stepsData.map((step, index) => {
            const IconComponent = STEP_ICONS[index % STEP_ICONS.length];

            return (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 4 },
                  borderRadius: "24px",
                  border: "1px solid rgba(126, 87, 194, 0.12)",
                  backgroundColor: Colors.WHITE,
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",

                  "&:hover": {
                    borderColor: Colors.SECONDARY,
                    transform: "translateY(-10px)",
                    boxShadow: \`0 4px 14px \${Colors.BUTTON_SHADOW}\`,

                    "& .step-badge": {
                      backgroundColor: Colors.SECONDARY,
                      color: Colors.WHITE,
                    },
                    "& .icon-wrapper": {
                      backgroundColor: Colors.SECONDARY,
                      color: Colors.WHITE,
                      borderColor: Colors.SECONDARY,
                      transform: "scale(1.2) rotate(360deg)",
                    },
                    "& .card-title": {
                      color: Colors.SECONDARY,
                    },
                    "& .card-arrow": {
                      color: Colors.SECONDARY,
                    },
                  },
                }}
              >
                <Typography
                  className="watermark"
                  sx={{
                    position: "absolute",
                    bottom: "-25px",
                    right: "0px",
                    fontSize: "140px",
                    fontWeight: 800,
                    color: "rgba(0,0,0,0.03)",
                    lineHeight: 1,
                    fontFamily: FONT_FAMILY.heading,
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 4, position: "relative", zIndex: 1 }}
                >
                  <Box
                    className="step-badge"
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: "20px",
                      backgroundColor: "rgba(126, 87, 194, 0.08)",
                      color: Colors.SECONDARY,
                      transition: "all 0.4s ease",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: FONT_FAMILY.body,
                        fontWeight: 700,
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      STEP - {String(index + 1).padStart(2, "0")}
                    </Typography>
                  </Box>

                  <Box
                    className="icon-wrapper"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid rgba(126, 87, 194, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: Colors.SECONDARY,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      backgroundColor: Colors.WHITE,
                    }}
                  >
                    <IconComponent fontSize="small" />
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ mb: 2, position: "relative", zIndex: 1 }}
                >
                  <Typography
                    className="card-title"
                    sx={{
                      fontFamily: FONT_FAMILY.heading,
                      fontWeight: 700,
                      fontSize: { xs: "20px", md: "22px" },
                      color: Colors.BLACK,
                      lineHeight: 1.3,
                      pr: 2,
                      transition: "color 0.4s ease",
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Box
                    className="card-arrow"
                    sx={{
                      color: "#D0D0D0",
                      mt: 0.5,
                      transition: "color 0.4s ease",
                    }}
                  >
                    <ArrowOutwardIcon fontSize="small" />
                  </Box>
                </Stack>
                <Typography
                  className="card-desc"
                  sx={{
                    fontFamily: FONT_FAMILY.body,
                    fontSize: { xs: "14px", md: "16px" },
                    color: Colors.TEXT_MUTED,
                    lineHeight: 1.6,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
`;
fs.writeFileSync('components/Widgets/common/ProccessSelection.tsx', content, 'utf8');
console.log('Done');

"use client";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BiotechIcon from "@mui/icons-material/Biotech";

import NorthEastIcon from "@mui/icons-material/NorthEast";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

const labsData = [
  {
    title: "Aerospace Research Lab",
    icon: <RocketLaunchIcon sx={{ fontSize: 22, color: "#FFFFFF" }} />,
    href: "/opportunities/Research/AerospaceResearchLab",
    active: true,
    color: "#7B53A1",
  },
  {
    title: "AI-ML and Autonomous Tech Lab",
    icon: <SmartToyIcon sx={{ fontSize: 22, color: "#7B53A1" }} />,
    href: "/opportunities/Research/AI-ML-Autonomous-Tech-Lab",
    active: false,
    color: "#7B53A1",
  },
  {
    title: "Banking, Finance & Fintech Lab",
    icon: <AccountBalanceIcon sx={{ fontSize: 22, color: "#EE4823" }} />,
    href: "/opportunities/Research/Banking-Finance-Fintech-Lab",
    active: false,
    color: "#EE4823",
  },
  {
    title: "Energy & Environment Lab",
  
    href: "/opportunities/Research/Energy-Environment-Lab",
    active: false,
    color: "#5B8C3A",
  },
  {
    title: "Genomics, Biotechnology & Health Sciences Lab",
    icon: <BiotechIcon sx={{ fontSize: 22, color: "#F9A51E" }} />,
    href: "/opportunities/Research/Genomics-Biotechnology-Health-Sciences-Lab",
    active: false,
    color: "#F9A51E",
  },
  {
    title: "Neurotechnology & Brain-Computer Interface Lab",
    icon: <PsychologyIcon sx={{ fontSize: 22, color: "#2F80ED" }} />,
    href: "/opportunities/Research/Neurotechnology-Brain-Computer-Interface-Lab",
    active: false,
    color: "#2F80ED",
  },
];

export default function ExploreLabsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1220px",
          mx: "auto",
          px: { xs: 3, md: 0 },
          py: { xs: 6, md: "90px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "32px", md: "48px" },
            lineHeight: { xs: "42px", md: "62px" },
            letterSpacing: "-0.03em",
            color: "#111827",
            mb: { xs: 5, md: "64px" },
          }}
        >
          Explore other DiscoverSTEM labs
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: "20px" },
          }}
        >
          {labsData.map((item) => (
            <Box
              key={item.title}
              component={item.active ? "div" : Link}
              href={item.active ? undefined : item.href}
              sx={{
                minHeight: "180px",
                borderRadius: "16px",
                backgroundColor: item.active ? "#7B53A1" : "#FFFFFF",
                border: item.active
                  ? "none"
                  : "0.8px solid rgba(0,0,0,0.06)",
                p: "20px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all .2s ease",

                "&:hover": {
                  transform: item.active ? "none" : "translateY(-2px)",
                },
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: item.active
                      ? "rgba(255,255,255,0.15)"
                      : `${item.color}14`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "24px",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    lineHeight: "30px",
                    color: item.active ? "#FFFFFF" : "#171717",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>

              {item.active ? (
                <Typography
                  sx={{
                    mt: 3,
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  You're here.
                </Typography>
              ) : (
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: item.color,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: item.color,
                    }}
                  >
                    Explore
                  </Typography>

                  <NorthEastIcon
                    sx={{
                      fontSize: 14,
                      color: item.color,
                    }}
                  />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
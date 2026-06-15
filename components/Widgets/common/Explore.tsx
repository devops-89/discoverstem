"use client";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BiotechIcon from "@mui/icons-material/Biotech";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const labsData = [
  {
    title: "Aerospace Research Lab",
    icon: RocketLaunchIcon,
    slug: "aerospace_research_lab",
    color: "#7B53A1",
  },
  {
    title: "AI-ML and Autonomous Tech Lab",
    icon: SmartToyIcon,
    slug: "ai-autonomous-tech-and-robotics-research-lab",
    color: "#7B53A1",
  },
  {
    title: "Banking, Finance & Fintech Lab",
    icon: AccountBalanceIcon,
    slug: "banking-finance-fintech-research-lab",
    color: "#EE4823",
  },
  {
    title: "Energy & Environment Lab",
    icon: EnergySavingsLeafIcon,
    slug: "energy-environment-research-lab",
    color: "#5B8C3A",
  },
  {
    title: "Genomics, Biotechnology & Health Sciences Lab",
    icon: BiotechIcon,
    slug: "genomics-biotechnology-health-sciences-research-lab",
    color: "#F9A51E",
  },
  {
    title: "Neurotechnology & Brain-Computer Interface Lab",
    icon: PsychologyIcon,
    slug: "neurotech-brain-computer-interface",
    color: "#2F80ED",
  },
];

export default function ExploreLabsSection() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F5F5F5",
        borderTop: "0.8px solid rgba(0,0,0,0.05)",
        borderBottom: "0.8px solid rgba(0,0,0,0.05)",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1232px",
          mx: "auto",
          px: { xs: 3, md: 0 },
          py: { xs: 6, md: "80px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "28px", md: "32px" },
            lineHeight: { xs: "36px", md: "37px" },
            letterSpacing: "-0.8px",
            color: "#171717",
            mb: { xs: 4, md: "70px" },
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
            gap: { xs: 3, md: "24px" },
          }}
        >
          {labsData.map((item) => {
            const Icon = item.icon;
            const isActive = currentSlug === item.slug;

            return (
              <Box
                key={item.title}
                component={isActive ? "div" : Link}
                href={!isActive ? `/opportunities/${item.slug}` : undefined}
                sx={{
                  minHeight: { xs: "174.2px", md: "174.2px" },
                  borderRadius: "16px",
                  backgroundColor: isActive ? item.color : "#FFFFFF",
                  border: isActive
                    ? "0.8px solid rgba(255,255,255,0.1)"
                    : "0.8px solid rgba(0,0,0,0.05)",
                  p: "24.8px",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all .2s ease",
                  cursor: isActive ? "default" : "pointer",

                  "&:hover": {
                    transform: isActive ? "none" : "translateY(-2px)",
                    backgroundColor: isActive ? item.color : item.color,
                  },

                  "&:hover .lab-title": {
                    color: "#FFFFFF",
                  },

                  "&:hover .lab-explore": {
                    color: "#FFFFFF",
                  },

                  "&:hover .lab-arrow": {
                    color: "#FFFFFF",
                  },

                  "&:hover .lab-icon-box": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                  },

                  "&:hover .lab-icon": {
                    color: "#FFFFFF",
                  },
                }}
              >
                <Box>
                  <Box
                    className="lab-icon-box"
                    sx={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      backgroundColor: isActive
                        ? "rgba(240,255,229,0.1)"
                        : `${item.color}1A`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: "16px",
                      transition: "all .2s ease",
                    }}
                  >
                    <Icon
                      className="lab-icon"
                      sx={{
                        fontSize: 22,
                        color: isActive ? "#FFFFFF" : item.color,
                        transition: "all .2s ease",
                      }}
                    />
                  </Box>

                  <Typography
                    className="lab-title"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "27px",
                      letterSpacing: "-0.45px",
                      color: isActive ? "#FFFFFF" : "#171717",
                      transition: "all .2s ease",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                {isActive ? (
                  <Typography
                    sx={{
                      mt: "16px",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    You're here.
                  </Typography>
                ) : (
                  <Box
                    sx={{
                      mt: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Typography
                      className="lab-explore"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: item.color,
                        transition: "all .2s ease",
                      }}
                    >
                      Explore
                    </Typography>

                    <NorthEastIcon
                      className="lab-arrow"
                      sx={{
                        fontSize: 14,
                        color: item.color,
                        transition: "all .2s ease",
                      }}
                    />
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
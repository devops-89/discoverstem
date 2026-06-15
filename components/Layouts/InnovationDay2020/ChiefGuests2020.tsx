"use client";

import { chiefGuestsData2020 } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <LinkedInIcon sx={{ fontSize: 18 }} />,
  instagram: <InstagramIcon sx={{ fontSize: 18 }} />,
  web: <LanguageIcon sx={{ fontSize: 18 }} />,
};

export default function ChiefGuests2020() {
  return (
    <Box
      sx={{
        backgroundColor: "#FAF5FF",
        py: { xs: 6, md: "107px" },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1160px",
          mx: "auto",
          px: { xs: 3, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "32px", md: "48px" },
            lineHeight: { xs: "44px", md: "65px" },
            textAlign: "center",
            color: "#101010",
            mb: { xs: 4, md: "70px" },
          }}
        >
          Chief Guests
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 6, md: "60px" },
          }}
        >
          {chiefGuestsData2020.map((guest, index) => (
            <Box
              key={index}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "180px 1fr" },
                gap: { xs: 3, md: "28px" },
                alignItems: "start",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "160px", md: "180px" },
                  height: { xs: "160px", md: "180px" },
                  borderRadius: "16px",
                  overflow: "hidden",
                  mx: { xs: "auto", md: 0 },
                  flexShrink: 0,
                }}
              >
                <Image
                  src={guest.image}
                  alt={guest.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box sx={{ width: "100%", minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "2.4px",
                    textTransform: "uppercase",
                    color: "#F9A51E",
                    mb: "8px",
                  }}
                >
                  Chief Guest · Innovation Day 2020
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "24px", md: "28px" },
                    lineHeight: { xs: "32px", md: "36px" },
                    letterSpacing: "-0.8px",
                    color: "#000000",
                    mb: "4px",
                  }}
                >
                  {guest.name}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#000000",
                    mb: "16px",
                  }}
                >
                  {guest.title}
                </Typography>

                {guest.role && (
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "#777",
                      mb: "16px",
                    }}
                  >
                    {guest.role}
                  </Typography>
                )}

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {guest.socials.map((social, sIndex) => (
                    <Box
                      key={sIndex}
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "34px",
                        px: "16px",
                        borderRadius: "999px",
                        backgroundColor: "#0A66C2",
                        color: "#FFFFFF",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "16px",
                        textDecoration: "none",
                        gap: "5px",
                        "&:hover": { opacity: 0.85 },
                      }}
                    >
                      {socialIcons[social.icon]}
                      {social.icon === "linkedin" ? "LinkedIn" : social.icon === "instagram" ? "Instagram" : "Website"}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

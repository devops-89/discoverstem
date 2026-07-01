"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <LinkedInIcon sx={{ fontSize: 18 }} />,
  instagram: <InstagramIcon sx={{ fontSize: 18 }} />,
  web: <LanguageIcon sx={{ fontSize: 18 }} />
};

export type SocialData = {
  icon: string;
  url: string;
};

export type ChiefGuestData = {
  name: string;
  title: string;
  role?: string;
  image: string;
  socials: SocialData[];
};

interface ChiefGuestsSectionProps {
  title?: string;
  year: string;
  data: ChiefGuestData[];
}

export default function ChiefGuestsSection({
  title = "Chief Guests",
  year,
  data
}: ChiefGuestsSectionProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#FAF5FF",
        py: { xs: 6, sm: 8, lg: "107px" }
      }}>
      
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1160px",
          mx: "auto",
          px: { xs: 3, sm: 4, lg: 0 }
        }}>
        
        {title &&
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.heading,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.articleHeading, sm: FONT_SIZE.sectionHeadingSmall, lg: FONT_SIZE.pageHeadingSmall },
            lineHeight: { xs: "44px", sm: "52px", lg: "65px" },
            textAlign: "center",
            color: "#101010",
            mb: { xs: 4, sm: 6, lg: "70px" }
          }}>
          
            {title}
          </Typography>
        }

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 6, sm: "60px" }
          }}>
          
          {data.map((guest, index) =>
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
              gap: { xs: 3, sm: "28px" },
              alignItems: "start"
            }}>
            
              <Box
              sx={{
                position: "relative",
                width: { xs: "240px", sm: "180px" },
                height: { xs: "240px", sm: "180px" },
                borderRadius: "16px",
                overflow: "hidden",
                mx: { xs: "auto", sm: 0 },
                flexShrink: 0
              }}>
              
                <Image
                src={guest.image}
                alt={guest.name}
                fill sizes="100vw"
                style={{ objectFit: "cover" }} />
              
              </Box>

              <Box
              sx={{
                width: "100%",
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                textAlign: { xs: "center", sm: "left" }
              }}>
              
                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: FONT_WEIGHT.light,
                  fontSize: { xs: FONT_SIZE.caption, md: FONT_SIZE.footnote, lg: FONT_SIZE.caption },
                  lineHeight: LINE_HEIGHT.extraSmall,
                  letterSpacing: "2.4px",
                  textTransform: "uppercase",
                  color: "#F9A51E",
                  mb: "8px"
                }}>
                
                  Chief Guest · Innovation Day {year}
                </Typography>

                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: FONT_WEIGHT.semiBold,
                  fontSize: { xs: FONT_SIZE.titleLarge, sm: FONT_SIZE.cardHeading, md: FONT_SIZE.title, lg: FONT_SIZE.cardHeading },
                  lineHeight: { xs: LINE_HEIGHT.extraLarge, sm: "36px", md: "30px", lg: "36px" },
                  letterSpacing: "-0.8px",
                  color: "#000000",
                  mb: "4px"
                }}>
                
                  {guest.name}
                </Typography>

                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: FONT_WEIGHT.regular,
                  fontSize: { xs: FONT_SIZE.body, md: FONT_SIZE.bodySmall, lg: FONT_SIZE.body },
                  lineHeight: "22px",
                  color: "#000000",
                  mb: "16px"
                }}>
                
                  {guest.title}
                </Typography>

                {guest.role &&
              <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: FONT_WEIGHT.regular,
                  fontSize: { xs: FONT_SIZE.small, md: FONT_SIZE.caption, lg: FONT_SIZE.small },
                  lineHeight: LINE_HEIGHT.small,
                  color: "#777",
                  mb: "16px"
                }}>
                
                    {guest.role}
                  </Typography>
              }

                <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  flexWrap: "wrap",
                  gap: { xs: 2, sm: 1 },
                  justifyContent: { xs: "center", sm: "flex-start" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  width: "100%"
                }}>
                
                  {guest.socials.map((social, sIndex) =>
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
                    height: { xs: "36px", sm: "34px" },
                    px: "16px",
                    width: "auto",
                    borderRadius: "999px",
                    backgroundColor: "#0A66C2",
                    color: "#FFFFFF",
                    fontFamily: FONT_FAMILY.body,
                    fontWeight: FONT_WEIGHT.regular,
                    fontSize: FONT_SIZE.caption,
                    lineHeight: LINE_HEIGHT.extraSmall,
                    textDecoration: "none",
                    gap: "5px",
                    transition: "all 0.2s",
                    "&:hover": { opacity: 0.85 }
                  }}>
                  
                      {socialIcons[social.icon]}
                      {social.icon === "linkedin" ?
                  "LinkedIn" :
                  social.icon === "instagram" ?
                  "Instagram" :
                  "Website"}
                    </Box>
                )}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>);

}
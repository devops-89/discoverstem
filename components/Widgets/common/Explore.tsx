"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const labsData = [
{
  title: "Aerospace Research Lab",
  icon: "/Images/aerospace-lab/aerospace.png",
  slug: "aerospace_research_lab",
  color: "#7B53A1"
},
{
  title: "AI-ML and Autonomous Tech Lab",
  icon: "/Images/aerospace-lab/ai-ml.png",
  slug: "ai-autonomous-tech-and-robotics-research-lab",
  color: "#7B53A1"
},
{
  title: "Banking, Finance & Fintech Lab",
  icon: "/Images/aerospace-lab/banking.png",
  slug: "banking-finance-fintech-research-lab",
  color: "#7B53A1"
},
{
  title: "Energy & Environment Lab",
  icon: "/Images/aerospace-lab/energy.png",
  slug: "energy-environment-research-lab",
  color: "#7B53A1"
},
{
  title: "Genomics, Biotechnology & Health Sciences Lab",
  icon: "/Images/aerospace-lab/genomics.png",
  slug: "genomics-biotechnology-health-sciences-research-lab",
  color: "#7B53A1"
},
{
  title: "Neurotechnology & Brain-Computer Interface Lab",
  icon: "/Images/aerospace-lab/brain.png",
  slug: "neurotech-brain-computer-interface",
  color: "#7B53A1"
}];


export default function ExploreLabsSection() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F5F5F5",
        borderTop: "0.8px solid rgba(0,0,0,0.05)",
        borderBottom: "0.8px solid rgba(0,0,0,0.05)"
      }}>
      
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1232px",
          mx: "auto",
          px: { xs: 3, lg: 0 },
          py: { xs: 6, lg: "80px" }
        }}>
        
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.accent,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.titleLarge, sm: FONT_SIZE.cardHeading, lg: FONT_SIZE.articleHeading },
            lineHeight: { xs: "30px", sm: "36px", lg: "37px" },
            letterSpacing: "-0.8px",
            color: "#171717",
            // 🔥 FIX: Added textAlign center so the heading is perfectly centered!
            textAlign: {xs:"center",sm:"left"}, 
            mb: { xs: 4, lg: "70px" }
          }}>
          
          Explore other DiscoverSTEM labs
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)"
            },
            gap: { xs: 3, lg: "24px" }
          }}>
          
          {labsData.map((item) => {
            const isActive = currentSlug === item.slug;

            return (
              <Box
                key={item.title}
                component={isActive ? "div" : Link}
                href={!isActive ? `/opportunities/${item.slug}` : undefined}
                sx={{
                  minHeight: { xs: "auto", lg: "174.2px" },
                  borderRadius: "16px",
                  backgroundColor: isActive ? item.color : "#FFFFFF",
                  border: isActive ?
                  "0.8px solid rgba(255,255,255,0.1)" :
                  "0.8px solid rgba(0,0,0,0.05)",

                  p: { xs: "20px", lg: "24.8px" },
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all .2s ease",
                  cursor: isActive ? "default" : "pointer",

                  "&:hover": {
                    transform: isActive ? "none" : "translateY(-2px)",
                    backgroundColor: item.color
                  },

                  "&:hover .lab-title": {
                    color: "#FFFFFF"
                  },

                  "&:hover .lab-explore": {
                    color: "#FFFFFF"
                  },

                  "&:hover .lab-arrow": {
                    color: "#FFFFFF"
                  },

                  "&:hover .lab-icon-box": {
                    backgroundColor: "rgba(255,255,255,0.15)"
                  }
                }}>
                
                <Box>
                  <Box
                    className="lab-icon-box"
                    sx={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      backgroundColor: isActive ?
                      "rgba(240,255,229,0.1)" :
                      `${item.color}1A`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: "16px",
                      transition: "all .2s ease"
                    }}>
                    
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                      style={{
                        objectFit: "contain"
                      }} />
                    
                  </Box>

                  <Typography
                    className="lab-title"
                    sx={{
                      fontFamily: FONT_FAMILY.body,
                      fontWeight: FONT_WEIGHT.semiBold,
                      fontSize: { xs: FONT_SIZE.bodyLarge, lg: FONT_SIZE.lead },
                      lineHeight: { xs: LINE_HEIGHT.medium, lg: "27px" },
                      letterSpacing: "-0.45px",
                      color: isActive ? "#FFFFFF" : "#171717",
                      transition: "all .2s ease"
                    }}>
                    
                    {item.title}
                  </Typography>
                </Box>

                {isActive ?
                <Typography
                  sx={{
                    mt: "16px",
                    fontFamily: FONT_FAMILY.body,
                    fontWeight: FONT_WEIGHT.regular,
                    fontSize: FONT_SIZE.bodySmall,
                    lineHeight: LINE_HEIGHT.small,
                    color: "rgba(255,255,255,0.7)"
                  }}>
                  
                    You're here.
                  </Typography> :

                <Box
                  sx={{
                    mt: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}>
                  
                    <Typography
                    className="lab-explore"
                    sx={{
                      fontFamily: FONT_FAMILY.body,
                      fontWeight: FONT_WEIGHT.semiBold,
                      fontSize: FONT_SIZE.bodySmall,
                      lineHeight: LINE_HEIGHT.small,
                      color: item.color,
                      transition: "all .2s ease"
                    }}>
                    
                      Explore
                    </Typography>

                    <NorthEastIcon
                    className="lab-arrow"
                    sx={{
                      fontSize: 14,
                      color: item.color,
                      transition: "all .2s ease"
                    }} />
                  
                  </Box>
                }
              </Box>);

          })}
        </Box>
      </Container>
    </Box>);

}
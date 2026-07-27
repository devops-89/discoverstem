"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { stemEducationData } from "@/assets/Generic-data";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface StemEducationSectionProps {
  activeSection: string;
}

export default function StemEducationSection({ activeSection }: StemEducationSectionProps) {
  const data = stemEducationData;

  if (activeSection === "Foundation") {
    return (
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "min(1196px, 100%)",
          py: { xs: 4, md: 7 },
          px: { xs: 2, md: 4 }
        }}>
        
        <Typography
          sx={{
            width: { xs: "100%", md: "613px" },
            maxWidth: "100%",
            height: { xs: "auto", md: "25px" },
            fontFamily: FONT_FAMILY.heading,
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "28px", md: "36px" },
            lineHeight: { xs: "32px", sm: "40px", md: "62px" },
            letterSpacing: "-0.03em",
            color: "#000",
            mb: { xs: 3, md: 8 },
          textAlign: { xs: "left", md: "left" },
          }}>
          
          {data.about.heading}
        </Typography>

        <Box sx={{ mb: { xs: 5, md: 10 } }}>
          {data.about.description.map((item, index) =>
          <Typography
            key={index}
            sx={{
              width: { xs: "100%", md: "1157px" },
              maxWidth: "100%",
              fontFamily: FONT_FAMILY.body,
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: 400,
              lineHeight: { xs: "28px", sm: "32px", md: "36px" },
              letterSpacing: "-0.03em",
              color: "#777777",
              mb: { xs: 3, md: 4 },
              textAlign: { xs: "justify", md: "left" },
            }}>
            
              {item}
            </Typography>
          )}
        </Box>
      </Container>);

  }

  const section = data.sections.find((s) => s.id === activeSection);
  if (!section) return null;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 }
      }}>
      
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontWeight: 600,
          fontSize: { xs: "22px", sm: "28px", md: "36px" },
          lineHeight: { xs: "25px", sm: "40px", md: "60px" },
          letterSpacing: "-0.03em",
          color: "#000",
          mb: { xs: 3, md: 4 },
         textAlign: "left",
        }}>
        
        {section.title}
      </Typography>

      <Typography
        sx={{
          width: { xs: "100%", md: "1157px" },
          maxWidth: "100%",
          height: { xs: "auto", md: "auto" },
          fontFamily: FONT_FAMILY.body,
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          fontWeight: 400,
          lineHeight: { xs: "28px", sm: "32px", md: "36px" },
          letterSpacing: "-0.03em",
          color: "#777777",
          mb: section.image || section.points.length ? { xs: 3, md: 4 } : 0,
          textAlign: { xs: "justify", md: "left" },
        }}>
        
        {section.description}
      </Typography>

      {section.image || section.points.length > 0 ?
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, sm: 6, md: 10 },
          alignItems: "flex-start"
        }}>
        
          {section.image &&
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "336px" },
            height: { xs: "250px", sm: "300px", md: "336px" },
            borderRadius: "16px",
            overflow: "hidden",
            flexShrink: 0,
            mt: 1
          }}>
          
              <Image
            src={section.image}
            alt={section.title}
            fill sizes="100vw"
            style={{ objectFit: "cover" }} />
          
            </Box>
        }

          {section.points.length > 0 &&
        <Box>
              {section.points.map((point, index) =>
          <Typography
            key={index}
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              lineHeight: { xs: "28px", sm: "32px", md: "36px" },
              letterSpacing: "-0.03em",
              fontWeight: 400,
              color: "#777777",
              textAlign: { xs: "justify", md: "left" },
              mb: 1.5
            }}>
            
                  &bull; {point}
                </Typography>
          )}
            </Box>
        }
        </Box> :
      null}
    </Container>);

}
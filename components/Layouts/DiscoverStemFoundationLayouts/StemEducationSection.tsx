"use client";

import { stemEducationData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
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
          py: { xs: 5, md: 7 },
          px: { xs: 3, md: 4 },
        }}
      >
        <Typography
          sx={{
            width: { xs: "100%", md: "613px" },
            height: { xs: "auto", md: "25px" },
            fontFamily: FONT_FAMILY.heading,
            fontWeight: 600,
            fontSize: { xs: "22px", md: "36px" },
            lineHeight: { xs: "30px", md: "62px" },
            letterSpacing: "-0.03em",
            color: "#000",
            mb: 8,
          }}
        >
          {data.about.heading}
        </Typography>

        <Box sx={{ mb: 10 }}>
          {data.about.description.map((item, index) => (
            <Typography
              key={index}
              sx={{
                width: { xs: "100%", md: "1157px" },
                fontFamily: FONT_FAMILY.body,
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "36px",
                letterSpacing: "-0.03em",
                color: "#777777",
                mb: 4,
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Container>
    );
  }

  const section = data.sections.find((s) => s.id === activeSection);
  if (!section) return null;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontWeight: 600,
          fontSize: { xs: "22px", md: "36px" },
          lineHeight: { xs: "32px", md: "60px" },
          letterSpacing: "-0.03em",
          color: "#000",
          mb: 4,
        }}
      >
        {section.title}
      </Typography>

      <Typography
        sx={{
          width: { xs: "100%", md: "1157px" },
          height: { xs: "auto", md: "auto" },
          fontFamily: FONT_FAMILY.body,
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "36px",
          letterSpacing: "-0.03em",
          color: "#777777",
          mb: section.image || section.points.length ? 4 : 0,
        }}
      >
        {section.description}
      </Typography>

      {section.image || section.points.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 10,
            alignItems: "flex-start",
          }}
        >
          {section.image && (
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: "336px" },
                height: { xs: "220px", md: "336px" },
                borderRadius: "16px",
                overflow: "hidden",
                flexShrink: 0,
                mt: 1,
              }}
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          )}

          {section.points.length > 0 && (
            <Box>
              {section.points.map((point, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: FONT_FAMILY.body,
                    fontSize: "20px",
                    lineHeight: "36px",
                    letterSpacing: "-0.03em",
                    fontWeight: 400,
                    color: "#777777",
                    mb: 1.5,
                  }}
                >
                  &bull; {point}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      ) : null}
    </Container>
  );
}
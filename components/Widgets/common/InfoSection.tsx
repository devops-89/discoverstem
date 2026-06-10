"use client";

import { ResearchMentorTextData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface CommonTextInfoSectionProps {
  data: ResearchMentorTextData;
}

export default function InfoSection({
  data,
}: CommonTextInfoSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "674px" },
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
            mb: { xs: 4, md: "68px" },
          }}
        >
          {data.title}
        </Typography>

        <Box>
          {data.content.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <Typography
                  key={index}
                  component="div"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "16px", md: "22px" },
                    lineHeight: { xs: "30px", md: "43px" },
                    letterSpacing: "-0.03em",
                    color: "#777777",
                    mb: { xs: 2.5, md: "26px" },

                    "& strong": {
                      fontWeight: 600,
                      color: "#111827",
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              );
            }

            if (item.type === "heading") {
              return (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "16px", md: "22px" },
                    lineHeight: { xs: "30px", md: "43px" },
                    letterSpacing: "-0.03em",
                    color: "#111827",
                    mt: { xs: 3, md: "42px" },
                    mb: 1,
                  }}
                >
                  {item.text}
                </Typography>
              );
            }

            return (
              <Box key={index} component="ul" sx={{ m: 0, pl: "24px" }}>
                {item.items.map((point, pointIndex) => (
                  <Typography
                    key={pointIndex}
                    component="li"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "16px", md: "22px" },
                      lineHeight: { xs: "30px", md: "43px" },
                      letterSpacing: "-0.03em",
                      color: "#777777",
                    }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
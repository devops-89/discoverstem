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
        px: { xs: 3, sm: 5, lg: 0 },
        py: { xs: 4, sm: 6, lg: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", lg: "674px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "40px", lg: "48px" },
            lineHeight: { xs: "30px", sm: "52px", lg: "62px" },
            letterSpacing: "-0.03em",
            color: "#111827",
            mb: { xs: 1, sm: 3, lg: "30px" },
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
                    fontSize: { xs: "16px", sm: "18px", lg: "22px" },
                    lineHeight: { xs: "28px", sm: "34px", lg: "43px" }, 
                    letterSpacing: "-0.03em",
                    color: "#777777",
                    mb: { xs: 2.5, sm: 3, lg: "26px" },

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
                    fontSize: { xs: "16px", sm: "18px", lg: "22px" },
                    lineHeight: { xs: "28px", sm: "34px", lg: "43px" },
                    letterSpacing: "-0.03em",
                    color: "#111827",
                    mt: { xs: 3, sm: 4, lg: "42px" },
                    mb: { xs: 1.5, lg: 1 },
                  }}
                >
                  {item.text}
                </Typography>
              );
            }

            return (
              <Box key={index} component="ul" sx={{ m: 0, pl: { xs: "18px", lg: "24px" } }}>
                {item.items.map((point, pointIndex) => (
                  <Typography
                    key={pointIndex}
                    component="li"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "16px", sm: "18px", lg: "22px" },
                      lineHeight: { xs: "28px", sm: "34px", lg: "43px" },
                      letterSpacing: "-0.03em",
                      color: "#777777",
                      mb: { xs: 1, lg: 0 }, 
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
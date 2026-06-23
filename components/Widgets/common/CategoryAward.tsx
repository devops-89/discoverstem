"use client";

import { AccordionSectionData } from "@/utils/Types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";

interface AccordionSectionProps {
  data: AccordionSectionData;
  defaultOpenIndex?: number;
}

export default function AccordionSection({
  data,
  defaultOpenIndex = 0,
}: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex
  );

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 2, md: 4, lg: 6 },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          fontSize: { xs: "28px", sm: "38px", md: "44px", lg: "48px" },
          lineHeight: { xs: "35px", sm: "52px", md: "60px", lg: "65px" },
          textAlign: "center",
          color: "#101010",
          mb: { xs: 4, md: 6, lg: "70px" },
        }}
      >
        {data.title}
      </Typography>

      <Box
        sx={{
          width: "100%",
          border: "1px solid #D9D9D9",
          borderRadius: "29px",
          px: { xs: 2.5, md: 3, lg: "30px" },
          py: { xs: 2.5, md: 3, lg: "20px" },
        }}
      >
        {data.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Box
              key={index}
              sx={{
                borderBottom:
                  index === data.items.length - 1
                    ? "none"
                    : "1px solid #E5E5E5",
                py: { xs: 2, lg: "18px" },
              }}
            >
              <Box
                onClick={() => handleToggle(index)}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  cursor: "pointer",
                  userSelect: "none",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <Box
                  sx={{
                    mt: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {/* 🔥 FIX: Render a single persistent icon and smoothly rotate it instead of unmounting it! */}
                  <KeyboardArrowRightIcon
                    sx={{
                      fontSize: "24px",
                      color: "#000000",
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    flex: 1,
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    // 🔥 FIX: Scaled question font size safely down for iPads.
                    fontSize: { xs: "15px", md: "16px", lg: "18px" },
                    lineHeight: "26px",
                    letterSpacing: "-0.03em",
                    color: "#000000",
                  }}
                >
                  {item.question}
                </Typography>
              </Box>

              {isOpen && (
                <Box
                  sx={{
                    mt: 2,
                  
                    pl: { xs: "24px", md: "34px" },
                  }}
                >
                  {item.answer.map((answer, answerIndex) => (
                    <Typography
                      key={answerIndex}
                      component="div"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        // 🔥 FIX: Scaled answer font size safely down for iPads.
                        fontSize: { xs: "14px", md: "15px", lg: "16px" },
                        lineHeight: "26px",
                        letterSpacing: "-0.03em",
                        color: "#777777",
                        mb:
                          answerIndex === item.answer.length - 1
                            ? 0
                            : 1,

                        "& strong": {
                          fontWeight: 600,
                          color: "#000000",
                        },
                      }}
                      dangerouslySetInnerHTML={{
                        __html: answer,
                      }}
                    />
                  ))}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
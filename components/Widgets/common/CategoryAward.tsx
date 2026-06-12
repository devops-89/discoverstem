"use client";

import { AccordionSectionData } from "@/utils/Types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 6 },
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
        {data.title}
      </Typography>

      <Box
        sx={{
          width: "100%",
          border: "1px solid #D9D9D9",
          borderRadius: "29px",
          px: { xs: 2.5, md: "30px" },
          py: { xs: 2.5, md: "20px" },
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
                py: { xs: 2, md: "18px" },
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
                  {isOpen ? (
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: "24px",
                        color: "#000000",
                      }}
                    />
                  ) : (
                    <KeyboardArrowRightIcon
                      sx={{
                        fontSize: "24px",
                        color: "#000000",
                      }}
                    />
                  )}
                </Box>

                <Typography
                  sx={{
                    flex: 1,
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "15px", md: "18px" },
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
                    pl: "34px",
                  }}
                >
                  {item.answer.map((answer, answerIndex) => (
                    <Typography
                      key={answerIndex}
                      component="div"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
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
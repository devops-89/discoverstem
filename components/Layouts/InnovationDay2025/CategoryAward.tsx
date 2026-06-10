"use client";

import { categoryAwardsData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";

export default function CategoryAwardsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

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
        py: { xs: 6, md: 10 },
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
        {categoryAwardsData.title}
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
        {categoryAwardsData.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Box
              key={index}
              sx={{
                borderBottom:
                  index === categoryAwardsData.items.length - 1
                    ? "none"
                    : "1px solid #E5E5E5",
                py: { xs: 2, md: "18px" },
              }}
            >
              <Typography
                onClick={() => handleToggle(index)}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "15px", md: "18px" },
                  lineHeight: "26px",
                  letterSpacing: "-0.03em",
                  color: "#000000",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                {isOpen ? "⌄" : "›"} {item.question}
              </Typography>

              {isOpen && (
                <Box sx={{ mt: 2, pl: { xs: 1, md: "14px" } }}>
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
                        mb: answerIndex === item.answer.length - 1 ? 0 : 1,

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
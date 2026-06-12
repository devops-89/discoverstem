"use client";

import { faqData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState("innovation");
  const [openFaq, setOpenFaq] = useState(2);

  const currentFaqs =
    faqData.find((item) => item.id === activeTab)?.faqs || [];

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 2, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Tabs */}
      <Box
        sx={{
          width: "fit-content",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          gap: 1,
          p: "6px",
          borderRadius: "40px",
          bgcolor: "#FAF5FF",
          flexWrap: "wrap",
          mb: "70px",
        }}
      >
        {faqData.map((tab) => (
          <Box
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setOpenFaq(0);
            }}
            sx={{
              cursor: "pointer",
              px: { xs: 2, md: 3 },
              height: "52px",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor:
                activeTab === tab.id
                  ? "#7B53A1"
                  : "transparent",
              color:
                activeTab === tab.id
                  ? "#fff"
                  : "#000",
              transition: ".3s",
            }}
          >
            <Typography
              sx={{
                fontFamily: FONT_FAMILY.heading,
                fontSize: "18px",
                fontWeight:
                  activeTab === tab.id ? 500 : 300,
              }}
            >
              {tab.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* FAQ Box */}
      <Box
        sx={{
          border: "1px solid #C3C3C3",
          borderRadius: "29px",
          p: { xs: 2, md: "5px" },
        }}
      >
        {currentFaqs.map((faq, index) => (
          <Box key={index}>
            <Box
              onClick={() =>
                setOpenFaq(
                  openFaq === index ? -1 : index
                )
              }
              sx={{
                cursor: "pointer",
                py: "20px",
                px: { xs: 2, md: "30px" },
              }}
            >
              {/* Question + Arrow */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {openFaq === index ? (
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: "26px",
                      color: "#000",
                      flexShrink: 0,
                    }}
                  />
                ) : (
                  <KeyboardArrowRightIcon
                    sx={{
                      fontSize: "26px",
                      color: "#000",
                      flexShrink: 0,
                    }}
                  />
                )}

                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.body,
                    fontSize: {
                      xs: "16px",
                      md: "20px",
                    },
                    lineHeight: "26px",
                    color: "#000",
                  }}
                >
                  {faq.question}
                </Typography>
              </Box>

              {/* Answer */}
              {openFaq === index && (
                <Typography
                  sx={{
                    mt: 2,
                    ml: { xs: "36px", md: "36px" },
                    fontFamily: FONT_FAMILY.body,
                    fontSize: {
                      xs: "15px",
                      md: "18px",
                    },
                    lineHeight: "32px",
                    color: "#777777",
                  }}
                >
                  {faq.answer}
                </Typography>
              )}
            </Box>

            {index !== currentFaqs.length - 1 && (
              <Box
                sx={{
                  borderBottom:
                    "0.5px solid #C3C3C3",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
}
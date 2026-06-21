"use client";

import { faqData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useState } from "react";

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState("innovation");
  const [openFaq, setOpenFaq] = useState(2);

  const currentFaqs =
    faqData.find((item) => item.id === activeTab)?.faqs || [];

  // 1. Find the index of the active tab
  const currentIndex = faqData.findIndex((item) => item.id === activeTab);

  const handlePrev = () => {
    // 🔥 FIX: Loop to the end if at the beginning
    const newIndex = currentIndex === 0 ? faqData.length - 1 : currentIndex - 1;
    setActiveTab(faqData[newIndex].id);
    setOpenFaq(0);
  };

  const handleNext = () => {
    // 🔥 FIX: Loop back to the start if at the end
    const newIndex = currentIndex === faqData.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(faqData[newIndex].id);
    setOpenFaq(0);
  };

  // 🧮 CALCULATING SLIDING WINDOWS:
  // 1. Mobile (xs, <600px): Shows 1
  const start1 = currentIndex;

  // 2. Tablet (sm, covers 768px): Shows 3
  let start3 = currentIndex - 1;
  if (start3 < 0) start3 = 0;
  if (start3 > Math.max(0, faqData.length - 3)) start3 = Math.max(0, faqData.length - 3);

  // 3. Small Desktop (md, covers 1024px): Shows 4
  let start4 = currentIndex - 1; 
  if (start4 < 0) start4 = 0;
  if (start4 > Math.max(0, faqData.length - 4)) start4 = Math.max(0, faqData.length - 4);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 2, lg: 0 }, 
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Tabs */}
      <Box
        sx={{
          width: { xs: "100%", sm: "fit-content" },
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", sm: "center" },
          p: "6px",
          borderRadius: "40px",
          bgcolor: "#FAF5FF",
          mb: "70px",
        }}
      >
        <IconButton
          onClick={handlePrev}
          // Disabled state removed so it loops infinitely
          sx={{
            display: { xs: "flex", lg: "none" }, // Hidden on 1440px
            color: "#111827", // Always solid color
            mr: { sm: 1 },
          }}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1, // Restores your original gap on 1440px
            flexWrap: { xs: "nowrap", lg: "wrap" }, // Restores your original wrapping on 1440px
            flexGrow: { xs: 1, sm: 0 },
          }}
        >
          {faqData.map((tab, index) => (
            <Box
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setOpenFaq(0);
              }}
              sx={{
                display: {
                  xs: index === start1 ? "flex" : "none", // < 600px: Show 1
                  sm: index >= start3 && index < start3 + 3 ? "flex" : "none", // 600-899px (768px): Show 3
                  md: index >= start4 && index < start4 + 4 ? "flex" : "none", // 900-1199px (1024px): Show 4
                  lg: "flex", // 1200px+ (1440px): Show all
                },
                cursor: "pointer",
                px: { xs: 2, md: 2, lg: 3 }, 
                height: { xs: "44px", md: "46px", lg: "52px" }, 
                borderRadius: "30px",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: activeTab === tab.id ? "#7B53A1" : "transparent",
                color: activeTab === tab.id ? "#fff" : "#000",
                transition: ".3s",
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  fontFamily: FONT_FAMILY.heading,
                  fontSize: { xs: "14px", md: "15px", lg: "18px" }, 
                  fontWeight: activeTab === tab.id ? 500 : 300,
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </Typography>
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          // Disabled state removed so it loops infinitely
          sx={{
            display: { xs: "flex", lg: "none" }, // Hidden on 1440px
            color: "#111827", // Always solid color
            ml: { sm: 1 }, 
          }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
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
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
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
                  alignItems: { xs: "flex-start", lg: "center" }, 
                  gap: "10px",
                }}
              >
                {openFaq === index ? (
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: "26px",
                      color: "#7B53A1", 
                      flexShrink: 0,
                      transition: "color 0.3s ease",
                    }}
                  />
                ) : (
                  <KeyboardArrowRightIcon
                    sx={{
                      fontSize: "26px",
                      color: "#000",
                      flexShrink: 0,
                      transition: "color 0.3s ease",
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
                    color: openFaq === index ? "#7B53A1" : "#000", 
                    transition: "color 0.3s ease",
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
                  borderBottom: "0.5px solid #C3C3C3",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
}
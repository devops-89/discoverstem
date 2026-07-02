"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { faqData } from "@/assets/Generic-data";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useState } from "react";

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState("innovation");
  const [openFaq, setOpenFaq] = useState(2);

  const currentFaqs =
  faqData.find((item) => item.id === activeTab)?.faqs || [];


  const currentIndex = faqData.findIndex((item) => item.id === activeTab);

  const handlePrev = () => {

    const newIndex = currentIndex === 0 ? faqData.length - 1 : currentIndex - 1;
    setActiveTab(faqData[newIndex].id);
    setOpenFaq(0);
  };

  const handleNext = () => {

    const newIndex = currentIndex === faqData.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(faqData[newIndex].id);
    setOpenFaq(0);
  };


  const start1 = currentIndex;


  let start3 = currentIndex - 1;
  if (start3 < 0) start3 = 0;
  if (start3 > Math.max(0, faqData.length - 3)) start3 = Math.max(0, faqData.length - 3);


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
        py: { xs: 5, md: 10 }
      }}>
      
      
      <Box
        sx={{

          width: { xs: "100%" },
          "@media (min-width: 768px)": {
            width: "736px"
          },
          "@media (min-width: 1024px)": {
            width: "980px"
          },
          "@media (min-width: 1440px)": {
            width: "fit-content"
          },
          mx: "auto",
          display: "flex",
          alignItems: "center",

          justifyContent: "space-between",
          p: { xs: "4px", md: "6px" },
          borderRadius: "40px",
          bgcolor: "#FAF5FF",
          mb: { xs: "40px", sm: "50px", md: "70px", lg: "70px" }
        }}>
        
        <IconButton
          onClick={handlePrev}
          disableRipple
          sx={{
            display: { xs: "flex", lg: "none" },
            color: "#111827",
            mr: { sm: 1 },
            p: { xs: "4px", md: "8px" },
            "&:hover": { backgroundColor: "transparent" },
            "&:active": { backgroundColor: "transparent" }
          }}>
          
          <KeyboardArrowLeftIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            flexWrap: { xs: "nowrap", lg: "wrap" },
            flexGrow: { xs: 1, sm: 0 }
          }}>
          
          {faqData.map((tab, index) =>
          <Box
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setOpenFaq(0);
            }}
            sx={{
              display: {
                xs: index === start1 ? "flex" : "none",
                sm: index >= start3 && index < start3 + 3 ? "flex" : "none",
                md: index >= start4 && index < start4 + 4 ? "flex" : "none",
                lg: "flex"
              },
              cursor: "pointer",
              px: { xs: 2, md: 2, lg: 3 },
              height: { xs: "36px", md: "46px", lg: "52px" },
              borderRadius: "30px",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: activeTab === tab.id ? "#7B53A1" : "transparent",
              color: activeTab === tab.id ? "#fff" : "#000",
              transition: ".3s",
              flexShrink: 0,
              WebkitTapHighlightColor: "transparent"
            }}>
            
              <Typography
              sx={{
                fontFamily: FONT_FAMILY.heading,
                fontSize: { xs: "14px", md: "15px", lg: "18px" },
                fontWeight: activeTab === tab.id ? 500 : 300,
                whiteSpace: "nowrap"
              }}>
              
                {tab.label}
              </Typography>
            </Box>
          )}
        </Box>

        <IconButton
          onClick={handleNext}
          disableRipple
          sx={{
            display: { xs: "flex", lg: "none" },
            color: "#111827",
            ml: { sm: 1 },
            p: { xs: "4px", md: "8px" },
            "&:hover": { backgroundColor: "transparent" },
            "&:active": { backgroundColor: "transparent" }
          }}>
          
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          border: "1px solid #C3C3C3",
          borderRadius: "29px",
          p: { xs: 2, md: "5px" }
        }}>
        
        {currentFaqs.map((faq, index) =>
        <Box key={index}>
            <Box
            onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
            sx={{
              cursor: "pointer",
              py: "20px",
              px: { xs: 2, md: "30px" },

              WebkitTapHighlightColor: "transparent"
            }}>
            
           
              <Box
              sx={{
                display: "flex",
                alignItems: { xs: "flex-start", lg: "center" },
                gap: "10px"
              }}>
              
               
                <KeyboardArrowRightIcon
                sx={{
                  fontSize: "26px",
                  color: openFaq === index ? "#7B53A1" : "#000",
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                  transform: openFaq === index ? "rotate(90deg)" : "rotate(0deg)"
                }} />
              

                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  textAlign: { xs: "justify", md: "left" },
                  fontSize: {
                    xs: "16px",
                    md: "20px"
                  },
                  lineHeight: "26px",
                  color: openFaq === index ? "#7B53A1" : "#000",
                  transition: "color 0.3s ease"
                }}>
                
                  {faq.question}
                </Typography>
              </Box>
              {openFaq === index &&
            <Typography
              sx={{
                textAlign: { xs: "justify", md: "left" },
                mt: 2,
                ml: { xs: "36px", md: "36px" },
                fontFamily: FONT_FAMILY.body,
                fontSize: {
                  xs: "15px",
                  md: "18px"
                },
                lineHeight: "32px",
                color: "#777777"
              }}>
              
                  {faq.answer}
                </Typography>
            }
            </Box>

            {index !== currentFaqs.length - 1 &&
          <Box
            sx={{
              borderBottom: "0.5px solid #C3C3C3"
            }} />

          }
          </Box>
        )}
      </Box>
    </Container>);

}
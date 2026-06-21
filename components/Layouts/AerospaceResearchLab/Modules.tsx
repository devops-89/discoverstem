"use client";

import { ResearchModule, ResearchModulesSectionData } from "@/utils/Types";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { Box, Button, Container, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface ResearchModulesSectionProps {
  data: ResearchModulesSectionData;
}

const icons = [
  GroupsOutlinedIcon,
  LightbulbOutlinedIcon,
  QuestionMarkOutlinedIcon,
  ChatBubbleOutlineOutlinedIcon,
  DescriptionOutlinedIcon,
  ExtensionOutlinedIcon,
  AssignmentOutlinedIcon,
  ScienceOutlinedIcon,
];

export default function ResearchModulesSection({ data }: ResearchModulesSectionProps) {
  const [page, setPage] = useState(0);
  const [selectedModule, setSelectedModule] = useState<ResearchModule | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const cardsPerPage = 8;
  const totalPages = Math.ceil(data.modules.length / cardsPerPage);
  const visibleModules = data.modules.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage);

  const handleReadMore = (module: ResearchModule) => {
    setSelectedModule(module);
    setModalOpen(true);
  };

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        maxWidth: "1200px", 
        mx: "auto", 
        px: { xs: 3, sm: 5, lg: 0 }, 
        py: { xs: 6, sm: 8, lg: 10 } 
      }}
    >
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: { xs: "flex-end", sm: "center", lg: "center" }, 
          flexDirection: { xs: "column", sm: "row", lg: "row" }, 
          mb: { xs: 4, sm: 6, lg: "70px" }, 
          gap: 2 
        }}
      >
        <Typography 
          sx={{ 
            fontFamily: "Work Sans, sans-serif", 
            fontWeight: 600, 
            fontSize: { xs: "24px", sm: "32px", lg: "48px" }, 
            lineHeight: { xs: "32px", sm: "40px", lg: "62px" }, 
            letterSpacing: "-0.03em", 
            color: "#111827",
            alignSelf: "flex-start", 
          }}
        >
          {data.title}
        </Typography>
        <Box sx={{ display: "flex", gap: "12px", alignSelf: { xs: "flex-end", sm: "auto" } }}>
          <IconButton onClick={() => setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))}
            sx={{ width: { xs: "32px", lg: "48px" }, height: { xs: "32px", lg: "48px" }, border: "1px solid #E5E7EB", bgcolor: "#fff" }}>
            <ArrowBackIosNewIcon sx={{ fontSize: { xs: 12, lg: 18 } }} />
          </IconButton>
          <IconButton onClick={() => setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))}
            sx={{ width: { xs: "32px", lg: "48px" }, height: { xs: "32px", lg: "48px" }, border: "1px solid #E5E7EB", bgcolor: "#fff" }}>
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 12, lg: 18 } }} />
          </IconButton>
        </Box>
      </Box>

      <Box 
        sx={{ 
          display: "grid", 
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }, 
          gap: "24px" 
        }}
      >
        {visibleModules.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Box 
              key={item.id} 
              sx={{ 
                // 🔥 FIX: Replaced strict minHeight with "auto" on mobile so cards shrink to fit their content perfectly without gaps!
                minHeight: { xs: "auto", lg: "330.7px" }, 
                bgcolor: "#F3F4F6", 
                borderRadius: "16px", 
                p: { xs: "20px", lg: "28px" }, 
                display: "flex", 
                flexDirection: "column", 
                // 🔥 FIX: Slightly reduced inner spacing on mobile to bring the button closer to text
                gap: { xs: "12px", lg: "20px" } 
              }}
            >
              <Box 
                sx={{ 
                  width: { xs: "40px", lg: "56px" }, 
                  height: { xs: "40px", lg: "56px" }, 
                  borderRadius: { xs: "10px", lg: "14px" }, 
                  bgcolor: "#7B53A1", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  flexShrink: 0 
                }}
              >
                <Icon sx={{ color: "#fff", fontSize: { xs: 20, lg: 28 } }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: { xs: "16px", lg: "18px" }, lineHeight: { xs: "24px", lg: "25px" }, letterSpacing: "-0.18px", color: "#1A1A1A", mb: "8px" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: { xs: "13px", lg: "14px" }, lineHeight: { xs: "20px", lg: "22px" }, color: "#676767", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {item.description}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={() => handleReadMore(item)}
                  sx={{ 
                    minWidth: { xs: "110px", lg: "135.54px" }, 
                    height: { xs: "32px", lg: "37.1px" }, 
                    bgcolor: "#FFEBE6", 
                    border: "0.8px solid #EE4823", 
                    borderRadius: "999px", 
                    color: "#EE4823", 
                    fontFamily: "Poppins, sans-serif", 
                    fontWeight: 500, 
                    fontSize: { xs: "11px", lg: "13px" }, 
                    letterSpacing: "0.52px", 
                    textTransform: "uppercase", 
                    "&:hover": { bgcolor: "#FFEBE6" } 
                  }}
                >
                  Read More ↗
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ mt: "36px", display: "flex", justifyContent: "center", gap: "6px" }}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Box key={index} onClick={() => setPage(index)}
            sx={{ width: "10px", height: "10px", borderRadius: "50%", bgcolor: page === index ? "#000000" : "#D9D9D9", cursor: "pointer" }} />
        ))}
      </Box>

      {data.curriculumLink && (
        <Box sx={{ mt: { xs: "24px", lg: "30px" }, display: "flex", justifyContent: "center" }}>
          <Button href={data.curriculumLink} component="a" target="_blank"
            sx={{ width: { xs: "100%", sm: "264px" }, height: "48px", bgcolor: "#7B53A1", borderRadius: "50px", color: "#FFFFFF", fontFamily: "Work Sans, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "20px", textTransform: "none", "&:hover": { bgcolor: "#7B53A1" }, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
            {data.buttonText}
          </Button>
        </Box>
      )}

      <Dialog open={modalOpen} disableScrollLock onClose={() => setModalOpen(false)} maxWidth="md" fullWidth
        slotProps={{ 
          paper: {
            sx: { 
              borderRadius: "20px", 
              p: { xs: "20px", lg: "24px" }, 
              position: "relative",
              m: { xs: 2, lg: 4 } 
            } 
          } 
        }}>
        <IconButton onClick={() => setModalOpen(false)}
          sx={{ position: "absolute", top: { xs: 8, lg: 12 }, right: { xs: 8, lg: 12 }, zIndex: 1, bgcolor: "#fff", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)", "&:hover": { bgcolor: "#f5f5f5" } }}>
          <CloseIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />
        </IconButton>
        {selectedModule && (
          <Box>
            <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: { xs: "20px", lg: "24px" }, lineHeight: { xs: "28px", lg: "32px" }, color: "#1A1A1A", mb: "16px", pr: "40px" }}>
              {selectedModule.title}
            </Typography>
            <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: { xs: "14px", lg: "16px" }, lineHeight: { xs: "24px", lg: "28px" }, color: "#676767", whiteSpace: "pre-line" }}>
              {selectedModule.description}
            </Typography>
          </Box>
        )}
      </Dialog>
    </Container>
  );
}
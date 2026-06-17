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
import { Box, Button, Container, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
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
    <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 0 }, py: { xs: 6, md: 10 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: { xs: "flex-start", md: "center" }, flexDirection: { xs: "column", md: "row" }, mb: { xs: 4, md: "70px" }, gap: 2 }}>
        <Typography sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: 600, fontSize: { xs: "30px", md: "48px" }, lineHeight: { xs: "40px", md: "62px" }, letterSpacing: "-0.03em", color: "#111827" }}>
          {data.title}
        </Typography>
        <Box sx={{ display: "flex", gap: "12px" }}>
          <IconButton onClick={() => setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))}
            sx={{ width: "48px", height: "48px", border: "1px solid #E5E7EB", bgcolor: "#fff" }}>
            <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton onClick={() => setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))}
            sx={{ width: "48px", height: "48px", border: "1px solid #E5E7EB", bgcolor: "#fff" }}>
            <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }, gap: "24px" }}>
        {visibleModules.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Box key={item.id} sx={{ minHeight: "330.7px", bgcolor: "#F3F4F6", borderRadius: "16px", p: "28px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <Box sx={{ width: "56px", height: "56px", borderRadius: "14px", bgcolor: "#7B53A1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon sx={{ color: "#fff", fontSize: 28 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "25px", letterSpacing: "-0.18px", color: "#1A1A1A", mb: "8px" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "#676767", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {item.description}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={() => handleReadMore(item)}
                  sx={{ minWidth: "135.54px", height: "37.1px", bgcolor: "#FFEBE6", border: "0.8px solid #EE4823", borderRadius: "999px", color: "#EE4823", fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "13px", letterSpacing: "0.52px", textTransform: "uppercase", "&:hover": { bgcolor: "#FFEBE6" } }}>
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
        <Box sx={{ mt: "30px", display: "flex", justifyContent: "center" }}>
          <Button href={data.curriculumLink} component="a" target="_blank"
            sx={{ width: "264px", height: "48px", bgcolor: "#7B53A1", borderRadius: "50px", color: "#FFFFFF", fontFamily: "Work Sans, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "20px", textTransform: "none", "&:hover": { bgcolor: "#7B53A1" }, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
            {data.buttonText}
          </Button>
        </Box>
      )}

      <Dialog open={modalOpen}  disableScrollLock onClose={() => setModalOpen(false)} maxWidth="md" fullWidth
        slotProps={{ paper: {sx: { borderRadius: "20px", p: "24px", position: "relative" }} }}>
        <IconButton onClick={() => setModalOpen(false)}
          sx={{ position: "absolute", top: 12, right: 12, zIndex: 1, bgcolor: "#fff", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)", "&:hover": { bgcolor: "#f5f5f5" } }}>
          <CloseIcon />
        </IconButton>
        {selectedModule && (
          <Box>
            <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "24px", lineHeight: "32px", color: "#1A1A1A", mb: "16px", pr: "40px" }}>
              {selectedModule.title}
            </Typography>
            <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "28px", color: "#676767", whiteSpace: "pre-line" }}>
              {selectedModule.description}
            </Typography>
          </Box>
        )}
      </Dialog>
    </Container>
  );
}

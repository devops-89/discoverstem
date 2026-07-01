"use client";
import { FONT_FAMILY } from "@/utils/theme";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
  data: {
    image: string;
    category: string;
    name: string;
    degree: string;
    org: string;
    modalData?: {title: string;description: string[];};
  } | null;
}

export default function MentorModal({ open, onClose, data }: Props) {
  if (!data) return null;
  const descriptions = data.modalData?.description ?? [];
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableScrollLock
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            width: "1160px",
            maxWidth: { xs: "90vw", lg: "95vw" },
            maxHeight: "90vh",
            borderRadius: { xs: "16px", lg: "29px" },
            backgroundColor: "#F7F7F7",
            overflowY: "auto",
            position: "relative",
            m: { xs: 2, lg: 4 }
          }
        }
      }}>
      
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: { xs: 12, lg: 24 },
          right: { xs: 12, lg: 24 },
          zIndex: 20,
          width: { xs: 36, lg: 48 },
          height: { xs: 36, lg: 48 },
          bgcolor: "#fff",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
          "&:hover": { bgcolor: "#f5f5f5" }
        }}>
        
        <CloseIcon sx={{ fontSize: { xs: "20px", lg: "24px", color: "red" } }} />    
      </IconButton>
      <Box sx={{ p: { xs: 3, lg: "30px" } }}>
        <Box
          sx={{
            position: "relative",
            float: { xs: "none", sm: "left" },
            width: { xs: "100%", sm: "250px", lg: "250px" },
            height: { xs: "280px", sm: "280px", lg: "280px" },
            borderRadius: "11px",
            overflow: "hidden",
            mr: { xs: 0, sm: "20px", lg: "30px" },
            mb: "20px",
            bgcolor: "#D9D9D9"
          }}>
          
          <Image src={data.image} alt={data.name} fill sizes="100vw" style={{ objectFit: "cover" }} />
        </Box>
        <Typography sx={{ fontFamily: FONT_FAMILY.body, fontWeight: 400, fontSize: { xs: "12px", lg: "16px" }, lineHeight: "16px", letterSpacing: "2.4px", textTransform: "uppercase", color: "#F9A51E", mb: { xs: 1.5, lg: 2 } }}>
          {data.category}
        </Typography>
        <Typography sx={{ fontFamily: FONT_FAMILY.body, fontWeight: 600, fontSize: { xs: "22px", lg: "25.6px" }, lineHeight: { xs: "28px", lg: "29.4px" }, letterSpacing: "-0.64px", color: "#000000", mb: 1 }}>
          {data.name}
        </Typography>
        <Typography sx={{ fontFamily: FONT_FAMILY.body, fontWeight: 400, fontSize: { xs: "13px", lg: "14px" }, lineHeight: "20px", color: "rgba(0,0,0,0.75)", mb: { xs: 2.5, lg: 3 } }}>
          {data.degree}{data.org ? ` · ${data.org}` : ""}
        </Typography>
        {descriptions.map((paragraph, index) =>
        <Typography
          key={index}
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            fontSize: { xs: "14px", lg: "16px" },
            lineHeight: { xs: "22px", lg: "20px" },
            letterSpacing: "-0.03em",
            color: "#777777",
            mb: index === descriptions.length - 1 ? 0 : { xs: 1.5, lg: 1.2 }
          }}>
          
            {paragraph}
          </Typography>
        )}
        <Box sx={{ clear: "both" }} />
      </Box>
    </Dialog>);

}
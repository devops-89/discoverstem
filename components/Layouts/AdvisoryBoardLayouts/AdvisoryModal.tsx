"use client";import { LINE_HEIGHT, FONT_SIZE, FONT_FAMILY, FONT_WEIGHT } from "@/utils/theme";

import { AdvisoryMember } from "@/utils/Types";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
  data: AdvisoryMember | null;
}

export default function AdvisoryModal({ open, onClose, data }: Props) {
  if (!data) return null;

  const fullDescription = Array.isArray(data.description) ?
  data.description.join("\n\n") :
  data.description;

  return (
    <Dialog
      disableScrollLock
      open={open}
      onClose={onClose}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            width: "1160px",
            maxWidth: { xs: "calc(100vw - 32px)", md: "95vw" },
            margin: { xs: "16px", md: "32px" },
            borderRadius: { xs: "20px", md: "29px" },
            backgroundColor: "#F7F7F7",
            overflow: "hidden",
            position: "relative"
          }
        }
      }}>
      
      
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          zIndex: 10,
          width: { xs: "40px", md: "50px" },
          height: { xs: "40px", md: "50px" },
          bgcolor: "#FFFFFF",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
          "&:hover": {
            bgcolor: "#F5F5F5"
          }
        }}>
        
        <CloseIcon
          sx={{
            color: "red",
            fontSize: { xs: FONT_SIZE.leadLarge, md: FONT_SIZE.titleLarge }
          }} />
        
      </IconButton>
      <Box
        sx={{
          p: { xs: 3, md: "30px" },
          pt: { xs: 8, md: "30px" },
          maxHeight: { xs: "85vh", md: "90vh" },
          overflowY: "auto"
        }}>
        
        <Box
          sx={{
            position: "relative",
            float: { xs: "none", md: "left" },
            width: { xs: "100%", md: "250px" },
            height: { xs: "280px", sm: "400px", md: "280px" },
            borderRadius: "11px",
            overflow: "hidden",
            bgcolor: "#D9D9D9",
            mr: { xs: 0, md: "30px" },
            mb: { xs: "20px", md: "20px" }
          }}>
          
          <Image
            src={data.image}
            alt={data.name}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "top center"
            }} />
          
        </Box>
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.small, md: FONT_SIZE.bodyLarge },
            lineHeight: LINE_HEIGHT.extraSmall,
            letterSpacing: { xs: "1.5px", md: "2.4px" },
            textTransform: "uppercase",
            color: "#7B53A1",
            mb: { xs: 1, md: 2 }
          }}>
          
          {data.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.leadLarge, sm: FONT_SIZE.title, md: "25.6px" },
            lineHeight: { xs: LINE_HEIGHT.mediumLarge, sm: "28px", md: "29.4px" },
            letterSpacing: "-0.64px",
            color: "#111827",
            whiteSpace: "pre-line",
            mb: 1
          }}>
          
          {data.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.bodySmall, md: FONT_SIZE.bodySmall },
            lineHeight: LINE_HEIGHT.small,
            color: "#777777",
            mb: { xs: 1.5, md: 4 }
          }}>
          
          {data.role}
        </Typography>
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.body, md: FONT_SIZE.bodyLarge },
            lineHeight: { xs: LINE_HEIGHT.mediumLarge, md: LINE_HEIGHT.small },
            letterSpacing: "-0.03em",
            color: "#777777",
            whiteSpace: "pre-line"
          }}>
          
          {fullDescription}
        </Typography>
        <Box sx={{ clear: "both" }} />
      </Box>
    </Dialog>);

}
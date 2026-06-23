"use client";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
  data: {
    image: string | StaticImageData;
    category: string;
    name: string;
    degree: string;
    org: string;
    modalData?: {
      title: string;
      description: string[];
    };
  } | null;
}

export default function ExpertsModal({ open, onClose, data }: Props) {
  if (!data) return null;

  const descriptions = data.modalData?.description ?? [];

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
            maxWidth: { xs: "calc(100vw - 32px)", lg: "95vw" }, 
            maxHeight: "90vh",
            borderRadius: { xs: "20px", lg: "29px" },
            backgroundColor: "#F7F7F7",
            overflowY: "auto",
            position: "relative",
            m: { xs: 2, lg: 4 }, 
          },
        },
      }}
    >
    
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: { xs: 16, lg: 24 },
          right: { xs: 16, lg: 24 },
          zIndex: 20,
          width: { xs: 40, lg: 48 }, 
          height: { xs: 40, lg: 48 },
          bgcolor: "#fff",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
          "&:hover": {
            bgcolor: "#f5f5f5",
          },
        }}
      >
        <CloseIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />
      </IconButton>

      <Box
        sx={{
          p: {
            xs: 3,
            lg: "30px", 
          },
        }}
      >
        {/* FLOAT IMAGE */}
        <Box
          sx={{
            position: "relative",
          
            float: {
              xs: "none",
              lg: "left", 
            },
            width: {
              xs: "100%",
              lg: "250px",
            },
            height: {
              xs: "250px", 
              sm: "350px", 
              lg: "280px", 
            },
            borderRadius: "11px",
            overflow: "hidden",
            mr: {
              xs: 0,
              lg: "30px",
            },
            mb: { xs: 3, lg: "20px" }, 
            bgcolor: "#D9D9D9",
          }}
        >
          <Image
            src={data.image}
            alt={data.name}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>

       
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "16px",
            letterSpacing: "2.4px",
            textTransform: "uppercase",
            color: "#F9A51E",
            mb: 2,
          }}
        >
          {data.category}
        </Typography>

    
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: {
              xs: "22px",
              lg: "25.6px",
            },
            lineHeight: "29.4px",
            letterSpacing: "-0.64px",
            color: "#000000",
            mb: 1,
          }}
        >
          {data.name}
        </Typography>

        
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "rgba(0,0,0,0.75)",
            mb: 3,
          }}
        >
          {data.degree}
          {data.org ? ` · ${data.org}` : ""}
        </Typography>

        
        {descriptions.map((paragraph, index) => (
          <Typography
            key={index}
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "-0.03em",
              color: "#777777",
              mb: index === descriptions.length - 1 ? 0 : 1.2,
            }}
          >
            {paragraph}
          </Typography>
        ))}

        
        <Box sx={{ clear: "both" }} />
      </Box>
    </Dialog>
  );
}
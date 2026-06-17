"use client";

import { AdvisoryMember } from "@/utils/Types";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
  data: AdvisoryMember | null;
}

export default function AdvisoryModal({
  open,
  onClose,
  data,
}: Props) {
  if (!data) return null;

  const fullDescription = Array.isArray(data.description)
    ? data.description.join("\n\n")
    : data.description;

  return (
    <Dialog
     disableScrollLock
      open={open}
      onClose={onClose}
      maxWidth={false}
      slotProps={{
        paper:{
        sx: {
          width: "1160px",
          maxWidth: "95vw",
          borderRadius: "29px",
          backgroundColor: "#F7F7F7",
          overflow: "hidden",
          position: "relative",
        },
      }
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 24,
          right: 24,
          zIndex: 10,
          width: "50px",
          height: "50px",
          bgcolor: "#FFFFFF",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
          "&:hover": {
            bgcolor: "#F5F5F5",
          },
        }}
      >
        <CloseIcon
          sx={{
            color: "#7A7A7A",
          }}
        />
      </IconButton>

      <Box
        sx={{
          p: {
            xs: 3,
            md: "30px",
          },
        }}
      >
        {/* Floating Image */}
        <Box
          sx={{
            position: "relative",
            float: {
              xs: "none",
              md: "left",
            },
            width: {
              xs: "100%",
              md: "250px",
            },
            maxWidth: {
              xs: "100%",
              md: "250px",
            },
            height: "280px",
            borderRadius: "11px",
            overflow: "hidden",
            bgcolor: "#D9D9D9",
            mr: {
              xs: 0,
              md: "30px",
            },
            mb: "20px",
          }}
        >
          <Image
            src={data.image}
            alt={data.name}
            fill sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "16px",
            letterSpacing: "2.4px",
            textTransform: "uppercase",
            color: "#7B53A1",
            mb: 2,
          }}
        >
          {data.title}
        </Typography>

        {/* Name */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: {
              xs: "22px",
              md: "25.6px",
            },
            lineHeight: "29.4px",
            letterSpacing: "-0.64px",
            color: "#111827",
            whiteSpace: "pre-line",
            mb: 1,
          }}
        >
          {data.name}
        </Typography>

        {/* Role */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#777777",
            mb: 4,
          }}
        >
          {data.role}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "-0.03em",
            color: "#777777",
            whiteSpace: "pre-line",
          }}
        >
          {fullDescription}
        </Typography>

        {/* Clear float */}
        <Box sx={{ clear: "both" }} />
      </Box>
    </Dialog>
  );
}
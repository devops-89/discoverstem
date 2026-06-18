"use client";

import { MediaNewsItem } from "@/utils/Types";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface FeaturedMediaCardProps {
  item: MediaNewsItem;
}

export default function FeaturedMediaCard({ item }: FeaturedMediaCardProps) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1150px",
        mx: "auto",
        display: "grid",
        mt: { xs: 4, md: "30px" },
          mb: { xs: 6, md: "80px" },
        gridTemplateColumns: { xs: "1fr", md: "532px 1fr" },
        gap: { xs: 3, md: "18px" },
        alignItems: "start",
      }}
    >
      <Box
        component={Link}
        href={`/media/${item.slug}`}
        sx={{
          width: "100%",
          height: { xs: "260px", md: "385px" },
          bgcolor: "#D9D9D9",
          borderRadius: "12px",
          overflow: "hidden",
          display: "block",
          textDecoration: "none",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Box sx={{ pt: { xs: 0, md: "10px" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            mb: "39px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#7B53A1",
              textTransform: "uppercase",
            }}
          >
            {item.category}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              color: "rgba(0,0,0,0.5)",
            }}
          >
            {item.time}
          </Typography>
        </Box>

        <Typography
          component={Link}
          href={`/media/${item.slug}`}
          sx={{
            display: "block",
            width: "100%",
            maxWidth: "600px",
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "26px", md: "31.3953px" },
            lineHeight: { xs: "34px", md: "40px" },
            letterSpacing: "-0.02em",
            color: "#111827",
            textDecoration: "none",
            mb: "18px",
          }}
        >
          {item.title}
        </Typography>

       <Typography
  sx={{
    width: "100%",
    maxWidth: "600px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "15.6977px",
    lineHeight: "28px",
    color: "#474A55",
    mb: "25px",

    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  }}
>
  {item.description}
</Typography>

        <Box
          component={Link}
          href={`/media/${item.slug}`}
          sx={{
            width: "143.9px",
            height: "48.84px",
            bgcolor: "#7B53A1",
            borderRadius: "26.1628px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8.72px",
            pl: "20.9302px",
            pr: "5.23256px",
            textDecoration: "none",
            mb: "51px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "JUST Sans, Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "13.9535px",
              lineHeight: "21px",
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
            }}
          >
            Read More
          </Typography>

          <Box
            sx={{
              width: "38.37px",
              height: "38.37px",
              borderRadius: "50%",
              bgcolor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ArrowOutwardIcon sx={{ fontSize: "17.44px", color: "#111827" }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <PersonOutlineIcon sx={{ fontSize: 20, color: "#474A55" }} />
            <Typography sx={{ fontSize: "16px", lineHeight: "30px", color: "#474A55" }}>
              {item.author}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <ChatBubbleOutlineIcon sx={{ fontSize: 20, color: "#474A55" }} />
            <Typography sx={{ fontSize: "16px", lineHeight: "30px", color: "#474A55" }}>
              {item.comments}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <VisibilityOutlinedIcon sx={{ fontSize: 20, color: "#474A55" }} />
            <Typography sx={{ fontSize: "16px", lineHeight: "30px", color: "#474A55" }}>
              {item.views}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
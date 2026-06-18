"use client";

import { MediaNewsItem } from "@/utils/Types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

interface LatestNewsProps {
  items: MediaNewsItem[];
}

export default function LatestNews({ items }: LatestNewsProps) {
  const [showAll, setShowAll] = useState(false);

  const latestNewsItems = items.filter(
    (item) => item.category === "Latest News"
  );

  const latestItems = showAll
    ? latestNewsItems
    : latestNewsItems.slice(0, 4);

  return (
    <Box
      sx={{
        maxWidth: "1146px",
        mx: "auto",
        mb: { xs: 8, md: "100px" },
        px: { xs: 2, md: 0 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: "70px" }}>
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "46px",
            letterSpacing: "-0.02em",
            color: "#111827",
            mr: "18px",
            flexShrink: 0,
          }}
        >
          Latest News
        </Typography>

        <Box sx={{ height: "1px", bgcolor: "#000", flexGrow: 1 }} />

        {!showAll && latestNewsItems.length > 4 && (
          <Box
            onClick={() => setShowAll(true)}
            sx={{
              ml: "18px",
              display: "flex",
              alignItems: "center",
              color: "#7B53A1",
              textDecoration: "none",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              See All
            </Typography>
            <KeyboardArrowRightIcon sx={{ fontSize: 18 }} />
          </Box>
        )}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 3, md: "28px" },
        }}
      >
        {latestItems.map((item) => (
          <Box key={item.id}>
            <Box
              component={Link}
              href={`/media/${item.slug}`}
              sx={{
                display: "block",
                height: "258px",
                borderRadius: "12px",
                bgcolor: "#D9D9D9",
                overflow: "hidden",
                mb: "35px",
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

            <Typography
              component={Link}
              href={`/media/${item.slug}`}
              sx={{
                display: "block",
                fontFamily: "Work Sans, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "-0.02em",
                color: "#111827",
                textDecoration: "none",
                mb: "14px",
              }}
            >
              {item.title}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  lineHeight: "30px",
                  color: "#474A55",
                }}
              >
                {item.time}
              </Typography>

              <Typography sx={{ fontSize: "16px", color: "#474A55" }}>
                •
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  lineHeight: "30px",
                  color: "#474A55",
                }}
              >
                {item.readTime}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {showAll && latestNewsItems.length > 4 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            onClick={() => setShowAll(false)}
            sx={{
              height: "44px",
              px: "24px",
              borderRadius: "999px",
              bgcolor: "#7B53A1",
              color: "#FFFFFF",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#7B53A1",
              },
            }}
          >
            See Less
          </Button>
        </Box>
      )}
    </Box>
  );
}
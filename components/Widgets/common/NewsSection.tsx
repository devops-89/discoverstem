"use client";

import { MediaNewsItem } from "@/utils/Types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface NewsSectionProps {
  title: string;
  items: MediaNewsItem[];
  seeAllLink?: string;
}

export default function NewsSection({
  title,
  items,
  seeAllLink = "/media/more-news",
}: NewsSectionProps) {
  const visibleItems = items.slice(0, 4);

  return (
    <Box
      sx={{
        maxWidth: "1146px",
        mx: "auto",
        mb: { xs: 8, md: 10, lg: "100px" },
        px: { xs: 3, md: 4, lg: 0 },
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: { xs: 4, lg: "70px" } }}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 600,
            fontSize: { xs: "24px", md: "28px", lg: "36px" },
            lineHeight: { xs: "32px", md: "36px", lg: "46px" },
            letterSpacing: "-0.02em",
            color: "#111827",
            mr: { xs: "12px", lg: "18px" },
            flexShrink: 0,
          }}
        >
          {title}
        </Typography>

        <Box sx={{ height: "1px", bgcolor: "#000", flexGrow: 1 }} />

        {items.length > 4 && (
          <Box
            component={Link}
            href={seeAllLink}
            sx={{
              ml: { xs: "12px", lg: "18px" },
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#7B53A1",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              See All
            </Typography>

            <KeyboardArrowRightIcon />
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          },
          gap: { xs: 3, lg: "28px" },
        }}
      >
        {visibleItems.map((item) => (
          <Box key={item.id}>
            <Box
              component={Link}
              href={`/media/${item.slug}`}
              target="_blank"
              sx={{
                display: "block",
                height: { xs: "200px", md: "220px", lg: "258px" },
                borderRadius: "12px",
                overflow: "hidden",
                mb: { xs: 3, lg: "35px" },
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
                }}
              />
            </Box>

            <Typography
              component={Link}
              href={`/media/${item.slug}`}
              target="_blank"
              sx={{
                display: "block",
                fontFamily: "Work Sans",
                fontWeight: 600,
                fontSize: { xs: "14px", lg: "16px" },
                lineHeight: { xs: "20px", lg: "22px" },
                color: "#111827",
                textDecoration: "none",
                mb: { xs: 1, lg: "14px" },
              }}
            >
              {item.title}
            </Typography>

            <Box sx={{ display: "flex", gap: "9px" }}>
              <Typography sx={{ fontSize: { xs: "14px", lg: "16px" }, color: "#474A55" }}>
                {item.publishedDate}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

    </Box>
  );
}
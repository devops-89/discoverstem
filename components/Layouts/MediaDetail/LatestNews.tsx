"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { MediaNewsItem } from "@/utils/Types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
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

  const latestItems = showAll ?
  latestNewsItems :
  latestNewsItems.slice(0, 4);

  return (
    <Box
      sx={{
        maxWidth: "1146px",
        mx: "auto",
        mb: { xs: 8, md: "100px" },
        px: { xs: 2, md: 0 }
      }}>
      
      <Box sx={{ display: "flex", alignItems: "center", mb: "70px" }}>
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.heading,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: FONT_SIZE.subSectionHeading,
            lineHeight: LINE_HEIGHT.xl5,
            letterSpacing: "-0.02em",
            color: "#111827",
            mr: "18px",
            flexShrink: 0
          }}>
          
          Latest News
        </Typography>

        <Box sx={{ height: "1px", bgcolor: "#000", flexGrow: 1 }} />

        {!showAll && latestNewsItems.length > 4 &&
        <Box
          onClick={() => setShowAll(true)}
          sx={{
            ml: "18px",
            display: "flex",
            alignItems: "center",
            color: "#7B53A1",
            textDecoration: "none",
            flexShrink: 0,
            cursor: "pointer"
          }}>
          
            <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.semiBold,
              fontSize: FONT_SIZE.bodyLarge,
              lineHeight: LINE_HEIGHT.medium
            }}>
            
              See All
            </Typography>
            <KeyboardArrowRightIcon sx={{ fontSize: 18 }} />
          </Box>
        }
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)"
          },
          gap: { xs: 3, md: "28px" }
        }}>
        
        {latestItems.map((item) =>
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
              mb: "35px"
            }}>
            
              <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }} />
            
            </Box>

            <Typography
            component={Link}
            href={`/media/${item.slug}`}
            sx={{
              display: "block",
              fontFamily: FONT_FAMILY.heading,
              fontWeight: FONT_WEIGHT.semiBold,
              fontSize: FONT_SIZE.bodyLarge,
              lineHeight: "22px",
              letterSpacing: "-0.02em",
              color: "#111827",
              textDecoration: "none",
              mb: "14px"
            }}>
            
              {item.title}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontSize: FONT_SIZE.bodyLarge,
                lineHeight: "30px",
                color: "#474A55"
              }}>
              
                {item.time}
              </Typography>

              <CircleIcon sx={{ fontSize: FONT_SIZE.micro, color: "#474A55" }} />

              <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontSize: FONT_SIZE.bodyLarge,
                lineHeight: "30px",
                color: "#474A55"
              }}>
              
                {item.readTime}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      {showAll && latestNewsItems.length > 4 &&
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
          onClick={() => setShowAll(false)}
          sx={{
            height: "44px",
            px: "24px",
            borderRadius: "999px",
            bgcolor: "#7B53A1",
            color: "#FFFFFF",
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: FONT_SIZE.bodySmall,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#7B53A1"
            }
          }}>
          
            See Less
          </Button>
        </Box>
      }
    </Box>);

}
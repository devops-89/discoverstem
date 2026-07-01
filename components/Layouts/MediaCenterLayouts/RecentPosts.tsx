"use client";import { FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { recentPosts } from "@/assets/Generic-data";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const RecentPosts = () => {
  return (
    <Box
      sx={{

        width: { xs: "100%", lg: "420px" },
        height: { xs: "auto", lg: "860px" },
        p: 3,
        background: "#FAF5FF",
        borderRadius: 3,
        mb: 6,
        overflowY: "auto"
      }}>
      
     
      <Typography
        sx={{

          width: { xs: "100%", lg: "137px" },
          height: { xs: "auto", lg: "17px" },
          lineHeight: "34px",
          letterSpacing: "-0.8px",
          fontWeight: FONT_WEIGHT.semiBold,
          fontSize: FONT_SIZE.titleLarge,
          mb: 3,
          color: "#1C2539"
        }}>
        
        Recent Post
      </Typography>

     
      {recentPosts.map((post) =>
      <Box key={post.id} sx={{ mb: 3, cursor: "pointer" }}>
          
        
          <Box
          sx={{
            width: { xs: "100%", lg: "348px" },

            height: { xs: "200px", md: "240px", lg: "160px" },
            borderRadius: "10px",
            overflow: "hidden",
            mb: 1.5,
            position: "relative"
          }}>
          
            <Image
            src={post.image}
            alt={post.title}
            fill sizes="100vw"
            style={{ objectFit: "cover" }} />
          
          </Box>

         
          <Typography
          sx={{
            width: { xs: "100%", lg: "101px" },
            height: { xs: "auto", lg: "11px" },
            fontSize: FONT_SIZE.caption,
            color: "#7B53A1",
            mb: 0.5
          }}>
          
            {post.date}
          </Typography>

        
          <Typography
          sx={{
            width: { xs: "100%", lg: "348px" },
            height: { xs: "auto", lg: "44px" },
            fontSize: FONT_SIZE.bodySmall,
            fontWeight: FONT_WEIGHT.semiBold,
            color: "#111827",
            lineHeight: "30px",
            letterSpacing: "-0.01em"
          }}>
          
            {post.title}
          </Typography>

        </Box>
      )}
    </Box>);

};

export default RecentPosts;
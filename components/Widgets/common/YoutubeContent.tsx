"use client";import { FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { VideoSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface VideoSectionProps {
  data: VideoSectionData;
}

export default function VideoSection({ data }: VideoSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",

        px: { xs: 3, md: 4, lg: 0 },

        py: { xs: 5, md: 8, lg: 10 }
      }}>
      
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: FONT_FAMILY.heading,
          fontWeight: FONT_WEIGHT.semiBold,

          fontSize: { xs: FONT_SIZE.titleLarge, md: FONT_SIZE.sectionHeadingSmall, lg: FONT_SIZE.pageHeadingSmall },
          lineHeight: { xs: "30px", md: "50px", lg: "62px" },
          letterSpacing: "-0.03em",
          color: "#111827",
          mb: 1
        }}>
        
        {data.title}
      </Typography>

      {data.subtitle &&
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: FONT_FAMILY.body,
          fontWeight: FONT_WEIGHT.regular,
          fontSize: { xs: FONT_SIZE.small, md: FONT_SIZE.body, lg: FONT_SIZE.bodyLarge },
          color: "#777777",
          mb: { xs: 5, lg: "55px" }
        }}>
        
          {data.subtitle}
        </Typography>
      }

      <Box
        sx={{
          width: "100%",

          height: { xs: "220px", sm: "350px", md: "540px", lg: "658px" },
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#000"
        }}>
        
        <iframe
          src={data.videoUrl}
          title={data.title}
          width="100%"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            border: "none"
          }} />
        
      </Box>
    </Container>);

}
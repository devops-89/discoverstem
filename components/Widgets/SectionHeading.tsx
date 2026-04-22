"use client";
import { Box, Stack, Divider, Typography, Button } from "@mui/material";
import { FONT_FAMILY } from "@/utils/Fonts";

export default function SectionHeading({
  label,
  title,
  swiperRef,
}: {
  label: string;
  title: string;
  swiperRef?: React.MutableRefObject<import("swiper").Swiper | null>;
}) {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 0.5 }}>
        <Divider sx={{ width: 36, borderColor: "#9e9e9e", borderWidth: "1.5px" }} />
        <Typography sx={{ color: "#6e6e6e", fontSize: 14 }}>{label}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
        <Typography
          sx={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: { xs: 28, md: 44, lg: 48 },
            fontWeight: 500,
            color: "#000",
            lineHeight: 1.15,
          }}
        >
          {title}
        </Typography>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button
            variant="outlined"
            disableElevation
            endIcon={<span style={{ fontSize: 18, marginLeft: 4 }}>↗</span>}
            sx={{
              borderRadius: "100px",
              borderColor: "#FF7043", // Salmon/Orange color
              color: "#FF7043",
              bgcolor: "transparent",
              textTransform: "none",
              fontSize: { xs: 14, md: 16 },
              fontWeight: 500,
              px: { xs: 2.5, md: 3.5 },
              py: 1,
              fontFamily: "var(--font-geist-sans), sans-serif",
              "&:hover": {
                bgcolor: "#FFF5F2",
                borderColor: "#FF7043",
              },
            }}
          >
            View All
          </Button>
          {swiperRef && (
            <Stack direction="row" spacing={1.2}>
              <Box
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{
                  width: { xs: 36, md: 44 },
                  height: { xs: 36, md: 44 },
                  borderRadius: "50%",
                  border: "1px solid #E0E0E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#666",
                  fontSize: 20,
                  transition: "all 0.2s",
                  "&:hover": { bgcolor: "#f5f5f5", borderColor: "#ccc" },
                }}
              >
                ‹
              </Box>
              <Box
                onClick={() => swiperRef.current?.slideNext()}
                sx={{
                  width: { xs: 36, md: 44 },
                  height: { xs: 36, md: 44 },
                  borderRadius: "50%",
                  border: "1px solid #E0E0E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#666",
                  fontSize: 20,
                  transition: "all 0.2s",
                  "&:hover": { bgcolor: "#f5f5f5", borderColor: "#ccc" },
                }}
              >
                ›
              </Box>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

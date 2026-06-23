"use client";
import { Box, Stack, Divider, Typography, Button } from "@mui/material";
import { FONT_FAMILY } from "@/utils/Fonts";
import NorthEastIcon from "@mui/icons-material/NorthEast"; // 🔥 Added Icon import

export default function SectionHeading({
  label,
  title,
  swiperRef,
  viewAllHref,
}: {
  label: string;
  title: string;
  swiperRef?: React.MutableRefObject<import("swiper").Swiper | null>;
  viewAllHref?: string;
}) {
  return (
    <Box sx={{ mb:{xs:4, lg:7 }}}>
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 0.5 }}>
        <Divider sx={{ width: 36, borderColor: "#9e9e9e", borderWidth: "1.5px" }} />
        <Typography sx={{ color: "#6e6e6e", fontSize: 14 }}>{label}</Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        sx={{ mt: 1, gap: { xs: 2, sm: 0 } }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: { xs: 24, sm: 32, md: 44, lg: 48 }, // Decreased size on mobile (22px) and tablet (32px)
            fontWeight: 500,
            color: "#000",
            lineHeight: 1.15,
          }}
        >
          {title}
        </Typography>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 1.5 }}
          alignItems="center"
          sx={{
            width: { xs: "100%", sm: "auto" },
            justifyContent: { xs: "space-between", sm: "flex-start" },
          }}
        >
          <Button
            variant="outlined"
            disableElevation
            href={viewAllHref}
           
            endIcon={<NorthEastIcon sx={{ fontSize: { xs: "14px !important", md: "20px !important" } }} />}
            sx={{
              borderRadius: "100px",
              borderColor: "#FF7043",
              color: "#FF7043",
              bgcolor: "transparent",
              textTransform: "none",
              fontSize: { xs: 11, md: 16 },
              fontWeight: 500,
              px: { xs: 1.5, md: 3.5 },
              // 🔥 FIX: Decreased height specifically on small screens by removing padding and overriding minHeight
              py: { xs: 0, md: 1 },
              height: { xs: "28px", md: "auto" },
              minHeight: 0,
              fontFamily: "var(--font-geist-sans), sans-serif",
              minWidth: "auto",
              "&:hover": {
                bgcolor: "#FFF5F2",
                borderColor: "#FF7043",
              },
            }}
          >
            View All
          </Button>
          {swiperRef && (
            <Stack direction="row" spacing={{ xs: 0.8, md: 1.2 }}>
              <Box
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{
                  width: { xs: 30, md: 44 },
                  height: { xs: 30, md: 44 },
                  borderRadius: "50%",
                  border: "1px solid #E0E0E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#666",
                  fontSize: { xs: 16, md: 20 },
                  transition: "all 0.2s",
                  "&:hover": { bgcolor: "#f5f5f5", borderColor: "#ccc" },
                }}
              >
                ‹
              </Box>
              <Box
                onClick={() => swiperRef.current?.slideNext()}
                sx={{
                  width: { xs: 30, md: 44 },
                  height: { xs: 30, md: 44 },
                  borderRadius: "50%",
                  border: "1px solid #E0E0E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#666",
                  fontSize: { xs: 16, md: 20 },
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
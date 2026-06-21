"use client";

import { useState } from "react";
import { studentsData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Student } from "@/utils/Types";
import { Box, Container, Dialog, Grid, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function StudentStories() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, sm: 6, lg: 8 },
        px: { xs: 3, sm: 5, lg: 4 },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
        <Typography
          sx={{
            width: { xs: "100%", lg: "309px" },
            height: { xs: "auto", lg: "43px" },
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            color: "#777777",
            fontSize: { xs: "16px", sm: "18px", lg: "22px" }, // Scaled for mobile
            letterSpacing: "0.03em",
            lineHeight: { xs: "28px", sm: "32px", lg: "43px" }, // Scaled for mobile
          }}
        >
          From Ambition to Admission!
        </Typography>
      </Stack>
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          width: { xs: "100%", lg: "546px" },
          height: { xs: "auto", lg: "62px" },
          fontSize: { xs: "28px", sm: "36px", lg: "48px" }, // Scaled for mobile
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: { xs: "38px", sm: "46px", lg: "62px" }, // Scaled for mobile
          mb: { xs: 4, lg: 6 },
        }}
      >
        Hear From Our Students
      </Typography>

      <Grid container spacing={{ xs: 3, lg: 3 }}>
        {studentsData.map((item: Student, i: number) => (
          <Grid size={{ xs: 12, md: 6 }} key={i}>
            <Box
              sx={{
                width: { xs: "100%", lg: "570px" },
                // 🔥 FIX: Height auto on a box with a 100% height image causes the image to disappear on mobile.
                // Replaced with a responsive height to ensure it maintains a beautiful 16:9 ratio.
                height: { xs: "220px", sm: "280px", lg: "321px" }, 
                borderRadius: "14px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => item.video && setSelectedVideo(item.video)}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 12, lg: 16 },
                  right: { xs: 12, lg: 16 },
                  display: "flex",
                  alignItems: "center",
                  px: { xs: "12px", lg: "16px" },
                  py: { xs: "6px", lg: "8px" },
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.body,
                    fontSize: { xs: "14px", lg: "20px" }, // Shrunk pill text on mobile
                    fontWeight: 400,
                    lineHeight: { xs: "22px", lg: "28px" },
                    letterSpacing: "-0.02em",
                    mr: { xs: 0.5, lg: 1 },
                  }}
                >
                  Watch now
                </Typography>

                <Box
                  sx={{
                    ml: "auto",
                    width: { xs: "28px", lg: "36px" }, // Shrunk icon container
                    height: { xs: "28px", lg: "36px" },
                    borderRadius: "50%",
                    bgcolor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderTop: { xs: "4px solid transparent", lg: "5px solid transparent" },
                      borderBottom: { xs: "4px solid transparent", lg: "5px solid transparent" },
                      borderLeft: { xs: "6px solid #000", lg: "8px solid #000" },
                      ml: "2px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
         disableScrollLock
        maxWidth="md"
        fullWidth
        slotProps={{ 
          paper:{
          sx: { borderRadius: "20px", position: "relative", bgcolor: "#000" },
          }
        }}
      >
        <IconButton
          onClick={() => setSelectedVideo(null)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 10,
            bgcolor: "rgba(0,0,0,0.5)",
            color: "#fff",
            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
          }}
        >
          <CloseIcon />
        </IconButton>
        {selectedVideo && (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "250px", md: "500px" },
            }}
          >
            <Box
              component="iframe"
              src={selectedVideo}
              title="Student Story Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                width: "100%",
                height: "100%",
                border: 0,
                borderRadius: "20px",
              }}
            />
          </Box>
        )}
      </Dialog>
    </Container>
  );
}
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
        pb: { xs: 5, md: 8 },
        px: { xs: 3, md: 4 },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
        <Typography
          sx={{
            width: { xs: "100%", md: "309px" },
            height: { xs: "auto", md: "43px" },
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            color: "#777777",
            fontSize: "22px",
            letterSpacing: "0.03em",
            lineHeight: "43px",
          }}
        >
          From Ambition to Admission!
        </Typography>
      </Stack>
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          width: { xs: "100%", md: "546px" },
          height: { xs: "auto", md: "62px" },
          fontSize: { xs: 32, md: 48 },
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: "62px",
          mb: 3,
        }}
      >
        Hear From Our Students
      </Typography>

      <Grid container spacing={3}>
        {studentsData.map((item: Student, i: number) => (
          <Grid size={{ xs: 12, md: 6 }} key={i}>
            <Box
              sx={{
                width: { xs: "100%", md: "570px" },
                height: { xs: "auto", md: "321px" },
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
                  top: 16,
                  right: 16,
                  display: "flex",
                  alignItems: "center",
                  px: "16px",
                  py: "8px",
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
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "-0.02em",
                    mr: 1,
                  }}
                >
                  Watch now
                </Typography>

                <Box
                  sx={{
                    ml: "auto",
                    width: "36px",
                    height: "36px",
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
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: "8px solid #000",
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
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: "20px", position: "relative", bgcolor: "#000" },
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

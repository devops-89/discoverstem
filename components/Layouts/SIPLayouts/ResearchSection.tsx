"use client";

import { useState } from "react";
import { researchData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Research } from "@/utils/Types";
import { Box, Container, Dialog, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ResearchSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 2,
          mb: 4,
        }}
      >
        <Box sx={{ maxWidth: "700px" }}>
          <Typography
            sx={{
              width: { xs: "100%", md: "715px" },
              height: { xs: "120px", md: "94px" },
              fontFamily: FONT_FAMILY.heading,
              fontSize: { xs: "22px", md: "48px" },
              fontWeight: 600,
              lineHeight: "62px",
              letterSpacing: "-0.03em",
              color: "#111827",
              mb: 6,
            }}
          >
            Research Papers and Abstracts Published by Our Students
          </Typography>

          <Typography
            sx={{
              width: { xs: "100%", md: "1161px" },
              height: { xs: "120px", md: "101px" },
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              letterSpacing: "-0.03em",
              fontSize: "22px",
              color: "#777",
              lineHeight: "43px",
              mb: 6,
            }}
          >
            Innovations in Digital Health, Diagnostics, and Biomarkers (IDDB) is an international peer-reviewed journal, guided by a distinguished editorial board and directed by leading experts, including representatives from the World Health Organization (WHO).
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {researchData.map((item: Research, i: number) => (
          <Grid size={{ xs: 12, md: 6 }} key={i}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "220px", md: "320px" },
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                cursor: item.video ? "pointer" : "default",
              }}
              onClick={() => item.video && setSelectedVideo(item.video)}
            >
              <Box
                component="img"
                src={item.image}
                sx={{ width: 1, height: 1, objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 60%)",
                }}
              />
              {item.video && (
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
                    zIndex: 2,
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
              )}
              <Box
                sx={{
                  position: "absolute",
                  left: "32px",
                  bottom: "32px",
                  width: { xs: "70%", md: "80%" },
                  fontFamily: FONT_FAMILY.heading,
                  fontWeight: 600,
                  fontSize: { xs: "18px", md: "22px" },
                  lineHeight: { xs: "24px", md: "30px" },
                  letterSpacing: "-0.44px",
                  color: "#fff",
                }}
              >
                {item.title}
              </Box>
              <Box
                component="a"
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                sx={{
                  right: 32,
                  bottom: 32,
                  position: "absolute",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,0.7)",
                  border: "1px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
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
              title="Research Paper Video"
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

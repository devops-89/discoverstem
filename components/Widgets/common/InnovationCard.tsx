"use client";

import { InnovationCardItem } from "@/utils/Types";
import {
  Box,
  Dialog,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface InnovationCardsGridProps {
  items: InnovationCardItem[];
}

export default function InnovationCardsGrid({
  items,
}: InnovationCardsGridProps) {
  const [certModal, setCertModal] = useState<{
    open: boolean;
    src: string;
    title: string;
  }>({ open: false, src: "", title: "" });

  return (
    <>
    <Grid container spacing={{ xs: 3, md: 2 }} >
      {items.map((item) => {
        const isGranted = item.filterType === "Granted";

        return (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: 380, md: 340 },
                height: "100%",
                backgroundColor: "#fff",
                borderRadius: "16px",
                border: "0.8px solid #0000001A",
                overflow: "hidden",
                boxShadow:
                  "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
                display: "flex",
                flexDirection: "column",
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 220, sm: 250, md: 180 },
                  backgroundColor: "#fff",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />

                <Typography
                  sx={{
                    position: "absolute",
                    top: 16,
                    left: 24,
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#7B53A1",
                    backgroundColor: "#FFFFFFF2",
                    px: "8px",
                    py: "3px",
                    borderRadius: "999px",
                  }}
                >
                  {item.category}
                </Typography>

                <Box
                  sx={{
                    position: "absolute",
                    top: isGranted ? "12px" : "8.15px",
                    right: isGranted ? "13.6px" : "9px",
                    width: isGranted ? "81.875px" : "97px",
                    height: isGranted ? "23.9875px" : "28px",
                    borderRadius: "26843500px",
                    backgroundColor: "#1B0F2A",
                    px: "12px",
                    py: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <Image
                    src={item.statusIcon}
                    alt={item.filterType}
                    width={isGranted ? 58 : 73}
                    height={isGranted ? 16 : 20}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  px: { xs: "20px", md: "18px", lg: "24px" },
                  pt: "20px",
                  pb: "18px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: "13px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "23.4px",
                    letterSpacing: "-0.45px",
                    color: "#171717",
                    minHeight: "47px",
                  }}
                >
                  {item.title}
                </Typography>

                {item.award && (
                  <Box
                    sx={{
                      backgroundColor: "#FFF5E6",
                      border: "0.8px solid #F9A51E4D",
                      borderRadius: "14px",
                      px: "12.8px",
                      py: "12.8px",
                      minHeight: "103px",
                    }}
                  >
                    {item.awardIcon && (
                      <Box sx={{ mb: 1 }}>
                        <Image
                          src={item.awardIcon}
                          alt="Award"
                          width={80}
                          height={18}
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                    )}

                    <Typography
                      sx={{
                        fontSize: "13.5px",
                        lineHeight: "19.25px",
                        color: "#262626",
                      }}
                    >
                      {item.award}
                    </Typography>
                  </Box>
                )}

                <Stack direction="row" justifyContent="space-between" mt="auto">
                  <Typography
                    component="a"
                    href={item.patentLink}
                    target="_blank"
                    sx={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#7B53A1",
                      textDecoration: "none",
                    }}
                  >
                    Google
                    <br />
                    Patents ↗
                  </Typography>

                  <Typography
                    onClick={() => {
                      if (item.certificateLink !== "#") {
                        setCertModal({
                          open: true,
                          src: item.certificateLink,
                          title: item.title,
                        });
                      }
                    }}
                    sx={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#7B53A1",
                      textDecoration: "none",
                      cursor: item.certificateLink !== "#" ? "pointer" : "default",
                      opacity: item.certificateLink !== "#" ? 1 : 0.4,
                    }}
                  >
                    Patent
                    <br />
                    Certificate ↗
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>

      <Dialog
        open={certModal.open}
        onClose={() => setCertModal({ open: false, src: "", title: "" })}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            position: "relative",
            overflow: "visible",
            p: 2,
          },
        }}
      >
        <IconButton
          onClick={() => setCertModal({ open: false, src: "", title: "" })}
          sx={{
            position: "absolute",
            top: -12,
            right: -12,
            width: 36,
            height: 36,
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            zIndex: 1,
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 700, lineHeight: 1 }}>
            ✕
          </Typography>
        </IconButton>

        <Box sx={{ position: "relative", width: "100%", minHeight: "60vh" }}>
          {certModal.src && (
            <Image
              src={certModal.src}
              alt={certModal.title}
              fill
              unoptimized
              style={{ objectFit: "contain" }}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
}
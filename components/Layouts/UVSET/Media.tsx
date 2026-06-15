"use client";

import { MediaSectionData } from "@/utils/Types";
import { Box, Container, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useState } from "react";

interface MediaSectionProps {
  data: MediaSectionData;
}

export default function MediaSection({ data }: MediaSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [isPdf, setIsPdf] = useState(false);

  const handleOpen = (e: React.MouseEvent, url: string, isPdfType: boolean = false) => {
    e.preventDefault();
    let embedUrl = url;
    if (url.includes("youtu.be/")) {
      embedUrl = url.replace("youtu.be/", "www.youtube.com/embed/");
    } else if (url.includes("youtube.com/watch?v=")) {
      embedUrl = url.replace("youtube.com/watch?v=", "www.youtube.com/embed/");
    }
    setModalUrl(embedUrl);
    setIsPdf(isPdfType);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setModalUrl("");
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1157px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 5, md: 8 },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          fontSize: { xs: "32px", md: "48px" },
          lineHeight: { xs: "40px", md: "36.8px" },
          letterSpacing: "-0.8px",
          color: "#171717",
          mb: { xs: 4, md: "70px" },
          textTransform: "capitalize",
        }}
      >
        {data.title}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: { xs: 3, md: "22px" },
        }}
      >
        {data.items.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "100%",
              maxWidth: "371px",
              height: { xs: "auto", md: "431px" },
              borderRadius: "16px",
              border: "0.8px solid #0000000D",
              overflow: "hidden",
              backgroundColor: "#fff",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "220px", md: "245.66px" },
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  minWidth: "81.55px",
                  height: "23.99px",
                  borderRadius: "999px",
                  backgroundColor: "#fff",
                  px: "12px",
                  py: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: "#171717",
                  }}
                >
                  {item.tag}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                px: "21.8px",
                pt: "14px",
                display: "flex",
                flexDirection: "column",
                height: { xs: "auto", md: "185.34px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                  color: "#7B53A1",
                  mb: "8px",
                }}
              >
                {item.source}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24.75px",
                  letterSpacing: "-0.45px",
                  color: "#171717",
                  minHeight: "50px",
                }}
              >
                {item.title}
              </Typography>

              <Box
                sx={{
                  mt: "auto",
                  pt: "10px",
                  minHeight: "46px",
                  borderTop: "0.8px solid #0000000D",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <Box
                  component="a"
                  href={item.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: "999px",
                    backgroundColor: "#171717",
                    color: "#fff",
                    px: "16px",
                    py: "6px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    textDecoration: "none",
                    display: "inline-flex",
                  }}
                >
                  Visit Link
                </Box>

                <Box
                  component="a"
                  href={item.tag === "Talk" ? item.visitLink : item.pdfLink}
                  onClick={(e: React.MouseEvent) => handleOpen(e, item.tag === "Talk" ? item.visitLink : item.pdfLink, item.tag !== "Talk")}
                  sx={{
                    borderRadius: "999px",
                    backgroundColor: "#fff",
                    color: "#171717",
                    border: "0.8px solid #0000001A",
                    px: "16px",
                    py: "6px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    cursor: "pointer"
                  }}
                >
                  {item.tag === "Talk" ? (
                    <>
                      <i className="fas fa-play-circle" style={{ fontSize: "14px" }}></i>
                      Watch Video
                    </>
                  ) : (
                    "Read PDF"
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="media-modal-title"
        aria-describedby="media-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: isPdf ? "800px" : "900px",
            height: isPdf ? "85vh" : { xs: "auto", md: "500px" },
            aspectRatio: isPdf ? "auto" : { xs: "16/9", md: "auto" },
            backgroundColor: "#fff",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 1,
              borderBottom: "1px solid #E5E5E5",
              backgroundColor: "#f5f5f5"
            }}
          >
            <IconButton onClick={handleClose} size="small" aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, position: "relative" }}>
            {modalUrl && (
              <iframe
                src={modalUrl}
                width="100%"
                height="100%"
                style={{ border: "none", display: "block" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
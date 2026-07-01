"use client";import { FONT_SIZE, FONT_WEIGHT, FONT_FAMILY } from "@/utils/theme";

import { InnovationCardItem } from "@/utils/Types";
import { Close } from "@mui/icons-material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import CheckIcon from "@mui/icons-material/Check";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import {
  Box,
  Dialog,
  Grid,
  IconButton,
  Stack,
  Typography } from
"@mui/material";
import Image from "next/image";
import { useState } from "react";

interface InnovationCardsGridProps {
  items: InnovationCardItem[];
}

export default function InnovationCardsGrid({
  items
}: InnovationCardsGridProps) {
  const [certModal, setCertModal] = useState<{
    open: boolean;
    src: string;
    title: string;
  }>({ open: false, src: "", title: "" });

  return (
    <>
      <Grid container spacing={{ xs: 3, md: 2 }}>
        {items.map((item) => {
          const isGranted = item.filterType === "Granted";

          return (

            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
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
                  mx: "auto"
                }}>
                
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 220, sm: 250, md: 180 },
                    backgroundColor: "#fff"
                  }}>
                  
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center center"
                    }} />
                  

                  <Typography
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,

                      fontSize: { xs: FONT_SIZE.tiny, lg: FONT_SIZE.caption },
                      fontWeight: FONT_WEIGHT.bold,
                      color: "#7B53A1",
                      backgroundColor: "#FFFFFFF2",
                      px: "8px",
                      py: "3px",
                      borderRadius: "999px"
                    }}>
                    
                    {item.category}
                  </Typography>

                  <Box
                    sx={{
                      position: "absolute",
                      top: isGranted ? "12px" : "8.15px",
                      right: isGranted ? "13.6px" : "9px",
                      width: isGranted ? "82.88px" : "97px",
                      height: isGranted ? "23.99px" : "28px",
                      borderRadius: "26843500px",
                      backgroundColor: "#1B0F2A",
                      px: "8px",
                      py: "4px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: isGranted ? "flex-start" : "center",
                      gap: "4px",
                      boxSizing: "border-box"
                    }}>
                    
                    {isGranted ?
                    <CheckIcon sx={{ color: "#F9A51E", fontSize: FONT_SIZE.bodySmall, fontWeight: "bold" }} /> :

                    <HourglassEmptyIcon sx={{ color: "#FFFFFF", fontSize: FONT_SIZE.bodyLarge }} />
                    }
                    <Typography
                      sx={{
                        fontFamily: FONT_FAMILY.accent,
                        color: isGranted ? "#F9A51E" : "#FFFFFF",
                        fontSize: isGranted ? FONT_SIZE.caption : FONT_SIZE.bodySmall,
                        fontWeight: isGranted ? FONT_WEIGHT.bold : FONT_WEIGHT.medium,
                        lineHeight: isGranted ? "16px" : "20px",
                        whiteSpace: "nowrap"
                      }}>
                      
                      {item.filterType}
                    </Typography>
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
                    gap: "13px"
                  }}>
                  
                  <Box
                    sx={{
                      height: "70.2px",
                      flexShrink: 0
                    }}>
                    
                    <Typography
                      sx={{
                        fontWeight: FONT_WEIGHT.semiBold,

                        fontSize: { xs: FONT_SIZE.body, lg: FONT_SIZE.lead },
                        lineHeight: { xs: "22px", lg: "23.4px" },
                        letterSpacing: "-0.45px",
                        color: "#171717",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}>
                      
                      {item.title}
                    </Typography>
                  </Box>

                  {item.award &&
                  <Box
                    sx={{
                      height: "132px",
                      backgroundColor: "#FFF5E6",
                      border: "0.8px solid #F9A51E4D",
                      borderRadius: "14px",
                      px: "12.8px",
                      py: "12.8px",
                      boxSizing: "border-box",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      flexShrink: 0
                    }}>
                    
                      <Box
                      sx={{
                        height: "22px",
                        mb: "8px",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0
                      }}>
                      
                        {item.awardIcon &&
                      <Image
                        src={item.awardIcon}
                        alt="Award"
                        width={80}
                        height={18}
                        style={{
                          objectFit: "contain"
                        }} />

                      }
                      </Box>

                      <Typography
                      sx={{
                        fontSize: { xs: FONT_SIZE.caption, lg: "13.5px" },
                        lineHeight: { xs: "18px", lg: "19.25px" },
                        color: "#262626",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}>
                      
                        {item.award}
                      </Typography>
                    </Box>
                  }

                  <Stack direction="row" justifyContent="space-between" mt="auto">
                    <Box
                      component="a"
                      href={item.patentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "4px",
                        textDecoration: "none"
                      }}>
                      
                      <Typography
                        sx={{

                          fontSize: { xs: FONT_SIZE.small, lg: FONT_SIZE.bodySmall },
                          lineHeight: { xs: "16px", lg: "20px" },
                          color: "#7B53A1"
                        }}>
                        
                        Google
                        <br />
                        Patents
                      </Typography>

                      <NorthEastIcon
                        sx={{
                          fontSize: { xs: 14, lg: 16 },
                          color: "#7B53A1",
                          mb: "2px"
                        }} />
                      
                    </Box>

                    <Box
                      onClick={() => {
                        if (item.certificateLink !== "#") {
                          setCertModal({
                            open: true,
                            src: item.certificateLink,
                            title: item.title
                          });
                        }
                      }}
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "4px",
                        cursor:
                        item.certificateLink !== "#" ? "pointer" : "default",
                        opacity: item.certificateLink !== "#" ? 1 : 0.4
                      }}>
                      
                      <Typography
                        sx={{

                          fontSize: { xs: FONT_SIZE.small, lg: FONT_SIZE.bodySmall },
                          lineHeight: { xs: "16px", lg: "20px" },
                          color: "#7B53A1"
                        }}>
                        
                        Patent
                        <br />
                        Certificate
                      </Typography>

                      <NorthEastIcon
                        sx={{
                          fontSize: { xs: 14, lg: 16 },
                          color: "#7B53A1",
                          mb: "2px"
                        }} />
                      
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>);

        })}
      </Grid>
      
     
      <Dialog
        open={certModal.open}
        disableScrollLock
        onClose={() => setCertModal({ open: false, src: "", title: "" })}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden"
            }
          }
        }}>
        
        <IconButton
          onClick={() => setCertModal({ open: false, src: "", title: "" })}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 36,
            height: 36,
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            zIndex: 10,
            "&:hover": { backgroundColor: "#f5f5f5" }
          }}>
          
          <Close sx={{ fontSize: FONT_SIZE.leadLarge, color: "red" }} /> 
        </IconButton>
        <Box sx={{ position: "relative", width: "100%", display: "flex" }}>
          {certModal.src &&
          <img
            src={certModal.src}
            alt={certModal.title}
            style={{ width: "100%", height: "auto", display: "block" }} />

          }
        </Box>
      </Dialog>
    </>);

}
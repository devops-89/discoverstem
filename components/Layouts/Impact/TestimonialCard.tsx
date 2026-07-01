"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Pagination,
  PaginationItem,
  Typography } from
"@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import { SuccessStoryCard } from "@/utils/Types";
import { successStoriesData } from "@/assets/Generic-data";
import { Close } from "@mui/icons-material";

const ITEMS_PER_PAGE = 6;

export default function SuccessStoriesCards() {
  const [selectedStory, setSelectedStory] =
  useState<SuccessStoryCard | null>(null);
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(successStoriesData.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = successStoriesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Container
      id="success-stories-cards"
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: "50px", md: "60px", lg: "80px" }
      }}>
      
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: "30px",
          alignItems: "stretch"
        }}>
        
        {paginatedData.map((item, index) => {
          const isRightCard = index % 2 !== 0;

          return (
            <Box
              key={item.id}
              sx={{
                height: { xs: "auto", md: "315px" },
                backgroundColor: "#F5F5F5",
                borderRadius: "29px",
                overflow: "hidden",
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: isRightCard ? "row-reverse" : "row"
                },
                boxShadow: "0px 14px 40px rgba(123, 83, 161, 0.08)"
              }}>
              
              <Box
                sx={{
                  width: { xs: "100%", sm: "190px" },
                  height: { xs: "210px", sm: "210px" },
                  flexShrink: 0,
                  p: "12px",
                  pb: 0
                }}>
                
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    overflow: "hidden"
                  }}>
                  
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill sizes="100vw"
                    style={{ objectFit: "cover" }} />
                  
                </Box>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  height: "100%",
                  p: "20px",
                  display: "flex",
                  flexDirection: "column"
                }}>
                
                <Box sx={{ height: { md: "200px" }, overflow: "hidden" }}>
                  <Typography
                    sx={{
                      fontFamily: FONT_FAMILY.body,
                      fontWeight: FONT_WEIGHT.semiBold,
                      fontSize: { xs: FONT_SIZE.lead, md: FONT_SIZE.leadLarge, lg: "22.4px" },
                      lineHeight: { xs: LINE_HEIGHT.medium, md: LINE_HEIGHT.mediumLarge, lg: LINE_HEIGHT.baseLarge },
                      letterSpacing: "-0.56px",
                      color: "#171717",
                      mb: "8px"
                    }}>
                    
                    {item.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: FONT_FAMILY.body,
                      fontWeight: FONT_WEIGHT.regular,
                      fontSize: { xs: FONT_SIZE.small, lg: FONT_SIZE.bodySmall },
                      lineHeight: { xs: LINE_HEIGHT.extraSmall, lg: LINE_HEIGHT.lessSmall },
                      letterSpacing: "0px",
                      whiteSpace: "pre-line",
                      color: "#525252",
                      mb: "12px"
                    }}>
                    
                    {item.designation}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: FONT_FAMILY.body,
                      fontWeight: FONT_WEIGHT.regular,
                      fontSize: { xs: FONT_SIZE.bodySmall, md: FONT_SIZE.body, lg: FONT_SIZE.bodyLarge },
                      lineHeight: { xs: LINE_HEIGHT.medium, md: "28px", lg: LINE_HEIGHT.extraLarge },
                      letterSpacing: "-0.03em",
                      color: "#777777",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}>
                    
                    {item.description}
                  </Typography>
                </Box>

                <Box sx={{ pt: "14px" }}>
                  <Button
                    onClick={() => setSelectedStory(item)}
                    sx={{
                      width: { xs: "130px", lg: "150px" },
                      height: { xs: "40px", lg: "46px" },
                      backgroundColor: "#7B53A1",
                      borderRadius: "30px",
                      color: "#FFFFFF",
                      textTransform: "none",
                      px: "8px",
                      pl: "18px",
                      justifyContent: "space-between",
                      fontFamily: FONT_FAMILY.body,
                      fontWeight: FONT_WEIGHT.regular,
                      fontSize: FONT_SIZE.bodySmall,
                      lineHeight: LINE_HEIGHT.small,
                      letterSpacing: "-0.01em",
                      "&:hover": {
                        backgroundColor: "#7B53A1"
                      }
                    }}>
                    
                    Read More

                    <Box
                      sx={{
                        width: { xs: "28px", lg: "34px" },
                        height: { xs: "28px", lg: "34px" },
                        borderRadius: "50%",
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#111827"
                      }}>
                      
                      <ArrowOutwardIcon sx={{ fontSize: FONT_SIZE.bodyXLarge }} />
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>);

        })}
      </Box>

      {pageCount > 1 &&
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => {
            setPage(value);
            const section = document.getElementById("success-stories-cards");
            if (section) {
              const y = section.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: "smooth" });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          renderItem={(item) => <PaginationItem {...item} />}
          sx={{
            "& .MuiPagination-ul": {
              gap: { xs: "0px", sm: "8px" },
              flexWrap: "nowrap",
              justifyContent: "center"
            },
            "& .MuiPaginationItem-root": {
              width: { xs: "24px", sm: "40px" },
              height: { xs: "24px", sm: "40px" },
              minWidth: { xs: "24px", sm: "40px" },
              fontSize: { xs: FONT_SIZE.footnote, sm: FONT_SIZE.bodySmall },
              padding: 0,
              margin: { xs: "0 2px", sm: "0 4px" },
              borderRadius: "50%",
              fontWeight: FONT_WEIGHT.medium,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E5E7EB",
              color: "#374151"
            },
            "& .MuiPaginationItem-icon": {
              fontSize: { xs: FONT_SIZE.bodyLarge, sm: FONT_SIZE.leadLarge }
            },
            "& .MuiPaginationItem-ellipsis": {
              backgroundColor: "transparent",
              lineHeight: { xs: LINE_HEIGHT.medium, sm: "40px" }
            },
            "& .Mui-selected": {
              backgroundColor: "#7B53A1 !important",
              color: "#fff"
            }
          }} />
        
        </Box>
      }

      <Dialog
        open={Boolean(selectedStory)}
        disableScrollLock
        onClose={() => setSelectedStory(null)}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: "29px",
              backgroundColor: "#F5F5F5",
              overflow: "hidden"
            }
          }
        }}>
        
        <DialogContent
          sx={{
            p: { xs: "24px", sm: "36px" },
            position: "relative"
          }}>
          
          <IconButton
            onClick={() => setSelectedStory(null)}
            sx={{
              position: "absolute",
              right: "18px",
              top: "18px",
              zIndex: 2,
              backgroundColor: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#FFFFFF"
              }
            }}>
            
           <Close sx={{ fontSize: FONT_SIZE.leadLarge, color: "red" }} /> 
          </IconButton>

          {selectedStory &&
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "30px",
              alignItems: "flex-start"
            }}>
            
              <Box
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "190px" },
                height: { xs: "210px", sm: "210px" },
                borderRadius: "20px",
                overflow: "hidden",
                flexShrink: 0
              }}>
              
                <Image
                src={selectedStory.image}
                alt={selectedStory.name}
                fill sizes="100vw"
                style={{ objectFit: "cover" }} />
              
              </Box>

              <Box sx={{ flex: 1, pr: { xs: 0, sm: "45px" } }}>
                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: FONT_WEIGHT.semiBold,
                  fontSize: { xs: FONT_SIZE.lead, sm: FONT_SIZE.leadLarge, lg: "22.4px" },
                  lineHeight: { xs: LINE_HEIGHT.medium, sm: LINE_HEIGHT.mediumLarge, lg: LINE_HEIGHT.baseLarge },
                  letterSpacing: "-0.56px",
                  color: "#171717",
                  mb: "12px"
                }}>
                
                  {selectedStory.name}
                </Typography>

                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: FONT_WEIGHT.regular,
                  fontSize: { xs: FONT_SIZE.small, lg: FONT_SIZE.bodySmall },
                  lineHeight: { xs: LINE_HEIGHT.extraSmall, lg: LINE_HEIGHT.lessSmall },
                  letterSpacing: "0px",
                  whiteSpace: "pre-line",
                  color: "#525252",
                  mb: "24px"
                }}>
                
                  {selectedStory.designation}
                </Typography>

                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: FONT_WEIGHT.regular,
                  fontSize: { xs: FONT_SIZE.bodySmall, sm: FONT_SIZE.body, lg: FONT_SIZE.bodyLarge },
                  lineHeight: { xs: LINE_HEIGHT.medium, sm: "28px", lg: LINE_HEIGHT.extraLarge },
                  letterSpacing: "-0.03em",
                  whiteSpace: "pre-line",
                  color: "#777777"
                }}>
                
                  {selectedStory.description}
                </Typography>
              </Box>
            </Box>
          }
        </DialogContent>
      </Dialog>
    </Container>);

}
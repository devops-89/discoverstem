"use client";

import {
  innovationCardsData,
  innovationFilters,
} from "@/assets/Generic-data";
import { InnovationFilter } from "@/utils/Types";
import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function InnovationCardGrid() {
  const [filter, setFilter] = useState<InnovationFilter>("All Statuses");
  const [search, setSearch] = useState("");

  const filteredItems = innovationCardsData.filter((item) => {
    const matchFilter =
      filter === "All Statuses" || item.filterType === filter;

    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.award.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1220px",
        mx: "auto",
        px: { xs: 2, md: 3, lg: 0 },
        py: { xs: 5, md: 8 },
      }}
    >
      <Box
        sx={{
          border: "1px solid #E5E5E5",
          borderRadius: "999px",
          p: "12px",
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          flexWrap: "wrap",
          mb: 2,
          boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        {innovationFilters.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => setFilter(item)}
            sx={{
              height: "40px",
              borderRadius: "999px",
              fontWeight: 600,
              backgroundColor: filter === item ? "#7B53A1" : "#F5F5F5",
              color: filter === item ? "#fff" : "#171717",
            }}
          />
        ))}

        <TextField
          size="small"
          placeholder="Search innovations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: { xs: "100%", md: "320px" },
            ml: { xs: 0, md: "auto" },
            "& .MuiOutlinedInput-root": {
              height: "44px",
              borderRadius: "999px",
              backgroundColor: "#F5F5F5",
              fontSize: "14px",
            },
          }}
        />
      </Box>

      <Typography sx={{ fontSize: "14px", color: "#737373", mb: 8 }}>
        Showing <b>{filteredItems.length}</b> of {innovationCardsData.length}{" "}
        students
      </Typography>

      <Grid container spacing={{ xs: 3, md: 2, lg: 3 }}>
        {filteredItems.map((item) => {
          const isGranted = item.filterType === "Granted";

          return (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", sm: 380, md: 290 },
                  minHeight: "411.14px",
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

                  {/* Status image badge */}
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
                          style={{
                            objectFit: "contain",
                          }}
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
                      component="a"
                      href={item.certificateLink}
                      target="_blank"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#7B53A1",
                        textDecoration: "none",
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
    </Container>
  );
}
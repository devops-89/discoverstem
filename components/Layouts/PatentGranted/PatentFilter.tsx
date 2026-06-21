"use client";

import { patentsData } from "@/assets/Generic-data";
import { PatentFilterType } from "@/utils/Types";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { US, ZA } from "country-flag-icons/react/3x2";
import { useState } from "react";

const ROWS_PER_PAGE = 6;

export default function PatentFilterSection() {
  const [filter, setFilter] = useState<PatentFilterType>("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredPatents = patentsData.filter((item) => {
    const matchFilter = filter === "All" || item.type === filter;
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.inventors.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  const pageCount = Math.ceil(filteredPatents.length / ROWS_PER_PAGE);

  const paginatedPatents = filteredPatents.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  const renderFlag = (type: "US" | "SA") => {
    const Flag = type === "US" ? US : ZA;

    return (
      <Box
        sx={{
          width: "16px",
          height: "12px",
          display: "flex",
          flexShrink: 0,
        }}
      >
        <Flag
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </Box>
    );
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1155px",
        mx: "auto",
        px: { xs: 3, md: 4, lg: 0 },
        pt: { xs: 7, md: 10 },
        pb: { xs: 8, md: 14 },
      }}
    >
      <Box
        sx={{
          border: "1px solid #eee",
          borderRadius: "30px",
          p: "8px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 2,
          mb: 2,
          position: { xs: "sticky", md: "static" },
          top: { xs: "10px", md: "auto" },
          zIndex: { xs: 10, md: "auto" },
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {(["All", "US", "SA"] as PatentFilterType[]).map((item) => (
            <Chip
              key={item}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {item === "US" && renderFlag("US")}
                  {item === "SA" && renderFlag("SA")}
                  <span>
                    {item === "All"
                      ? "All Patents"
                      : item === "US"
                      ? "US"
                      : "SA"}
                  </span>
                </Box>
              }
              onClick={() => {
                setFilter(item);
                setPage(1);
              }}
              sx={{
                backgroundColor: filter === item ? "#7B53A1" : "#fff",
                color: filter === item ? "#fff" : "#111827",
                fontWeight: 600,
              }}
            />
          ))}
        </Box>

        <TextField
          size="small"
          placeholder="Search by title, inventor, or patent number..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          sx={{
            width: { xs: "100%", md: "420px" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "24px",
              backgroundColor: "#F9FAFB",
              // 🔥 FIX: Decreased input text size heavily for small screens
              fontSize: { xs: "11px", md: "16px" },
            },
            "& .MuiInputBase-input::placeholder": {
              // 🔥 FIX: Decreased placeholder size for small screens
              fontSize: { xs: "11px", md: "16px" },
              opacity: 1,
            },
          }}
        />
      </Box>

      <Typography sx={{ fontSize: "12px", color: "#777", mb: 6 }}>
        Showing {filteredPatents.length} of {patentsData.length} patents · 221+ named inventors
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: { xs: 3, md: 4 },
        }}
      >
        {paginatedPatents.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "450px", md: "351px" },
              minHeight: { xs: "auto", md: "540px" },
              borderRadius: "16px",
              border: "0.8px solid #E5E7EB",
              boxShadow: "none",
              mx: "auto",
            }}
          >
            <CardContent
              sx={{
                p: "24px 24px 24px 12px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                height: "100%",
                "&:last-child": {
                  pb: "24px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Chip
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {renderFlag(item.type)}
                      <span>
                        {item.type === "US" ? "US Patent" : "SA Patent"}
                      </span>
                    </Box>
                  }
                  size="small"
                  sx={{
                    height: "24px",
                    borderRadius: "26843500px",
                    px: "4px",
                    backgroundColor:
                      item.type === "US" ? "#1B0F2A" : "#F59E0B",
                    color: item.type === "US" ? "#fff" : "#111827",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    "& .MuiChip-label": {
                      px: "12px",
                    },
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#737373",
                  }}
                >
                  #{item.id}
                </Typography>
              </Box>

              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: { xs: "190px", md: "202px" },
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <Box
                sx={{
                  minHeight: "90px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    // 🔥 FIX: Decreased title size specifically for 'md' (1024px), preserved 18px for 'lg'
                    fontSize: { xs: "15px", sm: "16px", md: "15px", lg: "18px" },
                    lineHeight: { xs: "20px", sm: "22px", md: "20px", lg: "23.4px" },
                    letterSpacing: "-0.45px",
                    color: "#111827",
                    mb: "12px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    mt: "auto",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { xs: "10px", md: "12px" },
                    lineHeight: { xs: "14px", md: "16px" },
                    color: "#737373",
                    textTransform: "uppercase",
                  }}
                >
                  Inventors · {item.inventorCount} Students
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  // 🔥 FIX: Decreased description size specifically for 'md', preserved 14px for 'lg'
                  fontSize: { xs: "12px", sm: "13px", md: "12px", lg: "14px" },
                  lineHeight: { xs: "18px", sm: "20px", md: "18px", lg: "22.75px" },
                  color: "#374151",
                }}
              >
                {item.inventors}
              </Typography>

              <Box
                sx={{
                  mt: "auto",
                  display: "flex",
                  gap: { xs: "12px", sm: "16px", md: "46px" },
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: { xs: "space-between", md: "flex-start" },
                  flexWrap: "nowrap",
                }}
              >
                <Box
                  component="a"
                  href={item.googlePatentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "#7B53A1",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      // 🔥 FIX: Decreased button size specifically for 'md', preserved 14px for 'lg'
                      fontSize: { xs: "10px", sm: "11px", md: "11px", lg: "14px" },
                      lineHeight: "20px",
                      color: "#7B53A1",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Google Patents
                  </Typography>

                  <NorthEastIcon sx={{ fontSize: { xs: "12px", sm: "14px", md: "14px", lg: "16px" }, color: "#7B53A1" }} />
                </Box>

                <Box
                  component="a"
                  href={item.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "#7B53A1",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      // 🔥 FIX: Decreased button size specifically for 'md', preserved 14px for 'lg'
                      fontSize: { xs: "10px", sm: "11px", md: "11px", lg: "14px" },
                      lineHeight: "20px",
                      color: "#7B53A1",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Patent Certificate
                  </Typography>

                  <NorthEastIcon sx={{ fontSize: { xs: "12px", sm: "14px", md: "14px", lg: "16px" }, color: "#7B53A1" }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {pageCount > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={(_, value) => setPage(value)}
            sx={{
              // 🔥 FIX: Shrunk the circles and text on mobile so they easily fit in a single row without wrapping!
              "& .MuiPaginationItem-root": {
                fontWeight: 600,
                minWidth: { xs: "26px", sm: "32px" },
                height: { xs: "26px", sm: "32px" },
                fontSize: { xs: "12px", sm: "14px" },
                margin: { xs: "0 2px", sm: "0 3px" },
              },
              "& .Mui-selected": {
                backgroundColor: "#7B53A1 !important",
                color: "#fff",
              },
              "& ul": {
                // 🔥 FIX: Forced 'nowrap' so it is guaranteed to stay on one row!
                flexWrap: "nowrap",
                justifyContent: "center",
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
}
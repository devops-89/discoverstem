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
  TextField,
  Typography,
} from "@mui/material";
import { US, ZA } from "country-flag-icons/react/3x2";
import { useState } from "react";

export default function PatentFilterSection() {
  const [filter, setFilter] = useState<PatentFilterType>("All");
  const [search, setSearch] = useState("");

  const filteredPatents = patentsData.filter((item) => {
    const matchFilter = filter === "All" || item.type === filter;
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.inventors.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

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
        px: { xs: 3, md: 0 },
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
              onClick={() => setFilter(item)}
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
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: { xs: "100%", md: "420px" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "24px",
              backgroundColor: "#F9FAFB",
            },
          }}
        />
      </Box>

      <Typography sx={{ fontSize: "12px", color: "#777", mb: 6 }}>
        Showing {filteredPatents.length} of {patentsData.length} patents
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
        {filteredPatents.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: "351px" },
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
                    backgroundColor: item.type === "US" ? "#1B0F2A" : "#F59E0B",
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

              <Typography
                sx={{
                  width: "100%",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "23.4px",
                  letterSpacing: "-0.45px",
                  color: "#111827",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#737373",
                  textTransform: "uppercase",
                }}
              >
                Inventors · {item.inventorCount} Students
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "22.75px",
                  color: "#374151",
                }}
              >
                {item.inventors}
              </Typography>

              <Box
                sx={{
                  mt: "auto",
                  display: "flex",
                  gap: { xs: 2, md: "46px" },
                  flexWrap: "wrap",
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
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#7B53A1",
                    }}
                  >
                    Google Patents
                  </Typography>

                  <NorthEastIcon
                    sx={{
                      fontSize: "16px",
                      color: "#7B53A1",
                    }}
                  />
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
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#7B53A1",
                    }}
                  >
                    Patent Certificate
                  </Typography>

                  <NorthEastIcon
                    sx={{
                      fontSize: "16px",
                      color: "#7B53A1",
                    }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
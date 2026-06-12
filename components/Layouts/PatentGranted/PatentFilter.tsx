"use client";

import { patentsData } from "@/assets/Generic-data";
import { PatentFilterType } from "@/utils/Types";
import { Close } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Dialog,
  IconButton,
  Pagination,
  PaginationItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ROWS_PER_PAGE = 6;

export default function PatentFilterSection() {
  const [filter, setFilter] = useState<PatentFilterType>("All");
  const [search, setSearch] = useState("");
  const [certificateOpen, setCertificateOpen] = useState(false);
  const [certificateImage, setCertificateImage] = useState("");
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
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {(["All", "US", "SA"] as PatentFilterType[]).map((item) => (
            <Chip
              key={item}
              label={
                item === "All"
                  ? "All Patents"
                  : item === "US"
                  ? "US"
                  : "SA"
              }
              onClick={() => { setFilter(item); setPage(1); }}
              sx={{
                height: 40,
                fontSize: "14px",
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
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
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
        {paginatedPatents.map((item) => (
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
                  label={item.type === "US" ? "US Patent" : "SA Patent"}
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
                  Patent No. {item.googlePatentLink?.split("/patent/")[1]?.replace("/en", "")}
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
                <Typography
                  component="a"
                  href={item.googlePatentLink}
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#7B53A1",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Google Patents ↗
                </Typography>

                <Typography
                  onClick={() => {
                    setCertificateImage(item.image);
                    setCertificateOpen(true);
                  }}
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#7B53A1",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Patent Certificate ↗
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => setPage(value)}
          renderItem={(item) => <PaginationItem {...item} />}
          sx={{
            "& .MuiPagination-ul": { gap: "8px" },
            "& .MuiPaginationItem-root": {
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              fontSize: "14px",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E5E7EB",
              color: "#374151",
            },
            "& .MuiPaginationItem-ellipsis": {
              backgroundColor: "transparent",
              lineHeight: "40px",
            },
            "& .Mui-selected": {
              backgroundColor: "#7B53A1 !important",
              color: "#fff",
            },
          }}
        />
      </Box>
    <Dialog
      open={certificateOpen}
      onClose={() => setCertificateOpen(false)}
      maxWidth="lg"
      slotProps={{
        paper:{
        sx: {
          bgcolor: "transparent",
          boxShadow: "none",
          overflow: "visible",
          position: "relative",
        },
      }
      }}
    >
      <IconButton
        onClick={() => setCertificateOpen(false)}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 10,
          color: "#fff",
          bgcolor: "rgba(0,0,0,0.5)",
          "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
        }}
      >
        <Close />
      </IconButton>
      <Box
        component="img"
        src={certificateImage}
        alt="Patent Certificate"
        sx={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />
    </Dialog>
    </Container>
  );
}
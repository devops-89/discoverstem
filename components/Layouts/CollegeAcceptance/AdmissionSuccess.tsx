"use client";

import {
  admissionFilters,
  admissionStudentsData,
} from "@/assets/Generic-data";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Pagination,
  PaginationItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ROWS_PER_PAGE = 8;

export default function AdmissionSuccessSection() {
  const [batchFilter, setBatchFilter] = useState("All Batches");
  const [programFilter, setProgramFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredStudents = admissionStudentsData.filter((student) => {
    const batchMatch =
      batchFilter === "All Batches" ||
      student.batch === batchFilter;

    const programMatch =
      programFilter === "All" ||
      student.program === programFilter;

    const searchMatch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.school.toLowerCase().includes(search.toLowerCase()) ||
      student.acceptedTo.toLowerCase().includes(search.toLowerCase());

    return batchMatch && programMatch && searchMatch;
  });

  const pageCount = Math.ceil(filteredStudents.length / ROWS_PER_PAGE);
  const paginatedStudents = filteredStudents.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1205px",
        mx: "auto",
        px: { xs: 2, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "32px", md: "48px" },
          lineHeight: { xs: "40px", md: "58px" },
          color: "#171717",
          mb: 6,
        }}
      >
        The 2025 admissions cycle
      </Typography>

      {/* FILTER BAR */}
      <Box
        sx={{
          border: "1px solid #E5E5E5",
          borderRadius: "999px",
          p: "12px",
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        {admissionFilters.batchFilters.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => { setBatchFilter(item); setPage(1); }}
            sx={{
              background:
                batchFilter === item ? "#7B53A1" : "#F5F5F5",
              color:
                batchFilter === item ? "#fff" : "#171717",
              fontWeight: 600,
            }}
          />
        ))}

        <Box
          sx={{
            width: "1px",
            height: "24px",
            bgcolor: "#E5E5E5",
            display: { xs: "none", md: "block" },
          }}
        />

        {admissionFilters.programFilters.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => { setProgramFilter(item); setPage(1); }}
            sx={{
              background:
                programFilter === item ? "#000" : "#F5F5F5",
              color:
                programFilter === item ? "#fff" : "#171717",
              fontWeight: 600,
            }}
          />
        ))}

        <TextField
          size="small"
          placeholder="Search by student or school..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          sx={{
            ml: "auto",
            width: { xs: "100%", md: "280px" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "999px",
            },
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: "14px",
          color: "#737373",
          mb: 5,
        }}
      >
        Showing <strong>{filteredStudents.length}</strong> of{" "}
        {admissionStudentsData.length} students
      </Typography>

      {/* STUDENT CARDS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          },
          gap: 3,
        }}
      >
        {paginatedStudents.map((student) => (
          <Box
            key={student.id}
            sx={{
              border: "1px solid #E5E5E5",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#fff",
            }}
          >
            {/* TOP AREA */}
            <Box
              sx={{
                height: "128px",
                position: "relative",
                backgroundImage: `url(${student.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Chip
                label={student.program}
                size="small"
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  bgcolor: "#FFFFFFF2",
                  color: "#7B53A1",
                  fontWeight: 700,
                }}
              />

              <Avatar
                sx={{
                  width: "80px",
                  height: "80px",
                  position: "absolute",
                  left: 24,
                  bottom: -40,
                  border: "3px solid #fff",
                  bgcolor: "#7B53A1",
                  fontWeight: 700,
                  fontSize: "20px",
                  boxShadow:
                    "0px 4px 6px -4px #0000001A,0px 10px 15px -3px #0000001A",
                }}
              >
                {student.initials}
              </Avatar>
            </Box>

            <Box sx={{ p: 3, pt: 6 }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#171717",
                }}
              >
                {student.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#737373",
                  textTransform: "uppercase",
                  mt: 0.5,
                  mb: 3,
                }}
              >
                {student.school}
              </Typography>

              <Box
                sx={{
                  borderTop: "1px solid #E5E5E5",
                  pt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#737373",
                    textTransform: "uppercase",
                    mb: 1,
                  }}
                >
                  Accepted To
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: "#7B53A1",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {student.acceptedTo}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
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
    </Container>
  );
}
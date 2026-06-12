"use client";

import {
  admissionFilters,
  admissionStudentsData,
} from "@/assets/Generic-data";
import { Box, Chip, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const getProgramColor = (program: string) => {
  switch (program) {
    case "ILM":
      return "#7B53A1";
    case "DIP":
      return "#EE4823";
    case "X-AILM":
      return "#F9A51E";
    case "DIP & DEP":
      return "#619040";
    default:
      return "#7B53A1";
  }
};

export default function AdmissionSuccessSection() {
  const [batchFilter, setBatchFilter] = useState("All Batches");
  const [programFilter, setProgramFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredStudents = admissionStudentsData.filter((student) => {
    const batchMatch =
      batchFilter === "All Batches" || student.batch === batchFilter;

    const programMatch =
      programFilter === "All" || student.program === programFilter;

    const searchMatch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.school.toLowerCase().includes(search.toLowerCase()) ||
      student.acceptedTo.toLowerCase().includes(search.toLowerCase());

    return batchMatch && programMatch && searchMatch;
  });

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
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "32px", md: "48px" },
          lineHeight: { xs: "40px", md: "58px" },
          color: "#171717",
          mb: 6,
        }}
      >
        The 2025 admissions cycle
      </Typography>

      <Box
        sx={{
          border: "1px solid #E5E5E5",
          borderRadius: { xs: "24px", md: "999px" },
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
            onClick={() => setBatchFilter(item)}
            sx={{
              background: batchFilter === item ? "#7B53A1" : "#F5F5F5",
              color: batchFilter === item ? "#fff" : "#171717",
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
            onClick={() => setProgramFilter(item)}
            sx={{
              background: programFilter === item ? "#000" : "#F5F5F5",
              color: programFilter === item ? "#fff" : "#171717",
              fontWeight: 600,
            }}
          />
        ))}

        <TextField
          size="small"
          placeholder="Search by student or school..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            ml: { xs: 0, md: "auto" },
            width: { xs: "100%", md: "280px" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "999px",
            },
          }}
        />
      </Box>

      <Typography sx={{ fontSize: "14px", color: "#737373", mb: 5 }}>
        Showing <strong>{filteredStudents.length}</strong> of{" "}
        {admissionStudentsData.length} students
      </Typography>

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
        {filteredStudents.map((student) => {
          const programColor = getProgramColor(student.program);

          return (
            <Box
              key={student.id}
              sx={{
                width: "100%",
                maxWidth: "290px",
                height: "390px",
                mx: "auto",
                background: "#FFFFFF",
                border: "0.8px solid rgba(0, 0, 0, 0.05)",
                boxShadow:
                  "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: "128px",
                  bgcolor: "#C4C4C4",
                  position: "relative",
                }}
              >
                <Chip
                  label={student.program}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    height: "24px",
                    bgcolor: "rgba(255,255,255,0.95)",
                    color: programColor,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    borderRadius: "999px",
                  }}
                />

                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    bgcolor: "#FFFFFF",
                    border: "4px solid #FFFFFF",
                    position: "absolute",
                    left: "24px",
                    top: "88px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    color: programColor,
                    boxShadow:
                      "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
                  }}
                >
                  {student.initials}
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  height: "262px",
                  px: "24.8px",
                  pt: "48px",
                  pb: "20px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "27px",
                    letterSpacing: "-0.45px",
                    color: "#171717",
                  }}
                >
                  {student.name}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: "#737373",
                    mt: "4px",
                  }}
                >
                  {student.school}
                </Typography>

                <Box
                  sx={{
                    position: "absolute",
                    left: "24.8px",
                    right: "24.8px",
                    top: "145px",
                    pt: "16.8px",
                    borderTop: "0.8px solid rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "16px",
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                      color: "#737373",
                      mb: "8px",
                    }}
                  >
                    Accepted To
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "999px",
                        bgcolor: programColor,
                        mt: "7px",
                        flexShrink: 0,
                      }}
                    />

                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#262626",
                      }}
                    >
                      {student.acceptedTo}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
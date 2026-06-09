"use client";

import { patentFacesData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import PatentFacesFilter from "./PatentFacesFilter";

export default function PatentFacesSection() {
  const [search, setSearch] = useState("");

  const filteredStudents = patentFacesData.students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 5, md: 8 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "1507.69px" },
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            width: { xs: "100%", md: "671px" },
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "32px", md: "48px" },
            lineHeight: { xs: "40px", md: "36.8px" },
            letterSpacing: "-0.8px",
            color: "#171717",
            mb: { xs: 4, md: "35px" },
          }}
        >
          {patentFacesData.title}
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { xs: "stretch", sm: "flex-end" },
            mb: { xs: 4, md: "70px" },
          }}
        >
          <PatentFacesFilter
            search={search}
            setSearch={setSearch}
            placeholder={patentFacesData.searchPlaceholder}
          />
        </Box>

        {/* Cards Grid */}
        <Box
          sx={{
            width: "100%",
            borderRadius: "16px",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(5, 1fr)",
            },
            gap: {
              xs: "20px",
              md: "23px",
            },
          }}
        >
          {filteredStudents.map((student) => (
            <Box
              key={student.id}
              sx={{
                width: "100%",
                maxWidth: "213.86px",
                height: "309.43px",
                borderRadius: "16px",
                border: "0.8px solid #0000000D",
                backgroundColor: "#FAFAFA",
                overflow: "hidden",
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "234px",
                  backgroundColor: "#C4C4C4",
                }}
              >
                {/* {student.image && (
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )} */}

                {student.tag && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      minWidth: "81.09px",
                      height: "19px",
                      borderRadius: "999px",
                      backgroundColor: "#FFFFFFE5",
                      px: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: "10px",
                        lineHeight: "15px",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        color: "#262626",
                      }}
                    >
                      {student.tag}
                    </Typography>
                  </Box>
                )}
              </Box>

              <Box
                sx={{
                  height: "73.99px",
                  px: "16px",
                  pt: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "22px",
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
                    color: "#737373",
                  }}
                >
                  {student.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
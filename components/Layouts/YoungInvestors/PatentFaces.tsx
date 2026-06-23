"use client";

import { patentFacesData } from "@/assets/Generic-data";
import { Box, Container, Typography, Pagination, PaginationItem } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import PatentFacesFilter from "./PatentFacesFilter";

export default function PatentFacesSection() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  
  useEffect(() => {
    setPage(1);
  }, [search]);

  const filteredStudents = patentFacesData.students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const currentStudents = filteredStudents.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Container
   
      id="patent-faces-section"
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 5, md: 6, lg: 8 },
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            width: { xs: "100%", lg: "671px" },
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "32px", md: "40px", lg: "48px" },
            lineHeight: { xs: "40px", md: "44px", lg: "36.8px" },
            letterSpacing: "-0.8px",
            color: "#171717",
            mb: { xs: 4, lg: "35px" },
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
            mb: { xs: 4, md: 6, lg: "70px" },
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
              
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: {
              xs: "20px",
              lg: "23px",
            },
            mb: "40px",
          }}
        >
          {currentStudents.map((student) => (
            <Box
              key={student.id}
              sx={{
                width: "100%",
              
                maxWidth: { xs: "280px", sm: "100%", lg: "213.86px" },
                height: { xs: "380px", sm: "340px", lg: "309.43px" },
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
                  
                  height: { xs: "306px", sm: "266px", lg: "234px" },
                  backgroundColor: "#C4C4C4",
                }}
              >
                {student.image && (
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                )}

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

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => {
                
                setPage(value);
                const section = document.getElementById("patent-faces-section");
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
                  justifyContent: "center",
                },
                "& .MuiPaginationItem-root": {
                  width: { xs: "24px", sm: "40px" },
                  height: { xs: "24px", sm: "40px" },
                  minWidth: { xs: "24px", sm: "40px" },
                  fontSize: { xs: "11px", sm: "14px" },
                  padding: 0,
                  margin: { xs: "0 2px", sm: "0 4px" },
                  borderRadius: "50%",
                  fontWeight: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#E5E7EB",
                  color: "#374151",
                },
                "& .MuiPaginationItem-icon": {
                  fontSize: { xs: "16px", sm: "20px" },
                },
                "& .MuiPaginationItem-ellipsis": {
                  backgroundColor: "transparent",
                  lineHeight: { xs: "24px", sm: "40px" },
                },
                "& .Mui-selected": {
                  backgroundColor: "#7B53A1 !important",
                  color: "#fff",
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
}
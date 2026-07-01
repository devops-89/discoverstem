"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import {
  admissionFilters,
  admissionStudentsData } from
"@/assets/Generic-data";
import {
  Box,
  Chip,
  Container,
  Pagination,
  PaginationItem,
  TextField,
  Typography } from
"@mui/material";
import { useState } from "react";

const ROWS_PER_PAGE = 8;

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
  const [page, setPage] = useState(1);

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

  const pageCount = Math.ceil(filteredStudents.length / ROWS_PER_PAGE);

  const paginatedStudents = filteredStudents.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  return (
    <Container
      id="admission-success-section"
      maxWidth={false}
      sx={{
        maxWidth: "1205px",
        mx: "auto",
        px: { xs: 3, md: 4, lg: 0 },
        pt: { xs: 2, md: 10 },
        pb: { xs: 6, md: 10 }
      }}>
      
      <Typography
        sx={{
            textAlign: { xs: "center", md: "left" }, 
          fontFamily: FONT_FAMILY.accent,
          fontWeight: FONT_WEIGHT.bold,
          fontSize: { xs: FONT_SIZE.cardHeading, sm: FONT_SIZE.articleHeading, md: FONT_SIZE.subSectionHeading, lg: FONT_SIZE.pageHeadingSmall },
          lineHeight: { xs: "36px", sm: "40px", md: "44px", lg: "58px" },
          color: "#171717",
          mb: { xs: 4, md: 6 }
        }}>
        
        The 2025 admissions cycle
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column", lg: "row" },
          flexWrap: { xs: "wrap", sm: "nowrap" },
          alignItems: { xs: "center", sm: "stretch", lg: "center" },
          gap: { xs: 2, lg: 2 },
          mb: 3,
          border: "1px solid #E5E5E5",
          borderRadius: { xs: "24px", sm: "24px", lg: "999px" },
          p: "12px",

          backgroundColor: "transparent"
        }}>
        
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,

            flexWrap: { xs: "wrap", sm: "nowrap" },
            overflowX: { xs: "visible", sm: "auto" },
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            border: "none",
            borderRadius: 0,
            p: 0,
            width: { xs: "100%", lg: "auto" }
          }}>
          
          {admissionFilters.batchFilters.map((item) =>
          <Chip
            key={item}
            label={item}
            onClick={() => {
              setBatchFilter(item);
              setPage(1);
            }}
            sx={{
              background: batchFilter === item ? "#7B53A1" : "#F5F5F5",
              color: batchFilter === item ? "#fff" : "#171717",
              fontWeight: FONT_WEIGHT.semiBold,
              fontSize: { xs: FONT_SIZE.caption, sm: FONT_SIZE.footnote, md: FONT_SIZE.bodySmall },
              height: { xs: "28px", md: "32px" },
              flexShrink: 0
            }} />

          )}

          <Box
            sx={{
              width: "1px",
              height: "24px",
              bgcolor: "#E5E5E5",
              display: { xs: "none", md: "block" },
              flexShrink: 0
            }} />
          

          {admissionFilters.programFilters.map((item) =>
          <Chip
            key={item}
            label={item}
            onClick={() => {
              setProgramFilter(item);
              setPage(1);
            }}
            sx={{
              background: programFilter === item ? "#000" : "#F5F5F5",
              color: programFilter === item ? "#fff" : "#171717",
              fontWeight: FONT_WEIGHT.semiBold,
              fontSize: { xs: FONT_SIZE.caption, md: FONT_SIZE.bodySmall },
              height: { xs: "28px", md: "32px" },
              flexShrink: 0
            }} />

          )}
        </Box>
        <TextField
          size="small"
          placeholder="Search by student or school..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          sx={{
            ml: { xs: 0, lg: "auto" },
            width: { xs: "100%", lg: "280px" },
            flexShrink: 0,
            "& .MuiOutlinedInput-root": {
              borderRadius: "999px",
              fontSize: { xs: FONT_SIZE.small, md: FONT_SIZE.bodyLarge }
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: { xs: FONT_SIZE.small, md: FONT_SIZE.bodyLarge }
            }
          }} />
        
      </Box>

      <Typography sx={{ fontSize: FONT_SIZE.bodySmall, color: "#737373", mb: 5 }}>
        Showing <strong>{filteredStudents.length}</strong> of{" "}
        {admissionStudentsData.length} students
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)"
          },
          gap: 3
        }}>
        
        {paginatedStudents.map((student) => {
          const programColor = getProgramColor(student.program);

          return (
            <Box
              key={student.id}
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "290px" },
                height: "390px",
                mx: "auto",
                background: "#FFFFFF",
                border: "0.8px solid rgba(0, 0, 0, 0.05)",
                boxShadow:
                "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                overflow: "hidden"
              }}>
              
              <Box
                sx={{
                  height: "128px",
                  bgcolor: "#C4C4C4",
                  position: "relative",
                  backgroundImage: student.image ?
                  `url(${student.image})` :
                  "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                
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
                    fontFamily: FONT_FAMILY.accent,
                    fontWeight: FONT_WEIGHT.bold,
                    fontSize: FONT_SIZE.caption,
                    borderRadius: "999px"
                  }} />
                

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
                    fontFamily: FONT_FAMILY.accent,
                    fontWeight: FONT_WEIGHT.bold,
                    fontSize: FONT_SIZE.titleLarge,
                    color: programColor,
                    boxShadow:
                    "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)"
                  }}>
                  
                  {student.initials}
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  height: "262px",
                  px: "24.8px",
                  pt: "48px",
                  pb: "20px"
                }}>
                
                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.accent,
                    fontWeight: FONT_WEIGHT.semiBold,
                    fontSize: { xs: FONT_SIZE.bodyLarge, md: FONT_SIZE.lead },
                    lineHeight: { xs: "22px", md: "27px" },
                    letterSpacing: "-0.45px",
                    color: "#171717"
                  }}>
                  
                  {student.name}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.accent,
                    fontWeight: FONT_WEIGHT.regular,
                    fontSize: { xs: FONT_SIZE.footnote, md: FONT_SIZE.caption },
                    lineHeight: LINE_HEIGHT.extraSmall,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: "#737373",
                    mt: "4px"
                  }}>
                  
                  {student.school}
                </Typography>

                <Box
                  sx={{
                    position: "absolute",
                    left: "24.8px",
                    right: "24.8px",
                    top: "145px",
                    pt: "16.8px",
                    borderTop: "0.8px solid rgba(0, 0, 0, 0.05)"
                  }}>
                  
                  <Typography
                    sx={{
                      fontFamily: FONT_FAMILY.accent,
                      fontWeight: FONT_WEIGHT.regular,
                      fontSize: { xs: FONT_SIZE.footnote, md: FONT_SIZE.caption },
                      lineHeight: LINE_HEIGHT.extraSmall,
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                      color: "#737373",
                      mb: "8px"
                    }}>
                    
                    Accepted To
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px"
                    }}>
                    
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "999px",
                        bgcolor: programColor,
                        mt: "7px",
                        flexShrink: 0
                      }} />
                    

                    <Typography
                      sx={{
                        fontFamily: FONT_FAMILY.accent,
                        fontWeight: FONT_WEIGHT.regular,
                        fontSize: { xs: FONT_SIZE.small, md: FONT_SIZE.bodySmall },
                        lineHeight: LINE_HEIGHT.small,
                        color: "#262626"
                      }}>
                      
                      {student.acceptedTo}
                    </Typography>
                  </Box>
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
            const section = document.getElementById("admission-success-section");
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
              gap: { xs: "4px", md: "8px" },
              flexWrap: "nowrap",
              justifyContent: "center"
            },
            "& .MuiPaginationItem-root": {
              width: { xs: "28px", sm: "40px" },
              height: { xs: "28px", sm: "40px" },
              minWidth: { xs: "28px", sm: "40px" },
              fontSize: { xs: FONT_SIZE.caption, sm: FONT_SIZE.bodySmall },
              borderRadius: "50%",
              fontWeight: FONT_WEIGHT.medium,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E5E7EB",
              color: "#374151"
            },
            "& .MuiPaginationItem-ellipsis": {
              backgroundColor: "transparent",
              lineHeight: { xs: "28px", sm: "40px" }
            },
            "& .Mui-selected": {
              backgroundColor: "#7B53A1 !important",
              color: "#fff"
            }
          }} />
        
        </Box>
      }
    </Container>);

}
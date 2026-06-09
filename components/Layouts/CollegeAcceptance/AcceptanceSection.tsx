"use client";

import { Box, Container, Typography } from "@mui/material";

export default function CollegeAcceptanceSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: "70px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "30px", sm: "38px", md: "48px" },
            lineHeight: { xs: "38px", sm: "48px", md: "62px" },
            letterSpacing: "-0.03em",
            color: "#111827",
          }}
        >
          College Acceptance Success Stories
        </Typography>

        <Typography
          sx={{
            width: "100%",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", sm: "18px", md: "22px" },
            lineHeight: { xs: "30px", sm: "34px", md: "43px" },
            letterSpacing: "-0.03em",
            color: "#777777",
            whiteSpace: "pre-line",
          }}
        >
{`DiscoverSTEM has a proven track record of students getting accepted into the World’s top universities like Harvard, Stanford, Duke University, Johns Hopkins, Caltech, New York University, MIT-Massachusetts, Brown University, Rice University, Princeton, University of California – Berkeley, and so on. Due to their exceptional innovation capabilities, patented inventions and meritorious profile, our students have also been granted full and partial scholarships for their college.
Over the years, the DiscoverSTEM Team has developed the knowledge and roadmap for getting students into top universities and acquiring scholarships. We mentor our students in diverse disciplines, including innovations, research, entrepreneurship and leadership.`}
        </Typography>
      </Box>
    </Container>
  );
}
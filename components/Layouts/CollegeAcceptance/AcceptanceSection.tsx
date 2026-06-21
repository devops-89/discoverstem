"use client";

import { Box, Container, Typography } from "@mui/material";

export default function CollegeAcceptanceSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        // 🔥 FIX: Added padding on 'md' to prevent text touching the screen corner on 1024px iPads, preserved 0 on 1440px ('lg')!
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 4, lg: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          // 🔥 FIX: Shrunk the gap for smaller screens, locked 70px to 1440px ('lg')
          gap: { xs: 4, lg: "70px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            // 🔥 FIX: Scaled down heading for mobile/tablets, exactly 48px on 1440px ('lg')
            fontSize: { xs: "24px", sm: "32px", md: "36px", lg: "48px" },
            lineHeight: { xs: "36px", sm: "40px", md: "44px", lg: "62px" },
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
            // 🔥 FIX: Scaled down description for mobile/tablets, exactly 22px on 1440px ('lg')
            fontSize: { xs: "15px", sm: "16px", md: "18px", lg: "22px" },
            lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "43px" },
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
"use client";

import InnovationCardsGrid from "@/components/Widgets/common/InnovationCard";
import { InnovationCardItem } from "@/utils/Types";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

interface InnovationShowcaseSectionProps {
  title: string;
  items: InnovationCardItem[];
  buttonText?: string;
  buttonLink?: string;
}

export default function InnovationShowcaseSection({
  title,
  items,
  buttonText = "View All",
  buttonLink = "/success-stories/student-innovations",
}: InnovationShowcaseSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1235px", 
        mx: "auto",
        px: { xs: 2, sm: 4, lg: 0 },
        pt: { xs: 2,sm: 4, md:8, lg: 10 },
        pb: { xs: 6, sm: 8, md:8, lg: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1160px",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "center", lg: "flex-end" },
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 2, lg: 2 },
          mb: { xs: 4, lg: "90px" },
        }}
      >
        <Typography
          sx={{
            alignSelf: "flex-start",
            maxWidth: { xs: "100%", md: "1160px" }, 
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "48px" },
            lineHeight: { xs: "30px", sm: "36px", md: "46px", lg: "62px" },
            letterSpacing: "-0.03em",
            color: "#111827",
          }}
        >
          {title}
        </Typography>

        {buttonText && buttonLink && (
          <Button
            component={Link}
            href={buttonLink}
            endIcon={<NorthEastIcon sx={{ fontSize: { xs: 14, lg: 16 } }} />}
            sx={{
              alignSelf: "flex-end",
              minWidth: { xs: "90px", lg: "150px" },
              height: { xs: "36px", lg: "48px" },
              px: { xs: "14px", lg: "16px" },
              backgroundColor: "#FFEBE6",
              fontFamily: "Work Sans, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "13px", lg: "18px" },
              lineHeight: "20px",
              borderRadius: "50px",
              border: "1px solid #EE4823",
              color: "#EE4823",
              textTransform: "none",
              "@media (min-width: 1440px)": {
                transform: "translateY(65px)",
              },

              "&:hover": {
                backgroundColor: "#FFD9CE",
                borderColor: "#EE4823",
              },
            }}
          >
            {buttonText}
          </Button>
        )}
      </Box>

      <InnovationCardsGrid items={items} />
    </Container>
  );
}
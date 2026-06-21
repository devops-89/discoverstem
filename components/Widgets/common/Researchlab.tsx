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
        maxWidth: "1267px", // Container wide enough to fit 4x 290px cards + gaps
        mx: "auto",
        px: { xs: 2, sm: 4, lg: 0 },
        py: { xs: 6, lg: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 2, lg: 2 },
          mb: { xs: 4, lg: "50px" },
        }}
      >
        <Typography
          sx={{
            alignSelf: "flex-start",
            maxWidth: { xs: "100%", md: "1160px" }, 
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            // 🔥 FIX: Decreased size for 'md' (1024px) down to 36px, while perfectly restoring 'lg' (1440px) to exactly 48px!
            fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "48px" },
            lineHeight: { xs: "32px", sm: "36px", md: "46px", lg: "62px" },
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
              alignSelf: { xs: "flex-end", lg: "center" },
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
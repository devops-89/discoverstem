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
        maxWidth: "1220px",
        mx: "auto",
        px: { xs: 2, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 2 },
          mb: { xs: 4, md: "50px" },
        }}
      >
        <Typography
          sx={{
            maxWidth: "720px",
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "32px", md: "48px" },
            lineHeight: { xs: "42px", md: "62px" },
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
            endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
            sx={{
              minWidth: "108px",
              height: "48px",
              px: "18px",
              borderRadius: "999px",
              border: "1px solid #EE4823",
              color: "#EE4823",
              textTransform: "none",

              "&:hover": {
                backgroundColor: "transparent",
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
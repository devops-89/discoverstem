"use client";
import { FONT_FAMILY } from "@/utils/theme";
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

export function InnovationShowcaseSection({
  title,
  items,
  buttonText = "View All",
  buttonLink = "/success-stories/student-innovations"
}: {title: string;items: InnovationCardItem[];buttonText?: string;buttonLink?: string;}) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1235px",
        mx: "auto",
        px: { xs: 2, sm: 4, lg: 0 },
        pt: { xs: 2, sm: 4, md: 5, lg: 10 },
        pb: { xs: 6, sm: 8, md: 6, lg: 10 }
      }}>
      
      <Box
        sx={{
          width: "100%",
          maxWidth: "1160px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 0, md:0, lg: 1 },
          mb: { xs: 3, lg: "40px" }
        }}>
        
        <Typography
          sx={{
            alignSelf: { xs: "center", sm: "flex-start" }, 
            width: {sx:"100%", sm:"94%" }, 
            fontFamily: FONT_FAMILY.heading,
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "30px", md: "40px", lg: "48px" },
            lineHeight: { xs: "30px", sm: "40px", md: "52px", lg: "62px" },
            letterSpacing: "-0.03em",
            color: "#111827",
            textAlign: { xs: "center", sm: "left" },
            whiteSpace: "pre-line"
          }}>
          
          {title}
        </Typography>

        {buttonText && buttonLink &&
        <Button
          component={Link}
          href={buttonLink}
          endIcon={<NorthEastIcon sx={{ fontSize: { xs: 14, lg: 16 } }} />}
          sx={{
            alignSelf: "flex-end", 
            
            minWidth: { xs: "90px", sm: "115px", lg: "150px" },
            height: { xs: "36px", sm: "40px", lg: "48px" },
            px: { xs: "14px", sm: "16px" },
            fontSize: { xs: "13px", sm: "14px", lg: "18px" },
            
            whiteSpace: "nowrap", 

            backgroundColor: "#FFEBE6",
            fontFamily: FONT_FAMILY.heading,
            fontWeight: 400,
            lineHeight: "20px",
            borderRadius: "50px",
            border: "1px solid #EE4823",
            color: "#EE4823",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#FFD9CE",
              borderColor: "#EE4823"
            }
          }}>
          
            {buttonText}
          </Button>
        }
      </Box>

      <InnovationCardsGrid items={items} />
    </Container>);

}

export default InnovationShowcaseSection;
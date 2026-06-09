"use client";

import { sipData } from "@/assets/Generic-data";
import PrimaryButton from "@/components/Widgets/PrimaryButton";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function SipSection() {
return (
      <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >
      {/* Top Section */}
    <Grid container spacing={4}>
        {/* Left Content */}
        <Grid size={{xs:12,md:7}}>
        <Typography
            sx={{
                fontFamily:FONT_FAMILY.heading,
                width:{xs:"100%",md:"680px"},
                height:{xs:"auto",md:"32px"},
                fontSize: { xs: 26, md:"48px" },
                fontWeight: 600,
                lineHeight:"62px",
                letterSpacing:"-0.03em",
                color: "#111827",
                mb:5
            }}
        >
            {sipData.title}
        </Typography>

            <Typography
            sx={{
            fontFamily: FONT_FAMILY.body,
            width: { xs: "100%", md: "994px" },
            height: { xs: "auto", md: "15px" },
            mt: 1,
            fontSize: "22px",
            lineHeight: "30px",
            letterSpacing: "-0.01em",
            color: "#111827",
            whiteSpace: "nowrap",
            }}>
        A{" "}
        <Box component="span" sx={{ color: "#111827", fontWeight: 700 }}>
        Program
        </Box>{" "}
        that transforms{" "}
        <Box component="span" sx={{ color: "#111827", fontWeight: 700 }}>
       high school students
        </Box>{" "}
        into{" "}
        <Box component="span" sx={{ color: "#111827", fontWeight: 700 }}>
        into inventors, researchers, and entrepreneurs!
        </Box>
        !
        </Typography>

            <Typography
            sx={{
                fontFamily:FONT_FAMILY.body,
                fontWeight:400,
                width: { xs: "100%", md: "594px" },
                height: { xs: "auto", md: "359px" },
                mt: 5,
                fontSize: "22px",
                letterSpacing:"-0.03em",
                color: "#777777",
                lineHeight: "43px"
                }}
            >
            {sipData.description1}
            </Typography>

            <Typography
            sx={{
                fontFamily:FONT_FAMILY.body,
                fontWeight:400,
                width: { xs: "100%", md: "1161px" },
                height: { xs: "auto", md: "187px" },
                mt: 2,
                fontSize: "22px",
                letterSpacing:"-0.03em",
                color: "#777777",
                lineHeight: "43px"
                }}
            >
            {sipData.description2}
            </Typography>
        </Grid>

        <Grid size={{xs:12,md:5}}>
        <Box
            sx={{
            width: { xs: "100%", md: "529px" },
            height: { xs: "200px", sm: "250px", md: "337px" },
            position: "relative",
            borderRadius: "18px",
            overflow: "hidden",
            mt: { xs: 3, md: 16 },
            ml:{md:-8}
            }}
        >
            <Image
            
            src={sipData.image}
            alt="SIP Program"
            fill
            style={{ objectFit: "cover" }}
            />
        </Box>
        </Grid>
    </Grid>

      {/* Bottom Section */}
    <Box sx={{ mt: 8 }}>
        <Typography
        sx={{
            fontFamily:FONT_FAMILY.heading,
            width: { xs: "100%", md: "1056px" },
            height: { xs: "auto", md: "32px" },
            fontSize: { xs: 22, md: "48px" },
            fontWeight: 600,
            lineHeight:"62px",
            letterSpacing:"-0.03em",
            color: "#111827",
            mb:5,
        }}
        >
        {sipData.statsTitle}
        </Typography>

        <Typography
        sx={{
            fontFamily:FONT_FAMILY.body,
            width: { xs: "100%", md: "1161px" },
            height: { xs: "auto", md: "144px" },
            mt: 6,
            fontSize: "22px",
            color: "#777777",
            lineHeight: "43px",
            letterSpacing:"-0.03em",
            mb:6,
        }}
        >
        {sipData.statsDescription}
        </Typography>

        <Box sx={{ mt: 2 }}>
          {sipData.points.map((point, index) => (
            <Typography key={index} sx={{
                fontFamily:FONT_FAMILY.body,
                width: { xs: "100%", md: "1196px" },
                height: { xs: "auto", md: "58px" },
                fontSize: "22px",
                lineHeight:"43px",
                letterSpacing:"-0.03em",
                mt: 1,
                color:"#000",
                fontWeight:500
                }}>
              • {point}
            </Typography>
          ))}
        </Box>

        {/* Button */}
        <Box sx={{
            mt: 4,
            }}>
          <PrimaryButton>
            Request a
            <Box component="span" sx={{ fontWeight: 700, ml: 0.5 }}>
               Free Information Session
            </Box>
          </PrimaryButton>
        </Box>
      </Box>
    </Container>
  );
}
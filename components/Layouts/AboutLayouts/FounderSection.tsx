"use client";
import { mirzaFaizan } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Email, Facebook, Instagram, LinkedIn, Twitter, } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";

const FounderSection = () => {
  return (
    <Container
              maxWidth={false}
              sx={{
                maxWidth: "min(1196px, 100%)",
                py: { xs: 5, md: 7 },
                px: { xs: 3, md: 4 },
              }}
            >
        <Grid container spacing={{xs:4,md:6}} alignItems="center">
        <Grid size={{xs:12,lg:6}}>
      <Box sx={{display: "flex",
      justifyContent: { xs: "center", lg: "flex-start" },
      }}>
    <Box sx={{ position: "relative",
        width: { xs: "100%", md: "537.99px" },
        height: { xs: "auto", md: "650px" },
        aspectRatio:"4/5",
        // height: "650px",
        borderRadius: "18px",
        overflow: "hidden",
      }}>
      <Image
        src={mirzaFaizan.image}
        alt={mirzaFaizan.name}
        fill
        style={{
          objectFit: "cover",
        }}
        priority/>

        </Box>
      </Box>
        </Grid>

      <Grid size={{xs:12,lg:6}}>
            <Box sx={{ maxWidth: "520px",
              mx:{sx:"auto",lg:0},
              textAlign:{xs:"center",lg:"left"}
            }}>
            <Typography sx={{
                            width: { xs: "100%", md: "278px" },
                            height: { xs: "auto", md: "32px" },
                            fontFamily: FONT_FAMILY.heading,
                            fontWeight: 600,
                            fontSize: { xs: "32px", md: "42px", lg: "48px" },
                            lineHeight: { xs: "42px", md: "54px", lg: "62px" },
                            letterSpacing: "-0.03em",
                            color: "#111827",
                            // maxWidth: "278px",
                            mb:"40px"
                            }}>
                              {mirzaFaizan.name}
            </Typography>

        <Typography sx={{
                          width: { xs: "100%", md: "431px" },
                          height: { xs: "auto", md: "15px" },
                          mt: 2,
                          mb:4,
                          fontFamily: FONT_FAMILY.body,
                          fontWeight: 600, // SemiBold
                          fontSize: { xs: "18px", md: "20px", lg: "22px" },
                          lineHeight: "30px",
                          letterSpacing: "-0.01em",
                          color: "#111827",
                          // maxWidth: "431px",
                          }}>
                          {mirzaFaizan.role}
        </Typography>

        <Typography sx={{
                          width: { xs: "100%", md: "531px" },
                          height: { xs: "auto", md: "229px" },
                          whiteSpace:"pre-line",
                          mt: 2,
                          fontFamily:FONT_FAMILY.body,
                          fontWeight: 400,
                          fontSize: { xs: "15px", md: "17px", lg: "18px" },
                          lineHeight: "32px",
                          color: "#474A55",
                          opacity: 0.9,
                          }}>
                          {mirzaFaizan.description}
        </Typography>

    <Box
      sx={{
        mt: { xs: 4, md: 12},
        display: "flex",
        justifyContent: { xs: "center", lg: "flex-start" },
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Email
        sx={{
          fontSize: "18px",
          color: "#111827",
        }}
      />

  <Typography
    sx={{
      width:"fit-content",
        height:"auto",
      fontFamily: FONT_FAMILY.body,
      fontWeight: 400,
      fontSize: "16px",
      // lineHeight: "24px",
      color: "#111827",
    }}
  >
    {mirzaFaizan.email}
  </Typography>
</Box>
      
      <Box sx={{
                mt: 4,
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-start" },
                gap: "8px",
                }}
>
  {[Facebook, LinkedIn, Twitter, Instagram].map((Icon, i) => (
    <IconButton
      key={i}
      sx={{
        width: "fit-content",
        height: "auto",
        borderRadius: "50%",
        backgroundColor: "#F6EDFF",
        color: "#4B5563", // icon color
        "&:hover": {
          backgroundColor: "#7B53A1",
          color: "#F6EDFF",
        },
      }}
    >
      <Icon sx={{ fontSize: "20px" }} />
    </IconButton>
  ))}
</Box>

            </Box>
          </Grid>

        </Grid>
      </Container>
  );
};

export default FounderSection;
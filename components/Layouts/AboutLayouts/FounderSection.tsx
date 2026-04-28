"use client";
import { mirzaFaizan } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Email, Facebook, Instagram, LinkedIn, Twitter, } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";

const FounderSection = () => {
  return (
    <Box sx={{ py: {xs:6,md:10} }}>
      <Container maxWidth="xl">
        <Grid container spacing={{xs:4,md:6}} alignItems="center">
        <Grid size={{xs:12,lg:6}}>
      <Box sx={{display: "flex",
      justifyContent: { xs: "center", lg: "flex-start" },
      ml:{lg:12}}}>
    <Box sx={{ position: "relative",
        width:"100%",
        maxWidth: "538px",
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
                            fontFamily: FONT_FAMILY.heading,
                            fontWeight: 600,
                            fontSize: { xs: "32px", md: "42px", lg: "48px" },
                            lineHeight: { xs: "42px", md: "54px", lg: "62px" },
                            letterSpacing: "-0.03em",
                            color: "#111827",
                            // maxWidth: "278px",
                            // mt:"45px"
                            }}>
                              {mirzaFaizan.name}
            </Typography>

        <Typography sx={{
                          mt: 1,
                          fontFamily: FONT_FAMILY.body,
                          fontWeight: 600, // SemiBold
                          fontSize: { xs: "18px", md: "20px", lg: "22px" },
                          lineHeight: "30px",
                          // letterSpacing: "-0.01em",
                          color: "#111827",
                          // maxWidth: "431px",
                          }}>
                          {mirzaFaizan.role}
        </Typography>

        <Typography sx={{
                          whiteSpace:"pre-line",
                          mt: 2,
                          fontFamily:FONT_FAMILY.body,
                          fontWeight: 400,
                          fontSize: { xs: "15px", md: "17px", lg: "18px" },
                          lineHeight: "30px",
                          // letterSpacing: "0em",
                          color: "#474A55",
                          opacity: 0.9,
                          // maxWidth: "561px",
                          }}>
                          {mirzaFaizan.description}
        </Typography>

    <Box
      sx={{
        mt: { xs: 4, md: 6 },
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
        width: "44px",
        height: "44px",
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
    </Box>
  );
};

export default FounderSection;
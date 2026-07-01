"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { sipData } from "@/assets/Generic-data";
import PrimaryButton from "@/components/Widgets/PrimaryButton";

import { Box, Container, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import Link from "next/link";

export default function SipSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, lg: 7 },
        px: { xs: 3, lg: 4 }
      }}>
      
    
    <Grid container spacing={{ xs: 4, lg: 4 }}>
       
        <Grid size={{ xs: 12, md: 7 }}>
        <Typography
            sx={{
              fontFamily: FONT_FAMILY.heading,
              width: { xs: "100%", lg: "680px" },
              height: { xs: "auto", lg: "32px" },
              fontSize: { xs: "22px", sm: "36px", lg: "48px" },
              fontWeight: 600,
              lineHeight: { xs: "30px", sm: "46px", lg: "62px" },
              letterSpacing: "-0.03em",
              color: "#111827",
              mb: { xs: 3, lg: 5 },
              textAlign: { xs: "center", md: "left" }
            }}>
            
            {sipData.title}
        </Typography>

            <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              width: { xs: "100%", lg: "994px" },
              height: { xs: "auto", lg: "15px" },
              mt: { xs: 2, lg: 1 },
              fontSize: { xs: "16px", sm: "18px", lg: "22px" },
              lineHeight: { xs: "26px", sm: "28px", lg: "30px" },
              letterSpacing: "-0.01em",
              color: "#111827",
              whiteSpace: { xs: "normal", lg: "nowrap" },
              textAlign: { xs: "center", md: "left" }
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
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              width: { xs: "100%", lg: "594px" },
              height: { xs: "auto", lg: "359px" },
              mt: { xs: 3, lg: 5 },
              fontSize: { xs: "15px", sm: "18px", lg: "22px" },
              letterSpacing: "-0.03em",
              color: "#777777",
              lineHeight: { xs: "26px", sm: "32px", lg: "43px" },
              textAlign: { xs: "center", md: "left" }
            }}>
            
            {sipData.description1}
            </Typography>

            <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              width: { xs: "100%", lg: "1161px" },
              height: { xs: "auto", lg: "187px" },
              mt: { xs: 2, lg: 2 },
              fontSize: { xs: "15px", sm: "18px", lg: "22px" },
              letterSpacing: "-0.03em",
              color: "#777777",
              lineHeight: { xs: "26px", sm: "32px", lg: "43px" },
              textAlign: { xs: "center", md: "left" }
            }}>
            
            {sipData.description2}
            </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
        <Box
            sx={{
              width: { xs: "100%", lg: "529px" },
              height: { xs: "240px", sm: "350px", md: "400px", lg: "337px" },
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              mt: { xs: 2, lg: 16 },

              ml: { lg: -8 }
            }}>
            
            <Image
              src={sipData.image}
              alt="SIP Program"
              fill sizes="100vw"
              style={{ objectFit: "cover" }} />
            
        </Box>
        </Grid>
    </Grid>

    
    <Box sx={{ mt: { xs: 5, lg: 8 } }}>
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.heading,
            width: { xs: "100%", lg: "1056px" },
            height: { xs: "auto", lg: "32px" },
            fontSize: { xs: "22px", sm: "32px", lg: "48px" },
            fontWeight: 600,
            lineHeight: { xs: "34px", sm: "42px", lg: "62px" },
            letterSpacing: "-0.03em",
            color: "#111827",
            mb: { xs: 3, lg: 5 },
            textAlign: { xs: "center", md: "left" }
          }}>
          
        {sipData.statsTitle}
        </Typography>

        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            width: { xs: "100%", lg: "1161px" },
            height: { xs: "auto", lg: "144px" },
            mt: { xs: 3, lg: 6 },
            fontSize: { xs: "15px", sm: "18px", lg: "22px" },
            color: "#777777",
            lineHeight: { xs: "26px", sm: "32px", lg: "43px" },
            letterSpacing: "-0.03em",
            mb: { xs: 3, lg: 6 },
            textAlign: { xs: "center", md: "left" }
          }}>
          
        {sipData.statsDescription}
        </Typography>

        <Box sx={{ mt: 2 }}>
          {sipData.points.map((point: any, index: any) =>
          <Typography key={index} sx={{
            fontFamily: FONT_FAMILY.body,
            width: { xs: "100%", lg: "1196px" },
            height: { xs: "auto", lg: "58px" },
            fontSize: { xs: "15px", sm: "18px", lg: "22px" },
            lineHeight: { xs: "24px", sm: "32px", lg: "43px" },
            letterSpacing: "-0.03em",
            mt: 1,
            color: "#000",
            fontWeight: 500
          }}>
              • {point}
            </Typography>
          )}
        </Box>

        {/* Button */}
        <Box sx={{ 
          mt: { xs: 4, lg: 4 },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" } 
        }}>
           <Link href="/contact" style={{ textDecoration: "none", display: "inline-block" }}>
            
            <PrimaryButton
              showIcon={false}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: "6px", md: "8px", lg: "10px" },
                padding: {
                  xs: "4px 4px 4px 16px !important",
                  md: "5px 5px 5px 20px !important",
                  lg: "6px 6px 6px 24px !important"
                },

                width: "max-content",
                minWidth: { xs: "180px", md: "200px", lg: "231px" },
                height: { xs: "40px", md: "48px", lg: "56px" },

                borderRadius: "30px",
                textTransform: "none"
              }}>
              
              <Typography
                component="span"
                sx={{
                  fontFamily: "'JUST Sans', sans-serif",
                  fontSize: { xs: "12px", md: "14px", lg: "16px" },
                  lineHeight: { xs: "18px", md: "20px", lg: "24px" },
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap"
                }}>
                
                Request a <Box component="span" sx={{ fontWeight: 700 }}>Free Information Session</Box>
              </Typography>

              <Box
                sx={{
                  width: { xs: "32px", md: "38px", lg: "44px" },
                  height: { xs: "32px", md: "38px", lg: "44px" },
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                
                <ArrowOutwardIcon
                  sx={{
                    fontSize: { xs: "14px", md: "16px", lg: "20px" },
                    color: "#111827"
                  }} />
                
              </Box>
            </PrimaryButton>
          </Link>
        </Box>
      </Box>
    </Container>);

}
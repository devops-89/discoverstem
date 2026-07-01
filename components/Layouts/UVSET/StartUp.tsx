"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { StartupDetailData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface StartupDetailProps {
  data: StartupDetailData;
}

export default function StartupDetail({ data }: StartupDetailProps) {
  const bottomCards = [data.status, data.patent, data.website];

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",

        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 5, md: 6, lg: 8 }

      }}>
      
      <Box sx={{ width: "100%" }}>
        {/* Title */}
        <Typography
          sx={{
            width: "100%",
            maxWidth: "1160px",
             textAlign: { xs: "center", md: "left" }, 
            minHeight: { xs: "auto", lg: "155px" },
            fontFamily: FONT_FAMILY.heading,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.titleLarge, md: FONT_SIZE.subSectionHeadingSmall, lg: FONT_SIZE.pageHeadingSmall },
            lineHeight: { xs: "30px", md: "52px", lg: LINE_HEIGHT.huge },
            letterSpacing: "-0.03em",
            color: "#111827",
            mb: { xs: 4, md: 10, lg: "160px" }
          }}>
          
          {data.title}
          <br />
          {data.subtitle}
        </Typography>

       
        <Typography
          sx={{
             textAlign: { xs: "center", md: "left" }, 
            width: { xs: "100%", lg: "330px" },
            height: { xs: "auto", lg: "37px" },
            fontFamily: FONT_FAMILY.accent,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.titleLarge, md: FONT_SIZE.cardHeading, lg: FONT_SIZE.subSectionHeading },
            lineHeight: { xs: "30px", md: "34px", lg: "36.8px" },
            letterSpacing: "-0.8px",
            color: "#171717",
            mb: { xs: 3, lg: "35px" }
          }}>
          
          {data.teamTitle}
        </Typography>

      
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)"
            },
            gap: { xs: 2, lg: "20px" },
            mb: { xs: 6, md: 8, lg: "95px" }
          }}>
          
          {data.team.map((member, index) =>
          <Box
            key={index}
            sx={{
              width: "100%",
              height: { xs: "auto", lg: "101px" },
              borderRadius: "16px",
              border: "0.8px solid #0000000D",
              backgroundColor: "#FAFAFA",
              p: "20px",
              display: "flex",
              alignItems: "center",
              gap: "16px"
            }}>
            
              <Box
              sx={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                backgroundColor: member.color,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.semiBold,
                fontSize: FONT_SIZE.bodyLarge,
                flexShrink: 0,
                overflow: "hidden"
              }}>
              
                {member.image ?
              <Image
                src={member.image}
                alt={member.name}
                width={52}
                height={52}
                style={{ objectFit: "cover", width: "100%", height: "100%" }} /> :


              member.initials
              }
              </Box>

              <Box sx={{ width: "94.4px" }}>
                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: FONT_WEIGHT.semiBold,

                  fontSize: { xs: FONT_SIZE.bodySmall, lg: FONT_SIZE.bodyLarge },
                  lineHeight: { xs: LINE_HEIGHT.small, lg: LINE_HEIGHT.medium },
                  color: "#171717"
                }}>
                
                  {member.name}
                </Typography>

                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: FONT_WEIGHT.regular,
                  fontSize: FONT_SIZE.caption,
                  lineHeight: LINE_HEIGHT.extraSmall,
                  color: "#737373"
                }}>
                
                  {member.role}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

       
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: { xs: "1fr", md: "1fr 400px", lg: "1fr 516px" },

            gap: { xs: 5, md: "40px", lg: "128px" },
            alignItems: "start",
            mb: { xs: 6, md: 8, lg: "106px" }
          }}>
          
          {/* Left Content */}
          <Box>
            <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.semiBold,

                fontSize: { xs: FONT_SIZE.lead, md: FONT_SIZE.leadLarge, lg: FONT_SIZE.title },
                lineHeight: { xs: "28px", md: "34px", lg: LINE_HEIGHT.xl4 },
                letterSpacing: "-0.03em",
                color: "#111827"
              }}>
              
              {data.problemTitle}
            </Typography>

            <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.regular,
                fontSize: { xs: FONT_SIZE.bodyLarge, md: FONT_SIZE.lead, lg: FONT_SIZE.leadLarge },
                lineHeight: { xs: "28px", md: "34px", lg: LINE_HEIGHT.xl4 },
                letterSpacing: "-0.03em",
                color: "#777777",
                mb: { xs: 2, lg: 0 }
              }}>
              
              {data.problem}
            </Typography>

            <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.semiBold,
                fontSize: { xs: FONT_SIZE.lead, md: FONT_SIZE.leadLarge, lg: FONT_SIZE.title },
                lineHeight: { xs: "28px", md: "34px", lg: LINE_HEIGHT.xl4 },
                letterSpacing: "-0.03em",
                color: "#111827"
              }}>
              
              {data.innovationTitle}
            </Typography>

            {data.innovation.map((paragraph, index) =>
            <Typography
              key={index}
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.regular,
                fontSize: { xs: FONT_SIZE.bodyLarge, md: FONT_SIZE.lead, lg: FONT_SIZE.leadLarge },
                lineHeight: { xs: "28px", md: "34px", lg: LINE_HEIGHT.xl4 },
                letterSpacing: "-0.03em",
                color: "#777777",
                mb: index === data.innovation.length - 1 ? 0 : { xs: "16px", lg: "22px" }
              }}>
              
                {paragraph}
              </Typography>
            )}
          </Box>

         
          <Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "264px",
                height: { xs: "80px", md: "100px", lg: "124px" },
                mx: "auto",
                mb: { xs: 3, lg: "30px" }
              }}>
              
              <Image
                src={data.logo}
                alt={data.title}
                fill sizes="100vw"
                style={{ objectFit: "contain", borderRadius: 0 }} />
              
            </Box>

            {data.videoUrl &&
            <Box
              sx={{
                width: "100%",

                maxWidth: { xs: "100%", lg: "516px" },
                height: { xs: "auto", lg: "290px" },
                mx: "auto",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#D9D9D9"
              }}>
              
                <video
                src={data.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "16px"
                }} />
              
              </Box>
            }
          </Box>
        </Box>

       
        <Box
          sx={{
            width: "100%",
            minHeight: { xs: "auto", lg: "189px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)"
            },
            gap: { xs: 2, lg: "16px" }
          }}>
          
          {bottomCards.map((item, index) => {
            const isStatus = index === 0;
            const isPatent = index === 1;

            return (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  minHeight: { xs: "auto", md: "170px", lg: "189px" },
                  borderRadius: "24px",
                  border: `0.8px solid ${
                  isStatus ?
                  "#7B53A133" :
                  isPatent ?
                  "#EF412333" :
                  "#F9A51E33"}`,

                  px: { xs: 3, lg: "32.8px" },
                  pt: "26px",
                  pb: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  background: isStatus ?
                  "linear-gradient(135deg, #F4ECFB 0%, #F5EEFB 10%, #F6F0FC 20%, #F7F2FC 30%, #F8F4FD 40%, #F9F5FD 50%, #FBF7FD 60%, #FCF9FE 70%, #FDFBFE 80%, #FEFDFF 90%, #FFFFFF 100%)" :
                  isPatent ?
                  "linear-gradient(135deg, #FFF1EC 0%, #FFF3EE 12.5%, #FFF5F1 25%, #FFF6F3 37.5%, #FFF8F5 50%, #FFFAF8 62.5%, #FFFCFA 75%, #FFFDFD 87.5%, #FFFFFF 100%)" :
                  "linear-gradient(135deg, #FFF6E5 0%, #FFF7E8 11.11%, #FFF8EB 22.22%, #FFF9EE 33.33%, #FFFAF1 44.44%, #FFFBF3 55.56%, #FFFCF6 66.67%, #FFFDF9 77.78%, #FFFEFC 88.89%, #FFFFFF 100%)"
                }}>
                
                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.body,
                    fontWeight: FONT_WEIGHT.regular,
                    fontSize: FONT_SIZE.caption,
                    lineHeight: LINE_HEIGHT.extraSmall,
                    letterSpacing: "2.4px",
                    textTransform: "uppercase",
                    color: isStatus ?
                    "#7B53A1" :
                    isPatent ?
                    "#EF4123" :
                    "#B7791F"
                  }}>
                  
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.body,
                    fontWeight: FONT_WEIGHT.semiBold,
                    // 🔥 FIX: Shifted large text up to lg!
                    fontSize: { xs: FONT_SIZE.bodyLarge, md: FONT_SIZE.leadLarge, lg: "22.4px" },
                    lineHeight: { xs: LINE_HEIGHT.medium, md: LINE_HEIGHT.mediumLarge, lg: LINE_HEIGHT.baseLarge },
                    letterSpacing: "-0.56px",
                    color: "#171717"
                  }}>
                  
                  {item.value}
                </Typography>

                {"description" in item &&
                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.body,
                    fontWeight: FONT_WEIGHT.regular,

                    fontSize: { xs: FONT_SIZE.small, lg: FONT_SIZE.bodySmall },
                    lineHeight: { xs: LINE_HEIGHT.small, lg: LINE_HEIGHT.mediumSmall },
                    color: "#555555"
                  }}>
                  
                    {item.description}
                  </Typography>
                }

                {"buttons" in item &&
                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap"
                  }}>
                  
                    {item.buttons.map((button, i) =>
                  <Box
                    key={i}
                    component="a"
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      border: "0.8px solid #E5E5E5",
                      borderRadius: "999px",
                      backgroundColor: "#fff",
                      px: "10px",
                      py: "5px",
                      fontFamily: FONT_FAMILY.body,
                      fontSize: FONT_SIZE.footnote,
                      lineHeight: LINE_HEIGHT.extraSmall,
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit"
                    }}>
                    
                        {button.label}
                      </Box>
                  )}
                  </Box>
                }
              </Box>);

          })}
        </Box>
      </Box>
    </Container>);

}
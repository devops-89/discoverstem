"use client";

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
        px: { xs: 3, md: 0 },
        py: { xs: 5, md: 8 },
      }}
    >
      <Box sx={{ width: "100%" }}>
        {/* Title */}
        <Typography
          sx={{
            width: "100%",
            maxWidth: "1160px",
            minHeight: { xs: "auto", md: "155px" },
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "32px", sm: "40px", md: "48px" },
            lineHeight: { xs: "40px", sm: "52px", md: "62px" },
            letterSpacing: "-0.03em",
            color: "#111827",
            mb: { xs: 6, md: "160px" },
          }}
        >
          {data.title}
          <br />
          {data.subtitle}
        </Typography>

        {/* Team Title */}
        <Typography
          sx={{
            width: { xs: "100%", md: "330px" },
            height: { xs: "auto", md: "37px" },
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "28px", md: "36px" },
            lineHeight: { xs: "34px", md: "36.8px" },
            letterSpacing: "-0.8px",
            color: "#171717",
            mb: { xs: 3, md: "35px" },
          }}
        >
          {data.teamTitle}
        </Typography>

        {/* Team Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(5, 1fr)",
            },
            gap: { xs: 2, md: "20px" },
            mb: { xs: 6, md: "95px" },
          }}
        >
          {data.team.map((member, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: { xs: "auto", md: "101px" },
                borderRadius: "16px",
                border: "0.8px solid #0000000D",
                backgroundColor: "#FAFAFA",
                p: "20px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
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
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                {member.initials}
              </Box>

              <Box sx={{ width: "94.4px" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#171717",
                  }}
                >
                  {member.name}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#737373",
                  }}
                >
                  {member.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Content + Images */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 516px" },
            gap: { xs: 5, md: "128px" },
            alignItems: "start",
            mb: { xs: 6, md: "106px" },
          }}
        >
          {/* Left Content */}
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "20px", md: "22px" },
                lineHeight: { xs: "34px", md: "43px" },
                letterSpacing: "-0.03em",
                color: "#111827",
              }}
            >
              {data.problemTitle}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "18px", md: "20px" },
                lineHeight: { xs: "34px", md: "43px" },
                letterSpacing: "-0.03em",
                color: "#777777",
                mb: { xs: 2, md: 0 },
              }}
            >
              {data.problem}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "20px", md: "22px" },
                lineHeight: { xs: "34px", md: "43px" },
                letterSpacing: "-0.03em",
                color: "#111827",
              }}
            >
              {data.innovationTitle}
            </Typography>

            {data.innovation.map((paragraph, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: { xs: "34px", md: "43px" },
                  letterSpacing: "-0.03em",
                  color: "#777777",
                  mb: index === data.innovation.length - 1 ? 0 : "22px",
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>

          {/* Right Images */}
          <Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: "220px", md: "264px" },
                height: { xs: "100px", md: "124px" },
                mx: "auto",
                mb: { xs: 4, md: "78px" },
              }}
            >
              <Image
                src={data.logo}
                alt={data.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "516px",
                height: { xs: "260px", sm: "320px", md: "347px" },
                borderRadius: "16px",
                backgroundColor: "#CFCFCF",
                overflow: "hidden",
              }}
            >
              <Image
                src={data.startupImage}
                alt={data.subtitle}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Bottom Cards */}
        <Box
          sx={{
            width: "100%",
            minHeight: { xs: "auto", md: "189px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: "16px" },
          }}
        >
          {bottomCards.map((item, index) => {
            const isStatus = index === 0;
            const isPatent = index === 1;

            return (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  minHeight: { xs: "170px", md: "189px" },
                  borderRadius: "24px",
                  border: `0.8px solid ${
                    isStatus
                      ? "#7B53A133"
                      : isPatent
                      ? "#EF412333"
                      : "#F9A51E33"
                  }`,
                  px: { xs: 3, md: "32.8px" },
                  pt: "26px",
                  pb: "0.8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  background: isStatus
                    ? "linear-gradient(135deg, #F4ECFB 0%, #F5EEFB 10%, #F6F0FC 20%, #F7F2FC 30%, #F8F4FD 40%, #F9F5FD 50%, #FBF7FD 60%, #FCF9FE 70%, #FDFBFE 80%, #FEFDFF 90%, #FFFFFF 100%)"
                    : isPatent
                    ? "linear-gradient(135deg, #FFF1EC 0%, #FFF3EE 12.5%, #FFF5F1 25%, #FFF6F3 37.5%, #FFF8F5 50%, #FFFAF8 62.5%, #FFFCFA 75%, #FFFDFD 87.5%, #FFFFFF 100%)"
                    : "linear-gradient(135deg, #FFF6E5 0%, #FFF7E8 11.11%, #FFF8EB 22.22%, #FFF9EE 33.33%, #FFFAF1 44.44%, #FFFBF3 55.56%, #FFFCF6 66.67%, #FFFDF9 77.78%, #FFFEFC 88.89%, #FFFFFF 100%)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "2.4px",
                    textTransform: "uppercase",
                    color: isStatus
                      ? "#7B53A1"
                      : isPatent
                      ? "#EF4123"
                      : "#B7791F",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "22.4px",
                    lineHeight: "26.88px",
                    letterSpacing: "-0.56px",
                    color: "#171717",
                  }}
                >
                  {item.value}
                </Typography>

                {"description" in item && (
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "22.75px",
                      color: "#555555",
                    }}
                  >
                    {item.description}
                  </Typography>
                )}

                {"buttons" in item && (
                  <Box
                    sx={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {item.buttons.map((button, i) => (
                      <Box
                        key={i}
                        component="button"
                        sx={{
                          border: "0.8px solid #E5E5E5",
                          borderRadius: "999px",
                          backgroundColor: "#fff",
                          px: "10px",
                          py: "5px",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "11px",
                          lineHeight: "16px",
                          cursor: "pointer",
                        }}
                      >
                        {button}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
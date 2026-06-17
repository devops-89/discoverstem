"use client";

import { FoundationCoursesData } from "@/utils/Types";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { Box, Container, Typography } from "@mui/material";

interface CoursesSectionProps {
  data: FoundationCoursesData;
  showLevel?: boolean;
  showDuration?: boolean;
}

const iconMap = {
  users: GroupsOutlinedIcon,
  lightbulb: LightbulbOutlinedIcon,
  target: PsychologyOutlinedIcon,
  message: ChatBubbleOutlineOutlinedIcon,
  file: DescriptionOutlinedIcon,
  puzzle: ExtensionOutlinedIcon,
  clipboard: AssignmentOutlinedIcon,
  science: ScienceOutlinedIcon,
};

export default function CoursesSection({ data, showLevel = true, showDuration = true }: CoursesSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1280px",
        mx: "auto",
        px: { xs: 3, md: "40px" },
        pt: { xs: 6, md: "96px" },
        pb: { xs: 6, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, md: "56px" },
        }}
      >
        <Box sx={{ maxWidth: "1200px", textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              mb: "16px",
            }}
          >
            <Box sx={{ width: "48px", height: "1px", bgcolor: "#6E6E6E" }} />

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "18px", md: "22px" },
                lineHeight: "30px",
                letterSpacing: "-0.4px",
                color: "#EE4823",
              }}
            >
              {data.eyebrow}
            </Typography>

            <Box sx={{ width: "48px", height: "1px", bgcolor: "#6E6E6E" }} />
          </Box>

          <Typography
            sx={{
              fontFamily: "Work Sans, sans-serif",
              fontWeight: 600,
              fontSize: { xs: "34px", md: "48px" },
              lineHeight: { xs: "42px", md: "48px" },
              letterSpacing: "-0.8px",
              color: "#1A1A1A",
              mb: "16px",
            }}
          >
            {data.title}
          </Typography>

          <Typography
            sx={{
              maxWidth: "672px",
              mx: "auto",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: { xs: "26px", md: "27px" },
              color: "#676767",
            }}
          >
            {data.description}
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 282px)",
            },
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {data.cards.map((item) => {
            const Icon =
              iconMap[item.icon as keyof typeof iconMap] || GroupsOutlinedIcon;

            return (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  maxWidth: "282px",
                  height: "330.7px",
                  bgcolor: "#F3F4F6",
                  borderRadius: "16px",
                  p: "28px",
                  display: "flex",
                  flexDirection: "column",
                  mx: "auto",
                }}
              >
                <Box
                  sx={{
                    width: "226px",
                    height: "56px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: "20px",
                  }}
                >
                  <Box
                    sx={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      bgcolor: "#7B53A1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ fontSize: "28px", color: "#FFFFFF" }} />
                  </Box>

                  {showLevel && (
                    <Box
                      sx={{
                        height: "26px",
                        borderRadius: "999px",
                        bgcolor: "#FFEBE6",
                        px: "12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 400,
                          fontSize: "12px",
                          lineHeight: "18px",
                          letterSpacing: "0.48px",
                          color: "#EE4823",
                        }}
                      >
                        {item.level}
                      </Typography>
                    </Box>
                  )}
                </Box>

                <Box
                  sx={{
                    width: "226px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "25px",
                      letterSpacing: "-0.18px",
                      color: "#1A1A1A",
                      minHeight: "50px",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: "8px",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "#676767",
                      minHeight: "88px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                {showDuration && (
                  <Box
                    sx={{
                      mt: "auto",
                      pt: "16px",
                      width: "226px",
                      borderTop: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        fontSize: "13px",
                        lineHeight: "20px",
                        color: "#6E6E6E",
                      }}
                    >
                      {item.duration}
                    </Typography>
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
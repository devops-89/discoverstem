"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

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
  science: ScienceOutlinedIcon
};

export default function CoursesSection({ data, showLevel = true, showDuration = true }: CoursesSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1280px",
        mx: "auto",
        px: { xs: 3, sm: 5, lg: "40px" },
        pt: { xs: 5, sm: 4, lg: "96px" },
        pb: { xs: 1, sm: 4, lg: 0 }
      }}>
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 4, lg: "56px" }
        }}>
        
        <Box sx={{ maxWidth: "1200px", textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              mb: "16px"
            }}>
            
            <Box sx={{ width: { xs: "32px", md: "48px" }, height: "1px", bgcolor: "#6E6E6E" }} />

            <Typography
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: FONT_WEIGHT.semiBold,
                fontSize: { xs: FONT_SIZE.bodyLarge, sm: FONT_SIZE.lead, lg: FONT_SIZE.title },
                lineHeight: { xs: LINE_HEIGHT.medium, sm: "30px", lg: "30px" },
                letterSpacing: "-0.4px",
                color: "#EE4823"
              }}>
              
              {data.eyebrow}
            </Typography>

            <Box sx={{ width: { xs: "32px", md: "48px" }, height: "1px", bgcolor: "#6E6E6E" }} />
          </Box>

          <Typography
            sx={{
              fontFamily: FONT_FAMILY.heading,
              fontWeight: FONT_WEIGHT.semiBold,
              fontSize: { xs: FONT_SIZE.titleLarge, sm: FONT_SIZE.subSectionHeading, lg: FONT_SIZE.pageHeadingSmall },
              lineHeight: { xs: "30px", sm: LINE_HEIGHT.xl5, lg: "48px" },
              letterSpacing: "-0.8px",
              color: "#1A1A1A",
              mb: "16px"
            }}>
            
            {data.title}
          </Typography>

          <Typography
            sx={{
              maxWidth: "672px",
              mx: "auto",
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.regular,
              fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.bodyLarge, lg: FONT_SIZE.lead },
              lineHeight: { xs: "25px", sm: LINE_HEIGHT.mediumLarge, lg: "27px" },
              color: "#676767"
            }}>
            
            {data.description}
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "grid",
            justifyContent: "center",
            gap: { xs: 3, lg: "24px" },

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)"
            },
            "@media (min-width: 768px)": {
              gridTemplateColumns: "repeat(3, 1fr)"
            },
            "@media (min-width: 1024px)": {
              gridTemplateColumns: "repeat(4, 1fr)"
            },
            "@media (min-width: 1440px)": {
              gridTemplateColumns: "repeat(4, 282px)"
            }
          }}>
          
          {data.cards.map((item) => {
            const Icon =
            iconMap[item.icon as keyof typeof iconMap] || GroupsOutlinedIcon;

            return (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  maxWidth: "282px",
                  height: { xs: "auto", lg: "330.7px" },
                  minHeight: { xs: "auto", lg: "330.7px" },
                  bgcolor: "#F3F4F6",
                  borderRadius: "16px",
                  p: { xs: "20px", lg: "28px" },
                  display: "flex",
                  flexDirection: "column",
                  mx: "auto"
                }}>
                
                <Box
                  sx={{
                    width: { xs: "100%", lg: "226px" },
                    height: "56px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: "20px"
                  }}>
                  
                  <Box
                    sx={{
                      width: { xs: "40px", md: "56px" },
                      height: { xs: "40px", md: "56px" },
                      borderRadius: { xs: "10px", md: "14px" },
                      bgcolor: "#7B53A1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                    
                    <Icon sx={{ fontSize: { xs: FONT_SIZE.leadLarge, md: FONT_SIZE.cardHeading }, color: "#FFFFFF" }} />
                  </Box>

                  {showLevel &&
                  <Box
                    sx={{
                      height: "26px",
                      borderRadius: "999px",
                      bgcolor: "#FFEBE6",
                      px: "12px",
                      display: "flex",
                      alignItems: "center"
                    }}>
                    
                      <Typography
                      sx={{
                        fontFamily: FONT_FAMILY.body,
                        fontWeight: FONT_WEIGHT.regular,
                        fontSize: FONT_SIZE.caption,
                        lineHeight: LINE_HEIGHT.lessSmall,
                        letterSpacing: "0.48px",
                        color: "#EE4823"
                      }}>
                      
                        {item.level}
                      </Typography>
                    </Box>
                  }
                </Box>

                <Box
                  sx={{
                    width: { xs: "100%", lg: "226px" },
                    display: "flex",
                    flexDirection: "column"
                  }}>
                  
                  <Typography
                    sx={{
                      fontFamily: FONT_FAMILY.body,
                      fontWeight: FONT_WEIGHT.semiBold,
                      fontSize: { xs: FONT_SIZE.bodyLarge, lg: FONT_SIZE.lead },
                      lineHeight: { xs: "22px", lg: "25px" },
                      letterSpacing: "-0.18px",
                      color: "#1A1A1A",
                      minHeight: "50px",
                      display: "flex",
                      alignItems: "flex-start"
                    }}>
                    
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: "8px",
                      fontFamily: FONT_FAMILY.body,
                      fontWeight: FONT_WEIGHT.regular,
                      fontSize: { xs: FONT_SIZE.small, lg: FONT_SIZE.bodySmall },
                      lineHeight: { xs: LINE_HEIGHT.small, lg: "22px" },
                      color: "#676767",
                      minHeight: "88px"
                    }}>
                    
                    {item.description}
                  </Typography>
                </Box>

                {showDuration &&
                <Box
                  sx={{
                    mt: "auto",
                    pt: "16px",
                    width: { xs: "100%", lg: "226px" },
                    borderTop: "1px solid rgba(0,0,0,0.08)"
                  }}>
                  
                    <Typography
                    sx={{
                      fontFamily: FONT_FAMILY.body,
                      fontWeight: FONT_WEIGHT.regular,
                      fontSize: FONT_SIZE.small,
                      lineHeight: LINE_HEIGHT.small,
                      color: "#6E6E6E"
                    }}>
                    
                      {item.duration}
                    </Typography>
                  </Box>
                }
              </Box>);

          })}
        </Box>
      </Box>
    </Container>);

}
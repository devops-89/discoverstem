"use client";import { LINE_HEIGHT, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "@/utils/theme";

import PrimaryButton from "@/components/Widgets/PrimaryButton";
import { AdvisoryMember } from "@/utils/Types";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  data: AdvisoryMember;
  onReadMore: () => void;
}

export default function AdvisoryCard({ data, onReadMore }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: data.reverse ? "row-reverse" : "row"
        },
        width: "100%",
        maxWidth: "1160px",
        minHeight: { xs: "auto", md: "597px" },
        mx: "auto",
        borderRadius: { xs: "20px", md: "30px" },
        overflow: "hidden",
        backgroundColor: "#F4EFFA"
      }}>
      
   
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "452px" },
          height: { xs: "280px", sm: "400px", md: "480px", lg: "597px" },
          backgroundColor: "#C4C4C4",
          flexShrink: 0,
          "& img": {
            objectFit: { xs: "cover !important",

              sm: "cover !important",
              md: "cover !important",
              lg: "cover !important"
            },
            objectPosition: {
              xs: "top center !important",
              sm: "top center !important",
              md: "center center !important",
              lg: "top center !important"
            }
          }
        }}>
        
        <Image
          src={data.image}
          alt={data.name}
          fill
          sizes="100vw" />
      </Box>

   
      <Box
        sx={{
          minWidth: 0,
          flex: 1,
          px: { xs: 3, sm: 4, md: "40px" },
          py: { xs: 4, sm: 4, md: "40px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}>
        
        
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontSize: { xs: FONT_SIZE.small, md: FONT_SIZE.bodyLarge },
            fontWeight: FONT_WEIGHT.regular,
            lineHeight: LINE_HEIGHT.extraSmall,
            letterSpacing: { xs: "1.5px", md: "2.4px" },
            textTransform: "uppercase",
            color: "#7B53A1",
            mb: { xs: 1.5, md: 2 }
          }}>
          
          {data.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.title, sm: FONT_SIZE.cardHeading, md: FONT_SIZE.pageHeadingSmall },
            lineHeight: { xs: "28px", sm: "34px", md: LINE_HEIGHT.huge },
            letterSpacing: "-0.03em",
            color: "#111827",
            whiteSpace: "pre-line",
            mb: 1,
            maxWidth: "700px"
          }}>
          
          {data.name}
        </Typography>

        
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.body,
            fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.lead, md: FONT_SIZE.leadLarge },
            fontWeight: FONT_WEIGHT.regular,
            lineHeight: { xs: "22px", sm: LINE_HEIGHT.mediumLarge, md: "28px" },
            letterSpacing: "-0.03em",
            color: "#777777",
            mb: { xs: 1.5, md: 4 },
            maxWidth: "686px"
          }}>
          
          {data.role}
        </Typography>

       
        <Typography
          sx={{
            width: "100%",
            maxWidth: "668px",
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.lead, md: FONT_SIZE.title },
            lineHeight: { xs: LINE_HEIGHT.mediumLarge, sm: "30px", md: "36px" },
            letterSpacing: "-0.03em",
            color: "#000000",
            whiteSpace: "pre-line",
            overflowWrap: "break-word",
            wordBreak: "break-word",
            mb: { xs: 4, md: 6 },

            display: "-webkit-box",
            WebkitLineClamp: { xs: 4, sm: 5, md: "unset" },
            WebkitBoxOrient: "vertical",
            overflow: { xs: "hidden", md: "visible" }
          }}>
          
          {data.desc}
        </Typography>

      
        <PrimaryButton
          showIcon={false}
          onClick={onReadMore}
          sx={{
            width: { xs: "150px", md: "183px" },
            height: { xs: "44px", md: "56px" },
            borderRadius: "30px",
            px: { xs: "16px", md: "24px" },
            pr: { xs: "44px", md: "56px" },
            fontFamily: FONT_FAMILY.body,
            fontSize: { xs: FONT_SIZE.small, md: FONT_SIZE.bodyLarge },
            fontWeight: FONT_WEIGHT.medium,
            lineHeight: LINE_HEIGHT.extraSmall,
            letterSpacing: "-0.01em",
            justifyContent: "flex-start",
            position: "relative",
            mt: "auto"
          }}>
          
          Read Full Bio

          <Box
            sx={{
              position: "absolute",
              right: { xs: "4px", md: "8px" },
              top: "50%",
              transform: "translateY(-50%)",
              width: { xs: "36px", md: "40px" },
              height: { xs: "36px", md: "40px" },
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
            
            <ArrowOutwardIcon
              sx={{
                fontSize: { xs: FONT_SIZE.bodySmall, md: FONT_SIZE.bodyLarge },
                color: "#7B53A1"
              }} />
            
          </Box>
        </PrimaryButton>
      </Box>
    </Box>);

}
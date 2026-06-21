"use client";

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
          md: data.reverse ? "row-reverse" : "row",
        },
        width: "100%",
        maxWidth: "1160px",
        minHeight: { xs: "auto", md: "597px" },
        mx: "auto",
        borderRadius: { xs: "20px", md: "30px" },
        overflow: "hidden",
        backgroundColor: "#F4EFFA",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "452px" },
          // Allows the image to cover the full width of the card on mobile and tablets
          height: { xs: "360px", sm: "480px", md: "597px" },
          backgroundColor: "#C4C4C4",
          flexShrink: 0,
        }}
      >
        <Image
          src={data.image}
          alt={data.name}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "top center", // Ensures top of image isn't cut off when cropping
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          minWidth: 0,
          flex: 1,
          px: { xs: 3, sm: 4, md: "40px" },
          py: { xs: 4, sm: 4, md: "40px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "13px", md: "16px" },
            fontWeight: 400,
            lineHeight: "16px",
            letterSpacing: { xs: "1.5px", md: "2.4px" },
            textTransform: "uppercase",
            color: "#7B53A1",
            mb: { xs: 1.5, md: 2 },
          }}
        >
          {data.title}
        </Typography>

        {/* Name */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: { xs: "22px", sm: "28px", md: "48px" },
            lineHeight: { xs: "28px", sm: "34px", md: "62px" },
            letterSpacing: "-0.03em",
            color: "#111827",
            whiteSpace: "pre-line",
            mb: 1,
            maxWidth: "700px",
          }}
        >
          {data.name}
        </Typography>

        {/* Role */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "15px", sm: "18px", md: "20px" },
            fontWeight: 400,
            lineHeight: { xs: "22px", sm: "26px", md: "28px" },
            letterSpacing: "-0.03em",
            color: "#777777",
            mb: { xs: 1.5, md: 4 }, // Significantly reduced gap on mobile screens
            maxWidth: "686px",
          }}
        >
          {data.role}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            width: "100%",
            maxWidth: "668px",
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: { xs: "15px", sm: "18px", md: "22px" },
            lineHeight: { xs: "26px", sm: "30px", md: "36px" },
            letterSpacing: "-0.03em",
            color: "#000000",
            whiteSpace: "pre-line",
            overflowWrap: "break-word",
            wordBreak: "break-word",
            mb: { xs: 4, md: 6 },
            
            // Limit text lines on mobile so the card isn't excessively tall
            display: "-webkit-box",
            WebkitLineClamp: { xs: 4, sm: 5, md: "unset" },
            WebkitBoxOrient: "vertical",
            overflow: { xs: "hidden", md: "visible" },
          }}
        >
          {data.desc}
        </Typography>

        {/* Button */}
        <PrimaryButton
          showIcon={false}
          onClick={onReadMore}
          sx={{
            width: { xs: "150px", md: "183px" }, // Decreased button width on mobile
            height: { xs: "44px", md: "56px" }, // Smaller height on mobile
            borderRadius: "30px",
            px: { xs: "16px", md: "24px" },
            pr: { xs: "44px", md: "56px" },
            fontFamily: "Poppins",
            fontSize: { xs: "13px", md: "16px" },
            fontWeight: 500,
            lineHeight: "16px",
            letterSpacing: "-0.01em",
            justifyContent: "flex-start",
            position: "relative",
            mt: "auto",
          }}
        >
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
              justifyContent: "center",
            }}
          >
            <ArrowOutwardIcon
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#7B53A1",
              }}
            />
          </Box>
        </PrimaryButton>
      </Box>
    </Box>
  );
}
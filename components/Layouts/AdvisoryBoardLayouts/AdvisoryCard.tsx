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
        borderRadius: "30px",
        overflow: "hidden",
        backgroundColor: "#F4EFFA",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "452px" },
          height: { xs: "320px", md: "597px" },
          backgroundColor: "#C4C4C4",
          flexShrink: 0,
        }}
      >
        <Image
          src={data.image}
          alt={data.name}
          fill sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          minWidth:0,
          px: { xs: 3, md: "40px" },
          py: { xs: 3, md: "40px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "16px",
            letterSpacing: "2.4px",
            textTransform: "uppercase",
            color: "#7B53A1",
            mb: 2,
          }}
        >
          {data.title}
        </Typography>

        {/* Name */}
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: {
              xs: "32px",
              md: "48px",
            },
            lineHeight: {
              xs: "40px",
              md: "62px",
            },
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
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "-0.03em",
            color: "#777777",
            mb: 4,
            maxWidth: "686px",
          }}
        >
          {data.role}
        </Typography>
        <Typography
            sx={{
              width: "100%",
              maxWidth: "668px",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "22px",
              lineHeight: "36px",
              letterSpacing: "-0.03em",
              color: "#000000",
              whiteSpace: "pre-line",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              mb: 6,
            }}
          >
            {data.desc}
          </Typography>

        {/* Button */}
        <PrimaryButton
          showIcon={false}
          onClick={onReadMore}
          sx={{
            width: "183px",
            height: "56px",
            borderRadius: "30px",
            px: "24px",
            pr: "56px",
            fontFamily: "Poppins",
            fontSize: "16px",
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
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowOutwardIcon
              sx={{
                fontSize: "16px",
                color: "#7B53A1",
              }}
            />
          </Box>
        </PrimaryButton>
      </Box>
    </Box>
  );
}
"use client";

import { contactData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Typography } from "@mui/material";

const ContactData = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "600px" },

        mx: { xs: "auto", md: 0 },

        px: { xs: 2, sm: 3, md: 0 },
        pl: { lg: 14 },
      }}
    >
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontWeight: 600,
          fontSize: { xs: "20px", sm: "24px", md: "28px" },
          lineHeight: { xs: "30px", sm: "34px", md: "43px" },
          letterSpacing: "-0.03em",
          color: "#111827",
          mb: { xs: 2, md: 3 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {contactData.title}
      </Typography>

      <Typography
        sx={{
          whiteSpace: "pre-line",
          fontFamily: FONT_FAMILY.body,
          fontWeight: 400,
          fontSize: { xs: "14px", md: "21px" },
          lineHeight: { xs: "22px", md: "26px" },
          letterSpacing: "-0.01em",
          color: "#6B7280",
          mb: { xs: 3, md: 4 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {contactData.description}
      </Typography>

      {/* SECTIONS */}
      {contactData.sections.map((item, i) => (
        <Box
          key={i}
          sx={{
            mb: { xs: 2.5, md: 3.5 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* SECTION TITLE */}
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontWeight: 600,
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              lineHeight: { xs: "30px", sm: "34px", md: "43px" },
              color: "#111827",
              mb: 1,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              whiteSpace: "pre-line",
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              fontSize: { xs: "14px", md: "21px" },
              lineHeight: { xs: "22px", md: "26px" },
              color: "#6B7280",
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ContactData;
"use client";

import { contactData, contactInfoSessionNote } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Typography } from "@mui/material";

const ContactData = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "600px" },

        mx: { xs: "auto", md: 0 },
      }}
    >
      <Typography
        sx={{
          width: { xs: "100%", md: "484px" },
          height: { xs: "auto", md: "61px" },
          fontFamily: FONT_FAMILY.heading,
          fontWeight: 500,
          fontSize: { xs: "20px", sm: "24px", md: "28px" },
          lineHeight: { xs: "30px", sm: "34px", md: "43px" },
          letterSpacing: "-0.03em",
          color: "#111827",
          mb: { xs: 2, md: 6 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {contactData.title}
      </Typography>

      <Typography
        sx={{
          width: { xs: "100%", md: "526px" },
          height: { xs: "auto", md: "187px" },
          whiteSpace: "pre-line",
          fontFamily: FONT_FAMILY.body,
          fontWeight: 400,
          fontSize: { xs: "14px", md: "22px" },
          lineHeight: { xs: "22px", md: "43px" },
          letterSpacing: "-0.03em",
          color: "#777777",
          mb: { xs: 3, md: 8 },
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
              fontWeight: 500,
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              lineHeight: { xs: "30px", sm: "34px", md: "43px" },
              letterSpacing:"-0.03em",
              color: "#111827",
              mb: 3,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              whiteSpace: "pre-line",
              fontFamily: FONT_FAMILY.body,
              fontWeight: 400,
              fontSize: { xs: "14px", md: "22px" },
              lineHeight: { xs: "22px", md: "43px" },
              letterSpacing:"-0.03em",
              color: "#777777",
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}

      <Typography
        sx={{
          whiteSpace: "pre-line",
          fontFamily: FONT_FAMILY.body,
          fontWeight: 400,
          fontSize: { xs: "14px", md: "22px" },
          lineHeight: { xs: "22px", md: "43px" },
          letterSpacing:"-0.03em",
          color: "#777777",
          mt: { xs: 2, md: 3 },
        }}
      >
        {contactInfoSessionNote}
      </Typography>
    </Box>
  );
};

export default ContactData;
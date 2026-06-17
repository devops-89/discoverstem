"use client";

import { contactData, contactInfoSessionNote } from "@/assets/Generic-data";
import { Box, Typography } from "@mui/material";

// Font configurations: Poppins for body, Work Sans for titles
const titleStyle = {
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: 500,
    fontSize: { xs: "22px", md: "28px" },
    lineHeight: { xs: "32px", md: "43px" },
    letterSpacing: "-0.03em",
    color: "#111827",
};

const descStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    fontSize: { xs: "16px", md: "22px" },
    lineHeight: { xs: "30px", md: "43px" },
    letterSpacing: "-0.03em",
    color: "#777777",
};

const ContactData = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "526px" }, // Group width: 526px
        mx: { xs: "auto", md: 0 },
        display: "flex",
        flexDirection: "column",
      }}
    >
     
      <Typography
        sx={{
          ...titleStyle,
          width: { xs: "100%", md: "484px" },
          height: { xs: "auto", md: "61px" },
          mb: "45px", // Figma spacing between title and desc
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {contactData.title}
      </Typography>

    
      <Typography
        sx={{
          ...descStyle,
          width: { xs: "100%", md: "526px" },
          height: { xs: "auto", md: "187px" },
          whiteSpace: "pre-line",
          mb: "70px", // Figma spacing between desc and next title
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {contactData.description}
      </Typography>

    
      {contactData.sections.map((item, i) => (
        <Box
          key={i}
          sx={{
            mb: "45px", 
            textAlign: { xs: "center", md: "left" },
          }}
        >
        
          <Typography
            sx={{
              ...titleStyle,
              mb: "45px", 
            }}
          >
            {item.title}
          </Typography>

        
          <Typography
            sx={{
              ...descStyle,
              whiteSpace: "pre-line",
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}

    
      <Typography
        sx={{
          ...descStyle,
          whiteSpace: "pre-line",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {contactInfoSessionNote}
      </Typography>
    </Box>
  );
};

export default ContactData;
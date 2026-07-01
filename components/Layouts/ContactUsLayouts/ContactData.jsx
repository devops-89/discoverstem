"use client";import { FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { contactData, contactInfoSessionNote } from "@/assets/Generic-data";
import { Box, Typography } from "@mui/material";

const titleStyle = {
  fontFamily: FONT_FAMILY.heading,
  fontWeight: FONT_WEIGHT.medium,
  fontSize: { xs: FONT_SIZE.title, sm: FONT_SIZE.titleLarge, lg: FONT_SIZE.cardHeading },
  lineHeight: { xs: "32px", sm: "36px", lg: "43px" },
  letterSpacing: "-0.03em",
  color: "#111827"
};

const descStyle = {
  fontFamily: FONT_FAMILY.body,
  fontWeight: FONT_WEIGHT.regular,
  fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.lead, lg: FONT_SIZE.title },
  lineHeight: { xs: "28px", sm: "34px", lg: "43px" },
  letterSpacing: "-0.03em",
  color: "#777777"
};

const ContactData = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", lg: "526px" },
        mx: { xs: "auto", lg: 0 },
        display: "flex",
        flexDirection: "column"
      }}>
      
      <Typography
        sx={{
          ...titleStyle,
          width: { xs: "100%", lg: "484px" },
          height: "auto",
          mb: { xs: 4, lg: "45px" },
          textAlign: { xs: "center", lg: "left" }
        }}>
        
        {contactData.title}
      </Typography>

      <Typography
        sx={{
          ...descStyle,
          width: { xs: "100%", lg: "526px" },
          height: "auto",
          whiteSpace: "pre-line",
          mb: { xs: 5, lg: "70px" },
          textAlign: { xs: "center", lg: "left" }
        }}>
        
        {contactData.description}
      </Typography>

      {contactData.sections.map((item, i) =>
      <Box
        key={i}
        sx={{
          mb: { xs: 5, lg: "45px" },
          textAlign: { xs: "center", lg: "left" }
        }}>
        
          <Typography
          sx={{
            ...titleStyle,
            mb: { xs: 2, lg: "45px" }
          }}>
          
            {item.title}
          </Typography>

          <Typography
          sx={{
            ...descStyle,
            whiteSpace: "pre-line"
          }}>
          
            {item.text}
          </Typography>
        </Box>
      )}

      <Typography
        sx={{
          ...descStyle,
          whiteSpace: "pre-line",
          textAlign: { xs: "center", lg: "left" }
        }}>
        
        {contactInfoSessionNote}
      </Typography>
    </Box>);

};

export default ContactData;
"use client";

import { Container, Grid } from "@mui/material";
import ContactData from "./ContactData";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, lg: 7 },
        px: { xs: 3, lg: 4 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, lg: 6 }}
        alignItems="flex-start"
      >
        {/* 🔥 FIX: Uses lg: 6 so BOTH 768px AND 1024px are forced into the stacked layout (xs: 12). Only 1440px gets the 2-column split! */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <ContactData />
        </Grid>

        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center", // 🔥 FIX: Guarantees the form is perfectly horizontally centered when stacked!
          }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactSection;
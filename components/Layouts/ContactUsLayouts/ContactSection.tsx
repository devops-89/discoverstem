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
        <Grid size={{ xs: 12, lg: 6 }}>
          <ContactData />
        </Grid>

        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center", 
          }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactSection;
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
                py: { xs: 5, md: 7 },
                px: { xs: 3, md: 4 },
            }}
        >

        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="flex-start"
        >
          <Grid size={{xs:12,md:6}}>
            <ContactData />
          </Grid>

          <Grid
            size={{xs:12,md:6}}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "center" },
            }}
          >
            <ContactForm />
          </Grid>
        </Grid>
        

      </Container>
  );
};

export default ContactSection;
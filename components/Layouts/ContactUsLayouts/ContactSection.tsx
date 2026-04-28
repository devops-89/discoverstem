"use client";

import { Box, Container, Grid } from "@mui/material";
import ContactData from "./ContactData";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">

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
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <ContactForm />
          </Grid>
        </Grid>
        

      </Container>
    </Box>
  );
};

export default ContactSection;
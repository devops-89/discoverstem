"use client";
import React from "react";
import { Container, Grid, Typography, Stack, Box, Divider, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        bgcolor: "#111",
        color: "rgba(255,255,255,0.7)",
        pt: { xs: 8, lg: 10 },
        pb: { xs: 4, lg: 4 },
        px: { xs: 2, lg: 2 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, lg: 4 }}>
          
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", lg: "flex-start" },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <Box
                component="img"
                src="/logo-footer.png"
                alt="DiscoverSTEM Logo"
                sx={{ height: { xs: 50, lg: 60 }, mb: 3 }}
              />
              <Typography sx={{ lineHeight: 1.7, maxWidth: 320, mb: 4, fontSize: { xs: 14, lg: 15 } }}>
                Empowering young minds to innovate, create patents, and shape the
                future through world-class STEM education.
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ justifyContent: { xs: "center", lg: "flex-start" } }}>
                {[
                  "https://www.facebook.com/discoverstem",
                  "https://www.instagram.com/discoverstem",
                  "https://www.linkedin.com/company/discoverstem",
                  "https://www.youtube.com/discoverstem",
                  "https://twitter.com/discoverstem",
                ].map((link, idx) => (
                  <Box
                    key={idx}
                    component="a"
                    href={link}
                    target="_blank"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      transition: "all 0.2s",
                      "&:hover": { bgcolor: "#f8a51e", color: "#111" },
                    }}
                  >
                    <Box component="span" sx={{ fontSize: 18, fontWeight: idx === 0 ? 800 : 500 }}>
                      {idx === 0 && "f"}
                      {idx === 1 && "📸"}
                      {idx === 2 && "in"}
                      {idx === 3 && "▶"}
                      {idx === 4 && "𝕏"}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          
          <Grid size={{ xs: 6, sm: 4, lg: 2.5 }}>
            <Typography sx={{ color: "#fff", fontWeight: 700, mb: { xs: 2, lg: 3 }, fontSize: { xs: 16, lg: 17 } }}>
              Programs
            </Typography>
            <Stack spacing={{ xs: 1.5, lg: 2 }}>
              
              {[
                { label: "Summer Impact Program", href: "/programs/sip" },
                { label: "Ivy League Mentorship Program", href: "/programs/ilm" },
                { label: "DiscoverSTEM Innovation Program", href: "/programs/dip"},
                { label: "FAQ", href: "/programs/faq" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href} // 🔥 Linked here
                  underline="none"
                  sx={{
                    color: "inherit",
                    fontSize: { xs: 14, lg: 15 },
                    "&:hover": { color: "#f8a51e" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

         
          <Grid size={{ xs: 6, sm: 4, lg: 2.5 }}>
            <Typography sx={{ color: "#fff", fontWeight: 700, mb: { xs: 2, lg: 3 }, fontSize: { xs: 16, lg: 17 } }}>
              Quick Links
            </Typography>
            <Stack spacing={{ xs: 1.5, lg: 2 }}>
              {/* 🔥 Updated to object array so links can have specific URLs */}
              {[
                { label: "Patents", href: "/patents-granted" },
                { label: "Awards", href: "/awards-recognition" },
                { label: "News", href: "/media/category/more-news" },
                { label: "Innovation Day", href: "/events/innovation_day_2025" }
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href} // 🔥 Linked here
                  underline="none"
                  sx={{
                    color: "inherit",
                    fontSize: { xs: 14, lg: 15 },
                    "&:hover": { color: "#f8a51e" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

         
      
          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
               
                alignItems: { xs: "center", sm: "flex-start" },
                textAlign: { xs: "center", sm: "left" },
                mt: { xs: 2, sm: 0 },
              }}
            >
              <Typography sx={{ color: "#fff", fontWeight: 700, mb: 2.5, fontSize: { xs: 16, lg: 17 } }}>
                Contact
              </Typography>
              <Typography sx={{ mb: 3, fontSize: { xs: 14, lg: 15 } }}>
                Ready to start your innovation journey?
              </Typography>
              <Box
                component="a"
                href="/contact" // 🔥 Added a link to the contact button here
                sx={{
                  bgcolor: "#f8a51e",
                  color: "#111",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  textDecoration: "none", // Prevent underline on the button text
                  transition: "background-color 0.2s",
                  "&:hover": { bgcolor: "#e6951a" },
                  display: "inline-block", // Helps behave correctly as a link
                }}
              >
                Get in Touch
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: { xs: 6, lg: 8 }, mb: { xs: 3, lg: 4 }, borderColor: "rgba(255,255,255,0.1)" }} />

        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ textAlign: "center" }}
        >
          <Typography sx={{ fontSize: 14 }}>© 2026 DiscoverSTEM. All rights reserved.</Typography>
          <Stack direction="row" spacing={3} justifyContent="center">
          
            <Link
              href="/privacy-policy"
              underline="none"
              sx={{ color: "inherit", fontSize: 14, "&:hover": { color: "#fff" } }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              underline="none"
              sx={{ color: "inherit", fontSize: 14, "&:hover": { color: "#fff" } }}
            >
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
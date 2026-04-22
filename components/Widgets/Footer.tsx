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
        pt: 10,
        pb: 4,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 4 }}>
          {/* Column 1: Logo, Text, Socials */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src="/logo-footer.png"
              alt="DiscoverSTEM Logo"
              sx={{ height: 60, mb: 3 }}
            />
            <Typography sx={{ lineHeight: 1.7, maxWidth: 320, mb: 4, fontSize: 15 }}>
              Empowering young minds to innovate, create patents, and shape the
              future through world-class STEM education.
            </Typography>
            <Stack direction="row" spacing={1.5}>
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
          </Grid>

          {/* Column 2: Programs */}
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography sx={{ color: "#fff", fontWeight: 700, mb: 3, fontSize: 17 }}>
              Programs
            </Typography>
            <Stack spacing={2}>
              {[
                "Summer Impact Program",
                "Innovation Program",
                "Ivy League Mentorship",
                "Entrepreneurship Program",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    color: "inherit",
                    fontSize: 15,
                    "&:hover": { color: "#f8a51e" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Quick Links */}
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography sx={{ color: "#fff", fontWeight: 700, mb: 3, fontSize: 17 }}>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {["Patents", "Awards", "News", "Innovation Day"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    color: "inherit",
                    fontSize: 15,
                    "&:hover": { color: "#f8a51e" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ color: "#fff", fontWeight: 700, mb: 2.5, fontSize: 17 }}>
              Contact
            </Typography>
            <Typography sx={{ mb: 3, fontSize: 15 }}>
              Ready to start your innovation journey?
            </Typography>
            <Box
              component="button"
              sx={{
                bgcolor: "#f8a51e",
                color: "#111",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                borderRadius: 2,
                px: 4,
                py: 1.5,
                "&:hover": { bgcolor: "#e6951a" },
              }}
            >
              Get in Touch
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={2}
        >
          <Typography sx={{ fontSize: 14 }}>© 2026 DiscoverSTEM. All rights reserved.</Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              underline="none"
              sx={{ color: "inherit", fontSize: 14, "&:hover": { color: "#fff" } }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
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

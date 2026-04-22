"use client";
import React from "react";
import { Box, Stack, Typography, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() || "";

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Media Center", href: "/media" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        top: 32,
        left: 0,
        right: 0,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, md: 8 },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "999px",
          px: "40.5px",
          height: "68px",
          width: "1196px",
          maxWidth: "calc(100% - 32px)",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo-discoverstem.png"
            alt="DiscoverSTEM Logo"
            width={100}
            height={44}
            style={{ objectFit: "contain", height: "auto", maxHeight: "100%" }}
            priority
          />
        </Link>
        <Stack
          direction="row"
          spacing={{ xs: 2, lg: 4 }}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link key={item.label} href={item.href} passHref legacyBehavior>
                <MuiLink
                  underline="none"
                  sx={{
                    color: isActive ? "#000" : "#666",
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "15px",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "#000",
                    },
                  }}
                >
                  {item.label}
                </MuiLink>
              </Link>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
}

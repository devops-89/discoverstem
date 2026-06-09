"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname() || "";

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>,
    label: string
  ) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => {
      setAnchorEl(null);
      setActiveMenu(null);
    }, 80);
  };

  const handleEnterMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

 const navItems = [
  {
    label: "About Us",
    items: [
      { label: "Advisory Board", href: "/about/advisory-board" },
      { label: "Our Founder", href: "/about/founder" },
      { label: "Panel Of Experts", href: "/about/panel-of-experts" },
      {
        label: "DiscoverSTEM Foundation",
        href: "/about/discoverstem-foundation",
      },
    ],
  },
  {
    label: "Programs",
    items: [
      { label: "SIP", href: "/programs/sip" },
      { label: "ILM", href: "/programs/ilm" },
      { label: "DIP", href: "/programs/dip" },
    ],
  },
  {
    label: "Opportunities",
    items: [
      { label: "Internships", href: "/opportunities" },
      { label: "Careers", href: "/opportunities/careers" },
    ],
  },
  {
    label: "Success Stories",
    items: [
      {
        label: "Patents Granted",
        href: "/success-stories/patents-granted",
      },
      {
        label: "College Acceptance",
        href: "/success-stories/college-acceptance",
      },
      {
        label: "Awards & Recognition",
        href: "/success-stories/awards-recognition",
      },
      {
        label: "Student Innovations",
        href: "/success-stories/student-innovations",
      },
      {
        label: "Impact",
        href: "/success-stories/impact",
      },
      {
        label: "UVSET",
        href: "/success-stories/uvset",
      },
      {
        label: "Young Investors",
        href: "/success-stories/young-investors",
      },
    ],
  },
  { label: "Media Center", href: "/media" },
  {
    label: "Events",
    items: [
      {
        label: "Meeting With Nobel Laureates",
        href: "/events/meeting_with_nobel_laureates",
      },
    ],
  },
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
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center",opacity:"100%" }}>
          <Image
            src="/logo-discoverstem.png"
            alt="logo"
            width={140}
            height={80}
            quality={100}
            priority
          />
        </Link>

        {/* Nav */}
        <Stack
          direction="row"
          spacing={{ xs: 2, lg: 4 }}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navItems.map((item) => {
            const isDropdown = item.items;

            if (isDropdown) {
              return (
                <Box
                  key={item.label}
                  onMouseEnter={(e) => handleOpen(e, item.label)}
                  onMouseLeave={handleClose}
                >
                  {/* Label */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#666",
                        fontSize: "15px",
                        "&:hover": { color: "#000" },
                      }}
                    >
                      {item.label}
                    </Typography>

                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: 18,
                        color:
                          activeMenu === item.label
                            ? "#000"
                            : "#666",
                        transform:
                          activeMenu === item.label
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "0.25s",
                      }}
                    />
                  </Box>

                  {/* Dropdown */}
                  <Popover
                    open={activeMenu === item.label}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    disableScrollLock
                    disableRestoreFocus
                    disableAutoFocus
                    disableEnforceFocus
                    sx={{
                      pointerEvents: "none",
                      "& .MuiPopover-paper": {
                        pointerEvents: "auto",
                      },
                    }}
                    slotProps={{
                      paper: {
                        onMouseEnter: () =>
                          handleEnterMenu(item.label),
                        onMouseLeave: handleClose,
                        sx: {
                          mt: 1,
                          borderRadius: 2,
                          minWidth: 180,
                          boxShadow:
                            "0px 10px 30px rgba(0,0,0,0.08)",
                          p: 1,
                        },
                      },
                    }}
                  >
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          sx={{
                            px: 2,
                            py: 1.2,
                            borderRadius: 1,
                            "&:hover": {
                              background: "#f5f5f5",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#666",
                              "&:hover": { color: "#000" },
                            }}
                          >
                            {sub.label}
                          </Typography>
                        </Box>
                      </Link>
                    ))}
                  </Popover>
                </Box>
              );
            }

            // normal links
            const isActive = pathname.startsWith(item.href || "");

            return (
              <Link
                key={item.label}
                href={item.href!}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: isActive ? "#000" : "#666",
                    fontSize: "15px",
                    "&:hover": { color: "#000" },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
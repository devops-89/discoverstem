"use client";


import { HEADER_DATA } from "@/assets/Generic-data";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Collapse,
  Drawer,
  IconButton,
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

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, label: string) => {
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

  return (
    <>
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
            px: { xs: 2, md: "40.5px" },
            height: { xs: "60px", md: "68px" },
            width: "1196px",
            maxWidth: "calc(100% - 32px)",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo-discoverstem.png"
              alt="logo"
              width={140}
              height={80}
              quality={100}
              priority
              style={{ width: "120px", height: "auto" }}
            />
          </Link>

          <Stack
            direction="row"
            spacing={{ md: 2, lg: 4 }}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {HEADER_DATA.map((item) => {
              if (item.items) {
                return (
                  <Box
                    key={item.label}
                    onMouseEnter={(e) => handleOpen(e, item.label)}
                    onMouseLeave={handleClose}
                  >
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
                          color: activeMenu === item.label ? "#000" : "#666",
                          fontSize: "15px",
                          "&:hover": { color: "#000" },
                        }}
                      >
                        {item.label}
                      </Typography>

                      <KeyboardArrowDownIcon
                        sx={{
                          fontSize: 18,
                          color: activeMenu === item.label ? "#000" : "#666",
                          transform:
                            activeMenu === item.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "0.25s",
                        }}
                      />
                    </Box>

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
                          onMouseEnter: () => handleEnterMenu(item.label),
                          onMouseLeave: handleClose,
                          sx: {
                            mt: 1,
                            borderRadius: 2,
                            minWidth: 230,
                            boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
                            p: 1,
                          },
                        },
                      }}
                    >
                      {item.items.map((sub) =>
                        sub.items ? (
                          <Box key={sub.label}>
                            <Typography
                              sx={{
                                px: 2,
                                py: 1,
                                fontWeight: 600,
                                color: "#111827",
                                fontSize: "14px",
                              }}
                            >
                              {sub.label}
                            </Typography>

                            {sub.items.map((nested) => (
                              <Link
                                key={nested.label}
                                href={nested.href!}
                                style={{ textDecoration: "none" }}
                              >
                                <Box
                                  sx={{
                                    pl: 4,
                                    pr: 2,
                                    py: 1,
                                    borderRadius: 1,
                                    "&:hover": {
                                      background: "#f5f5f5",
                                    },
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: "#666",
                                      fontSize: "14px",
                                      "&:hover": { color: "#000" },
                                    }}
                                  >
                                    {nested.label}
                                  </Typography>
                                </Box>
                              </Link>
                            ))}
                          </Box>
                        ) : (
                          <Link
                            key={sub.label}
                            href={sub.href!}
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
                                  fontSize: "14px",
                                  "&:hover": { color: "#000" },
                                }}
                              >
                                {sub.label}
                              </Typography>
                            </Box>
                          </Link>
                        )
                      )}
                    </Popover>
                  </Box>
                );
              }

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

          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#111",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Box>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "85%",
            maxWidth: "360px",
            p: 3,
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo-discoverstem.png"
              alt="logo"
              width={130}
              height={70}
              style={{ width: "120px", height: "auto" }}
            />
          </Link>

          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box sx={{ mt: 4 }}>
          {HEADER_DATA.map((item) => {
            if (!item.items) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  style={{ textDecoration: "none" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Typography
                    sx={{
                      py: 1.6,
                      fontSize: "16px",
                      color: pathname.startsWith(item.href || "")
                        ? "#000"
                        : "#555",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              );
            }

            return (
              <Box key={item.label}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === item.label ? null : item.label
                    )
                  }
                  sx={{
                    py: 1.6,
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <Typography sx={{ fontSize: "16px", color: "#555" }}>
                    {item.label}
                  </Typography>

                  <KeyboardArrowDownIcon
                    sx={{
                      transform:
                        openMobileMenu === item.label
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "0.25s",
                    }}
                  />
                </Stack>

                <Collapse in={openMobileMenu === item.label}>
                  <Box sx={{ pl: 2, py: 1 }}>
                    {item.items.map((sub) =>
                      sub.items ? (
                        <Box key={sub.label}>
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            onClick={() =>
                              setOpenNestedMenu(
                                openNestedMenu === sub.label ? null : sub.label
                              )
                            }
                            sx={{ py: 1.2, cursor: "pointer" }}
                          >
                            <Typography
                              sx={{
                                fontSize: "15px",
                                fontWeight: 600,
                                color: "#222",
                              }}
                            >
                              {sub.label}
                            </Typography>

                            <KeyboardArrowDownIcon
                              sx={{
                                fontSize: 18,
                                transform:
                                  openNestedMenu === sub.label
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                transition: "0.25s",
                              }}
                            />
                          </Stack>

                          <Collapse in={openNestedMenu === sub.label}>
                            <Box sx={{ pl: 2 }}>
                              {sub.items.map((nested) => (
                                <Link
                                  key={nested.label}
                                  href={nested.href!}
                                  style={{ textDecoration: "none" }}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <Typography
                                    sx={{
                                      py: 1,
                                      fontSize: "14px",
                                      color: "#666",
                                    }}
                                  >
                                    {nested.label}
                                  </Typography>
                                </Link>
                              ))}
                            </Box>
                          </Collapse>
                        </Box>
                      ) : (
                        <Link
                          key={sub.label}
                          href={sub.href!}
                          style={{ textDecoration: "none" }}
                          onClick={() => setMobileOpen(false)}
                        >
                          <Typography
                            sx={{
                              py: 1.2,
                              fontSize: "15px",
                              color: "#666",
                            }}
                          >
                            {sub.label}
                          </Typography>
                        </Link>
                      )
                    )}
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Box>
      </Drawer>
    </>
  );
}
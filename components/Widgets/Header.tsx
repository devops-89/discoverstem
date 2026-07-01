"use client";

// 🔥 Imports the data from your Generic-data file
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
  Typography } from
"@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname() || "";

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);
  const [openDesktopNestedMenu, setOpenDesktopNestedMenu] = useState<string | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => {
      setAnchorEl(null);
      setActiveMenu(null);
      setOpenDesktopNestedMenu(null);
    }, 80);
  };

  const handleEnterMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobileMenu(null);
    setOpenNestedMenu(null);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 32,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          px: { xs: 1, md: 8 }
        }}>
        
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "#fff",
            backdropFilter: isScrolled ? "blur(16px)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
            boxShadow: isScrolled ? "0px 10px 30px rgba(0,0,0,0.08)" : "none",
            transition: "all 0.3s ease",

            borderRadius: "999px",
            px: { xs: 2, md: "40.5px" },
            height: { xs: "45px", md: "68px" },
            width: "1196px",
            maxWidth: "calc(100% - 32px)"
          }}>
          
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: { xs: "70px", md: "100px", lg: "120px" }, display: "flex" }}>
              <Image
                src="/logo-discoverstem.png"
                alt="logo"
                width={140}
                height={80}
                quality={100}
                priority
                style={{ width: "100%", height: "auto" }} />
              
            </Box>
          </Link>

         
          <Stack
            direction="row"
            spacing={{ md: 2, lg: 4 }}
            alignItems="center"
            sx={{ display: { xs: "none", lg: "flex" } }}>
            
            {HEADER_DATA.map((item) => {
              if (item.items) {
                return (
                  <Box
                    key={item.label}
                    onMouseEnter={(e) => handleOpen(e, item.label)}
                    onMouseLeave={handleClose}>
                    
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        cursor: "pointer"
                      }}>
                      
                      <Typography
                        sx={{
                          color: activeMenu === item.label ? "#000" : "#666",
                          fontSize: "15px",
                          "&:hover": { color: "#000" }
                        }}>
                        
                        {item.label}
                      </Typography>

                      <KeyboardArrowDownIcon
                        sx={{
                          fontSize: 18,
                          color: activeMenu === item.label ? "#000" : "#666",
                          transform:
                          activeMenu === item.label ?
                          "rotate(180deg)" :
                          "rotate(0deg)",
                          transition: "0.25s"
                        }} />
                      
                    </Box>

                    <Popover
                      open={activeMenu === item.label}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                      transformOrigin={{ vertical: "top", horizontal: "center" }}
                      disableScrollLock
                      disableRestoreFocus
                      disableAutoFocus
                      disableEnforceFocus
                      sx={{
                        pointerEvents: "none",
                        "& .MuiPopover-paper": {
                          pointerEvents: "auto"
                        }
                      }}
                      slotProps={{
                        paper: {
                          onMouseEnter: () => handleEnterMenu(item.label),
                          onMouseLeave: handleClose,
                          sx: {
                            mt: 1,
                            borderRadius: 2,
                            minWidth: 260,
                            boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
                            p: 1,
                            backgroundColor: "#fff",
                            overflow: "visible"
                          }
                        }
                      }}>
                      
                      {item.items.map((sub) =>
                      sub.items ?
                      <Box
                        key={sub.label}
                        onMouseEnter={() => setOpenDesktopNestedMenu(sub.label)}
                        sx={{ position: "relative" }}>
                        
                            <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDesktopNestedMenu(
                              openDesktopNestedMenu === sub.label ? null : sub.label
                            );
                          }}
                          sx={{
                            px: 2,
                            py: 1.2,
                            cursor: "pointer",
                            borderRadius: 1,
                            "&:hover": { background: "#7B53A1" },
                            "&:hover .menu-text": { color: "#FFFFFF" },
                            "&:hover .menu-icon": { color: "#FFFFFF" },
                            // Keep it purple if the flyout is currently open
                            background: openDesktopNestedMenu === sub.label ? "#7B53A1" : "transparent"
                          }}>
                          
                              <Typography
                            className="menu-text"
                            sx={{
                              color: openDesktopNestedMenu === sub.label ? "#FFFFFF" : "#666",
                              fontSize: "14px",
                              transition: "0.2s"
                            }}>
                            
                                {sub.label}
                              </Typography>
                              <KeyboardArrowDownIcon
                            className="menu-icon"
                            sx={{
                              fontSize: 18,
                              color: openDesktopNestedMenu === sub.label ? "#FFFFFF" : "#666",
                              transform: "rotate(-90deg)",
                              transition: "0.2s"
                            }} />
                          
                            </Stack>

                            {openDesktopNestedMenu === sub.label &&
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: "100%",
                            pl: "20px",
                            zIndex: 100
                          }}>
                          
                                <Box
                            sx={{
                              backgroundColor: "#fff",
                              boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
                              borderRadius: 2,
                              p: 1,
                              minWidth: 300
                            }}>
                            
                                  {sub.items.map((nested) =>
                            nested.href ?
                            <Link
                              key={nested.label}
                              href={nested.href}
                              style={{ textDecoration: "none" }}
                              onClick={handleClose}>
                              
                                        <Box
                                sx={{
                                  px: 2,
                                  py: 1.2,
                                  borderRadius: 1,
                                  "&:hover": { background: "#7B53A1" },
                                  "&:hover .menu-text": { color: "#FFFFFF" }
                                }}>
                                
                                          <Typography
                                  className="menu-text"
                                  sx={{ color: "#666", fontSize: "14px", transition: "0.2s" }}>
                                  
                                            {nested.label}
                                          </Typography>
                                        </Box>
                                      </Link> :
                            null
                            )}
                                </Box>
                              </Box>
                        }
                          </Box> :
                      sub.href ?
                      <Link
                        key={sub.label}
                        href={sub.href}
                        style={{ textDecoration: "none" }}
                        onClick={handleClose}
                        onMouseEnter={() => setOpenDesktopNestedMenu(null)}>
                        
                            <Box
                          sx={{
                            px: 2,
                            py: 1.2,
                            borderRadius: 1,
                            "&:hover": {
                              background: "#7B53A1"
                            },
                            "&:hover .menu-text": {
                              color: "#FFFFFF"
                            }
                          }}>
                          
                              <Typography
                            className="menu-text"
                            sx={{
                              color: "#666",
                              fontSize: "14px",
                              transition: "0.2s"
                            }}>
                            
                                {sub.label}
                              </Typography>
                            </Box>
                          </Link> :
                      null
                      )}
                    </Popover>
                  </Box>);

              }

              if (!item.href) return null;

              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ textDecoration: "none" }}>
                  
                  <Typography
                    sx={{
                      color: isActive ? "#000" : "#666",
                      fontSize: "15px",
                      "&:hover": { color: "#000" }
                    }}>
                    
                    {item.label}
                  </Typography>
                </Link>);

            })}
          </Stack>

         
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: "flex", lg: "none" },
              color: "#666"
            }}>
            
            <MenuIcon sx={{ fontSize: { xs: 30, sm: 32, md: 36 } }} />
          </IconButton>
        </Stack>
      </Box>

     
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeMobileMenu}
        PaperProps={{
          sx: {
            width: "85%",
            maxWidth: "360px",
            p: 3,
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px"
          }
        }}>
        
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Link href="/" onClick={closeMobileMenu} style={{ display: "flex" }}>
            <Box sx={{ width: "100px", display: "flex" }}>
              <Image
                src="/logo-discoverstem.png"
                alt="logo"
                width={130}
                height={70}
                style={{ width: "100%", height: "auto" }} />
              
            </Box>
          </Link>

          <IconButton onClick={closeMobileMenu}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box sx={{ mt: 4 }}>
          {HEADER_DATA.map((item) => {
            if (!item.items) {
              if (!item.href) return null;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ textDecoration: "none" }}
                  onClick={closeMobileMenu}>
                  
                  <Typography
                    sx={{
                      py: 1.6,
                      fontSize: "16px",
                      color: pathname.startsWith(item.href) ? "#000" : "#555",
                      borderBottom: "1px solid #eee"
                    }}>
                    
                    {item.label}
                  </Typography>
                </Link>);

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
                    borderBottom: "1px solid #eee"
                  }}>
                  
                  <Typography sx={{ fontSize: "16px", color: "#555" }}>
                    {item.label}
                  </Typography>

                  <KeyboardArrowDownIcon
                    sx={{
                      transform:
                      openMobileMenu === item.label ?
                      "rotate(180deg)" :
                      "rotate(0deg)",
                      transition: "0.25s"
                    }} />
                  
                </Stack>

                <Collapse in={openMobileMenu === item.label}>
                  <Box sx={{ pl: 2, py: 1 }}>
                    {item.items.map((sub) =>
                    sub.items ?
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
                        sx={{ py: 1.2, cursor: "pointer" }}>
                        
                            <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "#222"
                          }}>
                          
                              {sub.label}
                            </Typography>

                            <KeyboardArrowDownIcon
                          sx={{
                            fontSize: 18,
                            transform:
                            openNestedMenu === sub.label ?
                            "rotate(180deg)" :
                            "rotate(0deg)",
                            transition: "0.25s"
                          }} />
                        
                          </Stack>

                          <Collapse in={openNestedMenu === sub.label}>
                            <Box sx={{ pl: 2 }}>
                              {sub.items.map((nested) =>
                          nested.href ?
                          <Link
                            key={nested.label}
                            href={nested.href}
                            style={{ textDecoration: "none" }}
                            onClick={closeMobileMenu}>
                            
                                    <Typography
                              sx={{
                                py: 1,
                                fontSize: "14px",
                                color: "#666"
                              }}>
                              
                                      {nested.label}
                                    </Typography>
                                  </Link> :
                          null
                          )}
                            </Box>
                          </Collapse>
                        </Box> :
                    sub.href ?
                    <Link
                      key={sub.label}
                      href={sub.href}
                      style={{ textDecoration: "none" }}
                      onClick={closeMobileMenu}>
                      
                          <Typography
                        sx={{
                          py: 1.2,
                          fontSize: "15px",
                          color: "#666"
                        }}>
                        
                            {sub.label}
                          </Typography>
                        </Link> :
                    null
                    )}
                  </Box>
                </Collapse>
              </Box>);

          })}
        </Box>
      </Drawer>
    </>);

}
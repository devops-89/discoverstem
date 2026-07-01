"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { Box, Container, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Props {
  categories?: any[];
  onCategoryClick?: (id: string) => void;
  search?: string;
  setSearch?: (v: string) => void;
}

export default function MediaCategoryNav({
  categories = [],
  onCategoryClick,
  search = "",
  setSearch
}: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname() || "";
  const desktopInputRef = useRef<HTMLInputElement>(null);

  const getActiveFromPath = () => {
    if (pathname === "/media" || pathname === "/") return "home";
    if (pathname.includes("/media/category/")) {
      const parts = pathname.split("/");
      return parts[parts.length - 1];
    }
    if (pathname.includes("/contact")) return "contact-us";
    return "home";
  };

  const [active, setActive] = useState(getActiveFromPath());
  const [mobileCatIndex, setMobileCatIndex] = useState(0);
  const [tabletStartIndex, setTabletStartIndex] = useState(0);

  useEffect(() => {
    const newActive = getActiveFromPath();
    setActive(newActive);

    if (categories && categories.length > 0) {
      const idx = categories.findIndex((c) => c.sectionId === newActive);
      if (idx !== -1) {
        setMobileCatIndex(idx);

        if (categories.length > 3) {
          if (idx >= categories.length - 3) {
            setTabletStartIndex(categories.length - 3);
          } else {
            setTabletStartIndex(idx);
          }
        } else {
          setTabletStartIndex(0);
        }
      } else {
        setMobileCatIndex(0);
        setTabletStartIndex(0);
      }
    }
  }, [pathname, categories]);

  useEffect(() => {
    if (isSearchOpen && desktopInputRef.current) {
      desktopInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleNavClick = (item: any) => {
    if (!item) return;
    setActive(item.sectionId);

    if (typeof onCategoryClick === "function") {
      onCategoryClick(item.sectionId);
    }
  };

  const handleMobilePrev = () => {
    if (!categories || categories.length === 0) return;
    setMobileCatIndex((prev) => prev === 0 ? categories.length - 1 : prev - 1);
  };

  const handleMobileNext = () => {
    if (!categories || categories.length === 0) return;
    setMobileCatIndex((prev) => prev === categories.length - 1 ? 0 : prev + 1);
  };

  const handleTabletPrev = () => {
    if (!categories || categories.length <= 3) return;
    setTabletStartIndex((prev) => prev === 0 ? categories.length - 3 : prev - 1);
  };

  const handleTabletNext = () => {
    if (!categories || categories.length <= 3) return;
    setTabletStartIndex((prev) => prev >= categories.length - 3 ? 0 : prev + 1);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: { xs: 4, lg: "60px" },
        pb: { xs: 4, lg: "40px" }
      }}>
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}>
        
       
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            width: "100%",
            maxWidth: "1233px",
            height: "40px"
          }}>
          
          
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "46px",
              width: "100%",
              opacity: isSearchOpen ? 0 : 1,
              visibility: isSearchOpen ? "hidden" : "visible",
              transition: "opacity 0.2s ease",
              pointerEvents: isSearchOpen ? "none" : "auto"
            }}>
            
            {categories.map((item) =>
            <Box
              key={item.sectionId}
              onClick={() => handleNavClick(item)}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                cursor: "pointer",
                position: "relative",
                "&:hover .home-dropdown": {
                  opacity: 1,
                  visibility: "visible",
                  transform: "translateY(0)"
                }
              }}>
              
                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.body,
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000",
                  textDecoration: active === item.sectionId ? "underline" : "none",
                  textUnderlineOffset: "4px",
                  whiteSpace: "nowrap"
                }}>
                
                  {item.label}
                </Typography>
                
                {item.label === "Home" &&
              <>
                    <KeyboardArrowDownIcon sx={{ color: "#000000", fontSize: "18px", ml: "4px" }} />
                    <Box
                  className="home-dropdown"
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "-20px",
                    bgcolor: "#fff",
                    boxShadow: "0px 8px 30px rgba(0,0,0,0.12)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translateY(10px)",
                    transition: "all 0.3s ease",
                    zIndex: 100,
                    minWidth: "160px",
                    mt: "8px"
                  }}>
                  
                      <Box
                    component="a"
                    href="/media"
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      display: "block",
                      textDecoration: "none",
                      color: "#000",
                      p: "14px 20px",
                      fontFamily: FONT_FAMILY.body,
                      fontSize: "14px",
                      borderBottom: "1px solid #eee",
                      "&:hover": { bgcolor: "#F5F5F5", color: "#7B53A1" }
                    }}>
                    
                        Media Center
                      </Box>
                      <Box
                    component="a"
                    href="/"
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      display: "block",
                      textDecoration: "none",
                      color: "#000",
                      p: "14px 20px",
                      fontFamily: FONT_FAMILY.body,
                      fontSize: "14px",
                      "&:hover": { bgcolor: "#F5F5F5", color: "#7B53A1" }
                    }}>
                    
                        DiscoverSTEM
                      </Box>
                    </Box>
                  </>
              }
              </Box>
            )}

            <IconButton
              onClick={() => setIsSearchOpen(true)}
              disableRipple
              sx={{ p: 0, width: "24px", height: "24px", color: "#000000", "&:hover": { backgroundColor: "transparent" } }}>
              
              <SearchIcon sx={{ fontSize: "24px" }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              opacity: isSearchOpen ? 1 : 0,
              visibility: isSearchOpen ? "visible" : "hidden",
              transition: "opacity 0.3s ease",
              pointerEvents: isSearchOpen ? "auto" : "none",
              zIndex: 10
            }}>
            
            <IconButton
              onClick={() => setIsSearchOpen(false)}
              disableRipple
              sx={{ p: 0, width: "24px", height: "24px", color: "#000000", "&:hover": { backgroundColor: "transparent" } }}>
              
              <MenuIcon sx={{ fontSize: "24px" }} />
            </IconButton>

            <Box
              sx={{
                flex: 1,
                ml: 2,
                border: "1px solid #ccc",
                borderRadius: "20px",
                bgcolor: "#fff",
                height: "36px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center"
              }}>
              
              <InputBase
                inputRef={desktopInputRef}
                placeholder="Search news..."
                value={search}
                onChange={(e) => {
                  if (typeof setSearch === "function") {
                    setSearch(e.target.value);
                  }
                }}
                sx={{ px: 2, width: "100%", height: "100%", fontFamily: FONT_FAMILY.body, fontSize: "14px" }} />
              
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: 3
          }}>
          
        
          <Box
            sx={{
              display: "flex",
              "@media (min-width: 768px)": {
                display: "none"
              },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: 1
            }}>
            
            <IconButton onClick={handleMobilePrev} sx={{ color: "#000" }}>
              <KeyboardArrowLeftIcon />
            </IconButton>
            
            <Typography
              onClick={() => handleNavClick(categories[mobileCatIndex])}
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontWeight: 400,
                fontSize: "16px",
                color: "#000",
                width: "200px",
                textAlign: "center",
                cursor: "pointer",
                textDecoration: active === categories[mobileCatIndex]?.sectionId ? "underline" : "none",
                textUnderlineOffset: "4px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}>
              
              {categories.length > 0 ? categories[mobileCatIndex]?.label : ""}
            </Typography>

            <IconButton onClick={handleMobileNext} sx={{ color: "#000" }}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>

         
          <Box
            sx={{
              display: "none",
              "@media (min-width: 768px)": {
                display: "flex"
              },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              width: "100%"
            }}>
            
            <IconButton onClick={handleTabletPrev} sx={{ color: "#000", flexShrink: 0 }}>
              <KeyboardArrowLeftIcon />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                width: "550px"
              }}>
              
              {categories.slice(tabletStartIndex, tabletStartIndex + 3).map((item) =>
              <Box
                key={item.sectionId}
                onClick={() => handleNavClick(item)}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  position: "relative",
                  "&:hover .home-dropdown": {
                    opacity: 1,
                    visibility: "visible",
                    transform: "translateY(0)"
                  }
                }}>
                
                  <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.body,
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#000000",
                    textDecoration: active === item.sectionId ? "underline" : "none",
                    textUnderlineOffset: "4px",
                    whiteSpace: "nowrap"
                  }}>
                  
                    {item.label}
                  </Typography>
                  
                  {item.label === "Home" &&
                <>
                      <KeyboardArrowDownIcon sx={{ color: "#000000", fontSize: "18px", ml: "4px" }} />
                      <Box
                    className="home-dropdown"
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: "-20px",
                      bgcolor: "#fff",
                      boxShadow: "0px 8px 30px rgba(0,0,0,0.12)",
                      borderRadius: "12px",
                      overflow: "hidden",
                      opacity: 0,
                      visibility: "hidden",
                      transform: "translateY(10px)",
                      transition: "all 0.3s ease",
                      zIndex: 100,
                      minWidth: "160px",
                      mt: "8px"
                    }}>
                    
                        <Box
                      component="a"
                      href="/media"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        display: "block",
                        textDecoration: "none",
                        color: "#000",
                        p: "14px 20px",
                        fontFamily: FONT_FAMILY.body,
                        fontSize: "14px",
                        borderBottom: "1px solid #eee",
                        "&:hover": { bgcolor: "#F5F5F5", color: "#7B53A1" }
                      }}>
                      
                          Media Center
                        </Box>
                        <Box
                      component="a"
                      href="/"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        display: "block",
                        textDecoration: "none",
                        color: "#000",
                        p: "14px 20px",
                        fontFamily: FONT_FAMILY.body,
                        fontSize: "14px",
                        "&:hover": { bgcolor: "#F5F5F5", color: "#7B53A1" }
                      }}>
                      
                          DiscoverSTEM
                        </Box>
                      </Box>
                    </>
                }
                </Box>
              )}
            </Box>

            <IconButton onClick={handleTabletNext} sx={{ color: "#000", flexShrink: 0 }}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>

       
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              border: "1px solid #ccc",
              borderRadius: "24px",
              bgcolor: "#fff",
              height: "44px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              px: 2
            }}>
            
            <SearchIcon sx={{ color: "#000", mr: 1, fontSize: "20px" }} />
            <InputBase
              placeholder="Search news..."
              value={search}
              onChange={(e) => {
                if (typeof setSearch === "function") {
                  setSearch(e.target.value);
                }
              }}
              sx={{
                flex: 1,
                fontFamily: FONT_FAMILY.body,
                fontSize: "14px",
                width: "100%"
              }} />
            
          </Box>
        </Box>

      </Box>
    </Container>);

}
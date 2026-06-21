"use client";

import { MediaCategoryItem } from "@/utils/Types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, Typography } from "@mui/material";

interface MediaCategoryNavProps {
  categories: MediaCategoryItem[];
  onCategoryClick: (sectionId: string) => void;
  search: string;
  setSearch: (value: string) => void;
}

export default function MediaCategoryNav({
  categories,
  onCategoryClick,
  search,
  setSearch,
}: MediaCategoryNavProps) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1233px",
        mx: "auto",
        // 🔥 FIX: Added md: 4 for iPad edges. 1440px locked to 0!
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 3, md: 3, lg: 4 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // 🔥 FIX: Shifted gap to lg.
        gap: { xs: 2, lg: "32px" },
        flexWrap: { xs: "wrap", lg: "nowrap" },
      }}
    >
      {categories.map((item) => (
        <Box
          key={item.sectionId}
          onClick={() => onCategoryClick(item.sectionId)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#000000",
            }}
          >
            {item.label}
          </Typography>

          {item.label === "Home" && (
            <KeyboardArrowDownIcon sx={{ fontSize: 18, color: "#000000" }} />
          )}
        </Box>
      ))}

      <Box
        sx={{
          width: { xs: "100%", sm: "260px" },
          height: "42px",
          borderRadius: "999px",
          bgcolor: "#F5F5F5",
          px: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexShrink: 0,
        }}
      >
        <SearchIcon sx={{ fontSize: 20, color: "#777" }} />

        <InputBase
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          sx={{
            flex: 1,
            fontSize: "14px",
            fontFamily: "Poppins, sans-serif",
          }}
        />
      </Box>
    </Box>
  );
}
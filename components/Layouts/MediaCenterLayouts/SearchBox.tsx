"use client";

import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, TextField, Typography } from "@mui/material";

const SearchBox = () => {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        background: "#FAF5FF",
        borderRadius: "18px",
        mb: 6,
        width:{xs:"100%",md:"420px"},
        height:{xs:"auto",md:"171px"},
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          width:"auto",
          maxWidth:"142px",
          height:"16px",
          fontWeight: 600,
          fontSize: "24px",
          mb: 5,
          color: "#1C2539",
        }}
      >
        Search Here
      </Typography>

      {/* INPUT + BUTTON */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search here"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",

              "& textarea": {
                padding: "16px 20px",
                height:"50px",
                width:"278px",
                },
              "& fieldset": {
                border: "none",
              },
            },
            "& input::placeholder": {
              color: "#9CA3AF",
              fontSize: "14px",
            },
          }}
        />

        {/* SEARCH BUTTON */}
        <IconButton
          sx={{
            width: "58px",
            height: "50px",
            borderRadius: "8px",
            padding:"16px 20px",
            backgroundColor: "#7B53A1",
            color: "#fff",
            flexShrink: 0,
            "&:hover": {
              backgroundColor: "#68458c",
            },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBox;
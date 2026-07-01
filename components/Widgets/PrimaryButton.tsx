"use client";
import { FONT_FAMILY } from "@/utils/theme";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button, ButtonProps } from "@mui/material";

interface PrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
  showIcon?: boolean;
}

const PrimaryButton = ({
  children,
  showIcon = true,
  sx,
  ...props
}: PrimaryButtonProps) => {
  return (
    <Button
      {...props}
      sx={{
        position: "relative",
        backgroundColor: "#7B53A1",
        color: "#fff",

        height: { xs: "52px", sm: "56px", md: "60px" },
        px: { xs: "18px", sm: "22px", md: "24px" },
        pr: showIcon ?
        { xs: "52px", sm: "56px", md: "60px" } :
        undefined,

        borderRadius: "999px",
        textTransform: "none",

        fontFamily: FONT_FAMILY.body,
        fontWeight: 500,
        fontSize: { xs: "14px", sm: "15px", md: "16px" },

        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        width: { xs: "100%", sm: "auto" },

        "&:hover": {
          backgroundColor: "#7B53A1"
        },

        ...sx
      }}>
      
    {children}

    {showIcon &&
      <Box
        sx={{
          position: "absolute",
          right: "6px",
          top: "50%",
          transform: "translateY(-50%)",

          width: { xs: "40px", sm: "44px", md: "50px" },
          height: { xs: "40px", sm: "44px", md: "48px" },

          borderRadius: "50%",
          backgroundColor: "#fff",

          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
        
        <ArrowOutwardIcon
          sx={{
            width: { xs: "100%", md: "20px" },
            height: { xs: "auto", md: "20px" },
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            color: "#7B53A1"
          }} />
        
        </Box>
      }
    </Button>);

};

export default PrimaryButton;
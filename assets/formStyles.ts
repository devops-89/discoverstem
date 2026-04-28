export const inputStyle = {
    width: "100%",

    "& .MuiOutlinedInput-root": {
    height: { xs: "52px", md: "56px" },
    borderRadius: "10px",
    backgroundColor: "#F9FAFB",

    "& fieldset": {
    borderColor: "#E5E7EB",
    },

    "&:hover fieldset": {
    borderColor: "#7B53A1",
    },

    "&.Mui-focused fieldset": {
    borderColor: "#7B53A1",
    borderWidth: "2px",
    },
},

    "& .MuiInputBase-input": {
        fontSize: { xs: "14px", md: "15px" },
    },
    
    "& .MuiInputLabel-root": {
        fontSize: "14px",
        color: "#9CA3AF",
    },
    
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#7B53A1",
    },
};


export const multilineStyle = {
    width: "100%",

        "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
        backgroundColor: "#F9FAFB",
        alignItems: "flex-start",
    
        "& fieldset": {
        borderColor: "#E5E7EB",
        },
    
        "&:hover fieldset": {
        borderColor: "#7B53A1",
        },
    
        "&.Mui-focused fieldset": {
        borderColor: "#7B53A1",
        borderWidth: "2px",
        },
    },
    
    "& .MuiInputBase-input": {
        fontSize: { xs: "14px", md: "15px" },
        padding: "14px 16px",
    },
    
    "& .MuiInputLabel-root": {
        fontSize: "14px",
        color: "#9CA3AF",
    },
    
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#7B53A1",
    },
};
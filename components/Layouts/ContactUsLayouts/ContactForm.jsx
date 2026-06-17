"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import {
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

const gradeOptions = [
  { label: "K" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "10" },
  { label: "11" },
  { label: "12" },
  { label: "Undergraduate" },
];

const hearOptions = [
  { label: "Google Search" },
  { label: "Social Media" },
  { label: "Friend/Family" },
  { label: "School/Teacher" },
  { label: "Advertisement" },
  { label: "Other" },
];

const validationSchema = Yup.object({
  studentName: Yup.string().trim().required("Student name is required"),
  grade: Yup.object().nullable().required("Grade is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  parentName: Yup.string().required("Parent name is required"),
  email: Yup.string().email("Enter valid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10-digit phone")
    .required("Phone is required"),
  hear: Yup.object().nullable().required("This field is required"),
  message: Yup.string().required("Message is required"),
});

const labelStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "30px",
  color: "#000000",
  opacity: 0.7,
  mb: "8px",
};

const helperTextStyle = {
  "& .MuiFormHelperText-root": {
    minHeight: "20px",
    marginLeft: 0,
    marginTop: "4px",
  },
};

const figmaInputStyle = {
  ...helperTextStyle,
  "& .MuiOutlinedInput-root": {
    height: "64px",
    backgroundColor: "#FFFFFF",
    borderRadius: "0px",
    padding: "0 24px",
    "& fieldset": { border: "none" },
    "& input": {
      padding: 0,
      height: "100%",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      color: "#474A55",
      "&::placeholder": {
        color: "#474A55",
        opacity: 0.7,
      },
    },
  },
};

const figmaAutocompleteStyle = {
  ...helperTextStyle,
  "& .MuiOutlinedInput-root": {
    height: "64px",
    backgroundColor: "#FFFFFF",
    borderRadius: "0px",
    padding: "0 24px !important",
    "& fieldset": { border: "none" },
    "& input": {
      padding: "0 !important",
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      color: "#474A55",
      "&::placeholder": {
        color: "#474A55",
        opacity: 0.7,
      },
    },
    "& .MuiAutocomplete-endAdornment": {
      right: "24px",
    },
  },
};

const figmaMultilineStyle = {
  ...helperTextStyle,
  "& .MuiOutlinedInput-root": {
    height: "135px",
    backgroundColor: "#FFFFFF",
    borderRadius: "0px",
    padding: "24px",
    alignItems: "flex-start",
    "& fieldset": { border: "none" },
    "& textarea": {
      padding: 0,
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "30px",
      color: "#474A55",
      "&::placeholder": {
        color: "#474A55",
        opacity: 0.7,
      },
    },
  },
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      studentName: "",
      grade: null,
      city: "",
      state: "",
      country: "",
      parentName: "",
      email: "",
      phone: "",
      hear: null,
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const toastId = toast.loading("Sending...");

      try {
        await new Promise((res) => setTimeout(res, 1000));
        toast.success("Message sent!", { id: toastId });
        resetForm();
      } catch (err) {
        toast.error("Failed to send", { id: toastId });
      }
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "585px" },
        ml: "auto",
        mr: "auto",
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{
          width: "100%",
          maxWidth: "585px",
          minHeight: { xs: "auto", md: "1476px" },
          backgroundColor: "#FAF5FF",
          borderRadius: "18px",
          px: { xs: "20px", md: "28.5px" },
          pt: { xs: "30px", md: "45px" },
          pb: { xs: "30px", md: "26px" },
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            textAlign: "center",
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "24px", md: "28px" },
            lineHeight: "46px",
            letterSpacing: "-0.02em",
            color: "#111827",
            mb: "30px",
          }}
        >
          Send Your Message To Us
        </Typography>

        <Grid container spacing={0}>
          <Grid size={{ xs: 12 }} sx={{ mb: "3px" }}>
            <Typography sx={labelStyle}>Student&apos;s Name</Typography>
            <TextField
              name="studentName"
              placeholder="Enter Your Name"
              fullWidth
              value={formik.values.studentName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.studentName &&
                Boolean(formik.errors.studentName)
              }
              helperText={
                formik.touched.studentName
                  ? formik.errors.studentName || " "
                  : " "
              }
              sx={figmaInputStyle}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: "3px" }}>
            <Typography sx={labelStyle}>Enter your Grade</Typography>
            <Autocomplete
              options={gradeOptions}
              getOptionLabel={(o) => o?.label || ""}
              value={formik.values.grade}
              onChange={(_, val) => {
                formik.setFieldValue("grade", val);
                formik.setFieldTouched("grade", true);
              }}
              onBlur={() => formik.setFieldTouched("grade", true)}
              disableClearable
              popupIcon={
                <KeyboardArrowDownIcon
                  sx={{ color: "#474A55", fontSize: "24px" }}
                />
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select Grade"
                  error={
                    formik.touched.grade && Boolean(formik.errors.grade)
                  }
                  helperText={
                    formik.touched.grade
                      ? (formik.errors.grade ) || " "
                      : " "
                  }
                  sx={figmaAutocompleteStyle}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: "3px" }}>
            <Typography sx={labelStyle}>Which city do you live in?</Typography>
            <TextField
              name="city"
              placeholder="Enter your City"
              fullWidth
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={
                formik.touched.city ? formik.errors.city || " " : " "
              }
              sx={figmaInputStyle}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: "3px" }}>
            <Typography sx={labelStyle}>Which State do you live in?</Typography>
            <TextField
              name="state"
              placeholder="State"
              fullWidth
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={
                formik.touched.state ? formik.errors.state || " " : " "
              }
              sx={figmaInputStyle}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: "3px" }}>
            <Typography sx={labelStyle}>
              Which Country do you live in?
            </Typography>
            <TextField
              name="country"
              placeholder="Country"
              fullWidth
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={
                formik.touched.country ? formik.errors.country || " " : " "
              }
              sx={figmaInputStyle}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: "3px" }}>
            <Typography sx={labelStyle}>
              Parent&apos;s/Guardian&apos;s Name
            </Typography>
            <TextField
              name="parentName"
              placeholder="Enter Parent's/Guardian's Name"
              fullWidth
              value={formik.values.parentName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.parentName &&
                Boolean(formik.errors.parentName)
              }
              helperText={
                formik.touched.parentName
                  ? formik.errors.parentName || " "
                  : " "
              }
              sx={figmaInputStyle}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: "3px" }}>
            <Typography sx={labelStyle}>Email</Typography>
            <TextField
              name="email"
              placeholder="Enter your Email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                formik.touched.email ? formik.errors.email || " " : " "
              }
              sx={figmaInputStyle}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: "3px" }}>
            <Typography sx={labelStyle}>Phone Number</Typography>
            <TextField
              name="phone"
              placeholder="Enter your Phone Number"
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={
                formik.touched.phone ? formik.errors.phone || " " : " "
              }
              sx={figmaInputStyle}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: "3px" }}>
            <Typography sx={labelStyle}>How did you hear about us?</Typography>
            <Autocomplete
              options={hearOptions}
              getOptionLabel={(o) => o?.label || ""}
              value={formik.values.hear}
              onChange={(_, val) => {
                formik.setFieldValue("hear", val);
                formik.setFieldTouched("hear", true);
              }}
              onBlur={() => formik.setFieldTouched("hear", true)}
              disableClearable
              popupIcon={
                <KeyboardArrowDownIcon
                  sx={{ color: "#474A55", fontSize: "24px" }}
                />
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select the source"
                  error={formik.touched.hear && Boolean(formik.errors.hear)}
                  helperText={
                    formik.touched.hear
                      ? (formik.errors.hear) || " "
                      : " "
                  }
                  sx={figmaAutocompleteStyle}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: "7px" }}>
            <Typography sx={labelStyle}>Message</Typography>
            <TextField
              name="message"
              placeholder="Enter your message"
              fullWidth
              multiline
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={
                formik.touched.message ? formik.errors.message || " " : " "
              }
              sx={figmaMultilineStyle}
            />
          </Grid>
        </Grid>

        <Box>
          <Box
            component="button"
            type="submit"
            disabled={formik.isSubmitting}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "6px 6px 6px 24px",
              width: "234px",
              height: "56px",
              background: "#7B53A1",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                background: "#6A458D",
              },
              "&:disabled": {
                opacity: 0.6,
                cursor: "not-allowed",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'JUST Sans', 'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                textAlign: "left",
              }}
            >
              {formik.isSubmitting ? "Sending..." : "Send Message Here"}
            </Typography>

            <Box
              sx={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <NorthEastIcon
                sx={{
                  fontSize: "20px",
                  color: "#111827",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          width: "100%",
          maxWidth: "556px",
          letterSpacing: "-0.03em",
          lineHeight: "22px",
          mt: "30px",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          color: "#111827",
        }}
      >
        <Box component="span" sx={{ fontWeight: 600 }}>
          Privacy Note:
        </Box>{" "}
        We do not sell or share your contact details with anyone, EVER.
        <br />
        We never follow up except for a one-time text to help ensure you
        don&apos;t miss our email.
      </Typography>
    </Box>
  );
};

export default ContactForm;
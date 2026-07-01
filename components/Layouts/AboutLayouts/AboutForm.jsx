"use client";import { LINE_HEIGHT, FONT_WEIGHT, FONT_SIZE, FONT_FAMILY } from "@/utils/theme";

import { inputStyle, multilineStyle } from "@/assets/formStyles";
import PrimaryButton from "@/components/Widgets/PrimaryButton";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Autocomplete,
  Box,
  Container,
  Grid,
  TextField,
  Typography } from
"@mui/material";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

const options = [
{ label: "General Inquiry" },
{ label: "Support" },
{ label: "Business" }];


const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.object().nullable().required("Subject is required"),
  message: Yup.string().required("Message is required")
});

const AboutForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: null,
      message: ""
    },
    validationSchema,

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        console.log("Form Data:", values);

        await new Promise((res) => setTimeout(res, 1000));
        toast.success("Message sent successfully");

        resetForm();
      } catch (error) {
        toast.error("Something went wrong ");
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 2, md: 7 },
        px: { xs: 2, md: 4 }
      }}>
      
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          backgroundColor: "#FAF5FF", // Updated from Figma
          borderRadius: { xs: "16px", md: "18px" },
          px: { xs: 2, sm: 4, md: 6, lg: 10 },
          py: { xs: 4, md: 6, lg: "50px" },
          maxWidth: "1320px",
          mx: "auto"
        }}>
        
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_FAMILY.heading,
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.leadLarge, sm: 24, md: FONT_SIZE.subSectionHeading },
            lineHeight: { xs: "38px", md: LINE_HEIGHT.xl5 },
            letterSpacing: "-0.02em",
            color: "#111827",
            mb: { xs: 4, md: 5 }
          }}>
          
          Send Your Message To Us
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              name="name"
              label="Enter Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={inputStyle} />
            
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              name="email"
              label="Your Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={inputStyle} />
            
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Autocomplete
              options={options}
              getOptionLabel={(option) => option.label}
              value={formik.values.subject}
              onChange={(_, value) => {
                formik.setFieldValue("subject", value);
                formik.setFieldTouched("subject", true);
              }}
              popupIcon={<KeyboardArrowDownIcon />}
              renderInput={(params) =>
              <TextField
                {...params}
                label="Choose an option"
                error={
                formik.touched.subject && Boolean(formik.errors.subject)
                }
                helperText={formik.touched.subject && formik.errors.subject}
                sx={inputStyle} />

              } />
            
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="message"
              label="Enter Your Messanger"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              sx={multilineStyle} />
            
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 4, md: 6 }
          }}>
          
          <PrimaryButton
            type="submit"
            disabled={formik.isSubmitting}
            showIcon={false}
            sx={{
              // EXACT Figma Auto Layout
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              padding: "6px 6px 6px 24px !important",
              width: "max-content",
              minWidth: "231px",
              height: "56px",

              borderRadius: "30px",
              textTransform: "none"
            }}>
            
          
            <Typography
              component="span"
              sx={{
                fontFamily: "'JUST Sans', sans-serif",
                fontWeight: FONT_WEIGHT.semiBold,
                fontSize: FONT_SIZE.bodyLarge,
                lineHeight: LINE_HEIGHT.medium,
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap" // Forces text into exactly one line!
              }}>
              
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
                flexShrink: 0 // Prevents the circle from squishing
              }}>
              
              <ArrowOutwardIcon
                sx={{
                  fontSize: FONT_SIZE.leadLarge,
                  color: "#111827"
                }} />
              
            </Box>
          </PrimaryButton>
        </Box>
      </Box>
    </Container>);

};

export default AboutForm;
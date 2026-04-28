"use client";

import { inputStyle, multilineStyle } from "@/assets/formStyles";
import PrimaryButton from "@/components/Widgets/PrimaryButton";
import { FONT_FAMILY } from "@/utils/Fonts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    Autocomplete,
    Box,
    Container,
    Divider,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

const options = [
                { label: "General Inquiry" },
                { label: "Support" },
                { label: "Business" },
];

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
    address:Yup.string().required("Address is required"),
    subject: Yup.object().nullable().required("Subject is required"),
    message: Yup.string().required("Message is required"),
});

const AboutForm = () => {
    const formik = useFormik({
    initialValues: {
                name: "",
                email: "",
                address:"",
                subject: null,
                message: "",
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
},
    });

return (
    <Box sx={{ py: { xs: 6, md: 8, lg: 10 } }}>
    <Container maxWidth="xl">
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
            backgroundColor: "#F3EDF9",
            borderRadius: "20px",
            px: { xs: 2, sm: 4, md: 6, lg: 10 },
            py: { xs: 4, md: 6, lg: 7 },
            maxWidth: "1300px",
            mx: "auto",
        }}
        >
        <Typography
            sx={{
            textAlign: "center",
            fontFamily: FONT_FAMILY.heading,
            fontWeight: 600,
            fontSize: { xs: "22px", md: "26px", lg: "28px" },
            lineHeight: { xs: "32px", md: "36px", lg: "38px" },
            color: "#111827",
            }}
        >
            Send Your Message To Us
        </Typography>

        <Divider sx={{ my: { xs: 3, md: 4 }, backgroundColor: "#E5E7EB" }} />

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
                sx={inputStyle}
            />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
            <TextField
                fullWidth
                name="email"
                label="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={inputStyle}
            />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
            <TextField
                fullWidth
                name="address"
                label="Enter Your Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                sx={inputStyle}
            />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
            <Autocomplete
                options={options}
                getOptionLabel={(option) => option.label}
                value={formik.values.subject}
                onChange={(_, value) =>{
                formik.setFieldValue("subject", value);
                formik.setFieldTouched("subject", true);
                }}
                popupIcon={<KeyboardArrowDownIcon />}
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose an Option"
                    error={
                    formik.touched.subject &&
                    Boolean(formik.errors.subject)
                    }
                    helperText={
                    formik.touched.subject && formik.errors.subject
                    }
                    sx={inputStyle}
                />
                )}
            />
            </Grid>

            <Grid size={{ xs: 12 }}>
            <TextField
                fullWidth
                multiline
                rows={4}
                name="message"
                label="Enter Your Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                formik.touched.message &&
                Boolean(formik.errors.message)
                }
                helperText={
                formik.touched.message && formik.errors.message
                }
                sx={multilineStyle}
            />
            </Grid>

        </Grid>

        <Box
            sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 4, md: 6 },
            }}
        >
            <PrimaryButton
            type="submit"
            disabled={formik.isSubmitting}
            sx={{
            px: { xs: 4, md: 5 },
            py: 1.5,
            width: { xs: "100%", sm: "auto" },
}}
>
            {formik.isSubmitting ? "Sending..." : "Send Message Here"}
            </PrimaryButton>
        </Box>

        </Box>
    </Container>
    </Box>
);
};

export default AboutForm;
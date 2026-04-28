"use client";

import { inputStyle, multilineStyle } from "@/assets/formStyles";
import PrimaryButton from "@/components/Widgets/PrimaryButton";
import { FONT_FAMILY } from "@/utils/Fonts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    Autocomplete,
    Box,
    Divider,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

const gradeOptions = [
                    { label: "1st" }, { label: "2nd" }, { label: "3rd" }, { label: "4th" },
                    { label: "5th" }, { label: "6th" }, { label: "7th" }, { label: "8th" },
                    { label: "9th" }, { label: "10th" }, { label: "11th" }, { label: "12th" },
];

const hearOptions = [
                    { label: "Social Sites" },
                    { label: "Friend" },
                    { label: "School" },
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
}
});

return (
    <Box
    sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "480px" },
        mx: { xs: "auto", md: 0 },
        mr: { md: 4, lg: 20 },
    }}
    >
    <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
        backgroundColor: "#EDE7F6",
        borderRadius: "16px",
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, md: 4 },
        }}
    >
        <Typography
        sx={{
            textAlign: "center",
            fontFamily: FONT_FAMILY.heading,
            fontWeight: 600,
            fontSize: { xs: "20px", md: "22px" },
            lineHeight: "32px",
            color: "#111827",
            mb: 2,
        }}
        >
        Send Your Message To Us
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={{ xs: 2, md: 2.5 }}>

        <Grid size={{ xs: 12 }}>
            <TextField
            name="studentName"
            label="Student's Name"
            fullWidth
            value={formik.values.studentName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.studentName && Boolean(formik.errors.studentName)}
            helperText={formik.touched.studentName && formik.errors.studentName}
            sx={inputStyle}
            />
        </Grid>

        <Grid size={{ xs: 12 }}>
            <Autocomplete
            options={gradeOptions}
            getOptionLabel={(o) => o.label}
            value={formik.values.grade}
            onChange={(_, val) => {
                formik.setFieldValue("grade", val);
                formik.setFieldTouched("grade", true);
            }}
            onBlur={() => formik.setFieldTouched("grade", true)}
            popupIcon={<KeyboardArrowDownIcon />}
            renderInput={(params) => (
                <TextField
                {...params}
                label="Select Grade"
                error={formik.touched.grade && Boolean(formik.errors.grade)}
                helperText={formik.touched.grade && formik.errors.grade}
                sx={inputStyle}
                />
            )}
            />
        </Grid>

        <Grid size={{ xs: 12 }}>
            <TextField
            name="city"
            label="Enter Your City"
            fullWidth
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            sx={inputStyle}
            />
        </Grid>

        <Grid size={{ xs: 12 }}>
            <TextField
            name="state"
            label="State"
            fullWidth
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
            sx={inputStyle}
            />
        </Grid>

        <Grid size={{ xs: 12 }}>
            <TextField
            name="country"
            label="Country"
            fullWidth
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
            sx={inputStyle}
            />
        </Grid>

        <Grid size={{ xs: 12 }}>
            <TextField
            name="parentName"
            label="Parent's Name"
            fullWidth
            value={formik.values.parentName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.parentName && Boolean(formik.errors.parentName)}
            helperText={formik.touched.parentName && formik.errors.parentName}
            sx={inputStyle}
            />
        </Grid>

        <Grid size={{ xs: 12 }}>
            <TextField
            name="email"
            label="Email"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={inputStyle}
            />
        </Grid>

        <Grid size={{ xs: 12 }}>
            <TextField
            name="phone"
            label="Phone Number"
            fullWidth
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            sx={inputStyle}
            />
        </Grid>

        <Grid size={{ xs: 12 }}>
            <Autocomplete
            options={hearOptions}
            getOptionLabel={(o) => o.label}
            value={formik.values.hear}
            onChange={(_, val) => {
                formik.setFieldValue("hear", val);
                formik.setFieldTouched("hear", true);
            }}
            onBlur={() => formik.setFieldTouched("hear", true)}
            popupIcon={<KeyboardArrowDownIcon />}
            renderInput={(params) => (
                <TextField
                {...params}
                label="How did you hear about us?"
                error={formik.touched.hear && Boolean(formik.errors.hear)}
                helperText={formik.touched.hear && formik.errors.hear}
                sx={inputStyle}
                />
            )}
            />
        </Grid>

        <Grid size={{ xs: 12 }}>
            <TextField
            name="message"
            label="Enter Your Message"
            fullWidth
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            sx={multilineStyle}
            />
        </Grid>

        </Grid>

        <Box sx={{ mt: 4 }}>
        <PrimaryButton type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Sending..." : "Send Message Here"}
        </PrimaryButton>
        </Box>
    </Box>

    <Typography
        sx={{
        mt: 3,
        fontFamily: FONT_FAMILY.body,
        fontSize: "14px",
        }}
    >
        <Box component="span" sx={{ fontWeight: 600 }}>
        Privacy Note:
        </Box>{" "}
        We do not sell or share your contact details with anyone.
    </Typography>
    </Box>
);
};

export default ContactForm;
'use client';
import { Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HeroSection() {
    const slides = [1, 2, 3];

return (
    <Box
        sx={{
        position: 'relative',
        width: '1403px',
        maxWidth: "calc(100% - 40px)",
        height: '100vh',
        mt: 2,
        mx: "auto",
        borderRadius: '20px',
        overflow: 'hidden'
        }}
    >
    <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        style={{ width: '100%', height: '100%' }}
    >
        {slides.map((_, index) => (
        <SwiperSlide key={index}>
            <Box
            sx={{
                position: "relative",
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/Images/AboutUs/HeroSection.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background:
                    "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 100%)",
                zIndex: 1
                }
            }}
            >

            <Typography
                sx={{
                position: "absolute",
                top: { xs: 20, md: 120 },
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: { xs: "18px", md: "32px" },
                fontWeight: 600,
                color: "#fff",
                zIndex: 2,
                }}
            >
                Banner Will Be Replaced
            </Typography>

            <Box
                sx={{
                position: "absolute",
                bottom: { xs: 80, md: 60 },
                left: { xs: 20, md: 120 },
                zIndex: 2,
                color: "#fff",
                maxWidth: "700px",
                }}
            >
                <Typography
                sx={{
                    width:{xs:"100%",md:"498px"},
                    height:{xs:"auto",md:"42px"},
                    fontSize: { xs: "28px", md: "64px" },
                    lineHeight:"62px",
                    letterSpacing:"-0.03em",
                    fontWeight: 600,
                    mb: 4,
                    }}
                >
                Panel Of Experts
                </Typography>

                <Typography
                sx={{
                    width:{xs:"100%",md:"762px"},
                    height:{xs:"auto",md:"82px"},
                    fontSize: { xs: "14px", md: "22px" },
                    color: "rgba(255,255,255,0.85)",
                    lineHeight:"38px",
                    letterSpacing:"-0.03em",
                    mt:2,
                    whiteSpace:"pre-line",
                    }}
                >
                {`An ever-expanding roster of world-class scientists, engineers, and
                innovators who mentor students and shape the future of STEM education.`}
                </Typography>

                <Box
                    sx={{
                    width:{xs:"auto",md:"983px"},
                    height:{xs:"auto",md:"99px"},
                    
                    mt: 4,
                    display: "flex",
                    alignItems:"center",
                    alignContent:"center",
                    px:15,
                    gap: { xs: 4, md: 30 },
                    }}
                >
                {[
                { value: "21+", label: "Experts" },
                { value: "6", label: "Research Labs" },
                { value: "12", label: "Domain" },
                ].map((item, i) => (
                <Box
                    key={i}
                    sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    }}
>
    <Typography
    sx={{
        fontSize: { xs: "20px", md: "48px" },
        fontWeight: 600,
        lineHeight: "62px",
        letterSpacing: "-0.03em",
    }}
    >
    {item.value}
    </Typography>

    <Typography
        sx={{
        fontSize: { xs: "12px", md: "35px" },
        maxHeight:"26px",
        lineHeight:"62px",
        letterSpacing:"-0.03em",
        color: "#FFFFFF",
        fontWeight: 600,
        mt: 1,
        }}
    >
    {item.label}
    </Typography>
</Box>
))}
    </Box>
            </Box>
            </Box>
    </SwiperSlide>
        ))}
    </Swiper>

        <Box
        className="custom-pagination"
        sx={{
            position: 'absolute',
            bottom: '40px',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            zIndex: 10,
            '& .swiper-pagination-bullet': {
            width: '40px',
            height: '4px',
            borderRadius: '4px',
            bgcolor: 'rgba(255,255,255,0.4)',
            transition: 'all 0.3s ease',
            margin: '0 !important',
            opacity: 1,
            cursor: 'pointer'
            },
            '& .swiper-pagination-bullet-active': {
            bgcolor: '#ffffff',
            boxShadow: '0 0 5px rgba(0,0,0,0.3)'
        }
        }}
    />
    </Box>
);
}
"use client";
import React, { useRef } from "react";
import { Container, Stack, Divider, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonial } from "@/assets/Generic-data";

const testimonialSlides = [
  {
    name: "Dr. Hashima Hasan",
    role: "Program Scientist, NASA.",
    quote: "What started as a small mentoring program in 2016 has now evolved to one where students have won NASA innovation awards, patented their innovations, and heading towards commercialization. DiscoverSTEM brings to life the true scientific process. Rather than being a bookish activity, the students are encouraged to be inquisitive about real-life situations and seek answers through research.",
    image: "/Images/Home/Testimonials/impect1dr.hashima.jpg"
  },
  {
    name: "Dr. Charles A. Rodenberger",
    role: "(NASA Scientist) -Designer of the Apollo Spacecraft -Inventor of Hypervelocity Gun -Researcher for NASA related to meteoroid protection of spacecraft",
    quote: "As a scientist and designer of NASA Apollo spacecraft, I’ve seen intensive brainstorming and innovation activities in our team when we were designing systems to land a man on the moon and safely bring them back! The next time I saw such an activity is at DiscoverSTEM… This is the best STEM & Innovation program I’ve ever seen.",
    image: "/Images/Home/Testimonials/impect2.jpg"
  },
  {
    name: "Shreeya Dasikan",
    role: "Inventor of – Vehicle Collision Avoidance System (DiscoverSTEM Innovation Program 2018-19)",
    quote: "My favorite part about the program was when all of us would sit in the meeting room and begin to brainstorm ideas…I deeply enjoyed those moments when we were gathered together, throwing out crazy ideas that only seemed crazy until we made them a reality.",
    image: "/Images/Home/Testimonials/WhatsApp-Image-2022-01-25-at-11.16.02-AM.jpeg"
  },
  {
    name: "Jim Christensen",
    role: "Director of Education, NASA Kennedy Space Center",
    quote: "One thing which is fascinating is 'How kids can be trained to be innovative’?... Mirza has come up with a step-by-step kind of program and approach to help people create innovations, and I just love that… This program absolutely fascinates me!",
    image: "/Images/Home/Testimonials/impect3.jpg"
  },
  {
    name: "Kayla Goodrich",
    role: "DiscoverSTEM Innovation Program 2019-20",
    quote: "My time at Innovation Program has been awesome! It has given me a constructive environment to learn how to think like an innovator and build on other people's ideas. I also love how it challenges me to think outside of the box and innovate. With these skills, my future has no limit!",
    image: "/Images/Home/Testimonials/WhatsApp-Image-2022-01-25-at-11.16.58-AM.jpeg"
  }
];

export default function TestimonialsSection() {
  const swiperRef = useRef<import("swiper").Swiper | null>(null);

  return (
    <Container 
      id="testimonials" 
      maxWidth={false}
      sx={{ 
        maxWidth: "1160px",
        mx: "auto",
        py: { xs: 1, sm: 2, lg: 6 },
        px: { xs: 2, sm: 3, lg: 0 },
      }}
    >
      
      <Stack 
        direction="row" 
        spacing={{ xs: 1.5, lg: 2.5 }} 
        alignItems="center" 
        sx={{ mb: 1.5 }}
      >
        <Divider sx={{ width: { xs: 30, lg: 50 }, borderColor: "#6E6E6E", borderWidth: "0.5px" }} />
        <Typography 
          sx={{ 
            color: "#6E6E6E", 
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: { xs: "12px", md: "16px", lg: "20px" },
            lineHeight: { xs: "16px", md: "20px", lg: "26px" },
            letterSpacing: "-0.4px",
            textTransform: "uppercase" 
          }}
        >
          what people say about DiscoverSTEM
        </Typography>
      </Stack>
      <Typography
        sx={{ 
          fontFamily: "'Work Sans', sans-serif", 
          fontSize: { xs: "28px", sm: "36px", md: "40px", lg: "48px" },
          fontWeight: 500, 
          lineHeight: { xs: "40px", md: "50px", lg: "65px" },
          color: "#101010",
          mb: 4 
        }}
      >
        Testimonials
      </Typography>

      <Box
        sx={{
          overflow: "hidden",
          "& .swiper": { 
            width: "100%", 
            overflow: "hidden",
            height: "auto", 
            pb: { xs: "50px", md: "135px", lg: "135px" } 
          },
          "& .swiper-pagination": { 
            bottom: { xs: "10px !important", md: "15px !important", lg: "15px !important" } 
          },
          "& .swiper-pagination-bullet": {
            width: 10,
            height: 10,
            background: "#D9D9D9", 
            opacity: 1,
            mx: "6.78px !important", 
          },
          "& .swiper-pagination-bullet-active": { 
            background: "#000000" 
          },
          pb: { xs: 2, lg: 6 },
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {testimonialSlides.map((t, i) => (
            <SwiperSlide key={i}>
              <Box 
                sx={{ 
                  height: "100%", 
                  display: "flex", 
                  position: "relative",
                  flexDirection: "row" 
                }}
              >
                
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    left: 0, 
                    top: 0, 
                    width: { md: "320px", lg: "430px" },
                    height: { md: "450px", lg: "590px" },
                    boxSizing: "border-box", 
                    border: { md: "12px solid #7B53A1", lg: "16px solid #7B53A1" },
                    pointerEvents: "none",
                    zIndex: 1, 
                  }}
                />

                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    width: { xs: "100%", md: "830px", lg: "1110px" },
                    height: { xs: "auto", md: "370px", lg: "490px" },
                    ml: { xs: 0, md: "40px", lg: "50px" },
                    mt: { xs: 0, md: "40px", lg: "50px" },
                    mb: { xs: 0, md: "40px", lg: "50px" },
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "stretch", md: "center", lg: "stretch" },
                    p: { xs: 0, lg: 0 },
                    boxSizing: "border-box",
                    zIndex: 2,
                  }}
                >
                  
                  <Box
                    sx={{
                      position: { xs: "relative", md: "static" }, 
                      px: { xs: 3, sm: 5, md: 0 }, 
                      py: { xs: 4, sm: 5, md: 0 }, 
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: { md: "100%", lg: "100%" }, 
                      width: { xs: "100%", md: "auto" },
                      maxWidth: { xs: "100%", md: "430px", lg: "570px" }, 
                      pl: { md: "55px", lg: "73px" },
                    }}
                  >
                   
                    
                    <Box
                      sx={{
                        display: { xs: "block", md: "none" },
                        position: "absolute",
                        left: 0, 
                        top: 0, 
                        width: { xs: "60%" },
                        height: "100%",
                        boxSizing: "border-box", 
                        borderLeft: { xs: "8px solid #7B53A1" }, 
                        borderTop: { xs: "8px solid #7B53A1" },
                        borderBottom: { xs: "8px solid #7B53A1" },
                        pointerEvents: "none",
                        zIndex: 1,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          right: 0,
                          top: "-8px", 
                          width: "8px",
                          height: "33px", 
                          bgcolor: "#7B53A1"
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          right: 0,
                          bottom: "-8px", 
                          width: "8px",
                          height: "33px", 
                          bgcolor: "#7B53A1"
                        }
                      }}
                    />

                    
                    <Typography
                      sx={{
                        fontFamily: "'Work Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: { xs: "20px", sm: "24px", md: "21px", lg: "28px" },
                        lineHeight: { xs: "24px", md: "25px", lg: "33px" },
                        textTransform: "uppercase",
                        color: "#202020",
                        zIndex: 2,
                        mb: { xs: 0.5, md: "4px", lg: "5px" },
                      }}
                    >
                      {t.name}
                    </Typography>

                    
                    <Typography
                      sx={{
                        fontFamily: "'Work Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: { xs: "14px", sm: "16px", md: "14px", lg: "18px" },
                        lineHeight: { xs: "18px", md: "20px", lg: "26px" },
                        color: "#202020",
                        zIndex: 2,
                        mb: { xs: 2.5, md: "20px", lg: "24px" },
                      }}
                    >
                      {t.role}
                    </Typography>
                    
                    <Typography
                      sx={{
                        width: { xs: "100%", md: "420px", lg: "559px" },
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 400,
                        fontSize: { xs: "14px", sm: "15px", md: "14px", lg: "17px" },
                        lineHeight: { xs: "22px", sm: "24px", md: "22px", lg: "28px" },
                        color: "#060606",
                        zIndex: 2,
                        mb: 0,
                      }}
                    >
                      &quot;{t.quote}&quot;
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: { xs: "relative", md: "static" }, // 🔥 FIX: Static anchors the image correctly!
                      width: { xs: "100%", md: "auto", lg: "auto" },
                      height: { xs: "auto", lg: "100%" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: { xs: 3, sm: 4, md: 0 },
                      pb: { xs: 4, md: 0 },
                    }}
                  >
                    <Box sx={{ display: { xs: "inline-block", md: "none" }, position: "relative", width: "80%", maxWidth: "320px" }}>
                        <Box
                          component="img"
                          src={t.image}
                          alt={t.name}
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            objectPosition: "top center",
                            display: "block",
                            zIndex: 2,
                          }}
                        />
                    </Box>
                    <Box
                      component="img"
                      src={t.image}
                      alt={t.name}
                      sx={{
                        display: { xs: "none", md: "block" },
                        position: "absolute",
                        width: { md: "255px", lg: "340px" },
                        height: { md: "335px", lg: "446px" },
                        left: { md: "515px", lg: "687px" },
                        top: { md: "17px", lg: "22px" },
                        objectFit: "cover",
                        objectPosition: "top center",
                        borderRadius: "0px",
                        boxSizing: "border-box",
                        zIndex: 2,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}
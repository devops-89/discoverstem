"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";

export interface SuccessStoryCard {
  id: number;
  name: string;
  designation: string;
  image: string;
  description: string;
}

export const successStoriesData: SuccessStoryCard[] = [
  {
    id: 1,
    name: "Dr. Hashima Hasan",
    designation:
      "(Program Scientist @ NASA)\nPh.D. (Nuclear Physics – Oxford University)\nJames Webb Telescope",
    image: "/Images/success-stories/hashima-hasan.jpg",
    description:
      "The program brings to life the true scientific process. Rather than focusing on book-centric activities, the students are encouraged to be inquisitive about real-life situations and seek answers through research and experimentation.\n\nThe down-to-earth approach of DiscoverSTEM takes the fear out of scientific learning. DiscoverSTEM encourages students to make their own discoveries. By working together in groups, they feed off each other's energies as each has his or her own 'Eureka' moment.\n\nWhat started as a small mentoring program in 2016 has now evolved to one where students have won NASA innovation awards, patented their innovations, and are now proceeding towards commercialization.",
  },
  {
    id: 2,
    name: "Dr. Charles A. Rodenberger",
    designation:
      "(NASA Scientist)\n-Designer of the Apollo Spacecraft\n-Inventor of Hypervelocity Gun\n-Researcher for NASA related to meteoroid protection of spacecraft",
    image: "/Images/success-stories/charles-rodenberger.jpg",
    description:
      "As a scientist and one of the designers of the NASA Apollo spacecraft, I've seen intensive brain-storming and innovation activities in our team when we were designing systems to land a man on the moon and safely bring them back! The next time I saw such an activity is at DiscoverSTEM. This is the best STEM & Innovation program I've ever seen.",
  },
  {
    id: 3,
    name: "Shreeya Dasikan",
    designation: "(DIP 2018-19)\nGreenhill School, Dallas",
    image: "/Images/success-stories/shreeya-dasikan.jpg",
    description:
      "My favorite part about the program was when all of us would sit in the meeting room and begin to brainstorm ideas. I deeply enjoyed those moments when we were gathered together, throwing out crazy ideas that only seemed crazy until we made them a reality.",
  },
  {
    id: 4,
    name: "Jim Christensen",
    designation:
      "Director of Education\nNASA Kennedy Space Center Visitor's Complex",
    image: "/Images/success-stories/jim-christensen.jpg",
    description:
      "One thing which is fascinating is 'How kids can be trained to be innovative?' Mirza has come up with a step-by-step kind of program and approach to help people create innovations, and I just love that. This program absolutely fascinates me!",
  },
  {
    id: 5,
    name: "Dr. Charles A. Rodenberger",
    designation:
      "(NASA Scientist)\n-Designer of the Apollo Spacecraft\n-Inventor of Hypervelocity Gun\n-Researcher for NASA related to meteoroid protection of spacecraft",
    image: "/Images/success-stories/charles-rodenberger.jpg",
    description:
      "As a scientist and one of the designers of the NASA Apollo spacecraft, I've seen intensive brain-storming and innovation activities in our team when we were designing systems to land a man on the moon and safely bring them back! The next time I saw such an activity is at DiscoverSTEM. This is the best STEM & Innovation program I've ever seen.",
  },
  {
    id: 6,
    name: "Dr. Hashima Hasan",
    designation:
      "(Program Scientist @ NASA)\nPh.D. (Nuclear Physics – Oxford University)\nJames Webb Telescope",
    image: "/Images/success-stories/hashima-hasan.jpg",
    description:
      "The program brings to life the true scientific process. Rather than focusing on book-centric activities, the students are encouraged to be inquisitive about real-life situations and seek answers through research and experimentation.\n\nThe down-to-earth approach of DiscoverSTEM takes the fear out of scientific learning. DiscoverSTEM encourages students to make their own discoveries. By working together in groups, they feed off each other's energies as each has his or her own 'Eureka' moment.\n\nWhat started as a small mentoring program in 2016 has now evolved to one where students have won NASA innovation awards, patented their innovations, and are now proceeding towards commercialization.",
  },
  {
    id: 7,
    name: "Dr. Hashima Hasan",
    designation:
      "(Program Scientist @ NASA)\nPh.D. (Nuclear Physics – Oxford University)\nJames Webb Telescope",
    image: "/Images/Finale/chiefguest.png",
    description:
      "The program brings to life the true scientific process. Rather than focusing on book-centric activities, the students are encouraged to be inquisitive about real-life situations and seek answers through research and experimentation.",
  },
  {
    id: 8,
    name: "Jim Christensen",
    designation:
      "Director of Education\nNASA Kennedy Space Center Visitor's Complex",
    image: "/Images/success-stories/jim-christensen.jpg",
    description:
      "One thing which is fascinating is 'How kids can be trained to be innovative?' Mirza has come up with a step-by-step kind of program and approach to help people create innovations, and I just love that. This program absolutely fascinates me!",
  },
  {
    id: 9,
    name: "Jim Christensen",
    designation:
      "Director of Education\nNASA Kennedy Space Center Visitor's Complex",
    image: "/Images/success-stories/jim-christensen.jpg",
    description:
      "One thing which is fascinating is 'How kids can be trained to be innovative?' Mirza has come up with a step-by-step kind of program and approach to help people create innovations, and I just love that. This program absolutely fascinates me!",
  },
];

export default function SuccessStoriesCards() {
  const [selectedStory, setSelectedStory] =
    useState<SuccessStoryCard | null>(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: "20px", md: 0 },
        py: { xs: "50px", md: "80px" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "repeat(2, 1fr)",
          },
          gap: "30px",
        }}
      >
        {successStoriesData.map((item) => (
          <Box
            key={item.id}
            sx={{
              backgroundColor: "#FAF5FF",
              borderRadius: "29px",
              overflow: "hidden",
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              height: {
                xs: "auto",
                lg: "360px",
              },
              minHeight: {
                lg: "360px",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: {
                  xs: "100%",
                  sm: "220px",
                },
                height: {
                  xs: "280px",
                  sm: "100%",
                },
                flexShrink: 0,
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>

            <Box
              sx={{
                flex: 1,
                p: "24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontWeight: 600,
                  fontSize: {
                    xs: "26px",
                    md: "32px",
                  },
                  lineHeight: "120%",
                  color: "#101010",
                  mb: 1,
                }}
              >
                {item.name}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "24px",
                  whiteSpace: "pre-line",
                  color: "#777777",
                  mb: 2,
                }}
              >
                {item.designation}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "28px",
                  color: "#101010",
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.description}
              </Typography>

              <Box sx={{ mt: "auto", pt: 3 }}>
                <Button
                  onClick={() => setSelectedStory(item)}
                  sx={{
                    width: "183px",
                    height: "56px",
                    backgroundColor: "#7B53A1",
                    borderRadius: "30px",
                    color: "#FFFFFF",
                    textTransform: "none",
                    px: "10px",
                    pl: "24px",
                    justifyContent: "space-between",

                    "&:hover": {
                      backgroundColor: "#7B53A1",
                    },
                  }}
                >
                  Read More

                  <Box
                    sx={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#111827",
                    }}
                  >
                    <ArrowOutwardIcon />
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Dialog
        open={Boolean(selectedStory)}
        onClose={() => setSelectedStory(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "24px",
            backgroundColor: "#FAF5FF",
          },
        }}
      >
        <DialogContent
          sx={{
            p: { xs: "24px", md: "40px" },
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => setSelectedStory(null)}
            sx={{
              position: "absolute",
              right: "18px",
              top: "18px",
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedStory && (
            <>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontWeight: 600,
                  fontSize: {
                    xs: "28px",
                    md: "44px",
                  },
                  lineHeight: "120%",
                  color: "#101010",
                  mb: 2,
                  pr: "40px",
                }}
              >
                {selectedStory.name}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  lineHeight: "30px",
                  whiteSpace: "pre-line",
                  color: "#777777",
                  mb: 3,
                }}
              >
                {selectedStory.designation}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: {
                    xs: "16px",
                    md: "20px",
                  },
                  lineHeight: {
                    xs: "30px",
                    md: "36px",
                  },
                  whiteSpace: "pre-line",
                  color: "#101010",
                }}
              >
                {selectedStory.description}
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
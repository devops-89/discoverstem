import type {
  AwardCard,
  FeatureCard,
  NavItem,
  PatentCard,
  ProgramCard,
  SpotlightCard,
} from "@/utils/Types";

export const heroImage =
  "/Images/Home/HeroSection.png";

export const navItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "#programs" },
  { label: "Opportunities", href: "#programs" },
  { label: "Success Stories", href: "#spotlight" },
  { label: "Media Center", href: "#innovations" },
  { label: "Events", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const featureCards: FeatureCard[] = [
  {
    title: "Nurturing Prodigies",
    description:
      "DiscoverSTEM nurtures a child's inborn capability to think outside the box and solve real-world challenges through critical thinking.",
    borderColor: "#7b53a1",
    iconBg: "rgba(123,83,161,0.18)",
  },
  {
    title: "Inspiring Innovation",
    description:
      "Children learn the nuances of innovation while parents are mentored to build an innovation-first culture at home.",
    borderColor: "#ee4823",
    iconBg: "rgba(238,72,35,0.16)",
  },
  {
    title: "Launching Startups",
    description:
      "Students receive complete support to transform ideas into market-ready startups, from validation to company formation.",
    borderColor: "#f9a51e",
    iconBg: "rgba(249,165,30,0.2)",
  },
  {
    title: "Expert Mentors",
    description:
      "Exclusive access to innovation facilitators and domain experts who sharpen logic, analysis, and invention skills.",
    borderColor: "#619040",
    iconBg: "rgba(98,142,67,0.2)",
  },
];

export const programs: ProgramCard[] = [
  {
    title: "Summer Impact Program",
    image: "/Images/Home/Programs/OurProgram1.png",
  },
  {
    title: "Ivy League Mentorship",
    image: "/Images/Home/Programs/OurProgram2.png",
  },
  {
    title: "DiscoverSTEM Innovation Program",
    image: "/Images/Home/Programs/OurProgram3.png",
  },
];

export const studentSpotlight: SpotlightCard[] = [
  { name: "Nikitha Thoduguli", image: "/Images/Home/Spotlight/1.png" },
  { name: "Wafiqah Zubair", image: "/Images/Home/Spotlight/2.png" },
  { name: "Marium Khan", image: "/Images/Home/Spotlight/3.png" },
  { name: "Ameer Syedibrahim", image: "/Images/Home/Spotlight/4.png" },
];

export const patents: PatentCard[] = [
  {
    title: "Smart Shower Head",
    patentNumber: "USPTO Patent Number: XXXXXXX",
    image: "/Images/Home/Patents.png",
  },
  {
    title: "Smart Shower Head",
    patentNumber: "USPTO Patent Number: XXXXXXX",
    image: "/Images/Home/Patents.png",
  },
];

export const innovationCards: PatentCard[] = [
  {
    title: "An automated system for cleaning & recovering spilled oil",
    patentNumber: "DiscoverSTEM Students",
    image: "/Images/Home/Trailblazing/1.png",
  },
  {
    title: "An automated system for cleaning & recovering spilled oil",
    patentNumber: "DiscoverSTEM Students",
    image: "/Images/Home/Trailblazing/2.png",
  },
];

export const awardCards: AwardCard[] = [
  { image: "/Images/Home/Awards/1.png" },
  { image: "/Images/Home/Awards/2.png" },
  { image: "/Images/Home/Awards/3.png" },
  { image: "/Images/Home/Awards/4.png" },
];

export const testimonial = {
  name: "Dr. Hashima Hasan",
  role: "Program Scientist, NASA.",
  image: "/Images/Home/Testimonials/HasinaHasn.png",
  quote:
    "What started as a small mentoring program in 2016 has now evolved to one where students have won NASA innovation awards, patented their innovations, and are heading towards commercialization.",
};

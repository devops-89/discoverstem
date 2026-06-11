"use client";

import { Box } from "@mui/material";
import { FONT_FAMILY } from "@/utils/Fonts";

import HeroSection from "./HeroSection";
import OurYoungInnovators from "./OurYoungInnovators";
import WhatWeDoSection from "./WhatWeDoSection";
import InventorPromoSection from "./InventorPromoSection";
import ProgramsSection from "./ProgramsSection";
import SpotlightSection from "./SpotlightSection";
import PatentsSection from "./PatentsSection";
import InnovationsSection from "./InnovationsSection";
import AwardsSection from "./AwardsSection";
import TestimonialsSection from "./TestimonialsSection";
import CtaBanner from "./CtaBanner";


export default function HomeLayout() {
  return (
    <>
      <HeroSection />
      <OurYoungInnovators />
      <WhatWeDoSection />
      <InventorPromoSection />
      <ProgramsSection />
      <SpotlightSection />
      <PatentsSection />
      <InnovationsSection />
      <AwardsSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}

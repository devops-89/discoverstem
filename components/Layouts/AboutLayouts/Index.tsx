'use client';
import { Box } from '@mui/material';
import CtaBanner from '../HomeLayouts/CtaBanner';
import AboutForm from './AboutForm';
import FounderAwards from './FounderAwards';
import FounderSection from './FounderSection';
import HeroSection from './HeroSection';

export default function AboutUsLayout() {
  return (
    <Box component="main">
      <HeroSection />
      <FounderSection/>
      {/* <FounderBio/> */}
      <FounderAwards/>
      <AboutForm/>
      <CtaBanner/>
    </Box>
  );
}

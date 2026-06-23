'use client';
import { Box } from '@mui/material';

import AboutForm from './AboutForm';
import FounderAwards from './FounderAwards';
import FounderSection from './FounderSection';
import HeroSection from './HeroSection';
import CtaBanner from '@/components/Widgets/common/CommonCta';
import { ctaBannerData } from '@/assets/Generic-data';

export default function AboutUsLayout() {
  return (
    <Box component="main">
      <HeroSection />
      <FounderSection/>
     
      <FounderAwards/>
      <AboutForm/>
      <CtaBanner data={ctaBannerData} />
    </Box>
  );
}

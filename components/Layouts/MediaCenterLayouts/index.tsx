
import React from "react";
import HeroSection from "./HeroSection";
import MediaCenterPage from "./MediaHeader";

import NewsSection from "@/components/Widgets/common/NewsSection";
import { ctaBannerData, mediaCenterNewsData } from "@/assets/Generic-data";
import CtaBanner from "@/components/Widgets/common/CommonCta";


export default function MediaCenterLayout() {
 
  return (
    <>
      <HeroSection />
      <MediaCenterPage />
      <NewsSection
  title="More News"
  items={mediaCenterNewsData.filter(
    (item) => item.category === "In the Press" || item.category === "Latest News" || item.category === "News"
  )}
/>
         <CtaBanner data={ctaBannerData} />
    </>
  );
}

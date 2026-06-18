"use client";

import { mediaNewsData } from "@/assets/Generic-data";

import { notFound } from "next/navigation";
import ArticleContent from "./DetailPage";
import NewsSection from "@/components/Widgets/common/NewsSection";
import HeroSection from "../MediaCenterLayouts/HeroSection";


interface MediaCenterDetailLayoutProps {
  slug: string;
}

export default function MediaCenterDetailLayout({
  slug,
}: MediaCenterDetailLayoutProps) {
  const article = mediaNewsData.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const recentPosts = mediaNewsData
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

 

  return (
    <>
    <HeroSection/>
      <ArticleContent
        article={article}
        recentPosts={recentPosts}
      />

      
<NewsSection
  title="More News"
  items={mediaNewsData.filter(
     (item) =>
    item.category === "Latest News" &&
    item.slug !== slug
  )}
/>


    </>
  );
}
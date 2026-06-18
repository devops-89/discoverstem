"use client";

import { mediaCategories, mediaCenterNewsData as mediaNewsData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import MediaCategoryNav from "./MediaCategoryNav";
import FeaturedMediaCard from "./PressCard";
import MediaNewsSection from "./MediaNews";
import { useRouter } from "next/navigation";
import MediaNewsCard from "./MediaNewsCard";

export default function MediaCenterPage() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleCategoryClick = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (sectionId === "contact-us") {
      router.push("/contact");
      return;
    }

    router.push(`/media/category/${sectionId}`);
  };

  const filteredMediaData = mediaNewsData.filter((item) => {
    const searchValue = search.toLowerCase();

    return (
      item.title.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue)
    );
  });

  const featuredArticle = filteredMediaData.find(
    (item) => item.category === "In the Press"
  );

  const topFeaturedSlugs = [
    "young-minds-big-innovations-discoverstem-marks-innovation-day-2025-with-breakthrough-patentable-ideas",
    "discoverstem-students-learn-research-methodology-from-top-who-scientist-dr-zisis-kozlakidis",
    "nobel-laureates-meet-discoverstem-innovators"
  ];

  const topFeaturedItems = topFeaturedSlugs
    .map(slug => mediaNewsData.find(item => item.slug === slug))
    .filter(Boolean)
    .map(item => {
      // The user wants the exact text from the image for the first post
      if (item && item.slug === "young-minds-big-innovations-discoverstem-marks-innovation-day-2025-with-breakthrough-patentable-ideas") {
        return { ...item, title: "DiscoverSTEM Celebrates Innovation Day 2025" };
      }
      return item;
    });

  return (
    <Box>
      <MediaCategoryNav
        categories={mediaCategories}
        onCategoryClick={handleCategoryClick}
        search={search}
        setSearch={setSearch}
      />
      
      {/* Top Section */}
      {!search && topFeaturedItems.length > 0 && (
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1159px",
            mx: "auto",
            px: { xs: 2, md: 0 },
            pt: { xs: 4, md: 6 },
            pb: { xs: 4, md: 6 },
          }}
        >
          {/* Top Large Card */}
          {topFeaturedItems[0] && (
            <FeaturedMediaCard item={topFeaturedItems[0] as any} />
          )}

          {/* Bottom 2 Cards */}
          {topFeaturedItems.length > 1 && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                gap: "23px",
              }}
            >
              {topFeaturedItems.slice(1, 3).map((item: any) => (
                <MediaNewsCard key={item.id} item={item} />
              ))}
            </Box>
          )}
        </Container>
      )}

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1159px",
          mx: "auto",
          px: { xs: 2, md: 0 },
          pt: { xs: 4, md: 0 },
          pb: { xs: 6, md: 0 },
        }}
      >
        {/* 1. Latest News */}
        <MediaNewsSection
          id="latest-news"
          title="Latest News"
          items={filteredMediaData.filter(i => i.category === "Latest News")}
          layoutType="featured"
        />

        {/* 2. College Acceptances */}
        <MediaNewsSection
          id="college-acceptances"
          title="College Acceptances"
          items={filteredMediaData.filter(i => i.category === "College Acceptances")}
          layoutType="featured"
        />

        {/* 3. Patents (since Videos uses Patent posts on live site) */}
        <MediaNewsSection
          id="patents"
          title="Patents"
          items={filteredMediaData.filter(i => i.category === "Patents")}
          layoutType="featured"
        />

        {/* 4. Awards */}
        <MediaNewsSection
          id="awards"
          title="Awards"
          items={filteredMediaData.filter(i => i.category === "Awards")}
          layoutType="featured"
        />

        {/* 5. Blog */}
        <MediaNewsSection
          id="blog"
          title="Blog"
          items={filteredMediaData.filter(i => i.category === "Blog")}
          layoutType="featured"
        />

        {search && filteredMediaData.length === 0 && (
          <Typography
            sx={{
              textAlign: "center",
              py: 8,
              fontSize: "20px",
              color: "#777",
            }}
          >
            No media found.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
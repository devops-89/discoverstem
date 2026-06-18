"use client";

import { mediaCategories, mediaNewsData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import MediaCategoryNav from "./MediaCategoryNav";
import MediaNewsSection from "./MediaNews";
import FeaturedMediaCard from "./PressCard";

const sectionTitles = [
  "Latest News",
  "College Acceptance",
  "Patents",
  "Awards",
  "Young Inventors",
  "In The Press",
  "Blog",
];

const getSectionId = (title: string) =>
  title.toLowerCase().replaceAll(" ", "-");

export default function MediaCenterPage() {
  const [search, setSearch] = useState("");

  const handleCategoryClick = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (sectionId === "contact-us") {
      window.location.href = "/contact";
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const filteredMediaData = mediaNewsData.filter((item) => {
    const searchValue = search.toLowerCase();

    return (
      item.title.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue)
    );
  });

  const featuredArticle = filteredMediaData.find(
    (item) => item.category === "In The Press"
  );

  return (
    <Box>
      <MediaCategoryNav
        categories={mediaCategories}
        onCategoryClick={handleCategoryClick}
        search={search}
        setSearch={setSearch}
      />

      {featuredArticle && (
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1159px",
            mx: "auto",
            px: { xs: 2, md: 0 },
            py: { xs: 4, md: 6 },
          }}
        >
          <FeaturedMediaCard item={featuredArticle} />
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
        {sectionTitles.map((title) => {
          const items = filteredMediaData.filter(
            (item) => item.category === title
          );

          return (
            <MediaNewsSection
              key={title}
              id={getSectionId(title)}
              title={title}
              items={items}
            />
          );
        })}

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
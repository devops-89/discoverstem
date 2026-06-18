"use client";

import { mediaCategories } from "@/assets/Generic-data";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MediaCategoryNav from "@/components/Layouts/MediaCenterLayouts/MediaCategoryNav";
import { Box } from "@mui/material";

export default function CategoryNavWrapper() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleCategoryClick = (sectionId: string) => {
    if (sectionId === "home") {
      router.push("/media");
      return;
    }
    if (sectionId === "contact-us") {
      router.push("/contact");
      return;
    }
    router.push(`/media/category/${sectionId}`);
  };

  return (
    <Box>
      <MediaCategoryNav
        categories={mediaCategories}
        onCategoryClick={handleCategoryClick}
        search={search}
        setSearch={setSearch}
      />
    </Box>
  );
}

"use client";

import {
  innovationCardsData,
} from "@/assets/Generic-data";
import { InnovationFilter } from "@/utils/Types";
import { Container } from "@mui/material";
import { useState } from "react";
import InnovationFilterSection from "./InnovationFilter";
import InnovationCardsGrid from "@/components/Widgets/common/InnovationCard";


export default function InnovationCardGrid() {
  const [filter, setFilter] = useState<InnovationFilter>("All Statuses");
  const [search, setSearch] = useState("");

  const filteredItems = innovationCardsData.filter((item) => {
    const matchFilter =
      filter === "All Statuses" || item.filterType === filter;

    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.award.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1220px",
        mx: "auto",
        px: { xs: 2, md: 3, lg: 0 },
        py: { xs: 5, md: 8 },
      }}
    >
      <InnovationFilterSection
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        showingCount={filteredItems.length}
        totalCount={innovationCardsData.length}
      />

      <InnovationCardsGrid items={filteredItems} />
    </Container>
  );
}
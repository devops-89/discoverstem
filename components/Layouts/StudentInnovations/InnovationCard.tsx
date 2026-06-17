"use client";

import {
  innovationCardsData,
} from "@/assets/Generic-data";
import InnovationCardsGrid from "@/components/Widgets/common/InnovationCard";
import { InnovationFilter } from "@/utils/Types";
import { Box, Container, Pagination, PaginationItem } from "@mui/material";
import { useState } from "react";
import InnovationFilterSection from "./InnovationFilter";

const ROWS_PER_PAGE = 6;


export default function InnovationCardGrid() {
  const [filter, setFilter] = useState<InnovationFilter>("All Status");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredItems = innovationCardsData.filter((item) => {
    const matchFilter =
      filter === "All Status"|| item.filterType === filter;

    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.award.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (a.award && !b.award) return -1;
    if (!a.award && b.award) return 1;
    return 0;
  });

  const pageCount = Math.ceil(sortedItems.length / ROWS_PER_PAGE);
  const paginatedItems = sortedItems.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

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
        setFilter={(v) => { setFilter(v); setPage(1); }}
        search={search}
        setSearch={(v) => { setSearch(v); setPage(1); }}
        showingCount={filteredItems.length}
        totalCount={innovationCardsData.length}
      />

      <InnovationCardsGrid items={paginatedItems} />

      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => setPage(value)}
          renderItem={(item) => <PaginationItem {...item} />}
          sx={{
            "& .MuiPagination-ul": { gap: "8px" },
            "& .MuiPaginationItem-root": {
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              fontSize: "14px",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E5E7EB",
              color: "#374151",
            },
            "& .MuiPaginationItem-ellipsis": {
              backgroundColor: "transparent",
              lineHeight: "40px",
            },
            "& .Mui-selected": {
              backgroundColor: "#7B53A1 !important",
              color: "#fff",
            },
          }}
        />
      </Box>
    </Container>
  );
}
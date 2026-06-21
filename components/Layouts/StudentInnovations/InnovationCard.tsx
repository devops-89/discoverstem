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
        px: { xs: 3, md: 4, lg: 0 },
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

      {pageCount > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={(_, value) => setPage(value)}
            renderItem={(item) => <PaginationItem {...item} />}
            sx={{
              "& .MuiPagination-ul": { 
                // 🔥 FIX: Removed gap on mobile so all items fit cleanly on one line
                gap: { xs: "0px", sm: "8px" },
                flexWrap: "nowrap",
                justifyContent: "center",
              },
              "& .MuiPaginationItem-root": {
                // 🔥 FIX: Shrunk the buttons further down to 24px specifically for mobile screens to ensure the arrows never get cut off
                width: { xs: "24px", sm: "40px" },
                height: { xs: "24px", sm: "40px" },
                minWidth: { xs: "24px", sm: "40px" },
                fontSize: { xs: "11px", sm: "14px" },
                padding: 0,
                margin: { xs: "0 2px", sm: "0 4px" },
                borderRadius: "50%",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#E5E7EB",
                color: "#374151",
              },
              "& .MuiPaginationItem-icon": {
                // 🔥 FIX: Shrunk the inner SVG arrows so they fit inside the smaller 24px mobile buttons
                fontSize: { xs: "16px", sm: "20px" },
              },
              "& .MuiPaginationItem-ellipsis": {
                backgroundColor: "transparent",
                lineHeight: { xs: "24px", sm: "40px" },
              },
              "& .Mui-selected": {
                backgroundColor: "#7B53A1 !important",
                color: "#fff",
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
}
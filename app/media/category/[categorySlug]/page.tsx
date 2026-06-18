import { mediaCenterNewsData, mediaCategories } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import MediaNewsCard from "@/components/Layouts/MediaCenterLayouts/MediaNewsCard";
import FeaturedMediaCard from "@/components/Layouts/MediaCenterLayouts/PressCard";
import MediaCategoryNav from "@/components/Layouts/MediaCenterLayouts/MediaCategoryNav";
import HeroSection from "@/components/Layouts/MediaCenterLayouts/HeroSection";
import CtaBanner from "@/components/Layouts/HomeLayouts/CtaBanner";
import CategoryNavWrapper from "./CategoryNavWrapper"; // We will create this client component

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  // Find category title based on slug
  const categoryItem = mediaCategories.find(c => c.sectionId === categorySlug);
  const categoryTitle = categoryItem ? categoryItem.label : categorySlug.replace("-", " ");

  const items = mediaCenterNewsData.filter(
    (item) => item.category.toLowerCase() === categoryTitle.toLowerCase() || getSectionId(item.category) === categorySlug
  );

  return (
    <Box>
      <HeroSection />
      
      <CategoryNavWrapper />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1159px",
          mx: "auto",
          px: { xs: 2, md: 0 },
          py: { xs: 6, md: 8 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "32px", md: "48px" },
            color: "#111827",
            mb: 6,
            textTransform: "capitalize",
          }}
        >
          {categoryTitle}
        </Typography>

        {items.length > 0 ? (
          <Box>
            {/* First Item is Large */}
            <FeaturedMediaCard item={items[0]} />

            {/* Rest of the items in a grid */}
            {items.length > 1 && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
                  gap: "23px",
                }}
              >
                {items.slice(1).map((item) => (
                  <MediaNewsCard key={item.id} item={item} />
                ))}
              </Box>
            )}
          </Box>
        ) : (
          <Typography sx={{ color: "#777", fontSize: "18px" }}>
            No articles found in this category.
          </Typography>
        )}
      </Container>
      
      <CtaBanner />
    </Box>
  );
}

function getSectionId(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}

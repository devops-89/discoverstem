import { FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";import { ctaBannerData, mediaCenterNewsData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import MediaNewsCard from "@/components/Layouts/MediaCenterLayouts/MediaNewsCard";
import FeaturedMediaCard from "@/components/Layouts/MediaCenterLayouts/PressCard";
import HeroSection from "@/components/Layouts/MediaCenterLayouts/HeroSection";

import CategoryNavWrapper from "../category/[categorySlug]/CategoryNavWrapper";
import CtaBanner from "@/components/Widgets/common/CommonCta";

export default function MoreNewsPage() {
  const items = mediaCenterNewsData.filter(
    (item) => item.category === "In the Press" || item.category === "Latest News" || item.category === "News"
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
          py: { xs: 6, md: 8 }
        }}>
        
        <Typography
          variant="h1"
          sx={{
            fontFamily: FONT_FAMILY.heading,
            fontWeight: FONT_WEIGHT.bold,
            fontSize: { xs: FONT_SIZE.articleHeading, md: FONT_SIZE.pageHeadingSmall },
            color: "#111827",
            mb: 6,
            textTransform: "capitalize"
          }}>
          
          More News
        </Typography>

        {items.length > 0 ?
        <Box>
         
            <FeaturedMediaCard item={items[0]} />

           
            {items.length > 1 &&
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
              gap: "23px"
            }}>
            
                {items.slice(1).map((item) =>
            <MediaNewsCard key={item.id} item={item} />
            )}
              </Box>
          }
          </Box> :

        <Typography sx={{ color: "#777", fontSize: FONT_SIZE.lead }}>
            No articles found.
          </Typography>
        }
      </Container>
      
     
           <CtaBanner data={ctaBannerData} />
    </Box>);

}
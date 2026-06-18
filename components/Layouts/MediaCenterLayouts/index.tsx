// "use client";

// import { BlogCardType } from "@/utils/Types";
// import {
//   Box,
//   Container,
//   Grid,
//   Pagination,
//   PaginationItem
// } from "@mui/material";
// import { useState } from "react";
// import CtaBanner from "../HomeLayouts/CtaBanner";
// import BlogCard from "./BlogCard";
// import Categories from "./Categories";
// import HeroSection from "./HeroSection";
// import RecentPosts from "./RecentPosts";
// import SearchBox from "./SearchBox";
// import Tags from "./Tags";
// import MediaCenterPage from "./MediaHeader";


// type Props = {
//   blogs: BlogCardType[];
// };

// export default function MediaCenterLayout({ blogs = [] }: Props) {
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 3;

//   const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
//     setPage(value);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const startIndex = (page - 1) * itemsPerPage;
//   const paginatedBlogs = blogs;

//   return (
//     <Box component="main">
      
//       <HeroSection />
//       <Container
//             maxWidth="lg"
//             sx={{
//                 maxWidth: "min(1196px, 100%)",
//                 py: { xs: 5, md: 7 },
//                 px: { xs: 3, md: 4 },
//             }}
//         >
        
//           <Grid container spacing={4} alignItems="flex-start">

//             <Grid size={{ xs: 12, md: 7.5 }}>

//   {paginatedBlogs.map((item) => (
//     <BlogCard key={item.slug} data={item} />
//   ))}

//   <Box
//     sx={{
//       mt: 2,
//       display: "flex",
//       justifyContent: "flex-start",
//       px:{lg:8},
//     }}
//   >

// <Pagination
//   count={3}
//   page={page}
//   onChange={handleChange}
//   renderItem={(item) => {
//     if (item.type === "previous") return null;
//     return <PaginationItem {...item} />;
//   }}
//   sx={{
//     "& .MuiPagination-ul": {
//       gap: "8px",
//     },

//     "& .MuiPaginationItem-root": {
//       width: "36px",
//       height: "36px",
//       borderRadius: "50%",
//       fontSize: "14px",
//       fontWeight: 500,
//       backgroundColor: "#E5E7EB",
//       color: "#374151",
//       border: "none",
//     },

//     "& .Mui-selected": {
//       backgroundColor: "#7B53A1 !important",
//       color: "#fff",
//     },

//     "& .MuiPaginationItem-next": {
//       backgroundColor: "#E5E7EB",
//     },
//   }}
// />
//   </Box>

// </Grid>
//             <Grid
//               size={{ xs: 12, md: 4 }}
//               sx={{
//                 pl: { md: 2, lg: 3 },
//                 alignSelf: "flex-start",
//                 height: "fit-content",
//                 position: "sticky",
//                 top: 20,
//               }}
//             >
//               <SearchBox />
//               <Categories />
//               <RecentPosts />
//               <Tags />
//             </Grid>

//           </Grid>
//         </Container>
//         <MediaCenterPage/>
//       <CtaBanner/>

//     </Box>
//   );
// }

import React from "react";
import HeroSection from "./HeroSection";
import MediaCenterPage from "./MediaHeader";
import CtaBanner from "../HomeLayouts/CtaBanner";
import NewsSection from "@/components/Widgets/common/NewsSection";
import { mediaNewsData } from "@/assets/Generic-data";


export default function MediaCenterLayout() {
 
  return (
    <>
      <HeroSection />
      <MediaCenterPage />
      <NewsSection
  title="More News"
  items={mediaNewsData.filter(
    (item) => item.category === "In The Press"
  )}
/>
        <CtaBanner />
    </>
  );
}

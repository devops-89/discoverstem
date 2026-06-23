"use client";

import { GallerySectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface GallerySectionProps {
  data: GallerySectionData;
}

export default function GallerySection({
  data,
}: GallerySectionProps) {
  const count = data.images.length;
  const numRows = count === 0 ? 0 : count <= 5 ? 2 : Math.floor((count - 6) / 3) + 3;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 5, md: 6, lg: 16 },
      }}
    >
      <Box sx={{ width: "100%" }}>
      
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            mb: 1,
          }}
        >
          <Box
            sx={{
              width: "38px",
              height: "1px",
              bgcolor: "#9CA3AF",
            }}
          />

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "16px", lg: "18px" },
              lineHeight: "26px",
              textTransform: "uppercase",
              color: "#737373",
            }}
          >
            {data.eyebrow}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "22px", md: "34px", lg: "48px" },
            lineHeight: { xs: "36px", md: "46px", lg: "56px" },
            letterSpacing: "-0.03em",
            color: "#171717",
            mb: { xs: 4, md: 6, lg: "64px" },
          }}
        >
          {data.title}
        </Typography>

     
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "2fr 1fr 1fr",
              lg: "572px 278px 278px",
            },
            // 🔥 FIX: We now use the exact `numRows` calculated above. No more massive empty gaps!
            gridTemplateRows: {
              xs: "auto",
              sm: Array.from({ length: numRows }, () => "110px").join(" "),
              md: Array.from({ length: numRows }, () => "140px").join(" "),
              lg: Array.from({ length: numRows }, () => "170px").join(" "),
            },
            gap: "16px",
          }}
        >
          {data.images.map((item) => {
            const colMap: Record<number, string> = { 1: "1", 2: "2", 3: "3", 4: "2", 5: "3", 6: "1", 7: "2", 8: "3", 9: "1" };
            const rowMap: Record<number, string> = { 1: "1 / 3", 2: "1 / 2", 3: "1 / 2", 4: "2 / 3", 5: "2 / 3", 6: "3 / 4", 7: "3 / 4", 8: "3 / 4", 9: "4 / 5" };
            let col, row;
            if (item.id <= 9) {
              col = `${colMap[item.id]} / ${Number(colMap[item.id]) + 1}`;
              row = rowMap[item.id];
            } else {
              const extraIndex = item.id - 10;
              let colNum, rowNum;
              if (extraIndex < 2) {
                colNum = extraIndex + 2;
                rowNum = 4;
              } else {
                colNum = ((extraIndex - 2) % 3) + 1;
                rowNum = 5 + Math.floor((extraIndex - 2) / 3);
              }
              col = `${colNum} / ${colNum + 1}`;
              row = `${rowNum} / ${rowNum + 1}`;
            }
            return (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                border: "0.8px solid #0000000D",

                height: {
                  xs: item.variant === "large" ? "220px" : "180px",
                  sm: "auto",
                },

                gridColumn: {
                  xs: "auto",
                  sm: col,
                },

                gridRow: {
                  xs: "auto",
                  sm: row,
                },

                maxWidth: "100%",
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
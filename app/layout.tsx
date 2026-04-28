import Providers from "@/components/Providers";
import Footer from "@/components/Widgets/Footer";
import Header from "@/components/Widgets/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DiscoverSTEM",
  description: "Shape the next generation of innovators & leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <Providers>
            <Header />
            <main>{children}</main>
            <Toaster position="top-right"
            toastOptions={{
            style: {
                  borderRadius: "10px",
                  background: "#1C2539",
                  color: "#fff",
              },
            }}
            />
            <Footer />
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

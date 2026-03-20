import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aradhi Tower",
  description: "Luxury residential tower by CPH Ltd. Bangladesh. Your dream is our deposit.",
  manifest: "/manifest.json",
  icons: {
    icon: "/aradhi_logo.png",
    apple: "/aradhi_logo.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Aradhi Tower",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

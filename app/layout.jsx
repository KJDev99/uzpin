import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import ClientProvider from "@/components/ClientProvider";

import { Roboto_Condensed, Readex_Pro } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

// Readex Pro shriftini sozlash
const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"],
});

/* export const metadata = {
  title: "UZpin",
  description: "Game PromoCode",
  icons: {
    icon: "/favicon.ico",
  },
}; */

export const metadata = {
  title: "Uzpin - promo codes for the game",
  description:
    "Promo codes for PUBG Mobile Legends, Free Fire, Steam and many other games and apps",
  openGraph: {
    title: "Uzpin - promo codes for the game",
    description:
      "Promo codes for PUBG Mobile Legends, Free Fire, Steam and many other games and apps",
    url: "https://uzpin.games",
    images: [
      {
        url: "/favicon.ico",
        width: 300,
        height: 300,
        alt: "Uzpin Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzpin - promo codes for the game",
    description:
      "Promo codes for PUBG Mobile Legends, Free Fire, Steam and many other games and apps",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} ${readexPro.variable} overflow-x-hidden`}
      >
        <ClientProvider>
          <Navbar />
          {children}
          <BottomNavbar />
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}

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

export const metadata = {
  title: "UZpin",
  description: "Game PromoCode",
  icons: {
    icon: "/favicon.ico",
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

import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Head from "next/head";
import BottomNavbar from "@/components/BottomNavbar";

export const metadata = {
  title: "UZpin",
  description: "Game PromoCode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        {children}
        <BottomNavbar/>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "UZpin",
  description: "Game PromoCode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import "../styles/common.scss";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Optica Barcelona",
  description: "Optica Barcelona - Tu lugar para gafas, audífonos y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

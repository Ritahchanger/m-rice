import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import LayoutClient from "@/components/Layout/Layout";
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "M & E | Meru University",
  description: "Monitoring & Evaluation Automation System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}

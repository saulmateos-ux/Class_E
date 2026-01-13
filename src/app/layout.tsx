import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "class-E | Contractor & Workforce Management for Construction",
  description:
    "Manage your mixed W2/1099 workforce, track compliance, and streamline invoicing—all in one platform built for specialty contractors.",
  keywords: [
    "contractor management software",
    "construction workforce management",
    "specialty contractor software",
    "1099 contractor management",
    "construction compliance software",
  ],
  openGraph: {
    title: "class-E - Resource Management for Construction",
    description:
      "Unify your workforce, compliance, and invoicing in one platform built for specialty contractors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

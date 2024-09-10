import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Usman | Portfolio",
  description: "My Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />
        <div className="bg-gray-800 min-h-screen">
          {children}
        </div>
        <Footer />
        <Analytics />

      </body>
    </html>
  );
}

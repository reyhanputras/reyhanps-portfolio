/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { FloatingDockUI } from "./components/FloatingDock";
import AnimatedCursor from "react-animated-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reyhan Putra Syailendra",
  description: "Portfolio of Reyhan Putra Syailendra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} antialiased md:overflow-x-hidden`}>
        <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="hidden md:block">
            <AnimatedCursor
              innerSize={8}
              outerSize={35}
              innerScale={2}
              outerScale={2}
              outerAlpha={0}
              innerStyle={{
                backgroundColor: "white",
              }}
              outerStyle={{
                border: "3px solid white",
              }}
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

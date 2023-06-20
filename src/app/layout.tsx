"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

// THEME
const navbarTheme: CustomFlowbiteTheme = {
  navbar: {
    link: {
      active: { on: "text-primary font-semibold", off: "hover:text-primary" },
    },
  },
};

export const metadata = {
  title: "ROBU",
  description: "Official website of Robotics Club of BRAC University - ROBU",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Flowbite theme={{ theme: navbarTheme }}>
        <body className={inter.className}>{children}</body>
      </Flowbite>
    </html>
  );
}

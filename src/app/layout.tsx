import "./globals.css";
import { Inter } from "next/font/google";
import { Flowbite } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

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
      {/* <Flowbite> */}
      <body className={inter.className}>{children}</body>
      {/* </Flowbite> */}
    </html>
  );
}

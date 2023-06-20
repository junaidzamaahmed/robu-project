"use client";

import Panel from "@/components/home/Panel/Panel";
import Navbar from "../components/global/navbar/Navbar";
import Hero from "@/components/home/Hero/Hero";
import WhatWeDo from "@/components/home/WhatWeDo/WhatWeDo";
import Portfolio from "@/components/home/Portfolio/Portfolio";
import Footer from "@/components/global/footer/Footer";
import useFirebase from "@/hooks/useFirebase";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Panel />
      <WhatWeDo />
      <Portfolio />
      <Footer />
    </main>
  );
}

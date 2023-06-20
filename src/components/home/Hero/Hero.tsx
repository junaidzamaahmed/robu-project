"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import pic1 from "../../../assets/images/jelleke-vanooteghem-6NUlOHM40w8-unsplash.jpg";
import pic2 from "../../../assets/images/alex-knight-2EJCSULRwC8-unsplash.jpg";
import pic3 from "../../../assets/images/marilia-castelli-wCVNhNnI_2s-unsplash.jpg";

export default function Hero() {
  return (
    <Carousel slideInterval={5000} style={{ height: "70vh" }}>
      <Image alt="..." src={pic1} />
      <Image alt="..." src={pic2} />
      <Image alt="..." src={pic3} />
    </Carousel>
  );
}

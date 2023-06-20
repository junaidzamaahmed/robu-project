"use client";
import NavbarWithCTAButton from "@/components/global/navbar/Navbar";
import React from "react";
import email from "../../assets/images/contact-email-mail-svgrepo-com.png";
import phone from "../../assets/images/contact-phone-talking-svgrepo-com.png";
import loc from "../../assets/images/contact-pin-location-svgrepo-com.png";
import Image from "next/image";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { HiMail, HiPencil } from "react-icons/hi";
import FooterComponent from "@/components/global/footer/Footer";

export default function page() {
  return (
    <>
      <NavbarWithCTAButton />
      <h2 className="mt-20 text-2xl text-center font-semibold mb-10 underline decoration-wavy decoration-primary">
        Contact Us
      </h2>
      <div className="container mx-auto flex justify-around flex-wrap">
        <p className="text-primary flex">
          <Image alt="email" width={20} src={email} />
          bracu-robu@gmail.com
        </p>
        <p className="text-primary flex">
          <Image alt="email" width={20} src={phone} />
          01911111111
        </p>
        <p className="text-primary flex">
          <Image alt="email" width={20} src={loc} />
          BRAC University, Mohakhali, Dhaka
        </p>
      </div>
      <div className="container mx-auto mb-5">
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2">
          <h3 className="font-semibold text-xl md:text-right md:pr-4">
            Leave us a message
          </h3>
          <div className="max-w-md space-y-5 md:pl-4 md:border-l border-gray-300">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Your email" />
            </div>
            <TextInput
              icon={HiMail}
              id="email4"
              placeholder="name@flowbite.com"
              required
              type="email"
            />
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              icon={HiPencil}
              id="name"
              placeholder="Your name"
              required
              type="text"
            />
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
            <Button className="bg-primary hover:bg-secondary">Submit</Button>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

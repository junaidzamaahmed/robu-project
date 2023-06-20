"use client";
import { Footer } from "flowbite-react";
import logo from "../../../assets/images/logo.png";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <footer className="container mx-auto border-t">
      <Footer container className="border-r-0">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="flex">
              <div>
                <Image alt="ROBU Logo" src={logo} width={50} />
              </div>
              <p className="ms-3 text-xl">Robotics Club of BRAC University</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">ROBU</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://www.facebook.com/BRACU.Robotics.Club">
                    Facebook
                  </Footer.Link>
                  <Footer.Link href="https://www.linkedin.com/company/brac-university-robotics-club/">
                    LinkedIn
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="ROBU™" href="#" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://www.facebook.com/BRACU.Robotics.Club"
                icon={BsFacebook}
              />
              <Footer.Icon
                href="https://www.instagram.com/bracu_robu/"
                icon={BsInstagram}
              />
            </div>
          </div>
        </div>
      </Footer>
    </footer>
  );
}

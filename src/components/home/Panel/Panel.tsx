"use client";
import { Card } from "flowbite-react";
import Image from "next/image";
import pic1 from "../../../assets/images/president.jpg";
import pic2 from "../../../assets/images/vicepresident.jpg";
import pic3 from "../../../assets/images/operations.jpg";

export default function Panel() {
  return (
    <section className="mt-32 text-center">
      <h2 className="text-3xl font-semibold underline decoration-wavy decoration-primary">
        Our Presidential Panel
      </h2>
      <div className="container mx-auto">
        <div className="mt-10 flex justify-around flex-wrap">
          <Card className="h-80 w-80 mb-10 cursor-pointer hover:opacity-80 transition">
            <div className="flex justify-end px-4 pt-4"></div>
            <div className="flex flex-col items-center pb-5">
              <Image
                alt="President image"
                className="mb-3 rounded-full shadow-lg"
                height="96"
                src={pic1}
                width="96"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Shawon Ahmed
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                President
              </span>
            </div>
          </Card>
          <Card className="h-80 w-80 mb-10  cursor-pointer hover:opacity-80 transition">
            <div className="flex justify-end px-4 pt-4"></div>
            <div className="flex flex-col items-center pb-5">
              <Image
                alt="President image"
                className="mb-3 rounded-full shadow-lg"
                height="96"
                src={pic2}
                width="96"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Sharnit Saha
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Vice-President
              </span>
            </div>
          </Card>
          <Card className="h-80 w-80 mb-10 cursor-pointer hover:opacity-80 transition">
            <div className="flex justify-end px-4 pt-4"></div>
            <div className="flex flex-col items-center pb-5">
              <Image
                alt="President image"
                className="mb-3 rounded-full shadow-lg"
                height="96"
                src={pic3}
                width="96"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Abid Mahmood Akash
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                General Secretary - Operations
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

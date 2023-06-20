"use client";
import { Button } from "flowbite-react";
import project1 from "../../../assets/images/alex-knight-2EJCSULRwC8-unsplash.jpg";
import Image from "next/image";
import Duburi from "../../../assets/images/duburi.jpg";
import Dichari from "../../../assets/images/dichari.jpg";
import Mongoltori from "../../../assets/images/mongoltori.jpg";
import Chondrobot from "../../../assets/images/chondrobot.jpg";
import Onnesha from "../../../assets/images/onnesha.jpg";

export default function Portfolio() {
  return (
    <section className="py-32 container mx-auto space-y-10">
      <h2 className="text-2xl text-center font-semibold mb-10 underline decoration-wavy decoration-primary">
        Our Portfolio
      </h2>
      <div className="hover:scale-105 transition cursor-pointer flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-80 md:rounded-none md:rounded-l-lg"
          src={Duburi}
          alt=""
        />
        <div>
          <div className="hover:opacity-70 flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              BRACU Duburi
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The cruise of 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡’𝐬 𝐅𝐢𝐫𝐬𝐭 𝐀𝐮𝐭𝐨𝐧𝐨𝐦𝐨𝐮𝐬 𝐔𝐧𝐝𝐞𝐫𝐰𝐚𝐭𝐞𝐫 𝐕𝐞𝐡𝐢𝐜𝐥𝐞
              (𝐀𝐔𝐕) - 𝐁𝐑𝐀𝐂𝐔 𝐃𝐮𝐛𝐮𝐫𝐢 has successfully touched many coasts of
              accomplishments and set milestones with the previous two versions
              and now, 𝐁𝐑𝐀𝐂𝐔 𝐃𝐮𝐛𝐮𝐫𝐢 𝘷𝘦𝘳𝘴𝘪𝘰𝘯 𝘵𝘩𝘳𝘦𝘦 is roaring with full vigor to
              exceed it's predecessors.
            </p>
          </div>
          <Button className="ms-4 bg-primary hover:bg-secondary">
            Read more
          </Button>
        </div>
      </div>
      <div className="hover:scale-105 transition justify-end cursor-pointer flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div>
          <div className="text-end hover:opacity-70 flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              BRACU Dichari
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This research aims to provide rescue assistance and conduct
              various missions in emergency situations. Dichari includes a rover
              and drone developed by Team Dichari. This rover can traverse
              through the rough terrains, conduct different tests and do mapping
              of the surroundings along with detecting obstacles.
            </p>
          </div>
          <div className="flex justify-end mr-4">
            <Button className="ms-4 bg-primary hover:bg-secondary">
              Read more
            </Button>
          </div>
        </div>
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-80 md:rounded-none md:rounded-r-lg"
          src={Dichari}
          alt=""
        />
      </div>
      <div className="hover:scale-105 transition cursor-pointer flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-80 md:rounded-none md:rounded-l-lg"
          src={Mongoltori}
          alt=""
        />
        <div>
          <div className="hover:opacity-70 flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              BRACU Mongol Tori
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Mongol-Tori is a next generation mars rover that will one day work
              alongside human explorers in the red planet.
            </p>
          </div>
          <Button className="ms-4 bg-primary hover:bg-secondary">
            Read more
          </Button>
        </div>
      </div>
      <div className="hover:scale-105 transition justify-end cursor-pointer flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div>
          <div className="text-end hover:opacity-70 flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              BRACU Chondrobot
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              BRACU Chondrobot is the first robot from Bangladesh which attended
              in NASA Lunabotics Mining competition.
            </p>
          </div>
          <div className="flex justify-end mr-4">
            <Button className="ms-4 bg-primary hover:bg-secondary">
              Read more
            </Button>
          </div>
        </div>
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-80 md:rounded-none md:rounded-r-lg"
          src={Chondrobot}
          alt=""
        />
      </div>
      <div className="hover:scale-105 transition cursor-pointer flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-80 md:rounded-none md:rounded-l-lg"
          src={Onnesha}
          alt=""
        />
        <div>
          <div className="hover:opacity-70 flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              BRACU Onnesha
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Courtesy of Brac University, Bangladesh&apos;s first footprint in
              space by a Nano-satellite named BRAC Onnesha.
            </p>
          </div>
          <Button className="ms-4 bg-primary hover:bg-secondary">
            Read more
          </Button>
        </div>
      </div>
    </section>
  );
}

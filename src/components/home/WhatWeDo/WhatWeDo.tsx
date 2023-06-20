"use client";
import { Card } from "flowbite-react";
import robot from "../../../assets/images/robot-svgrepo-com.png";
import machineLearning from "../../../assets/images/machine-learning-svgrepo-com.png";
import web from "../../../assets/images/web-svgrepo-com.png";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="bg-black mt-20 py-32 text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-5 text-white underline decoration-wavy decoration-primary">
          What We Do
        </h2>
        <div className="flex flex-wrap justify-around">
          <Card
            className="my-5 max-w-sm h-80 w-80 bg-black hover:bg-gray-950 hover:opacity-75"
            href="#"
          >
            <div className="flex justify-center">
              <Image className="" width={100} alt="robot icon" src={robot} />
            </div>

            <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white">
              Making Robots
            </h5>
            <p className="font-normal text-gray-400 dark:text-gray-400">
              We dive into the exciting world of robotics as we design, build,
              and program innovative robots to tackle real-world challenges.
            </p>
          </Card>
          <Card
            className="my-5 max-w-sm h-80 w-80 bg-black hover:bg-gray-950 hover:opacity-75"
            href="#"
          >
            <div className="flex justify-center">
              <Image
                className=""
                width={100}
                alt="robot icon"
                src={machineLearning}
              />
            </div>

            <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white">
              Machine Learning
            </h5>
            <p className="font-normal text-gray-400 dark:text-gray-400">
              We harness the power of algorithms and data to develop intelligent
              systems and predictive models.
            </p>
          </Card>
          <Card
            className="my-5 max-w-sm h-80 w-80 bg-black hover:bg-gray-950 hover:opacity-75"
            href="#"
          >
            <div className="flex justify-center">
              <Image className="" width={100} alt="robot icon" src={web} />
            </div>

            <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white">
              Web Development
            </h5>
            <p className="font-normal text-gray-400 dark:text-gray-400">
              We Create stunning websites and web applications that merge design
              and functionality seamlessly.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

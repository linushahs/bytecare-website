import Image from "next/image";
import React from "react";
import Badge from "./badge";
import Button from "./button";
import { ArrowRightIcon } from "@/assets";
import lightsSvgUrl from "@/assets/lights.svg?url";

function ProjectsCard() {
  return (
    <div className="group relative w-full z-0 border border-borderLight rounded-3xl bg-gradientCardBg overflow-hidden">
      {/* show gradient when hovered ======================= */}
      <div className="absolute w-full -z-10 h-full bg-gradientFillCard opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

      <div className="p-4 md:p-8 flex flex-col sm:flex-row gap-8">
        {/* Project thumbnail ============================= */}
        <div className="rounded-lg w-full sm:w-[40%] lg:w-1/3 overflow-hidden">
          <Image
            src="/karobar_thumbnail.png"
            alt="karobar thumbnail"
            width={400}
            height={400}
            className="w-full h-[250px] sm:h-[400px] lg:h-[450px] object-cover group-hover:scale-110 transition-transform duration-[350ms] ease-in-out"
          />
        </div>

        {/* Project descriptipn ================================== */}
        <div className="flex flex-col gap-4 flex-1 sm:mt-2">
          <Image
            src="/karobar_logo.png"
            alt="Karobar logo"
            width={120}
            height={40}
            className="w-[90px] sm:w-[105px] lg:w-[120px]"
          />

          <div className="flex gap-2 my-2">
            {["web", "mobile", "ui ux design"].map((title) => (
              <Badge title={title} key={title} />
            ))}
          </div>

          <p className="text-2xl tracking-wide text-textPrimary font-bold">
            Helping Agency to Become Digital
          </p>

          <p className="text-md  text-textSecondary w-full lg:w-3/4">
            RSSI stands as a beacon of hope, dedicated to revitalising the Osho
            movement, restoring its sanctity, and paving the way for a future
            where Osho's transformative wisdom illuminates the hearts and souls
            of seekers around the globe.
          </p>

          {/* Build with us and live view button ================================= */}
          <div className="mt-6 sm:mt-auto mb-6 flex flex-col [&>button]:w-fit sm:flex-row gap-4">
            <Button variant="default" color="primary">
              Build With Us
              <ArrowRightIcon className="size-6" />
            </Button>

            <Button
              variant="outline"
              color="transparent"
              className="font-medium"
            >
              Live Website
            </Button>
          </div>
        </div>
      </div>

      {/* Stars displayed when hovered =============================== */}
      <div className="opacity-0 group-hover:opacity-100 absolute transition-opacity duration-300 ease-in-out left-1/3 top-0 w-[1400px] h-[400px]">
        <Image
          src="/stars.png"
          alt="stars"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lights displayed when hovered ======================================= */}
      <div className="opacity-0 group-hover:opacity-100 absolute transition-opacity duration-300 ease-in-out left-1/3 top-0 w-[900px] h-[600px]">
        <Image
          src={lightsSvgUrl}
          alt="lights"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProjectsCard;

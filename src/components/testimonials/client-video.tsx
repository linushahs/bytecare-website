import { PlayButtonIcon } from "@/assets";
import Image from "next/image";
import React from "react";

function ClientVideo() {
  return (
    <div className="relative rounded-lg overflow-hidden bg-fill size-full grid place-items-center">
      <Image
        src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600nw-1768126784.jpg"
        alt="client video thumbnail"
        className="absolute inset-0 size-full object-cover"
        width={500}
        height={500}
        loading="lazy"
      />
      <PlayButtonIcon className="size-12 z-[40] text-red-600" />
    </div>
  );
}

export default ClientVideo;

import Image from "next/image";
import React from "react";

export default function TeamMember({ id }: { id: number }) {
  return (
    <li className="flex flex-col items-center py-6 text-center md:px-6 gap-y-4">
      <figure className="relative w-32 sm:w-40 border-[6px] overflow-hidden bg-fill rounded-full md:w-48 aspect-square md:border-[8px] border-fill-tertiary">
        <Image
          className="object-cover"
          fill
          alt={`fig-${id}`}
          src={`https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg`}
        />
      </figure>
      <div className="space-y-1 mt-4">
        <h3 className="font-semibold leading-7 text-lg text-white">
          Nischaya Lama
        </h3>
        <p className="text-base text-textSecondary leading-5 ">
          UI UX Designer
        </p>
      </div>
    </li>
  );
}

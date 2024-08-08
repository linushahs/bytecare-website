import { TeamMember as TeamMemberType } from "@/sanity/groq/interface";
import Image from "next/image";
import React from "react";

export default function TeamMember({
  id,
  member,
}: {
  id: string;
  member: TeamMemberType;
}) {
  return (
    <li className="flex flex-col items-center py-6 text-center md:px-6 gap-y-4">
      <figure className="relative w-32 sm:w-40 border-[6px] overflow-hidden bg-fill rounded-full md:w-48 aspect-square md:border-[8px] border-fill-tertiary">
        <Image
          className="object-cover"
          fill
          alt={`fig-${id}`}
          src={member.avatar.asset.url}
          priority
        />
      </figure>
      <div className="space-y-1.5 mt-2">
        <h3 className="font-semibold leading-7 text-xl text-white">
          {member.name}
        </h3>
        <p className="text-base text-textSecondary leading-5 ">{member.role}</p>
      </div>
    </li>
  );
}

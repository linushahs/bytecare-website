import { teamMemberGroq } from "@/sanity/groq";
import { TeamMember } from "@/sanity/groq/interface";
import { sanityClient } from "@/sanity/lib/client";
import { ReactNode } from "react";
import { FourColumnLayout } from "./ui/column-layout";

export default async function TeamList({
  children,
}: {
  children: (props: { teamMembers: TeamMember[] }) => ReactNode;
}) {
  const teamMembers = await sanityClient.fetch(
    teamMemberGroq(),
    {},
    { cache: "no-store" }
  );

  console.log(teamMembers);

  return (
    <FourColumnLayout className="grid-cols-2 gap-x-10 sm:gap-x-4">
      {children({ teamMembers })}
    </FourColumnLayout>
  );
}

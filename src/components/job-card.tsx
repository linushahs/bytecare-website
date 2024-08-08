import { sanityClient } from "@/sanity/lib/client";
import { cn } from "@/utils";
import Link from "next/link";
import Badge from "./ui/badge";
import Button from "./ui/button";
import { PARAGRAPH_TYPES, paragraphVariants } from "./ui/paragraph";
import { careersGroq } from "@/sanity/groq";
import { JobType } from "@/sanity/groq/interface";

async function JobCards() {
  const allJobOpenings = await sanityClient.fetch<JobType[]>(
    careersGroq(),
    {},
    { cache: "no-store" }
  );

  console.log(allJobOpenings);

  return (
    <ul className="space-y-4 md:space-y-8">
      {allJobOpenings.map(
        ({ _id, slug, title, shortDescription, jobType, location }) => (
          <li
            key={_id}
            className="group flex flex-col justify-between gap-8 p-4 transition-all ease-in-out duration-300 bg-fill border border-borderSoft md:hover:bg-fill-tertiary lg:items-center lg:flex-row md:p-12 rounded-xl cursor-pointer"
          >
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold leading-8 text-white md:text-2xl">
                {title}
              </h3>
              <p
                className={cn(
                  "mt-5 mb-8 truncate-to-3-lines",
                  paragraphVariants({
                    variant: PARAGRAPH_TYPES.paragraph,
                  })
                )}
              >
                {shortDescription.slice(0, 200) + "..."}
              </p>
              <ul className="flex flex-wrap items-center gap-3">
                {[jobType, location].map((title, id) => (
                  <Badge
                    key={id}
                    title={title}
                    className="font-semibold bg-fill-tertiary capitalize group-hover:bg-borderSoft"
                  />
                ))}
              </ul>
            </div>
            <Link href={`/careers/job/${slug.current}`}>
              <Button
                showRightArrowIcon
                variant="outline"
                color="transparent"
                className="hover:bg-fill-secondary"
              >
                <span>Apply Now</span>
              </Button>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

export default JobCards;

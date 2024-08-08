import { portableImageComponent } from "@/components/blogs/portable-text-component";
import { ApplyNowButton } from "@/components/job-apply-modal";
import { HEADING_TYPES, headingVariants } from "@/components/ui/heading";
import Lights from "@/components/ui/lights";
import Footer from "@/layouts/footer";
import { jobDetailsGroq } from "@/sanity/groq";
import { sanityClient } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";

async function JobDescriptionPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const jobDetails = await sanityClient.fetch(jobDetailsGroq(slug));
  const { title, location, jobType, tags, description } = jobDetails[0];

  return (
    <>
      <Lights />
      <section className="mb-32">
        <div className="mx-auto flex flex-col items-center w-[90%] sm:max-w-[50rem] 2xl:max-w-[56rem] mt-20">
          <div className="flex flex-col items-center">
            <p className="mt-8 mb-2 flex gap-3 text-md items-center text-textSecondary capitalize">
              {jobType}
              <span className="size-1 bg-textSecondary rounded-full"></span>{" "}
              {location}
            </p>
            <h1
              className={headingVariants({ variant: HEADING_TYPES.headline04 })}
            >
              {title}
            </h1>
          </div>
          <div className="prose prose-sm sm:prose-base 2xl:prose-lg max-w-none mb-12 mt-20 tracking-normal">
            <PortableText
              value={description}
              components={portableImageComponent}
            />
          </div>

          <ApplyNowButton />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default JobDescriptionPage;

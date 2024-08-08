import { portableImageComponent } from "@/components/blogs/portable-text-component";
import RelatedBlogs from "@/components/blogs/related-blogs";
import {
  HeroContent,
  HeroFooter,
  HeroHeading,
} from "@/components/hero-content";
import ShareOnSocialMedia from "@/components/share-on-social-media";
import Container from "@/components/ui/container";
import { HEADING_TYPES } from "@/components/ui/heading";
import Lights from "@/components/ui/lights";
import Footer from "@/layouts/footer";
import { BlogBody } from "@/sanity/groq/interface";
import { sanityClient } from "@/sanity/lib/client";
import { fetchBlogPost } from "@/sanity/service";
import { formatDate } from "@/utils";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";

export const metadata = {
  title: "From Figma to SwiftUI: Designers, Here’s Your Technical Lowdown",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quo animi enim illum amet, nisi tempora optio consectetur suscipit accusantium natus magnam cupiditate veniam est quisquam facilis, deleniti adipisci corrupti.",
  openGraph: {
    title: "From Figma to SwiftUI: Designers, Here’s Your Technical Lowdown",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quo animi enim illum amet, nisi tempora optio consectetur suscipit accusantium natus magnam cupiditate veniam est quisquam facilis, deleniti adipisci corrupti.",
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },

  twitter: {
    title: "From Figma to SwiftUI: Designers, Here’s Your Technical Lowdown",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quo animi enim illum amet, nisi tempora optio consectetur suscipit accusantium natus magnam cupiditate veniam est quisquam facilis, deleniti adipisci corrupti.",
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
};

async function BlogDescriptionPage({ params }: { params: { slug: string } }) {
  const blogDesc = await fetchBlogPost(params.slug);

  const {
    title,
    slug,
    mainImage,
    author,
    _createdAt,
    body,
    categories,
    relatedBlogs,
  } = blogDesc;

  console.log(blogDesc);
  return (
    <>
      <section>
        <Container className="flex flex-col items-center">
          <HeroContent className="gap-5 mt-10 sm:mt-16">
            <p className="mt-8 flex gap-3 text-md items-center text-textSecondary">
              {categories[0].title}
              <span className="size-1 bg-textSecondary rounded-full"></span> 5
              mins read
            </p>

            {/* heading title, subtitle ================================ */}
            <HeroHeading className="" variant={HEADING_TYPES.headline04}>
              {title}
            </HeroHeading>

            <HeroFooter className="gap-10 mt-4">
              {author.map(({ name, image }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 text-md font-medium"
                >
                  <Image
                    src={image.asset.url}
                    alt={title}
                    className="size-9 sm:size-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                  <p>{name}</p>
                </div>
              ))}
            </HeroFooter>
          </HeroContent>

          <Lights />
        </Container>
      </section>

      <section>
        <Container>
          <figure className="mt-16 relative w-full grid place-items-center overflow-hidden bg-fill rounded-lg md:rounded-xl aspect-video md:aspect-[4/2]">
            <Image
              src={mainImage.asset.url}
              alt="thumbnail"
              width={1000}
              height={600}
              priority
              className="size-[80%] object-contain"
            />
          </figure>

          <div className=" sm:mt-4 max-w-4xl 2xl:max-w-5xl 2xl:w-[60rem] pb-16 mx-auto">
            <div className="py-8 border-b border-white/10">
              <ContentFromCMS blogBody={body} />
            </div>
            <div className="flex flex-col justify-between pt-10 gap-x-6 gap-y-3 lg:flex-row lg:items-center text-md">
              <p>Published on {formatDate(_createdAt)}</p>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <p className="leading-6 text-white">Share this post</p>
                <ShareOnSocialMedia slug={slug.current} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && <RelatedBlogs blogs={relatedBlogs} />}

      <Footer />
    </>
  );
}

function ContentFromCMS({ blogBody }: { blogBody: BlogBody[] }) {
  return (
    <div className="prose md:prose-lg prose-img:rounded-lg prose-img:ml-auto prose-img:mr-auto max-w-none prose-figcaption:text-center tracking-wide">
      <PortableText value={blogBody} components={portableImageComponent} />
    </div>
  );
}

export default BlogDescriptionPage;

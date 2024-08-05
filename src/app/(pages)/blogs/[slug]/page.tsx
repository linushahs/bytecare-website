import BlogCard from "@/components/blog-card";
import {
  HeroContent,
  HeroFooter,
  HeroHeading,
} from "@/components/hero-content";
import ShareOnSocialMedia from "@/components/share-on-social-media";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { HEADING_TYPES } from "@/components/ui/heading";
import Lights from "@/components/ui/lights";
import Footer from "@/layouts/footer";
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

function BlogDescriptionPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <>
      <section>
        <Container className="flex flex-col items-center">
          <HeroContent className="gap-5 mt-10 sm:mt-16">
            <p className="mt-8 flex gap-3 text-md items-center text-textSecondary">
              Design{" "}
              <span className="size-1 bg-textSecondary rounded-full"></span> 5
              mins read
            </p>

            {/* heading title, subtitle ================================ */}
            <HeroHeading className="" variant={HEADING_TYPES.headline04}>
              The Silent Killer That Shoots Down Service-Based Companies For Fun
            </HeroHeading>

            <HeroFooter className="gap-10 mt-4">
              {authors.map((author) => (
                <div
                  key={author.name}
                  className="flex items-center gap-2 text-md font-medium"
                >
                  <Image
                    src={author.image}
                    alt={author.name}
                    className="size-9 sm:size-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                  <p>{author.name}</p>
                </div>
              ))}
            </HeroFooter>
          </HeroContent>

          <Lights />
        </Container>
      </section>

      <section>
        <Container>
          <figure className="mt-16 relative w-full overflow-hidden bg-fill rounded-lg md:rounded-xl aspect-video md:aspect-[4/2]"></figure>

          <div className=" sm:mt-4 max-w-4xl 2xl:max-w-5xl 2xl:w-[60rem] pb-16 mx-auto">
            <div className="py-8 border-b border-white/10">
              <ContentFromCMS />
            </div>
            <div className="flex flex-col justify-between pt-10 gap-x-6 gap-y-3 lg:flex-row lg:items-center text-md">
              <p>Published on December 20, 2023</p>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <p className="leading-6 text-white">Share this post</p>
                <ShareOnSocialMedia slug={slug} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <RelatedBlogs />

      <Footer />
    </>
  );
}

const authors = [
  {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rajesh Karki",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function RelatedBlogs() {
  return (
    <section className="mb-12 mt-8">
      <Container>
        <div className="py-12 space-y-12 border-t border-white/10">
          <div className="flex flex-col justify-between gap-6 items-start md:items-center md:flex-row">
            <h2 className="text-white text-2xl tracking-[0.5px] font-heading font-semibold leading-[150%]">
              You may also find these useful
            </h2>
            <Button showRightArrowIcon color="fill" className="hidden sm:flex">
              <span>View All</span>
            </Button>
          </div>
          <div className=" grid grid-cols-1 gap-16 lg:grid-cols-3 md:grid-cols-2">
            {new Array(3).fill(0).map((slug) => (
              <BlogCard
                slug={slug}
                key={slug}
                sizes="(min-width: 768px) 50vw, (min-width:1024px: 33vw), 100vw"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContentFromCMS() {
  return (
    <div className="prose md:prose-lg prose-img:rounded-lg prose-img:ml-auto prose-img:mr-auto max-w-none prose-figcaption:text-center">
      <p>
        Embark with us on a captivating exploration of the future of design
        systems! Our guide on this <a href="/">insightful</a> journey is Romina
        Kavcic – a <a href="/">design system</a> professional passioned about
        AI. Armed with a rich background in design and a sharp eye for industry
        trends, Romina brings a unique and informed perspective to the table.
      </p>
      <p>
        Here is a summary of the subjects she shared with us during Connect by
        Specify 2023 👇
      </p>
      <h1>Heading 1</h1>
      <p>
        Embark with us on a captivating exploration of the future of design
        systems! Our guide on this <a href="/">insightful</a> journey is Romina
        Kavcic – a <a href="/">design system</a> professional passioned about
        AI. Armed with a rich background in design and a sharp eye for industry
        trends, Romina brings a unique and informed perspective to the table.
      </p>
      <h2>Heading 2</h2>
      <ul>
        <li>
          <p>
            <strong>Captivating:</strong> Embark with us on a captivating
            exploration of the future of design systems! Our guide on this
            insightful journey is Romina Kavcice.
          </p>
        </li>

        <li>
          <p>
            <strong>Captivating:</strong> Embark with us on a captivating
            exploration of the future of design systems! Our guide on this
            insightful journey is Romina Kavcice.
          </p>
        </li>

        <li>
          <p>
            <strong>Captivating:</strong> Embark with us on a captivating
            exploration of the future of design systems! Our guide on this
            insightful journey is Romina Kavcice.
          </p>
        </li>
      </ul>
      <p>
        Embark with us on a captivating exploration of the future of design
        systems! Our guide on this <a href="/">insightful</a> journey is Romina
        Kavcic – a <a href="/">design system</a> professional passioned about
        AI. Armed with a rich background in design and a sharp eye for industry
        trends, Romina brings a unique and informed perspective to the table.
      </p>
      <Image
        alt="Figma Cover"
        src={
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        width={800}
        height={800}
      />
      <h2>Heading 3</h2>
      <ol>
        <li>
          <p>
            <strong>Captivating:</strong> Embark with us on a captivating
            exploration of the future of design systems! Our guide on this
            insightful journey is Romina Kavcice.
          </p>
        </li>

        <li>
          <p>
            <strong>Captivating:</strong> Embark with us on a captivating
            exploration of the future of design systems! Our guide on this
            insightful journey is Romina Kavcice.
          </p>
        </li>

        <li>
          <p>
            <strong>Captivating:</strong> Embark with us on a captivating
            exploration of the future of design systems! Our guide on this
            insightful journey is Romina Kavcice.
          </p>
        </li>
      </ol>
      <blockquote>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fuga
        veniam quia consequatur fugit placeat ipsam quidem earum maiores quas,
        exercitationem ad iste quis animi assumenda. Pariatur ab magnam fugiat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo
        repellat omnis aut pariatur est! Fugiat hic voluptate quis voluptatum
        earum, perferendis exercitationem eum possimus quisquam officiis,
        consequatur laborum. Placeat?
      </blockquote>
      <p>
        <i>1 trend you can pounce on. Reading time: ~1 minute 30 seconds</i>
      </p>
      <div>
        <h2>Tweet of the week</h2>
        <Image
          alt="Profile"
          src={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={1000}
          height={800}
        />
      </div>

      <p>
        Share <b>The Status Code</b> with your friends!
      </p>
      <div>
        <h2>Conclusion</h2>
        <p>
          Embark with us on a captivating exploration of the future of design
          systems! Our guide on this insightful journey is Romina Kavcic – a
          design system professional passioned about AI. Armed with a rich back
          and a sharp eye for industry trends, Romina brings a unique and
          informed perspective to the table.
        </p>
        <p>
          Here is a summary of the subjects she shared with us during Connect by
          Specify 2023 👇
        </p>
      </div>
    </div>
  );
}

export default BlogDescriptionPage;

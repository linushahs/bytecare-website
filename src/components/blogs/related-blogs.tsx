import BlogCard from "../blog-card";
import Button from "../ui/button";
import Container from "../ui/container";

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
                // slug={slug}
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

export default RelatedBlogs;

import lightsImageUrl from "@/assets/lights.png";
import Image from "next/image";
import Badge from "./ui/badge";
import Button from "./ui/button";

interface ProjectsCardProps {
  thumbnail: {
    asset: { url: string };
  };
  title: string;
  description: string;
  tags: string[];
}

function ProjectsCard({
  thumbnail,
  title,
  description,
  tags,
}: ProjectsCardProps) {
  return (
    <div className="group relative w-full z-0 border border-borderLight rounded-3xl bg-gradientCardBg overflow-hidden h-[220px] sm:h-[400px] lg:h-[500px]">
      {/* show gradient when hovered ======================= */}
      <div className="absolute w-full -z-10 h-full bg-gradientFillCard opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

      <div className="p-4 md:p-8 flex flex-col sm:flex-row gap-8 h-full">
        {/* Project thumbnail ============================= */}
        <div className="rounded-lg w-full sm:w-[40%] lg:w-1/3 overflow-hidden">
          <Image
            src={thumbnail.asset.url}
            alt="karobar thumbnail"
            width={400}
            height={400}
            className="w-full h-full  object-cover group-hover:scale-110 transition-transform duration-[350ms] ease-in-out"
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
            {tags.map((title) => (
              <Badge title={title} key={title} />
            ))}
          </div>

          <p className="text-2xl tracking-wide text-textPrimary font-bold">
            {title}
          </p>

          <p className="text-md  text-textSecondary w-full lg:w-3/4">
            {description}
          </p>

          {/* Build with us and live view button ================================= */}
          <div className="mt-10 mb-3 sm:mt-auto sm:mb-4 flex [&>button]:w-fit gap-2 sm:gap-4">
            <Button
              showRightArrowIcon
              variant="default"
              color="primary"
              className="px-3 sm:px-6"
            >
              Build With Us
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
      <div className="opacity-0 group-hover:opacity-100 absolute transition-opacity duration-300 ease-in-out left-1/3 top-0 w-[1400px] h-[400px] pointer-events-none">
        <Image
          src="/stars.png"
          alt="stars"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lights displayed when hovered ======================================= */}
      <div className="opacity-0 pointer-events-none  absolute transition-all duration-300 ease-in-out left-1/3 top-0 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 w-full h-[200px]">
        <Image
          src={lightsImageUrl}
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

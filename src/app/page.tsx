import lightsSvgUrl from "@/assets/lights.svg?url";
import Footer from "@/layouts/footer";
import Navbar from "@/layouts/navbar";
import ProjectsSection from "@/layouts/projects-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative z-0 flex min-h-screen w-full flex-col items-center justify-between bg-background">
      <Navbar />

      {/* stars ===================== */}
      <div className="absolute z-[1] left-1/2 top-0 -translate-x-1/2 w-full h-[400px]">
        <Image
          src="/stars.png"
          alt="stars"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      {/* lights ============================= */}
      <div className="absolute z-[2] left-1/2 -translate-x-1/2 top-0 w-full h-[600px]">
        <Image
          src={lightsSvgUrl}
          alt="lights"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-4 mt-16">
        {/* heading title, subtitle ================================ */}
        <h1 className="text-5xl capitalize text-textPrimary font-bold mt-8">
          Browse our projects
        </h1>

        <p className="text-textSecondary text-lg w-[90%] sm:w-3/4 text-center">
          We have helped several startups & enterprises to successfully build &
          launch their products.
        </p>
      </div>

      <div className="container flex flex-col gap-10 my-12 relative z-[3]">
        <ProjectsSection />
      </div>

      <Footer />
    </main>
  );
}

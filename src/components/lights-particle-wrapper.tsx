import { cn } from "@/utils";
import Particles from "./ui/particles";
import Lights from "./ui/lights";

interface LightsParticleWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function LightsParticleWrapper({
  children,
  className,
}: LightsParticleWrapperProps) {
  return (
    <section className={cn("flex flex-col items-center", className)}>
      {/* Particles for (Table and desktop sizes) ============================= */}
      <Particles
        className="hidden md:block absolute inset-0 opacity-60 h-[500px] w-screen pointer-events-none"
        quantity={140}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Particles for (Mobile sizes) ============================= */}
      <div className="md:hidden absolute w-full h-[550px] pointer-events-none">
        <Particles
          className="absolute inset-0 opacity-50"
          quantity={80}
          ease={80}
          color={"#ffffff"}
          refresh
        />
      </div>

      <Lights />

      {children}
    </section>
  );
}

import { cn } from "@/utils";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

interface Achievement {
  title: string;
  description: string;
  tag: string;
  thumbnail: string;
}

interface WorkflowCardProps {
  id: number;
  achievement: Achievement;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  className?: string;
}

function WorkflowCard({
  id,
  achievement,
  progress,
  range,
  targetScale,
  className,
}: WorkflowCardProps) {
  const { title, description, tag, thumbnail } = achievement;

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      className={cn(
        "sticky flex flex-col sm:flex-row gap-4 items-center rounded-xl border border-borderSoft bg-gradientCardBg p-12 mb-10 h-[400px] md:h-[450px] lg:h-[560px]",
        className
      )}
      style={{ scale, top: `calc(16vh + ${id * 35}px)` }}
    >
      <div className="flex-1 flex sm:justify-center overflow-hidden">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={title}
            width={400}
            height={400}
            priority
            className={cn(
              "hidden sm:w-[70%]",
              (id === 2 || id === 3) && "w-[90%]"
            )}
          />
        )}
      </div>

      <div className="flex-1 ">
        <div className="flex flex-col gap-3 lg:w-[90%]">
          <span className="text-brand text-base uppercase font-semibold">
            {tag}
          </span>

          <p className="text-textPrimary text-2xl font-bold">{title}</p>

          <p className="text-textSecondary text-md mt-3">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default WorkflowCard;

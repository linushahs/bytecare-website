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
}

function WorkflowCard({
  id,
  achievement,
  progress,
  range,
  targetScale,
}: WorkflowCardProps) {
  const { title, description, tag, thumbnail } = achievement;

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      className="sticky flex gap-4 items-center rounded-xl border border-borderSoft bg-gradientCardBg p-12 h-[560px]"
      style={{ scale, top: `calc(16vh + ${id * 35}px)` }}
    >
      <div className="flex-1 flex justify-center overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={400}
          priority
          className={cn("w-[70%]", (id === 2 || id === 3) && "w-[90%]")}
        />
      </div>

      <div className="flex-1 ">
        <div className="flex flex-col gap-3 w-[90%]">
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

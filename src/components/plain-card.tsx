import React from "react";

interface PlainCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

export function PlainCard({ Icon, title, description }: PlainCardProps) {
  return (
    <li className="space-y-6 rounded-md">
      <Icon className="size-10 md:size-11" />
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-textSecondary text-md">{description}</p>
      </div>
    </li>
  );
}

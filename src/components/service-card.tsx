import React from "react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-start gap-4 sm:gap-6 bg-gradientCardBg border border-borderSoft rounded-lg p-7 sm:p-9 2xl:p-10 flex-1 h-full">
      <Icon className="text-white size-12" />

      <p className="font-bold text-xl text-textPrimary">{title}</p>
      <p className="text-textSecondary text-md">{description}</p>
    </div>
  );
}

export default ServiceCard;

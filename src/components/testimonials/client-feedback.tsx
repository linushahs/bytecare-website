import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

interface ClientFeedbackProps {
  className?: string;
  description: string;
  companyLogoUrl: string;
  clientPictureUrl: string;
  clientName: string;
  clientPosition: string;
}

function ClientFeedback({
  className,
  description,
  companyLogoUrl,
  clientPictureUrl,
  clientName,
  clientPosition,
}: ClientFeedbackProps) {
  return (
    <div
      className={cn(
        "bg-fill rounded-lg backdrop-blur p-8 flex flex-col gap-8 h-[400px] w-full ",
        className
      )}
    >
      <Image
        src={companyLogoUrl}
        width={200}
        height={100}
        alt="company-logo"
        className="w-[125px]"
      />

      <p className="text-md text-textPrimary">{description}</p>

      <div className="flex items-center gap-3 mt-auto">
        <Image
          src={clientPictureUrl}
          alt="user-avatar"
          width={100}
          height={100}
          className="size-14 rounded-full object-center object-cover"
        />

        <span>
          <p className="font-bold text-lg text-textPrimary">{clientName}</p>
          <p className="text-textSecondary">{clientPosition}</p>
        </span>
      </div>
    </div>
  );
}

export default ClientFeedback;

import React from "react";

function Badge({ title }: { title: string }) {
  return (
    <span className="bg-fill-tertiary rounded-sm font-medium text-textPrimary py-1.5 px-2.5 uppercase text-sm">
      {title}
    </span>
  );
}

export default Badge;

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...input: any[]) {
    return twMerge(clsx(input));
}

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
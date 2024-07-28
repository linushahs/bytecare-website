import localFont from "next/font/local";

export const aeonik = localFont({
    src: [
        {
            path: "../fonts/Aeonik-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/Aeonik-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/Aeonik-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/Aeonik-Light.otf",
            weight: "300",
            style: "normal",
        },
    ],
});
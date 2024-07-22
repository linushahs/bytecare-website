import { DesignIcon, ProductDevIcon, TeamIcon } from "@/assets";
import { FC, SVGProps } from "react";

export const navMenuItems = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Blogs",
        path: "/blogs",
    },

];

interface Service {
    title: string;
    icon: FC<SVGProps<SVGElement>>,
    description: string;
}

export const services: Service[] = [{
    title: "Product Development",
    icon: ProductDevIcon,
    description: "From concept to launch, we turn ideas into reality with customized product development services, ensuring quality at every stage."
},
{
    title: "Team Augmentation",
    icon: TeamIcon,
    description: "Quickly scale your team with skilled designers, developers, or project managers to meet your project needs."
}, {
    title: "Design",
    icon: DesignIcon,
    description: "Turn your product vision into life with thoughtful & compelling UI/UX designs from wireframes to prototypes."
}
]
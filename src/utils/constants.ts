import { DesignIcon, ProductDevIcon, TeamIcon } from "@/assets";
import { FC, SVGProps } from "react";

const navMenuItems = [
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
    {
        title: "Contact Us",
        path: "/contact-us",
    },
];

interface Service {
    title: string;
    icon: FC<SVGProps<SVGElement>>,
    description: string;
}

const services: Service[] = [{
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

const companyStats = [{
    title: "Projects Delivered",
    count: 30,
},
{
    title: "Satisfied Clients",
    count: 25
}, {
    title: "Team Members",
    count: 22
},
{
    title: "Years in Industry",
    count: 4
}
]


export { companyStats, navMenuItems, services };


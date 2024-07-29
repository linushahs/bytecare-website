"use client";

import { ArrowRightIcon, BarIcon, CrossIcon } from "@/assets";
import { cn } from "@/utils";
import { navMenuItems } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../components/ui/button";

export default function Navbar() {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={cn(" w-full sm:sticky top-0 left-0 z-[100]")}>
      <div
        className={cn(
          "container rounded-lg transition-all border border-transparent duration-300 ease-in-out  relative flex items-center justify-between h-[var(--navbar-height)] ",
          isScrolled &&
            "translate-y-6 outline-0 border-borderSoft py-3 pr-3 pl-6 !bg-fill lg:!w-[1100px] !h-auto"
        )}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className={cn(
              "w-[120px] md:w-[160px] transition-all duration-500 ease-in-out",
              isScrolled && "!w-[140px] 2xl:w-[145px]"
            )}
          />
        </Link>

        <ul className="hidden lg:flex gap-14 items-center text-lg text-textSecondary">
          {navMenuItems.map((menu) => (
            <li
              key={menu.title}
              className={twMerge(
                "capitalize cursor-pointer hover:text-textPrimary transition-colors duration-300 ease-in-out",
                menu.path === pathName && "text-textPrimary font-semibold"
              )}
            >
              <Link href={menu.path}>{menu.title}</Link>
            </li>
          ))}
        </ul>

        <Button
          variant={isScrolled ? "default" : "outline"}
          color={isScrolled ? "primary" : "surface"}
          className="hidden sm:flex"
        >
          Schedule a call
          <ArrowRightIcon className="size-6" />
        </Button>

        {/* Mobile screen =========================================== */}
        {/* Menu items ======================================= */}
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [isMenuOpen, openMenu] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="sm:hidden">
      <Button
        onClick={() => openMenu(!isMenuOpen)}
        variant="outline"
        color="surface"
        className="px-2.5 py-1.5 z-40"
      >
        {isMenuOpen ? (
          <CrossIcon className="size-7 text-textPrimary" />
        ) : (
          <BarIcon className="size-7 text-textPrimary" />
        )}
      </Button>

      {/* backdrop ========================= */}
      <div
        onClick={() => openMenu(false)}
        className={twMerge(
          "fixed top-[70px] left-0 opacity-0 pointer-events-none transition-opacity duration-300 ease-in w-full h-screen",
          isMenuOpen && "opacity-100 pointer-events-auto"
        )}
      ></div>

      <div
        className={twMerge(
          "absolute top-full left-0 w-full h-[350px] z-[299]  bg-surface rounded-base border border-borderSoft opacity-0 backdrop-blur-[19px] flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in pointer-events-none",
          isMenuOpen && "opacity-100  pointer-events-auto"
        )}
      >
        {["home", "about", "projects", "blogs", "schedule a call"].map(
          (menu) => (
            <a
              key={menu}
              href="#"
              className={twMerge(
                "capitalize text-lg text-textSecondary cursor-pointer hover:text-textPrimary transition-colors duration-300 ease-in-out",
                menu === "projects" && "text-textPrimary font-semibold"
              )}
            >
              {menu}
            </a>
          )
        )}
      </div>
    </div>
  );
}

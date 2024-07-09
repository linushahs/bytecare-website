"use client";

import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../components/button";
import { ArrowRightIcon, BarIcon, CrossIcon } from "@/assets";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    <nav
      className={twMerge(
        " w-full sticky top-0 left-0 z-[100] transition-all duration-300 ease-in-out",
        isScrolled && "bg-surface backdrop-blur-lg"
      )}
    >
      <div className="container relative flex items-center justify-between h-[70px] md:h-[85px]">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-[120px] md:w-[160px]"
        />

        <ul className="hidden lg:flex gap-12 items-center text-lg text-textSecondary">
          {["home", "about", "projects", "blogs"].map((menu) => (
            <li
              key={menu}
              className={twMerge(
                "capitalize cursor-pointer hover:text-textPrimary transition-colors duration-300 ease-in-out",
                menu === "projects" && "text-textPrimary font-semibold"
              )}
            >
              <a href="#home">{menu}</a>
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
          "fixed top-[70px] left-0 opacity-0 pointer-events-none transition-opacity duration-300 ease-in w-full h-screen bg-black/80",
          isMenuOpen && "opacity-100 pointer-events-auto"
        )}
      ></div>

      <div
        className={twMerge(
          "absolute top-full left-0 w-full h-[350px]  bg-surface rounded-base border border-borderSoft opacity-0 flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in",
          isMenuOpen && "opacity-100  backdrop-blur-[15px]"
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

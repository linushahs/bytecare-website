import {
  GithubIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  SlackIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-surface-secondary border-t border-borderSoft pt-14 pb-8">
      <div className="container flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between">
        {/* Logo, title and description ============================== */}
        <div className="flex flex-1 flex-col gap-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="w-[130px] md:w-[160px] "
          />

          <p className="text-md text-textSecondary w-full sm:w-3/4 md:w-full lg:w-2/3">
            Explore an innovative video meeting and teamwork software aimed to
            transform the landscape of distributed work. Bridge geographical
            gaps among teams, enrich dialogues. Remotio offers an easy-to-use
            and natural interface
          </p>

          <ul className="mt-2 flex gap-3">
            {[
              <TwitterIcon />,
              <GithubIcon />,
              <SlackIcon />,
              <YoutubeIcon />,
            ].map((icon, i) => (
              <li
                key={i}
                className="p-2 cursor-pointer rounded-full bg-surface-secondary text-textSecondary [&>svg]:size-5"
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>

        {/* Links and contact =========================================  */}
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-[40%] flex justify-between  md:justify-around">
          {/* Company links =============== */}
          <div>
            <p className="text-textPrimary text-lg font-semibold">Company</p>

            <ul className="flex flex-col gap-4 mt-6">
              {[
                "about us",
                "projects",
                "our team",
                "careers",
                "contact us",
                "blogs",
              ].map((link, i) => (
                <li
                  key={i}
                  className="capitalize cursor-pointer text-textSecondary text-md hover:text-textPrimary transition-colors duration-200 ease-in-out"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact us ========================= */}
          <div>
            <p className="text-textPrimary text-lg font-semibold">Contact Us</p>
            <ul className="flex flex-col gap-4 mt-6">
              {[
                { content: "+977 923293893", icon: <PhoneIcon /> },
                { content: "contact@bytecare.com", icon: <MailIcon /> },
                { content: "Lalitpur, Nepal", icon: <LocationIcon /> },
              ].map(({ content, icon }, i) => (
                <li
                  key={i}
                  className=" flex gap-2 [&>svg]:size-5 items-center cursor-pointer text-textSecondary text-md hover:text-textPrimary transition-colors duration-200 ease-in-out"
                >
                  {icon}
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copy right ======================== */}
      <p className="text-textSecondary text-center text-md mt-16">
        Copyright © 2024. All right reserved to Bytecare Technology
      </p>
    </footer>
  );
}

export default Footer;

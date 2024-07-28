"use client";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";

import {
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
} from "@/assets/social-media";

export default function ShareOnSocialMedia({ slug }: { slug: string }) {
  const shareUrl = `https://bytecare-website.vercel.app/blog/${slug}/`;
  const shareButtonClassName =
    "flex items-center justify-center w-10 h-10 rounded-full";
  return (
    <div className="flex items-center gap-x-3">
      <FacebookShareButton
        style={{ background: "rgba(255,255,255,0.10)" }}
        className={shareButtonClassName}
        url={shareUrl}
      >
        <FacebookIcon className="size-6" />
      </FacebookShareButton>
      <TwitterShareButton
        style={{ background: "rgba(255,255,255,0.10)" }}
        className={shareButtonClassName}
        url={shareUrl}
      >
        <TwitterIcon className="size-5" />
      </TwitterShareButton>
      <LinkedinShareButton
        style={{ background: "rgba(255,255,255,0.10)" }}
        className={shareButtonClassName}
        url={shareUrl}
      >
        <LinkedInIcon className="size-5"/>
      </LinkedinShareButton>
      <EmailShareButton
        className={shareButtonClassName}
        style={{ background: "rgba(255,255,255,0.10)" }}
        url={shareUrl}
      >
        <MailIcon className="size-5" />
      </EmailShareButton>
    </div>
  );
}

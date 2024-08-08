import { sanityClient } from "@/sanity/lib/client";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import { PortableTextComponents } from "next-sanity";
import Image from "next/image";

export const portableImageComponent: PortableTextComponents = {
  list: {
    number: ({ children }) => <ol type="1">{children}</ol>,
    bullet: ({ children }) => <ul>{children}</ul>,
  },
  listItem: {
    number: ({ children }) => <li>{children}</li>,
    bullet: ({ children }) => <ul>{children}</ul>,
  },
  types: {
    image: ({ value, isInline }) => {
      const { width, height } = getImageDimensions(value);
      return (
        <Image
          src={urlBuilder(sanityClient)
            .image(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt}
          loading="lazy"
          width={width}
          height={height}
        />
      );
    },
  },
};

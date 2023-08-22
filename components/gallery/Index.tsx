"use client";

import NextImage from "next/image";
import * as UI from "@headlessui/react";

import { Image } from "@/types";

import GalleryTab from "./GalleryTab";

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <UI.Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <UI.Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </UI.Tab.List>
      </div>
      <UI.Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <UI.Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <NextImage
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </UI.Tab.Panel>
        ))}
      </UI.Tab.Panels>
    </UI.Tab.Group>
  );
};

export default Gallery;

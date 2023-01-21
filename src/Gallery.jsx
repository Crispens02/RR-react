import "./Navbar.css";
import React from "react";
import Navbar from "./Navbar";
import PhotoSwipe from "react-photoswipe";
import { Link } from "react-router-dom";
import { useState } from "react";

const IMG_PATH = "src/assets/img";

const align = {
  textAlign: "center",
};
const images = [
  {
    src: `${IMG_PATH}/_REN0029.jpg`,
    w: 4000,
    h: 6000,
  },
  {
    src: `${IMG_PATH}/_REN0050.jpg`,
    w: 4000,
    h: 6000,
  },
  {
    src: `${IMG_PATH}/_REN0061.jpg`,
    w: 3949,
    h: 5923,
  },
  {
    src: `${IMG_PATH}/_REN0022.jpg`,
    w: 3419,
    h: 5640,
  },
  {
    src: `${IMG_PATH}/_REN0019.jpg`,
    w: 4000,
    h: 6000,
  },
  {
    src: `${IMG_PATH}/_REN0111.jpg`,
    w: 3504,
    h: 5354,
  },
  {
    src: `${IMG_PATH}/_REN0025.jpg`,
    w: 6000,
    h: 4000,
  },
  {
    src: `${IMG_PATH}/_REN0114.jpg`,
    w: 5459,
    h: 3408,
  },
  {
    src: `${IMG_PATH}/_REN0006.jpg`,
    w: 5873,
    h: 3441,
  },
];

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar />

      <section className="overflow-hidden my-6 pb-4">
        <h2 className="text-center text-white text-5xl p-4 font-medium title mb-2">
          Galería
        </h2>
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap justify-center -m-1 md:mb-2">
            <div className="flex flex-wrap w-full">
              {images.map((image, index) => (
                <div className="w-1/2 md:w-1/3 p-1 md:p-2" key={index}>
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
                    src={image.src}
                    onClick={() => openLightbox(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={align} className="mt-10">
            <Link
              to="/"
              className="px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-white border-2 border-transparent shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none transition"
            >
              volver
            </Link>
          </div>
        </div>
      </section>
      {isOpen && (
        <PhotoSwipe
          isOpen={isOpen}
          items={images}
          options={{ index: currentIndex }}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

export default Gallery;

import { Link } from "react-router-dom";
import "./Mini-gallery.css";
import Navbar from "./Navbar";
import PhotoSwipe from "react-photoswipe";
import "react-photoswipe/lib/photoswipe.css";
import { useState } from "react";

const align = {
  textAlign: "center",
};

const IMG_PATH = "src/assets/img";

function Minigallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // nueva variable para
  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };
  const closeLightbox = () => {
    setIsOpen(false);
  };
  const images = [
    {
      src: `${IMG_PATH}/_REN0003.jpg`,
      w: 3419,
      h: 5640,
    },
    {
      src: `${IMG_PATH}/_REN0006.jpg`,
      w: 5873,
      h: 3441,
    },
    {
      src: `${IMG_PATH}/_REN0008.jpg`,
      w: 3419,
      h: 5640,
    },
    {
      src: `${IMG_PATH}/_REN0016.jpg`,
      w: 3419,
      h: 5640,
    },
    {
      src: `${IMG_PATH}/_REN0013.jpg`,
      w: 3419,
      h: 5640,
    },
    {
      src: `${IMG_PATH}/_REN0015.jpg`,
      w: 3419,
      h: 5640,
    },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="overflow-hidden my-6 pb-4">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap justify-center -m-1 md:mb-2">
            <div className="flex flex-wrap w-full">
              <div className="w-full md:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
                  src={`${IMG_PATH}/_REN0003.jpg`}
                  onClick={() => openLightbox(0)}
                />
              </div>
              <div className="w-1/2 md:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
                  src={`${IMG_PATH}/_REN0006.jpg`}
                  onClick={() => openLightbox(1)}
                />
              </div>
              <div className="w-1/2 md:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
                  src={`${IMG_PATH}/_REN0008.jpg`}
                  onClick={() => openLightbox(2)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -m-1 md:mb-2">
            <div className="flex flex-wrap w-full">
              <div className="w-full md:w-1/3 p-1 md:p-2">
                <img
                  alt="chencho facha"
                  className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
                  src={`${IMG_PATH}/_REN0016.jpg`}
                  onClick={() => openLightbox(3)}
                />
              </div>
              <div className="w-1/2 md:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
                  src={`${IMG_PATH}/_REN0013.jpg`}
                  onClick={() => openLightbox(4)}
                />
              </div>
              <div className="w-1/2 md:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
                  src={`${IMG_PATH}/_REN0015.jpg`}
                  onClick={() => openLightbox(5)}
                />
              </div>
            </div>
          </div>
          <div style={align} className="mt-10">
            <Link
              to="/gallery"
              className="px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-white border-2 border-transparent shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none transition"
            >
              Ver mas fotos
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
    </>
  );
}

export default Minigallery;

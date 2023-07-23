import { useEffect, useState } from "react";

const Lightbox = ({ images, selectedIndex }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (url) => {
    setSelectedImage(url);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    console.log(selectedIndex);
    if (selectedIndex!=undefined && selectedIndex >= 0) {
      openLightbox(images[selectedIndex].url);
    }
  }, [selectedIndex]);

  return (
    showLightbox && (
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
        <div className="relative">
          <img
            src={selectedImage}
            alt="Selected Image"
            className="max-h-full"
          />
          <button
            className="absolute top-4 right-4 p-2 text-white bg-black rounded-full hover:bg-opacity-50"
            onClick={closeLightbox}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export default Lightbox;

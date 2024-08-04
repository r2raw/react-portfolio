import React, { useState } from "react";

import { useMediaQuery } from "react-responsive";
import { vexImages } from "../../myData";
import { motion } from "framer-motion";
import Modal from "../../UI/Modal";
function VexImages() {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = (index) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  return (
    <>
      {selectedImage && (
        <Modal onClose={handleClose}>
          <div className="lg:w-[50%] grid gap-4 justify-center items-center mx-auto">
            <img
              className="w-full h-[80%]"
              src={vexImages[selectedImage - 1].imgSrc}
            />
            <div className=" flex gap-2">
              {vexImages.map((img) => {
                return (
                  <img
                    onClick={() => handleSelectImage(img.id)}
                    className={`w-20 md:w-32 ${img.id === selectedImage && 'border-2'} border-sky-600`}
                    key={img.id}
                    src={img.imgSrc}
                    alt={img.id}
                  />
                );
              })}
            </div>
          </div>
        </Modal>
      )}
      <div className=" relative flex justify-center">
        {vexImages.map((img, index) => {
          const classes = `h-20 w-20 md:h-96 md:w-80 md:absolute cursor-pointer`;

          const bigScreenVariant = {
            hidden: { x: -40, rotate: 0, y: 0, opacity: 0 },
            visible: {
              x: index * 60,
              rotate: index * 20,
              y: index * 30,
              opacity: 1,
              transition: { delay: 0.75 },
            },
          };

          const smallScreenVariant = {
            hidden: { x: -40, rotate: 0, y: -40, opacity: 0 },
            visible: {
              x: 1,
              y: 1,
              opacity: 1,
              rotate: Math.random() * 50,
            },
          };
          return (
            <motion.img
              onClick={() => handleSelectImage(img.id)}
              variants={isBigScreen ? bigScreenVariant : smallScreenVariant}
              whileHover={{ zIndex: 1, scale: 1.1, rotate: 0, y: 0 }}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                impact: 100,
              }}
              key={img.id}
              src={img.imgSrc}
              alt={img.title}
              className={classes}
            />
          );
        })}
      </div>
    </>
  );
}

export default VexImages;

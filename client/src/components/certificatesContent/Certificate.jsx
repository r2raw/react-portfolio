import { certImages } from "../../myData";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Modal from "../../UI/Modal";
import { Link } from "react-router-dom";
const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 3,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  arrows: false,
};

export default function Certificate() {
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);
  const sliderRef = useRef();

  const handleSelectCert = (index) => {
    setSelectedCertIndex(index);
  };

  const handleClose = () => {
    setSelectedCertIndex(null);
  };
  return (
    <>
      <AnimatePresence>
        {selectedCertIndex && (
          <Modal onClose={handleClose}>
              <motion.div
                layout
                className=" h-svh w-full flex flex-col justify-center items-center gap-4"
              >
                <img
                  className="h-[80%] w-[80%]"
                  src={certImages[selectedCertIndex - 1].imgSrc}
                  alt={certImages[selectedCertIndex - 1].imgSrc}
                />
                <div className="hidden xl:flex gap-4 px-8">
                  {certImages.map((cert) => (
                    <img
                      className={` w-32 cursor-pointer ${
                        selectedCertIndex === cert.id && "border-4"
                      } border-sky-600`}
                      key={cert.id}
                      src={cert.imgSrc}
                      alt={cert.title}
                      onClick={() => {
                        handleSelectCert(cert.id);
                      }}
                    />
                  ))}
                </div>
              </motion.div>
          </Modal>
        )}
      </AnimatePresence>
      <section className=" text-gray-400 h-screen flex flex-col  justify-center  px-10 md:px-40"  id='certificates'>
        <h1 className="text-2xl text-center md:text-4xl md:text-left mb-16 text-sky-600 font-bold">
          CERTIFICATES
        </h1>
        <div className="flex flex-col gap-4 ">
          <motion.div
            variants={{
              hidden: { x: -200, opacity: 0, scale: 0.5 },
              visible: {
                x: 0,
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            className=" slider-container relative group"
          >
            <Slider
              ref={(slider) => {
                sliderRef.current = slider;
              }}
              {...settings}
            >
              {certImages.map((cert) => (
                <div
                  onClick={() => {
                    handleSelectCert(cert.id);
                  }}
                  key={cert.id}
                  className="flex flex-col px-4"
                >
                  <img
                    className="h-96 md:h-72 lg:h-96 "
                    src={cert.imgSrc}
                    alt={cert.title}
                  />
                  <p className="text-md md:text-lg lg:text-xl font-bold mt-4">{`"${cert.title}"`}</p>
                </div>
              ))}
            </Slider>

            <div
              onClick={() => {
                sliderRef.current.slickPrev();
              }}
              onMouseOver={() => {
                sliderRef.current.slickPause();
              }}
              onMouseLeave={() => {
                sliderRef.current.slickPlay();
              }}
              className="absolute text-white left-0 top-0 h-full hidden justify-center z-10 cursor-pointer group-hover:flex flex-col bg-neutral-900/20 px-4"
            >
              <GrPrevious />
            </div>
            <div
              onClick={() => {
                sliderRef.current.slickNext();
              }}
              onMouseOver={() => {
                sliderRef.current.slickPause();
              }}
              onMouseLeave={() => {
                sliderRef.current.slickPlay();
              }}
              className="absolute text-white right-0 top-0 h-full hidden justify-center z-10 cursor-pointer group-hover:flex flex-col  bg-neutral-900/20 px-4"
            >
              <GrNext />
            </div>
          </motion.div>
          {/* <div className="flex gap-2 justify-center" id="dots">
          {certImages.map((cert) => (
            <div
              key={cert.id}
              className=" rounded-full w-3 h-3 bg-gray-400"
            ></div>
          ))}
        </div> */}
        </div>
      </section>
    </>
  );
}

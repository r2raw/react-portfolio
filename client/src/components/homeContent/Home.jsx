import { techImages } from "../../myData.js";
import { motion } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  autoplay: true,
  centerMode: true,
  speed: 300,
  autoplaySpeed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  cssEase: "linear",
  arrows: false,
};

export default function Home() {
  const sliderRef = useRef();
  return (
    <section className=" text-gray-400 min-h-dvh flex flex-col  justify-center"  id='home'>
      <motion.div
        variants={{
          hidden: { scale: 0, opacity: 0.5 },
          visible: { scale: 1, opacity: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        transition={{
          duration: 1,
          type: "spring",
        }}
        className="flex flex-col gap-10 mb-16 md:mb-40"
      >
        <motion.h2
          className="text-2xl md:text-3xl"
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hey, my name is
        </motion.h2>
        <motion.h1
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 1, delay: 0.25 }}
          className="text-sky-600 font-bold text-4xl md:text-[4rem] "
        >
          Arturo D. Marte Jr.II
        </motion.h1>
        <motion.h2 
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }} 
          transition={{ duration: 1, delay: 0.75 }}
          className="text-2xl md:text-3xl">Full-stack Programmer</motion.h2>
      </motion.div>
      <motion.div
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }} 
          initial='hidden'
          whileInView='visible'
          exit='hidden'
          transition={{duration: 0.5, delay: 1 }}
        className="flex flex-col justify-center items-center p-4 gap-10"
        id="tech-icons"
      >
        <h2 className="text-lg">Tech-stack:</h2>
        <div className="w-full md:w-1/2 slider-container relative group">
          <Slider
            ref={(slider) => {
              sliderRef.current = slider;
            }}
            {...settings}
          >
            {techImages.map((tech) => (
              <motion.div
                key={tech.id}
                variants={{
                  hidden: { scale: 0, opacity: 0.5 },
                  visible: { scale: 1, opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ type: "spring" }}
              >
                <img className="w-14 h-14" src={tech.imgSrc} alt={tech.title} />
              </motion.div>
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
            className="absolute left-0 top-0 h-full hidden justify-center z-10 cursor-pointer group-hover:flex flex-col"
          >
            Prev
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
            className="absolute right-0 top-0 h-full hidden justify-center z-10 cursor-pointer group-hover:flex flex-col"
          >
            Next
          </div>
        </div>
      </motion.div>
    </section>
  );
}

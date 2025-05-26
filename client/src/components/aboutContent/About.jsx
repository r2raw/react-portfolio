import { motion } from "framer-motion";
import VexImages from "./VexImages";
import DallasImages from "./DallasImages";
export default function About() {

  return (
    <section className="text-gray-400 flex flex-col  justify-center py-20  md:px-40 " id='about'>
      <h1 className="text-2xl md:text-4xl md:text-left mb-16 text-sky-600 font-bold">
        ABOUT
      </h1>
      <div className="grid md:grid-cols-2 gap-10 ">
        <div className="text-sm md:text-xl grid gap-8 text-justify md:text-left leading-10 float-right">
          <motion.p
            variants={{
              hidden: { x: -200, opacity: 0, scale: 0.5 },
              visible: { x: 0, opacity: 1, scale: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 1, type: "spring" }}
          >
            Hi, I'm Arturo D. Marte Jr. II, a person with a strong passion for programming. I’m skilled in
            Java, C#, and Visual Basic, but my main expertise is in JavaScript,
            including frameworks like Node.js, React.js, Redux, and Next.js.
          </motion.p>
          <motion.p
            variants={{
              hidden: { x: -200, opacity: 0, scale: 0.5 },
              visible: { x: 0, opacity: 1, scale: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 1, type: "spring", delay: 0.5 }}
          >
            In my third year of college, I joined the robotics team as a programmer. We
            made it to the VEX Robotics competition finals, narrowly missing out
            on representing the Philippines in Dallas. The experience was both
            valuable and inspiring.
          </motion.p>
        </div>
        <VexImages />
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-20 ">
        <div className="text-sm md:text-xl grid gap-8 text-justify md:text-left leading-10 float-right order-2">
          <motion.p
            variants={{
              hidden: { x: -200, opacity: 0, scale: 0.5 },
              visible: { x: 0, opacity: 1, scale: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 1, type: "spring" }}
          >
            The following year, we came back stronger and won the VEX High Stakes Robot Skills Champion title, earning us a spot at the VEX World Championship in Dallas, Texas, held from May 9 to 11, 2025. 
          </motion.p>
          <motion.p
            variants={{
              hidden: { x: -200, opacity: 0, scale: 0.5 },
              visible: { x: 0, opacity: 1, scale: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 1, type: "spring", delay: 0.5 }}
          >
            Before flying to Dallas, we received the CHED-UniFAST Academic Excellence Award, recognizing our outstanding academic and leadership performance. We proudly placed in the top 15 of the Robot Skills Challenge—an achievement that reflected our team's hard work and rapid progress in just our second year.


          </motion.p>
        </div>
        <DallasImages />
      </div>
    </section>
  );
}

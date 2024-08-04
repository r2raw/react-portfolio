import Input from "../../UI/Input";
import ContactForm from "./ContactForm";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion, stagger } from "framer-motion";
function Contacts() {
  return (
    <section className="text-gray-400 h-screen flex flex-col  justify-center px-10 md:px-40"  id='contacts'>
      <h1 className="text-4xl text-left mb-16 text-sky-600 font-bold">
        CONTACTS
      </h1>
      <div className="grid lg:flex lg:justify-between gap-10 text-left">
        <ContactForm />
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
          className=" text-neutral-900 grid gap-4"
        >
          {socialLinks.map((social) => {
            return (
              <motion.a href={social.url} target="_blank"
                key={social.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: [0.5, 1.2, 1] },
                }}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                className="bg-sky-600 flex gap-4 text-[2rem] md:text-[2.5rem] lg:text-[3rem] items-center justify-start px-6 rounded-md"
              >
                {social.icon}
                {social.title}
              </motion.a>
            );
          })}
          {/* <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            className="bg-sky-600 flex gap-4 text-[2rem] md:text-[2.5rem] lg:text-[3rem] items-center justify-start px-6"
          >
            <FaFacebookSquare />
            Facebook
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}

export default Contacts;

const socialLinks = [
  {
    id: 1,
    title: "Facebook",
    icon: <FaFacebookSquare />,
    url: " https://www.facebook.com/xpayatx",
  },

  {
    id: 2,
    title: "LinkedIn",
    icon: <FaLinkedin />,
    url: " https://www.linkedin.com/in/marte-jr-ii-arturo-d-631a70248/",
  },
  {
    id: 3,
    title: "GMail",
    icon: <SiGmail />,
    url: "mailto:martejrii.arturo.07172001@gmail.com",
  },
];

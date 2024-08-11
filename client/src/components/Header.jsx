import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Link as ScrollLink } from "react-scroll";
export default function Header({ resume }) {
  const [openMenu, setOpenMenu] = useState(false);
  const isBigScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <>
      <motion.header
        variants={{
          hidden: { y: -100, opacity: 0 },
          visible: { y: 1, opacity: 1 },
        }}
        animate={openMenu ? "visible" : isBigScreen ? "visible" : "hidden"}
        exit="hidden"
        transition={{
          duration: 0.5,
          bounce: 1,
          stiffness: 100,
          type: "spring",
        }}
        className={`fixed top-0 left-0 py-8 px-40 w-full bg-neutral-900 ${
          openMenu ? "flex" : "hidden"
        } md:flex flex-col gap-10 justify-between text-lg md:text-xl lg:text-2xl font-bold text-sky-600 md:flex-row z-10`}
      >
        <div  className="flex justify-center items-center" id="brand-logo">
          <p>
            {resume ? (
              <Link to="/">ARTURO</Link>
            ) : (
              <ScrollLink
                className="cursor-pointer"
                to="home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500}
              >
                ARTURO
              </ScrollLink>
            )}
          </p>
        </div>
        <ul className="flex flex-col gap-4 md:flex-row uppercase ">
          <li className="flex justify-center items-center">
            {resume ? (
              <Link to="/">HOME</Link>
            ) : (
              <ScrollLink
                className="cursor-pointer"
                to="home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500}
              >
                HOME
              </ScrollLink>
            )}
          </li>
          <li className="flex justify-center items-center">
            {resume ? (
              <Link to="/">ABOUT</Link>
            ) : (
              <ScrollLink
                className="cursor-pointer"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500}
              >
                ABOUT
              </ScrollLink>
            )}
          </li>
          {/* <li>
              <Link to="/"  scroll={el => scrollWithOffset(el)}>PROJECTS</Link>
            </li> */}
          <li className="flex justify-center items-center">
            {resume ? (
              <Link to="/">CERTIFICATES</Link>
            ) : (
              <ScrollLink
                className="cursor-pointer"
                to="certificates"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={500}
              >
                CERTIFICATES
              </ScrollLink>
            )}
          </li>
          <li className="flex justify-center items-center">
            {resume ? (
              <Link to="/">CONTACTS</Link>
            ) : (
              <ScrollLink
                className="cursor-pointer"
                to="contacts"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={500}
              >
                CONTACTS
              </ScrollLink>
            )}
          </li>
        </ul>
        <Link to="/resume" className="bg-sky-600 text-neutral-900 px-4 py-2 rounded-md">RESUME</Link>
      </motion.header>
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className=" fixed right-2 top-2 z-20"
      >
        <CiMenuBurger className="text-sky-600 w-8 h-8 md:hidden" />
      </button>
    </>
  );
}

import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";

import useMediaQuery from "../hooks/useMediaQuery";

const About = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <section id="about" className="pt-20 pb-16">
      <div className="flex items-center justify-between">
        <motion.div
          className="md:w-1/2 text-center md:text-left md:pr-20 pr-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 md:text-left text-center">
            ABOUT <span className="text-red"> ME </span>
          </p>
          <LineGradient width="md:mx-0 mx-auto w-2/6" />
          <p className="mt-10">
            I 'm very ambitious front-end developer looking for a role in
            established IT company with the oppoptunity to work with the latest
            technology on challenging and diverse projects.
          </p>
          <p className="mt-6">
            I 'm quietly confident, naturally curious, and prepetually working
            on imporving my chops one design problem at a time.
          </p>
          <p className="mt-6">
            If I need define myself in one sentence that would be a tech -
            obsessed, self - confident, motivated person.
          </p>
        </motion.div>
        {isDesktop ? (
          <motion.div
            className="pb-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="cubespinner">
              <div className="face1 icon">
                <FaReact color="#5ed4f4" />
              </div>
              <div className="face2 icon">
                <AiFillHtml5 color="#f06529" />
              </div>
              <div className="face3 icon">
                <BiLogoTailwindCss color="#0275d8" />
              </div>
              <div className="face4 icon">
                <BiLogoJavascript color="#efd81d" />
              </div>
              <div className="face5 icon">
                <BiLogoCss3 color="#28a4d9" />
              </div>
              <div className="face6 icon">
                <BiLogoTypescript color="#007acc" />
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="w-0 h-0" />
        )}
      </div>
    </section>
  );
};

export default About;

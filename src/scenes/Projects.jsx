import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1Img from "../assets/project-1.png";
import Project2Img from "../assets/project-2.png";
import Project3Img from "../assets/project-3.png";
import Project4Img from "../assets/project-4.png";

const projectObject = [
  {
    title: "Evo Gym",
    subTitle:
      "I created a gym website using React and TypeScript, with a visually appealing design achieved through Tailwind CSS. It is fully responsive, delivering an optimal experience on all screen sizes.",
    image: Project1Img,
    link: "https://evogym-typescript-mu.vercel.app/",
  },
  {
    title: "Hoo Bank",
    subTitle:
      "I created a modern bank landing page using React, with a visually appealing design achieved through Tailwind CSS. It is fully responsive, delivering an optimal experience on all screen sizes.",
    image: Project2Img,
    link: "https://hoo-bank-eta.vercel.app/",
  },
  {
    title: "The Fit Club",
    subTitle:
      "Using React, I successfully created a gym website with captivating animations, styling it with CSS. The website is designed to be mobile-responsive, providing an engaging experience on various devices.",
    image: Project3Img,
    link: "https://fit-club-six.vercel.app/",
  },
  {
    title: "Homyz",
    subTitle:
      "Using React, I successfully created a real estate website with captivating animations, styling it with CSS. The website is designed to be mobile-responsive, providing an engaging experience on various devices.",
    image: Project4Img,
    link: "https://real-estate-olive-two.vercel.app/",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-40">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red ">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 ">
          As a frontend developer, I have developed projects using React and
          TypeScript, and implemented responsive design using Tailwind CSS. My
          projects are user-friendly, accessible, and optimized for performance.
        </p>
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {projectObject.map((pro) => (
            <motion.div
              variants={projectVariant}
              className="relative"
              key={pro.title}
            >
              <a href={pro.link} target="_blank" rel="noreferrer">
                <div
                  className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
                     bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue"
                >
                  <p className="text-2xl font-playfair">{pro.title}</p>
                  <p className="mt-7">{pro.subTitle}</p>
                </div>
                <img src={pro.image} alt={pro.title} />
              </a>
            </motion.div>
          ))}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

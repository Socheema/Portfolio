import React from "react";
import { motion } from "motion/react";

function About() {
  return (
    <motion.div
      className=" max-w-4xl flex flex-col items-start justify-center mx-auto px-6 pt-4 pb-0 md:px-6 md:py-6 gap-4 md:gap-6 mt-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      }}
    >
      <h2 className="text-3xl font-semibold md:text-5xl">About</h2>
      <p>
        I am a passionate web developer with a focus on creating dynamic and
        responsive user experiences. My journey in web development has equipped
        me with a diverse skill set, including proficiency in HTML, CSS,
        JavaScript, and various frameworks.
      </p>
      <p>
        I thrive on challenges and continuously seek to improve my skills and
        knowledge in the ever-evolving tech landscape.
      </p>
    </motion.div>
  );
}

export default About;

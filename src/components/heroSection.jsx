import React from "react";
import { motion } from "motion/react";
import profile from "../assets/profile.jpg";

function HeroSection() {
  return (
    <div className="w-full mb-0 mt-20 md:mt-[8rem] px-2">
      <div className="max-w-4xl flex flex-col items-start justify-center mx-auto px-4 pt-4 pb-0 md:px-6 md:py-6 gap-4 md:gap-6">
        {/* Profile Image Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
        >
          <img
            src={profile}
            alt="profile image"
            className="w-[80px] h-[80px] rounded-full"
          />
        </motion.div>

        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          <h3 className="text-3xl font-semibold leading-10 md:leading-13 md:text-5xl text-gray-900">
            Hi, I'm Azubuike Chima. <br />A Frontend Developer
          </h3>
        </motion.div>

        {/* Description Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut"
          }}
        >
          <p className="text-base md:text-lg text-gray-600">
            I am a frontend developer with a passion for creating beautiful and
            functional user interfaces.
          </p>
        </motion.div>

        {/* Buttons Animation */}
        <motion.div
          className="flex items-center justify-start gap-4 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: "easeOut"
          }}
        >
          <motion.button
            className="px-4 py-2 bg-black rounded-lg cursor-pointer text-white"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>

          <motion.div
            className="flex items-center gap-2 bg-gray-300 rounded-full px-4 py-2"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-black"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <p className="text-lg text-black">Available </p>
            <span className="hidden md:inline">for new project</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;

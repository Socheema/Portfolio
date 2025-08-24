import React from "react";
import { motion } from "framer-motion";
import clipzap from "../assets/clipzapp.png";
import Meal from "../assets/Meal.png";
import poortfolio from "../assets/Poortfolio.png";
import Zupay from "../assets/Zupay.png";
import Stripe from "../assets/Stripe.png";
import ContactSection from "./contactComponent";

function ProjectComponent() {
  const projects = [
    {
      id: 1,
      image: clipzap,
      title: "ClipZap",
      bgColor: "bg-gray-50",
      desc: "A links shortener app that allows users to shorten long links to short, memorable and customizable links. It also enables link sharing, QR code download and analytics display.",
      link: "https://clipzap.vercel.app/",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      image: Zupay,
      title: "Zupay",
      bgColor: "bg-blue-50",
      desc: "A payment app that allows users to make payments, send and receive money, and manage their finances. It features a user-friendly interface, secure transactions, and real-time notifications.",
      link: "https://zupay-me.vercel.app/",
      tech: ["React", "Express", "Stripe API"],
    },
    {
      id: 3,
      image: Stripe,
      title: "Stripe Clone",
      bgColor: "bg-purple-50",
      desc: "A Stripe clone that replicates the payment processing interface with modern design principles. Features responsive design and smooth user interactions.",
      link: "https://striipe.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      image: poortfolio,
      title: "Portfolio",
      bgColor: "bg-green-50",
      desc: "A personal portfolio website that showcases my skills, projects, and experiences. It features a clean design, responsive layout, and easy navigation to highlight my work and achievements.",
      link: "https://potfoleu.netlify.app/",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 5,
      image: Meal,
      title: "Meal App",
      bgColor: "bg-orange-50",
      desc: "A meal planning app that helps users discover, plan, and prepare meals. It features a recipe database, meal planning tools, and grocery list generation to simplify the cooking process.",
      link: "https://meal-aps.netlify.app/",
      tech: ["React", "API Integration", "Local Storage"],
    },
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className={`${project.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
    >
      {/* Project Image */}
      <motion.div
        className="mb-4 overflow-hidden rounded-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Project Content */}
      <div className="space-y-4">
        <motion.h3
          className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-200"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className=" text-sm leading-relaxed line-clamp-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {project.desc}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 bg-white bg-opacity-80 text-xs font-medium rounded-full border"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1 + 0.4 + techIndex * 0.05,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#3B82F6",
                color: "#ffffff",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Project Link */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span>View Project</motion.span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 3, y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      className="w-full py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-start mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            Here's What I've Been Up To
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A collection of projects I've built while learning and growing as a
            frontend developer
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Want to see more of my work or collaborate on a project?
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-500 transition-colors duration-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              onClick={() => {
                const contactSection =
                  document.getElementById("contact-section");
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              href=""
              className="decoration-none text-white"
            >
              Get In Touch
            </a>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ProjectComponent;

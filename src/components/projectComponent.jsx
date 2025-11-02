import React from "react";
import { motion } from "framer-motion";
import clipzap from "../assets/clipzapp.png";
import Zupay from "../assets/Zupay.png";
import Stripe from "../assets/Stripe.png";
import audiophile from "../assets/audiophile.png";
import ticketflow from "../assets/ticketflow.png";
import ContactSection from "./contactComponent";

function ProjectComponent() {
  const projects = [
    {
      id: 1,
      image: audiophile,
      title: "Audiophile - Empowering Young Africans",
      bgColor: "bg-gray-50",
      desc: "Audiophile is your go-to destination for premium audio products designed to elevate your listening experience. Explore our wide range of headphones, speakers, and earphones crafted for true audiophiles.",
      link: "https://audiophile-three-pi.vercel.app/",
      tech: [
        "React",
        "convex",
        "Resend",
        "Tailwind CSS",
        "TypeScript",
        "Radix UI",
      ],
    },
    {
      id: 2,
      image: ticketflow,
      title: "TicketFlow",
      bgColor: "bg-blue-50",
      desc: "Monitor ticket status and progress in real-time with instant updates.Organize tickets by status, priority, and category for better workflow management.",
      link: "https://ticket-flow-nu.vercel.app/",
      tech: ["Vue", "Typescript", "Radix UI"],
    },
    {
      id: 3,
      image: clipzap,
      title: "ClipZap",
      bgColor: "bg-gray-50",
      desc: "A links shortener app that allows users to shorten long links to short, memorable and customizable links. It also enables link sharing, QR code download and analytics display.",
      link: "https://clipzap.vercel.app/",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      image: Zupay,
      title: "Zupay",
      bgColor: "bg-blue-50",
      desc: "A payment app that allows users to make payments, send and receive money, and manage their finances. It features a user-friendly interface, secure transactions, and real-time notifications.",
      link: "https://zupay-me.vercel.app/",
      tech: ["React", "Express", "Stripe API"],
    },
    {
      id: 5,
      image: Stripe,
      title: "Stripe Clone",
      bgColor: "bg-purple-50",
      desc: "A Stripe clone that replicates the payment processing interface with modern design principles. Features responsive design and smooth user interactions.",
      link: "https://striipe.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className={`${project.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Project Image */}
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed line-clamp-3 text-gray-600">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-white bg-opacity-80 text-xs font-medium rounded-full border hover:bg-blue-50 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link */}
        <div className="pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <span>View Project</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-start mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Here's What I've Been Up To
          </h2>
          <p className="text-lg max-w-2xl text-gray-600">
            A collection of projects I've built while learning and growing as a
            frontend developer
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-gray-600">
            Want to see more of my work or collaborate on a project?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact-section");
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectComponent;

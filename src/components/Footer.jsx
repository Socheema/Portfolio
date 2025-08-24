import React from "react";
import { motion } from "framer-motion";
import { House, Github, FileText, Twitter, Mail, ExternalLink } from "lucide-react";

function Footer() {
  const socialLinks = [
    {
      name: "Home",
      icon: House,
      href: "/",
      color: "text-gray-600 hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/yourusername",
      color: "text-gray-600 hover:text-gray-900"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      color: "text-gray-600 hover:text-blue-400"
    },
    {
      name: "Resume",
      icon: FileText,
      href: "/resume.pdf",
      color: "text-gray-600 hover:text-green-600"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
      color: "text-gray-600 hover:text-red-500"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="w-full bg-white border-t border-gray-100 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Chima Francis
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional,
              and user-centered digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <motion.button
                onClick={() => {
                  const projectsSection = document.querySelector('[class*="projects"]') ||
                                        document.querySelector('section');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                whileHover={{ x: 5 }}
              >
                Projects
              </motion.button>
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById('contact-section');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                whileHover={{ x: 5 }}
              >
                Contact
              </motion.button>
              <motion.button
                onClick={scrollToTop}
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                whileHover={{ x: 5 }}
              >
                Back to Top
              </motion.button>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Let's Connect
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Open for freelance work and collaboration opportunities.
            </p>
            <motion.a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Social Links & Navigation */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`p-2 rounded-lg transition-all duration-200 ${link.color} hover:bg-gray-50`}
                aria-label={link.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.1,
                  y: -2
                }}
                viewport={{ once: true }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Chima Francis. All rights reserved.
          </motion.p>
        </motion.div>

        {/* Floating Action Button - Back to Top */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200 z-40"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
        >
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </motion.svg>
        </motion.button>
      </div>
    </motion.footer>
  );
}

export default Footer;

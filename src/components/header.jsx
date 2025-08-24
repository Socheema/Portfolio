import React from "react";
import { House, Github, FileText, Twitter } from "lucide-react";
import { Link } from "react-router-dom";


function Header() {
  function downloadResumeFromURL() {
    const resumeURL =
      "https://mega.nz/file/IRQ3hCbS#V-6Hlhs5alawYeT_XGkzNe8N26z9pKlSyw7v2h9bGyE";
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "YourName_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full px-4 py-2 flex justify-center mt-4 md:mt-6">
      <nav className="fixed z-50 bg-white/95 backdrop-blur rounded-lg flex items-center gap-2 md:gap-4 border border-gray-200 px-4 py-2 md:px-6 md:py-2 shadow-lg">
        <Link
          to="/"
          className="px-2 py-2 hover:bg-gray-100 transition-colors duration-200 hover:rounded-lg"
          aria-label="Home"
        >
          <House size={23} color="gray" />
        </Link>

        <span className="text-gray-200">{"|"}</span>

        <button
          onClick={() => handleExternalLink("https://github.com/socheema")}
          className="px-2 py-2 hover:bg-gray-100 transition-colors duration-200 hover:rounded-lg"
          aria-label="GitHub Profile"
        >
          <Github size={23} color="gray" />
        </button>

        <button
          onClick={() => handleExternalLink("https://twitter.com/tech_chi_")}
          className="px-2 py-2 hover:bg-gray-100 transition-colors duration-200 hover:rounded-lg"
          aria-label="Twitter Profile"
        >
          <Twitter size={23} color="gray" />
        </button>

        <button
          onClick={downloadResumeFromURL}
          className="px-2 py-2 hover:bg-gray-100 transition-colors duration-200 hover:rounded-lg group relative"
          aria-label="Download Resume"
          title="Download Resume"
        >
          <FileText size={23} color="gray" />

          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Download Resume
          </span>
        </button>

        <span className="text-gray-200">{"|"}</span>

        <div className="flex items-center justify-center gap-2 bg-black text-white px-3 py-2 rounded-lg border border-l-gray-200 text-lg md:text-lg hover:md:px-4 hover:md:py-3 transition-all duration-200">
          <Link to="https://socheema.hashnode.dev/">
            <span className="md:hidden">Blog</span>
            <span className="hidden md:inline">My Blog</span>
          </Link>
        </div>
      </nav>

    </div>
  );
}

export default Header;

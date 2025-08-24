import React from "react";
import { House, Github, FileText, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { ProgressComponent } from "./progressComponent";

function Header() {
  const handleResumeDownload = () => {
    const method1 = () => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Chima_Francis_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
          onClick={() => handleExternalLink('https://github.com/socheema')}
          className="px-2 py-2 hover:bg-gray-100 transition-colors duration-200 hover:rounded-lg"
          aria-label="GitHub Profile"
        >
          <Github size={23} color="gray" />
        </button>

        <button
          onClick={() => handleExternalLink('https://twitter.com/tech_chi_')}
          className="px-2 py-2 hover:bg-gray-100 transition-colors duration-200 hover:rounded-lg"
          aria-label="Twitter Profile"
        >
          <Twitter size={23} color="gray" />
        </button>

        <button
          onClick={handleResumeDownload}
          className="px-2 py-2 hover:bg-gray-100 transition-colors duration-200 hover:rounded-lg group relative"
          aria-label="Download Resume"
          title="Download Resume"
        >
          <FileText size={23} color="gray" />
          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Download Resume
          </span>
        </button>

        <span className="text-gray-200">{"|"}</span>

        <div className="flex items-center justify-center gap-2 bg-black text-white px-3 py-2 rounded-lg border border-l-gray-200 text-lg md:text-lg hover:md:px-4 hover:md:py-3 transition-all duration-200">
          <Link to="/blog">
            <span className="md:hidden">Blog</span>
            <span className="hidden md:inline">My Blog</span>
          </Link>
        </div>
      </nav>
      <ProgressComponent />
    </div>
  );
}

export default Header;






// Event-driven inventory system
// class InventoryEventBus {
//   constructor() {
//     this.listeners = new Map();
//     this.lastUpdate = new Map();
//     this.batchTimer = null;
//   }

//   // Batch inventory updates to prevent render storms
//   updateInventory(updates) {
//     updates.forEach(({ productId, variantId, quantity }) => {
//       this.lastUpdate.set(`${productId}-${variantId}`, {
//         quantity,
//         timestamp: Date.now()
//       });
//     });

//     this.scheduleBatchUpdate();
//   }

//   scheduleBatchUpdate() {
//     if (this.batchTimer) return;

//     this.batchTimer = setTimeout(() => {
//       this.flushUpdates();
//       this.batchTimer = null;
//     }, 16); // 60fps batching
//   }

//   flushUpdates() {
//     const updates = Array.from(this.lastUpdate.entries());
//     this.emit('inventory:batch-update', updates);
//     this.lastUpdate.clear();
//   }
// }

// // Smart component that only re-renders when necessary
// function ProductCard({ productId, variantId }) {
//   const [inventory, setInventory] = useState(null);
//   const [lastUpdate, setLastUpdate] = useState(0);

//   useEffect(() => {
//     const handleInventoryUpdate = (updates) => {
//       const relevantUpdate = updates.find(
//         ([key]) => key === `${productId}-${variantId}`
//       );

//       if (relevantUpdate && relevantUpdate[1].timestamp > lastUpdate) {
//         setInventory(relevantUpdate[1].quantity);
//         setLastUpdate(relevantUpdate[1].timestamp);
//       }
//     };

//     InventoryBus.on('inventory:batch-update', handleInventoryUpdate);
//     return () => InventoryBus.off('inventory:batch-update', handleInventoryUpdate);
//   }, [productId, variantId, lastUpdate]);

//   return (
//     <div className="product-card">
//       {/* Component only re-renders when its specific inventory changes */}
//     </div>
//   );
// }


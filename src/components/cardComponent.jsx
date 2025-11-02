import clipzap from "../assets/clipzapp.png";
import Zupay from "../assets/Zupay.png";
import Stripe from "../assets/stripe.png";
import audiophile from "../assets/audiophile.png";
import ticketflow from "../assets/ticketflow.png";
import Marquee from "react-fast-marquee";

function CardComponent() {
  // Project data for easier maintenance
  const projects = [
    { id: 1, image: audiophile, title: "Audiophile", bgColor: "bg-gray-300" },
    { id: 2, image: ticketflow, title: "TicketFlow", bgColor: "bg-white" },
    { id: 3, image: clipzap, title: "ClipZap", bgColor: "bg-gray-300" },
    { id: 4, image: Zupay, title: "Zupay", bgColor: "bg-white" },
    { id: 5, image: Stripe, title: "Stripe Clone", bgColor: "bg-white" },
  ];

  // Reusable card component
  const ProjectCard = ({ project }) => (
    <div
      className={`
        ${project.bgColor}
        p-6
        shadow-md
        hover:shadow-lg
        transition-shadow
        duration-200
        rounded-lg
        w-[100vw] h-[40vh]
        md:w-[40vw] md:h-[50vh]
        lg:w-[35vw] lg:h-[45vh]
        flex-shrink-0
      `}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
      />
    </div>
  );

  return (
    <section className="relative m-8 md:m-8 overflow-hidden">
      <Marquee
        className="w-full flex items-center"
        speed={30}
        gradient={false}
        pauseOnHover={true}
      >
        <div className="flex gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Marquee>
    </section>
  );
}

export default CardComponent;

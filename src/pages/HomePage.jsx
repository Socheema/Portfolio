import ProjectComponent from "../components/projectComponent";
import About from "../components/About";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import ContactSection from "../components/contactComponent";
import Footer from "../components/Footer";




function HomePage() {
  const sectionContainer =
    "max-w-4xl md:px-18 mx-auto border-x border-gray-100";

  return (
    <main>
      <section className={sectionContainer}>
        <Header />
        <HeroSection />
      </section>

      {/* <section>
        <CardComponent />
      </section> */}

      <section className={sectionContainer}>
        <About />
        <ProjectComponent />
        <ContactSection />
        <Footer/>
      </section>
    </main>
  );
}

export default HomePage;

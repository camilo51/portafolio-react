import { useRef } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const scrollHome = useRef(null);
  const scrollAbout = useRef(null);
  const scrollSkills = useRef(null);
  const scrollProjects = useRef(null);
  const scrollContact = useRef(null);

  const scrollToRef = (ref) => {
    switch (ref) {
      case "home":
        scrollHome.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        scrollAbout.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        scrollSkills.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        scrollProjects.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        scrollContact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header scrollToRef={scrollToRef} />
      <Banner scrollHome={scrollHome} scrollToRef={scrollToRef} />
      <About scrollAbout={scrollAbout} />
      <Skills scrollSkills={scrollSkills} />
      <Projects scrollProjects={scrollProjects} />
      <Contact scrollContact={scrollContact} />
      <Footer />
    </div>
  );
};
export default App;

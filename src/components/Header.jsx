import { useState } from "react";

const Header = ({ scrollToRef }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="bg-indigo-700 text-white py-2 md:py-5 fixed w-full z-50">
      <div className="md:flex justify-between items-center max-w-6xl m-auto">
        <div className="flex justify-between items-center px-2">
          <h1 className="text-4xl font-bold text-center">
            <button onClick={() => scrollToRef("home")}>CCPFDEV</button>
          </h1>

          <div className="md:hidden" onClick={toggleMenu}>
            <span className="text-4xl">
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>

        <nav className="relative">
          <div
            className={`w-full md:px-5 flex md:gap-4 flex-col md:flex-row divide-y md:divide-y-0 absolute md:static top-[-400px] opacity-0 md:opacity-100 transition-all ${
              menu ? "!top-0 !opacity-100 bg-indigo-700" : ""
            }`}
          >
            <button
              type="button"
              className="p-2 md:p-0 hover:text-gray-400 transition-all w-full md:w-auto text-left"
              onClick={() => {
                scrollToRef("home");
                toggleMenu();
              }}
            >
              Inicio
            </button>
            <button
              type="button"
              className="p-2 md:p-0 hover:text-gray-400 transition-all w-full md:w-auto text-left"
              onClick={() => {
                scrollToRef("about");
                toggleMenu();
              }}
            >
              Sobre Mi
            </button>
            <button
              type="button"
              className="p-2 md:p-0 hover:text-gray-400 transition-all w-full md:w-auto text-left"
              onClick={() => {
                scrollToRef("skills");
                toggleMenu();
              }}
            >
              Habilidades
            </button>
            <button
              type="button"
              className="p-2 md:p-0 hover:text-gray-400 transition-all w-full md:w-auto text-left"
              onClick={() => {
                scrollToRef("projects");
                toggleMenu();
              }}
            >
              Proyectos
            </button>
            <button
              type="button"
              className="p-2 md:p-0 hover:text-gray-400 transition-all w-full md:w-auto text-left"
              onClick={() => {
                scrollToRef("contact");
                toggleMenu();
              }}
            >
              Contacto
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

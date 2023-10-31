const Header = () => {
  return (
    <header className="bg-indigo-700 text-white py-2 md:py-5 fixed w-full z-50">
      <div className="md:flex justify-between items-center max-w-6xl m-auto">
        <h1 className="text-4xl font-bold text-center">
          <a href="/">CCPF</a>
        </h1>
        <nav className="md:space-x-5 flex flex-col md:flex-row divide-y md:divide-y-0 ">
          <a className="p-2 md:p-0 hover:text-gray-400 transition-all" href="/">
            Home
          </a>
          <a
            className="p-2 md:p-0 hover:text-gray-400 transition-all"
            href="#about-me"
          >
            About Me
          </a>
          <a
            className="p-2 md:p-0 hover:text-gray-400 transition-all"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="p-2 md:p-0 hover:text-gray-400 transition-all"
            href="#projects"
          >
            Projects
          </a>
          <a className="p-2 md:p-0 hover:text-gray-400 transition-all" href="#">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

const Banner = ({ scrollHome, scrollToRef }) => {
  return (
    <div
      ref={scrollHome}
      className="flex items-center justify-center flex-col h-screen relative"
    >
      <div className="space-y-2 text-center m-auto max-w-6xl">
        <p className="text-gray-500 text-lg">Hola.</p>
        <h2 className="text-6xl font-bold text-indigo-700">
          Soy Cristian Pereira
        </h2>
        <p className="text-gray-500 text-lg">Desarrollador web freelance</p>
        <button
          onClick={() => scrollToRef("contact")}
          className="bg-indigo-700 hover:bg-indigo-600 transition-all p-2 inline-block rounded text-white"
        >
          Hablemos
        </button>
      </div>
      <svg
        className="absolute bottom-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#4338ca"
          fillOpacity="1"
          d="M0,128L48,144C96,160,192,192,288,213.3C384,235,480,245,576,245.3C672,245,768,235,864,229.3C960,224,1056,224,1152,224C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;

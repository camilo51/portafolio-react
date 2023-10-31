import Perfil from "../img/fotoPerfil.jpg";
const About = ({ scrollAbout }) => {
  return (
    <section ref={scrollAbout} className="bg-indigo-700 text-white py-10 px-5">
      <div className="max-w-6xl m-auto flex gap-10 md:gap-0  flex-col md:flex-row justify-evenly items-center md:space-x-10">
        <div className="w-3/6 sm:w-2/6 md:w-1/6 relative order-2 md:order-1">
          <div className="z-30 border-2 border-white absolute top-4 right-4 w-full h-full rounded-lg"></div>
          <img
            className="rounded-lg z-10 relative"
            src={Perfil}
            alt="Cristian Camilo Pereira Florez"
          />
          <div className="z-0 bg-white absolute bottom-4 left-4 w-full h-full rounded-lg"></div>
        </div>
        <div className="md:w-4/6 text-center md:order-2">
          <h2 className="text-4xl font-bold border-b-2 inline-block mb-5">
            Mi Historia
          </h2>
          <p>
            Poseo experiencia como Desarrollador Web con una edad de 20 años.
            Cursé estudios en media técnica especializada en Desarrollo de
            Software en el reconocido Politécnico Colombiano Jaime Isaza
            Cadavid. Me caracterizo por ser una persona responsable, cumplida y
            puntual, con una gran eficiencia en mi trabajo. Soy capaz de
            adaptarme con facilidad a diferentes entornos y situaciones, y mi
            actitud refleja seriedad y profesionalismo.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

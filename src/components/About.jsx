import Perfil from "../img/fotoPerfil.jpg";
const About = () => {
  return (
    <section id="about-me" className="bg-indigo-700 text-white py-10">
      <div className="max-w-6xl m-auto md:flex md:justify-evenly md:items-center space-x-10">
        <div className="w-1/6 relative">
          <div className="z-30 border-2 border-white absolute top-4 right-4 w-full h-full rounded-lg"></div>
          <img
            className="rounded-lg z-10 relative"
            src={Perfil}
            alt="Cristian Camilo Pereira Florez"
          />
          <div className="z-0 bg-white absolute bottom-4 left-4 w-full h-full rounded-lg"></div>
        </div>
        <div className="w-4/6">
          <h2 className="text-4xl font-bold border-b-2 inline-block mb-5">
            About Me!
          </h2>
          <p>
            I have experience as a Web Developer with an age of 20 years. I
            studied at the recognized Politécnico Colombiano Jaime Isaza
            Cadavid, specializing in Software Development. I am characterized
            for being a responsible, punctual and punctual person, with a great
            efficiency in my work. I am able to adapt easily to different
            environments and situations, and my attitude reflects seriousness
            and professionalism.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

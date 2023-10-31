import { proyectos } from "../helpers/proyectos";
import SeccionesProjects from "./SeccionesProjects";

const Projets = ({ scrollProjects }) => {
  return (
    <section
      ref={scrollProjects}
      className="bg-indigo-700 text-white py-10 px-5"
    >
      <div className="max-w-6xl m-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold border-b-2 inline-block mb-5">
          Proyectos
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 gap-y-10">
          {proyectos.map((proyecto, key) => (
            <SeccionesProjects key={key} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projets;

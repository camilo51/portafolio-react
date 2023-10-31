import { proyectos } from "../helpers/proyectos";
import SeccionesProjects from "./SeccionesProjects";

const Projets = () => {
  return (
    <section id="projects" className="bg-indigo-700 text-white py-10">
      <div className="max-w-6xl m-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold border-b-2 inline-block mb-5">
          Projects
        </h2>
        <div className="grid grid-cols-3 gap-2 gap-y-10">
          {proyectos.map((proyecto, key) => (
            <SeccionesProjects key={key} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projets;

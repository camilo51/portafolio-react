import { Icons } from "../helpers/iconos";
import SeccionesSkills from "./SeccionesSkills";

const Skills = ({ scrollSkills }) => {
  return (
    <section
      ref={scrollSkills}
      className="max-w-6xl m-auto py-10 flex flex-col justify-center items-center px-5"
    >
      <h2 className="text-4xl font-bold border-b-2 border-black inline-block mb-5">
        Fortalezas
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
        {Icons.map((seccion, key) => (
          <SeccionesSkills key={key} seccion={seccion} />
        ))}
      </div>
    </section>
  );
};
export default Skills;

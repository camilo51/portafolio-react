import { Icons } from "../helpers/iconos";
import SeccionesSkills from "./SeccionesSkills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl m-auto py-10 md:flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold border-b-2 border-black inline-block mb-5">
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-2 w-full">
        {Icons.map((seccion, key) => (
          <SeccionesSkills key={key} seccion={seccion} />
        ))}
      </div>
    </section>
  );
};
export default Skills;

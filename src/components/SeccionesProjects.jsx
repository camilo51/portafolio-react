import Url from "../img/link.svg";
import Github from "../img/github.svg";

const SeccionesProjects = ({ proyecto }) => {
  const { img, link, github, titulo, tecnologias } = proyecto;

  return (
    <div className="shadow-lg">
      <img className="rounded-t-lg" src={img} alt={titulo} />
      <div className="p-2 rounded-b-lg">
        <h3 className="cursor-pointer text-lg">{titulo}</h3>
        <div className="space-x-2">
          {tecnologias.map((tecnologia, key) => (
            <p
              key={key}
              className="bg-indigo-600 inline-block text-xs py-1 px-2 rounded"
            >
              {tecnologia}
            </p>
          ))}
        </div>
        <div className="space-x-3">
          <a href={link} target="_blank" className="inline-block my-2">
            <img className="w-6" src={Url} alt="Link a la pagina asignada" />
          </a>
          <a href={github} target="_blank" className="inline-block my-2">
            <img
              className="w-6"
              src={Github}
              alt="Link al repositorio de github de la pagina asignada"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default SeccionesProjects;

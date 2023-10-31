const SeccionesSkills = ({ seccion }) => {
  const { titulo, contenido } = seccion;

  return (
    <div className="bg-indigo-700 py-10 px-10 text-white first:rounded-l-lg last:rounded-r-lg">
      <h3 className="text-center mb-4 text-xl">{titulo}</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {contenido.map((icono, keyIcon) => (
          <div
            key={keyIcon}
            className="flex flex-col justify-center items-center"
          >
            <img
              className="w-12"
              src={icono.icon}
              alt={`Logo De ${icono.titulo}`}
            />
            <p className="text-xs">{icono.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SeccionesSkills;

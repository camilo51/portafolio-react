const SeccionesSkills = ({ seccion }) => {
  const { titulo, contenido } = seccion;

  return (
    <div className="bg-indigo-700 py-10 px-10 text-white lg:first:rounded-l-lg lg:last:rounded-r-lg sm:last:col-span-2 lg:last:col-span-1">
      <h3 className="text-center mb-4 text-xl">{titulo}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-2">
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

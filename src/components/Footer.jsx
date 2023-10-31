import { format } from "date-fns";
import { redes } from "../helpers/redes";
const Footer = () => {
  const anio = format(Date.now(), "yyyy");

  return (
    <footer className="py-10 bg-indigo-700 text-white">
      <div className="px-5 max-w-6xl m-auto grid md:grid-cols-2 gap-y-5 md:gap-x-2 items-center justify-items-center md:last:justify-items-end">
        <p>
          Derechos de autor © {anio} CCPF. Todos los derechos reservados.
          Ninguna parte de este sitio web, incluidos textos, imágenes, gráficos
          o logotipos, puede ser reproducida, distribuida o transmitida de
          ninguna forma o por ningún medio, sin el permiso previo por escrito de
          CCPF, excepto en el caso de citas breves incorporadas en reseñas y
          otros usos no comerciales permitidos por la ley de derechos de autor.
        </p>
        <div className="flex gap-2">
          {redes.map((red, key) => (
            <a
              target="_blank"
              href={red.link}
              key={key}
              className="hover:scale-125 transition-all"
            >
              <img className="w-8" src={red.img} alt={red.titulo} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

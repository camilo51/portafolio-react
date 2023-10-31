import { useRef, useState } from "react";
import Error from "./Error";
import { sendEmail } from "../helpers/email";

const Contact = ({ scrollContact }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState({});

  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, email, mensaje].includes("")) {
      setError({
        msg: "Todos los campos deben de estar llenos",
        tipo: "error",
      });
      setTimeout(() => {
        setError({});
      }, 3000);

      return;
    }

    sendEmail(refForm.current);

    setError({
      msg: "Gracias por tu mensaje. Te responderemos pronto.",
    });
    setTimeout(() => {
      setError({});
    }, 3000);
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <section
      ref={scrollContact}
      className="max-w-6xl m-auto flex flex-col items-center py-10 px-5"
    >
      <h2 className="text-4xl font-bold border-b-2 border-black inline-block mb-5">
        Contacto
      </h2>
      <form
        ref={refForm}
        className="w-full md:w-2/3 bg-white p-5 shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        <Error error={error} />

        <div className="md:flex justify-between gap-2">
          <div className="flex flex-col justify-start mb-3 w-full">
            <label htmlFor="nombre" className="text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej. Cristian Pereira"
              className="border border-solid border-gray-400 rounded p-1 placeholder:text-gray-300"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start mb-3 w-full">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ej. correo@correo.com"
              className="border border-solid border-gray-400 rounded p-1 placeholder:text-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start mb-3">
          <label htmlFor="mensaje" className="text-gray-600">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            id="mensaje"
            placeholder="Ej. Hola, soy un propietario de pequeña empresa y necesito un sitio web interactivo para mi tienda de ropa"
            className="border border-solid border-gray-400 rounded p-1 placeholder:text-gray-300"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Enviar"
          className="py-2 px-5 bg-indigo-700 hover:bg-indigo-600 text-white rounded"
        />
      </form>
    </section>
  );
};
export default Contact;

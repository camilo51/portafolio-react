const Error = ({ error }) => {
  const { msg, tipo } = error;
  return (
    msg && (
      <div
        className={`w-2/3 m-auto text-center p-3 ${
          tipo === "error"
            ? "bg-red-100 border-l-8 border-red-700"
            : "bg-green-100 border-l-8 border-green-700"
        }`}
      >
        <p
          className={`uppercase ${
            tipo === "error" ? "text-red-700" : "text-green-700"
          }`}
        >
          {msg}
        </p>
      </div>
    )
  );
};
export default Error;

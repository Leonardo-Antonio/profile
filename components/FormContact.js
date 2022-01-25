import { useState } from "react";

export const FormContact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("fullname: ", fullName);
    console.log("email: ", email);
    console.log("body: ", body);
  };

  return (
    <div className="card">
      <form onSubmit={submit}>
        <div className="pb-4">
          <input
            type="text"
            className="input"
            placeholder="Nombre completo"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="pb-4">
          <input
            type="email"
            className="input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pb-4">
          <textarea
            placeholder="Consulta"
            className="input"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div className="pb-4">
          <button className="btn">Enviar</button>
        </div>
      </form>
    </div>
  );
};

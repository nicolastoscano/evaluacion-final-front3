import React from "react";
import { useState } from "react";

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 5 || !email) {
      setMessage('Por favor verifique su información nuevamente')
      return;
    }
    setMessage(`Gracias ${name} ,te contactaremos cuando antes via mail`)
    setName('');
    setEmail('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        required={true}
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required={true}
        type="email"
        placeholder="Ingresa tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
      {message && <p>{message}</p>}
    </form>
    </div>
  );
};

export default Form;
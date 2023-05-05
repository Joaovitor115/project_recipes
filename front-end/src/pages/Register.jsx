import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de cadastro aqui
  };

  return (
    <div>
      <h1>Register </h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">
            Nome:
            <input
              data-testid="common_register__input-name"
              type="text"
              id="name"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="common_register__input-email"
              type="email"
              id="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="common_register__input-password"
              type="password"
              id="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>
        </div>

        <button
          data-testid="common_register__button-register"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
      <div
        data-testid="common_register__element-invalid_register"
      >
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

export default Register;

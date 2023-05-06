import React, { useState } from 'react';
import PropTypes from 'prop-types';
import postLogin from '../utils/functions';

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setError] = useState('');
  const SIX = 6;
  const TWELVE = 12;
  const OK = 201;
  const NOTOK = 409;

  const isValid = name.length >= TWELVE
  && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  && password.length >= SIX;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      const { history } = props;
      postLogin(
        'http://localhost:3001/register',
        { name, email, password },
      ).then((data) => {
        if (data.type === OK) {
          history.push('/customer/products');
        } else if (data.type === NOTOK) {
          setError('Usuário já cadastrado');
        }
      }).catch((error) => {
        console.log(error);
        setError('Ocorreu um erro ao realizar o cadastro');
      });
    }
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
          disabled={ !isValid }
        >
          Cadastrar
        </button>
      </form>
      <div
        data-testid="common_register__element-invalid_register"
      >
        {err && <div>{err}</div>}
      </div>
    </div>
  );
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;

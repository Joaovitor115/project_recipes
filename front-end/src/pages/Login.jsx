/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import postLogin from '../utils/functions';
import users from '../tests/mocks/users.mocks';

export default class Login extends Component {
  state = {
    // loading: false,
    login: '',
    senha: '',
    error: false,
    // redirect: false,
    buttonDisabled: true,
    name: '',
    email: '',
    token: '',
    role: '',
  };

  handleLogin = ({ target: { value } }) => {
    this.setState(
      {
        login: value,
      },
      this.handleValidateInput,
    );
  };

  handleSenha = ({ target: { value } }) => {
    this.setState(
      {
        senha: value,
      },
      this.handleValidateInput,
    );
  };

  // FUNÇÃO QUE HABILITA OU DESABILITA O BOTÃO
  handleValidateInput = () => {
    const { senha, login } = this.state;
    const regex = /[A-Za-z0-9]+@[A-Za-z0-9]+\.com/;
    const minimumSix = 6;
    const validate = (regex.test(login) && senha.length >= minimumSix)
      ? this.setState({ buttonDisabled: false })
      : this.setState({ buttonDisabled: true });
    return validate;
  };

  handleSubmit = async () => {
    const { login, senha } = this.state;
    const { history } = this.props;
    const user = users.filter((dados) => dados.email === login
    ?? this.setState(
      { name: dados.name, email: dados.email, token: password, role: dados.role },
    ));
    // console.log(user);
    await postLogin(
      'http://localhost:3001/login',
      { email: login, password: senha },
    ).then((data) => {
      if (data.message === 'Not found') {
        this.setState({ error: true });
        return;
      }
      localStorage.setItem('user', JSON.stringify(
        { name: user[0].name,
          email: user[0].email,
          token: user[0].password,
          role: user[0].role },
      ));
      history.push('/customer/products');
    });
  };

  render() {
    const { /* loading */ login, senha,
      buttonDisabled, error /* redirect */ } = this.state;
    const { handleLogin, handleSenha /* handleSubmit */ } = this;

    return (
      <div data-testid="page-login">
        {/* { redirect && <Redirect to="/search" />} */}
        <h1>Login</h1>

        <input
          data-testid="common_login__input-email"
          type="email"
          value={ login }
          onChange={ handleLogin }
        />

        <input
          data-testid="common_login__input-password"
          type="password"
          value={ senha }
          onChange={ handleSenha }
        />

        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ buttonDisabled }
          onClick={ this.handleSubmit }
          // { redirect && <Redirect to="/search" /> }
        >
          Login
        </button>

        <button
          type="submit"
          data-testid="common_login__button-register"
          // { redirect && <Redirect to="/search" /> }
        >
          Ainda não tenho conta
        </button>
        { (error
          ? (
            <div>
              <p data-testid="common_login__element-invalid-email">
                Email ou senha inválidos
              </p>
            </div>)
          : null)}
        {/* { loading && <Loading /> } */}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

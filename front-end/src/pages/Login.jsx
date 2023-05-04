import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

// import Loading from '../components/Loading';
// import { createUser } from '../services/userAPI';

export default class Login extends Component {
  state = {
    // loading: false,
    login: '',
    senha: '',
    // redirect: false,
    buttonDisabled: true,
  };

  // FUNÇÃO PARA O BOTÃO
  // handleSubmit = async (event) => { // atualiza o estado a partir do clique do botão
  //   event.preventDefault();
  //   const { login } = this.state;
  //   // this.setState({ loading: true });
  //   await createUser({ name: login });
  //   this.setState({ redirect: true, login: '', senha: '' /* , loading: false */ });
  // };

  // FUNÇÃO PARA O VALUE DO INPUT ATRELADA À CONDIÇÃO MIN = 3
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

  render() {
    const { /* loading */ login, senha, buttonDisabled /* redirect */ } = this.state;
    const { handleLogin, handleSenha /* handleSubmit */ } = this;

    return (
      <div data-testid="page-login">
        {/* { redirect && <Redirect to="/search" />} */}
        <h1>Login</h1>

        <input
          data-testid="common_login__input-email"
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
        <h1 data-testid="element-invalid-email">teste</h1>
        {/* { loading && <Loading /> } */}
      </div>
    );
  }
}

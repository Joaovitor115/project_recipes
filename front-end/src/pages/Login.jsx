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
    // buttonDisabled: true,
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
    this.setState({
      login: value,
    }, this.handleValidateInput);
  };

  handleSenha = ({ target: { value } }) => {
    this.setState({
      senha: value,
    }, this.handleValidateInput);
  };

  // FUNÇÃO QUE HABILITA OU DESABILITA O BOTÃO
  // handleValidateInput = () => {
  //   const { userName } = this.state;
  //   const minimumThree = 3;
  //   const validate = userName.length >= minimumThree
  //     ? this.setState({ buttonDisabled: false })
  //     : this.setState({ buttonDisabled: true });
  //   return validate;
  // };

  render() {
    const { /* loading */ login, senha /* redirect , buttonDisabled */ } = this.state;
    const { handleLogin, handleSenha /* handleSubmit */ } = this;

    return (

      <div data-testid="page-login">
        {/* { redirect && <Redirect to="/search" />} */}
        <h1>Login</h1>

        <input
          data-testid="login-name-input"
          value={ login }
          onChange={ handleLogin }
        />

        <input
          data-testid="senha-input"
          value={ senha }
          onChange={ handleSenha }
        />

        <button
          type="submit"
          data-testid="login-submit-button"
          // { redirect && <Redirect to="/search" /> }
        >
          Entrar

        </button>
        {/* { loading && <Loading /> } */}
      </div>

    );
  }
}

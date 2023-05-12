import React, { Component } from 'react';
import PropTypes from 'prop-types';
import postLogin from '../utils/functions';

export default class Login extends Component {
  state = {
    login: '',
    senha: '',
    error: false,
    buttonDisabled: true,
  };

  componentDidMount() {
    const { history } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user.role === 'administrator') {
        history.push('/admin/manage');
      } else if (user.role === 'seller') {
        history.push('/seller/orders');
      } else {
        history.push('/customer/products');
      }
    }
  }

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

  handleRegister = () => {
    const { history } = this.props;
    history.push('/register');
  };

  handleSubmit = async () => {
    const { login, senha } = this.state;
    const { history } = this.props;

    await postLogin(
      'http://localhost:3001/login',
      { email: login, password: senha },
    ).then((data) => {
      if (data.message) {
        this.setState({ error: true });
        return;
      }
      console.log(data);
      localStorage.setItem('user', JSON.stringify(
        {
          name: data.name,
          email: data.email,
          token: data.token,
          role: data.role,
        },
      ));
      if (data.role === 'administrator') {
        history.push('/admin/manage');
      } else if (data.role === 'seller') {
        history.push('/seller/orders');
      } else {
        history.push('/customer/products');
      }
    });
  };

  render() {
    const { login, senha,
      buttonDisabled, error } = this.state;
    const { handleLogin, handleSenha } = this;

    return (
      <div data-testid="page-login">
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
          onClick={ this.handleRegister }
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

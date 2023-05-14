import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';

import App from '../App';
// import postLogin from '../utils/functions';

const userEmail = 'zebirita@email.com';
const userName = 'Cliente Zé Birita';
const userPassword = '$#zebirita#$';

const mockUserData = {
  name: userName,
  email: userEmail,
  token: 'token',
  role: 'customer',
};

describe('Testa a página de login', () => {
  it('deve renderizar a página de login', () => {
    renderWithRouter(<App />);

    const loginRole = screen.getByRole('heading', {
      name: /login/i,
      level: 1,
    });

    expect(loginRole).toBeInTheDocument();
  });

  it('testa se os inputs da tela de login funcionam', () => {
    renderWithRouter(<App />);
    // Pegando os inputs
    const inputEmail = screen.getByPlaceholderText('email');
    const inputSenha = screen.getByPlaceholderText('senha');
    // Ação de preencher os inputs com os textos de test
    userEvent.type(inputEmail, userEmail);
    userEvent.type(inputSenha, userPassword);
    // Teste para ver se os inputs foram preenchidos corretamente.
    expect(inputEmail).toHaveValue(userEmail);
    expect(inputSenha).toHaveValue(userPassword);
  });
  it('testa o botão com redirecionamento de página', async () => {
    // renderWithRouter(<App />);
    const { history } = renderWithRouter(<App />);
    jest
      .spyOn(global, 'fetch')
      .mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockUserData),
      });
    const loginBtn = screen.getByRole('button', { name: 'Login' });
    // testa se o botão está desabilitado inicialmente
    expect(loginBtn).toBeDisabled();
    // Preenche os dados
    const inputEmail = screen.getByPlaceholderText('email');
    const inputSenha = screen.getByPlaceholderText('senha');
    userEvent.type(inputEmail, userEmail);
    userEvent.type(inputSenha, userPassword);
    // Teste para ver se o botão está habilitado
    expect(loginBtn).toBeEnabled();
    // clica no botão
    userEvent.click(loginBtn);
    // verifica redirecionamento
    // const { pathname } = history.location;
    // await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
    // expect(spy).toBeCalledWith('/customer/products');
    await waitFor(() => {
      const historyPath = history.location.pathname;
      expect(historyPath).toBe('/customer/products');
      jest.clearAllMocks();
    });
  });
});

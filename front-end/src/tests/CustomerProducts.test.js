// import React from 'react';
import { screen, waitFor, userEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './helpers/renderWithRouter';
// import App from '../App';
import renderPath from './helpers/renderPath';

const userEmail = 'zebirita@email.com';
const userName = 'Cliente Zé Birita';
// const userPassword = '$#zebirita#$';

const pathCustomerProducts = 'customer/products';

const mockUserData = {
  name: userName,
  email: userEmail,
  token: 'token',
  role: 'customer',
};

const mockProductsData = [
  {
    name: 'Skol Lata 250ml',
    price: 2.20,
    url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  },
  {
    name: 'Heineken 600ml',
    price: 7.50,
    url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
  },
  {
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
  },
  {
    name: 'Brahma 600ml',
    price: 7.50,
    url_image: 'http://localhost:3001/images/brahma_600ml.jpg',
  },
  {
    name: 'Skol 269ml',
    price: 2.19,
    url_image: 'http://localhost:3001/images/skol_269ml.jpg',
  },
  {
    name: 'Skol Beats Senses 313ml',
    price: 4.49,
    url_image: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
  },
  {
    name: 'Becks 330ml',
    price: 4.99,
    url_image: 'http://localhost:3001/images/becks_330ml.jpg',
  },
  {
    name: 'Brahma Duplo Malte 350ml',
    price: 2.79,
    url_image: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg',
  },
  {
    name: 'Becks 600ml',
    price: 8.89,
    url_image: 'http://localhost:3001/images/becks_600ml.jpg',
  },
  {
    name: 'Skol Beats Senses 269ml',
    price: 3.57,
    url_image: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg',
  },
  {
    name: 'Stella Artois 275ml',
    price: 3.49,
    url_image: 'http://localhost:3001/images/stella_artois_275ml.jpg',
  },
];

// const addButton = screen.getByTestId('customer_products__button-card-add-item-1');
// const quantityInput = screen.getByTestId('customer_products__input-card-quantity-1');

// const getProducts = async () => {
//   const request = await fetch('http://localhost:3001/product');
//   const requestJson = await request.json();
//   return requestJson.results;
// };

describe('Testa a página customer products', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    localStorage.setItem('user', JSON.stringify(mockUserData));
    // localStorage.setItem('pedidos', JSON.stringify([]));
  });
  afterEach(() => localStorage.clear());
  it('testa a renderização da rota', async () => {
    const spy = jest.spyOn(window, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ results: mockProductsData }),
    }));
    renderPath(pathCustomerProducts);
    expect(spy).toHaveBeenCalled();

    const cusProdNavBar = await screen.findByTestId(/customer_products__element-navbar-link-products/i);
    expect(cusProdNavBar).toBeInTheDocument();
  });

  it('testa a renderização dos produtos', async () => {
    const mockFetch = () => Promise.resolve({
      json: () => Promise.resolve(mockProductsData),
    });
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    renderPath(pathCustomerProducts);
    await waitFor(async () => {
      const cardSkolLata = await screen.findByText(/Skol Lata 250ml/i);
      expect(cardSkolLata).toBeInTheDocument();
    });
    global.fetch.mockRestore();
  });
  it('testa o clique no botão', async () => {
    const mockFetch = () => Promise.resolve({
      json: () => Promise.resolve(mockProductsData),
    });
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    renderPath('/customer/products');
    await waitFor(async () => {
      const addButtonPlus = screen.getByTestId(
        'customer_products__button-card-add-item-1',
      );
      const quantityInputId = screen.getByTestId(
        'customer_products__input-card-quantity-1',
      );
      userEvent.click(addButtonPlus);

      expect(quantityInputId.value).toBe('1');
    });

    global.fetch.mockRestore();
  });
});

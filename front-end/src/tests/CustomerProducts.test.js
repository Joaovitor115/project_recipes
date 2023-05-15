// import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import renderWithRouter from './helpers/renderWithRouter';
// import App from '../App';
import renderPath from './helpers/renderPath';

const userEmail = 'zebirita@email.com';
const userName = 'Cliente Zé Birita';
// const userPassword = '$#zebirita#$';

const pathCustomerProducts = '/customer/products';

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
    id: 1,
  },
  {
    name: 'Heineken 600ml',
    price: 7.50,
    url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
    id: 2,
  },
  {
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
    id: 3,
  },
  {
    name: 'Brahma 600ml',
    price: 7.50,
    url_image: 'http://localhost:3001/images/brahma_600ml.jpg',
    id: 4,
  },
  {
    name: 'Skol 269ml',
    price: 2.19,
    url_image: 'http://localhost:3001/images/skol_269ml.jpg',
    id: 5,
  },
  {
    name: 'Skol Beats Senses 313ml',
    price: 4.49,
    url_image: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
    id: 6,
  },
  {
    name: 'Becks 330ml',
    price: 4.99,
    url_image: 'http://localhost:3001/images/becks_330ml.jpg',
    id: 7,
  },
  {
    name: 'Brahma Duplo Malte 350ml',
    price: 2.79,
    url_image: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg',
    id: 8,
  },
  {
    name: 'Becks 600ml',
    price: 8.89,
    url_image: 'http://localhost:3001/images/becks_600ml.jpg',
    id: 9,
  },
  {
    name: 'Skol Beats Senses 269ml',
    price: 3.57,
    url_image: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg',
    id: 10,
  },
  {
    name: 'Stella Artois 275ml',
    price: 3.49,
    url_image: 'http://localhost:3001/images/stella_artois_275ml.jpg',
    id: 11,
  },
];

// const addButton = screen.getByTestId('customer_products__button-card-add-item-1');
// const quantityInput = screen.getByTestId('customer_products__input-card-quantity-1');

// const getProducts = async () => {
//   const request = await fetch('http://localhost:3001/product');
//   const requestJson = await request.json();
//   return requestJson.results;
// };
// const tenThousand = 10000;
// const fiveThousand = 5000;

// jest.setTimeout(tenThousand);

describe('Testa a página customer products', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    localStorage.setItem('user', JSON.stringify(mockUserData));
    // localStorage.setItem('pedidos', JSON.stringify([]));
  });
  afterEach(() => localStorage.clear());
  const mockFetch = () => Promise.resolve({
    json: () => Promise.resolve(mockProductsData),
  });
  it('testa a renderização da rota', async () => {
    // jest.setTimeout(fiveThousand);
    const spy = jest.spyOn(window, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ results: mockProductsData }),
    }));
    renderPath(pathCustomerProducts);
    expect(spy).toHaveBeenCalled();
    const cusProdNavBar = await screen.findByTestId(/customer_products__element-navbar-link-products/i);
    expect(cusProdNavBar).toBeInTheDocument();
    window.fetch.mockRestore();
  });
  it('testa a renderização dos produtos', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    renderPath(pathCustomerProducts);
    await waitFor(async () => {
      const cardSkolLata = await screen.findByText(/Skol Lata 250ml/i);
      return expect(cardSkolLata).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it('testa o clique no botão', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    renderPath(pathCustomerProducts);
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

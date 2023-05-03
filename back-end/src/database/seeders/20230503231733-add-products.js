module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Product 1',
        price: 19.99,
        url_image: 'https://example.com/product1.jpg',
      },
      {
        name: 'Product 2',
        price: 29.99,
        url_image: 'https://example.com/product2.jpg',
      },
      {
        name: 'Product 3',
        price: 9.99,
        url_image: 'https://example.com/product3.jpg',
      },
      {
        name: 'Product 4',
        price: 49.99,
        url_image: 'https://example.com/product4.jpg',
      },
      {
        name: 'Product 5',
        price: 39.99,
        url_image: 'https://example.com/product5.jpg',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
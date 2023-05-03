module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: 1,
        product_id: 1,
      },
      {
        sale_id: 1,
        product_id: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales_products', null, {});
  },
};
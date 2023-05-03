module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales', [
      {
        user_id: 1,
        seler_id: 2,
        total_price: 59.98,
        delivery_address: '123 Main St',
        delivery_number: 'Apt 4',
        sale_date: new Date(),
        status: 'pending',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
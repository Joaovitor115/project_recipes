module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        role: 'admin',
      },
      {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        password: 'password456',
        role: 'customer',
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
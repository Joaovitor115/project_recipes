module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL(4, 2),
      },
      urlImage: {
        type: Sequelize.STRING,
        field: 'url_image',
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
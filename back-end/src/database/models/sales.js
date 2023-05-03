module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sale',
    {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
      },
      userId: DataTypes.INTEGER,
      selerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
    },
  );
  Sales.associate = ({ Sale, Product }) => {
    Sale.belongsToMany(Product, {
      through: 'sales_products',
      foreignKey: 'sale_id', 
      otherKey: 'product_id',
      as: 'products',
    });
    Product.belongsToMany(Sale, {
      through: 'sales_products',
      foreignKey: 'product_id', // se refere ao id de User na tabela de `users_books`
      otherKey: 'sale_id',
      as: 'sales',
    });
  };
  return Sales;
};
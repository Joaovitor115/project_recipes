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
      sellerId: DataTypes.INTEGER,
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
  Sales.associate = ({ Sale, Product, User }) => {
    Sale.belongsToMany(Product, {
      through: 'sales_products',
      foreignKey: 'sale_id', 
      otherKey: 'product_id',
      as: 'product',
    });
    Product.belongsToMany(Sale, {
      through: 'sales_products',
      foreignKey: 'product_id',
      otherKey: 'sale_id',
      as: 'sale',
    });
    // Sale.hasMany(User, {
    //   foreignKey: 'id',
    //   as: 'user',
    // });
    // Sale.hasMany(User, {
    //   foreignKey: 'id',
    //   as: 'seller',
    // });
  };
  return Sales;
};
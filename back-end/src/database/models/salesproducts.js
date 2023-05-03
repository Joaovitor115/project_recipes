module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    'SaleProduct',
    {
      sale_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
      },
      product_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'sales_products',
    },
  );
  SaleProduct.associate = ({ Sale, Product }) => {
    Sale.belongsToMany(Product, {
      through: 'sales_products',
      foreignKey: 'sale_id', 
      otherKey: 'product_id',
      as: 'products',
    });
    Product.belongsToMany(Sale, {
      through: 'sales_products',
      foreignKey: 'product_id',
      otherKey: 'sale_id',
      as: 'sales',
    });
  };
  return SaleProduct;
};
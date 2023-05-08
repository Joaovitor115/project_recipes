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
    // Sale.hasMany(User, {
    //   foreignKey: 'id',
    //   as: 'user',
    // });
    // Sale.hasMany(User, {
    //   foreignKey: 'id',
    //   as: 'seller',
    // });
  return Sales;
};
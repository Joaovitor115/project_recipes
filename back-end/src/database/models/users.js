module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'User',
    {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
    },
  );
  // Users.associate = (models) => {
  //   Users.belongsTo(models.Sales, {
  //     foreignKey: 'userId',
  //     as: 'user',
  //   });
  //   Users.belongsTo(models.Sales, {
  //     foreignKey: 'sellerId',
  //     as: 'seller',
  //   });
  // };
  
  return Users;
};
const productService = require('./productService');

const { Sale, Product, sequelize } = require('../../database/models');

const getById = async (id) => {
  const result = await Sale.findByPk(id, {
     include: [
      { 
        model: Product,
        as: 'products',
      },
    ], 
    });
  return result;
};

const getAll = () => Sale.findAll({
     include: [
      { 
        model: Product,
        as: 'products',
      },
    ], 
    });

const create = async (sale, productsIds) => {
  try {
    const result = await sequelize.transaction(async (t) => {
    const saleCreated = await Sale.create(
        { ...sale, saleDate: Date.now(), status: 'pending' },
        { transaction: t },
    );
    const products = await productService.getAllById(productsIds);
    await saleCreated.setProducts(products, { transaction: t });
    return saleCreated;
  });
  return { type: 201, message: result.id };
} catch (error) {
    throw new Error(error.message);
}
};

const destroy = async (id) => {
  await Sale.destroy({ where: { id } });
};

module.exports = { getAll, getById, destroy, create };

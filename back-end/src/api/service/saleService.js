const { Sale } = require('../../database/models');

const getById = (id) => Sale.findByPk(id);

const getAll = () => Sale.findAll();

const create = async (sale) => {
  const result = await Sale.create({ ...sale, status: 'Pendente' });
  return { type: 201, message: result };
};

const destroy = async (id) => {
  await Sale.destroy({ where: { id } });
};

module.exports = { getAll, getById, destroy, create };

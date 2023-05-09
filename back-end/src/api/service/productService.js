const { Product } = require('../../database/models');

const getById = (id) => Product.findByPk(id);

const getAllById = (ids) => Product.findAll({ where: { id: ids } });

const getAll = () => Product.findAll();

module.exports = { getAll, getById, getAllById };

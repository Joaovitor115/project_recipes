const { Product } = require('../../database/models');

const getById = (id) => Product.findByPk(id);

const getAll = () => Product.findAll();

module.exports = { getAll, getById };

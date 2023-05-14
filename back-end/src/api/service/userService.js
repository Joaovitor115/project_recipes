const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../../database/models');

const getByUserEmail = (email) => User.findOne({ where: { email } });

const getById = async (id) => {
  const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return { type: 200, message: result };
};

const getAll = () => User.findAll({ attributes: { exclude: ['password'] } });

const login = async ({ email, password }) => {
  const result = await getByUserEmail(email);
  if (!result) {
    return { type: 404, message: 'Not found' };
  }
  if (md5(password) !== result.password) {
    return { type: 401, message: 'Not authorized' };
  }
  return { type: 200, data: result };
};

const create = async ({ name, email, password, role }) => {
  const hasUser = await getByUserEmail(email);
  if (hasUser) {
    return { type: 409, message: 'User already registered' };
  }
  await User.create({
    name,
    email,
    password: md5(password),
    role,
  });
  return { type: 201, message: null };
};

const getSellers = async () => {
  const result = await User.findAll({ where: { role: 'seller' }, 
  attributes: { exclude: ['password'] } });
  return { type: 201, message: result };
};

const withoutAdm = async () => {
  const result = await User.findAll({ where: {
  role: { [Op.not]: 'administrator' } }, 
  attributes: { exclude: ['password'] } });
  return { type: 201, message: result };
};

const destroy = async (id) => {
  const result = await User.destroy({ where: { id } });
  return { type: 200, message: result };
};

module.exports = { getAll,
getById,
getByUserEmail,
login,
destroy, 
create,
getSellers,
withoutAdm };

const md5 = require('md5');
const { User } = require('../../database/models');

const getByUserEmail = (email) => User.findOne({ where: { email } });

const getById = (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });

const getAll = () => User.findAll({ attributes: { exclude: ['password'] } });

const login = async ({ email, password }) => {
  const result = await getByUserEmail(email);
  if (!result) {
    return { type: 404, message: 'Not found' };
  }
  if (md5(password) !== result.password) {
    return { type: 401, message: 'Not authorized' };
  }
  return { type: 200, message: result };
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

const destroy = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = { getAll, getById, getByUserEmail, login, destroy, create };

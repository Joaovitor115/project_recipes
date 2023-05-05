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

// const createUser = async ({ email }) => {
//   console.log('hasuser', await hasUser(email));
//   if (!(await hasUser(email))) {
//     return { type: 409, message: 'User already registered' };
//   }
//   const result = await User.create({
//     displayName,
//     email,
//     password,
//     image,
//   });
//   return { type: null, message: result };
// };

const destroy = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = { getAll, getById, getByUserEmail, login, destroy };

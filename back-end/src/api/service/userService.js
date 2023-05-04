const { User } = require('../../database/models');

const getByUserEmail = (email) => User.findOne({ where: { email } });

const getById = (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });

const getAll = () => User.findAll({ attributes: { exclude: ['password'] } });

const hasUser = async (email) => {
  const result = await getByUserEmail(email);
  return !result;
};

const login = async (email) => {
    if (hasUser(email)) {
        return { type: 404, message: 'Not found' };
    }
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

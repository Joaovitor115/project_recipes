const loginService = require('../service/userService');

const create = async (req, res, next) => {
    try {
        const user = req.body;
        const { type, message } = await loginService.create(user);
        res.status(type).json({ message });
    } catch (error) {
        next(error);
    }
};

module.exports = { create };
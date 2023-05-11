const loginService = require('../service/userService');

const create = async (req, res, next) => {
    try {
        const user = req.body;
        const { type, message } = await loginService.create(user);
        res.status(type).json({ type, message });
    } catch (error) {
        next(error);
    }
};

const getAll = async (req, res, next) => {
    try {
        const { type, message } = await loginService.getSellers();
        res.status(type).json(message);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { type, message } = await loginService.getById(id);
        res.status(type).json(message);
    } catch (error) {
        next(error);
    }
};

module.exports = { create, getAll, getById };
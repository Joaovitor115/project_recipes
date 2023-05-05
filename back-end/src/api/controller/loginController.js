const loginService = require('../service/userService');

const loginController = async (req, res, next) => {
    try {
        const login = req.body;
        const { type, message } = await loginService.login(login);
        res.status(type).json({ message });
    } catch (error) {
        next(error);
    }
};

module.exports = loginController;
const { createToken } = require('../auth/authFunctions');
const loginService = require('../service/userService');

const loginController = async (req, res, next) => {
    try {
        const login = req.body;
        const { type, message } = await loginService.login(login);
        const { name, email, role } = message;
        const result = { name, email, role };
        const token = createToken(result);
        res.status(type).json({ ...result, token });
    } catch (error) {
        next(error);
    }
};

module.exports = loginController;
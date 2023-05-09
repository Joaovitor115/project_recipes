const { createToken } = require('../auth/authFunctions');
const loginService = require('../service/userService');

const loginController = async (req, res, next) => {
    try {
        const login = req.body;
        const { type, message, data } = await loginService.login(login);
        if (message) {
            return res.status(type).json({ message });
        }
        const { name, email, role } = data;
        const result = { name, email, role };
        const token = createToken(data);
        res.status(type).json({ ...result, token });
    } catch (error) {
        next(error);
    }
};

module.exports = loginController;
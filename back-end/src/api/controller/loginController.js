const loginService = require('../service/userService');

const loginController = async (req, res, next) => {
    try {
        const { email } = req.body;
        const { type, message } = await loginService.login(email);
        res.status(type).json({ message });
    } catch (error) {
        next(error);
    }
};

module.exports = loginController;
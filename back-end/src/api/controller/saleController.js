const saleService = require('../service/saleService');

const getAll = async (req, res, next) => {
    try {
        const allProducts = await saleService.getAll();
        res.status(200).json(allProducts);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const sale = req.body;
        const { type, message } = await saleService.create(sale); 
        res.status(type).json({ id: message.id });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAll, create };
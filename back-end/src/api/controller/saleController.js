const saleService = require('../service/saleService');

const getAll = async (req, res, next) => {
    try {
        const allProducts = await saleService.getAll();
        res.status(200).json(allProducts);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await saleService.getById(id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const { body } = req;
        const { id: userId } = req.data;
        const { productsIds, quantities, ...sale } = body;
        const { type, message } = await saleService
        .create({ sale, productsIds, userId, quantities }); 
        res.status(type).json({ id: message });
    } catch (error) {
        next(error);
    }
};

const updateStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        const { id } = req.params;
        const result = await saleService
        .updateStatus({ status, id }); 
        res.status(204).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAll, create, getById, updateStatus };
const productService = require('../service/productService');

const getAll = async (req, res, next) => {
    try {
        const allProducts = await productService.getAll();
        res.status(200).json(allProducts);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAll };
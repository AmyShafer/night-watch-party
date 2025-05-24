const { MerchCategory, MerchOrder, MerchProduct, Member } = require('../models');

// get all merch products
function getMerchProducts(req, res) {
    MerchProduct.find()
}

// get a single merch product by id
function getSingleMerchProduct(req, res) {
    MerchProduct.findOne()
}

// create a merch product
function createMerchProduct(req, res) {
    MerchProduct.create()
}

// update a merch product
function updateMerchProduct(req, res) {
    MerchProduct.findOneAndUpdate()
}

// delete a merch product
function deleteMerchProduct(req, res) {
    MerchProduct.findOneAndRemove()
}

module.exports = {
    getMerchProducts,
    getSingleMerchProduct,
    createMerchProduct,
    updateMerchProduct,
    deleteMerchProduct,
};
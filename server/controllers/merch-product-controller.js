const { MerchCategory, MerchOrder, MerchProduct } = require('../models');

// get all merch products
function getMerchProducts(req, res) {
    MerchProduct.find()
    .sort({ createdAt: -1 })
    .then((dbMerchProductData) => {
        res.json(dbMerchProductData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// get a single merch product by id
function getSingleMerchProduct(req, res) {
    MerchProduct.findOne({ _id: req.params.merchProductId })
    .then((dbMerchProductData) => {
        if(!dbMerchProductData) {
            return res.status(404).json({ message: 'No product with this id!' })
        }
        res.json(dbMerchProductData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// create a merch product
function createMerchProduct(req, res) {
    MerchProduct.create(req, res)
    .then((dbMerchProductData) => {
        return MerchCategory.findByIdAndUpdate(
            { _id: req.body.merchCategoryId },
            { $push: { merchCategories: dbMerchProductData._id } },
            { new: true }
        );
    })
    .then((dbMerchProductData) => {
        if (!dbMerchProductData) {
            return res.status(404).json({ message: 'Product created but no catergory with this id!' });
        }
        res.json({ message: 'A product was successfully added!' })
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// update a merch product
function updateMerchProduct(req, res) {
    MerchProduct.findOneAndUpdate(
        { _id: req.params.merchProductId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
    .then((dbMerchProductData) => {
        if(!dbMerchProductData) {
            return res.status(404).json({ message: 'There is no product with this id!' });
        }
        res.json(dbMerchProductData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// delete a merch product
function deleteMerchProduct(req, res) {
    MerchProduct.findOneAndRemove({ _id: req.params.merchProductId })
    .then((dbMerchProductData) => {
        if(!dbMerchProductData) {
            return res.status(404).json({ message: 'No product with this id!' })
        }
        res.json({ message: 'Product was removed!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    }); 
}

module.exports = {
    getMerchProducts,
    getSingleMerchProduct,
    createMerchProduct,
    updateMerchProduct,
    deleteMerchProduct,
};
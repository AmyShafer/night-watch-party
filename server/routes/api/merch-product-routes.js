const router = require('express').Router();
const {
    getMerchProducts,
    getSingleMerchProduct,
    createMerchProduct,
    updateMerchProduct,
    deleteMerchProduct
} = require('../../controllers/merch-product-controller');

// /api/merchProducts
router.route('/').get(getMerchProducts).post(createMerchProduct);

// /api/merchProducts/:merchProductId
router.route('/:merchProductId').get(getSingleMerchProduct).put(updateMerchProduct).delete(deleteMerchProduct);

module.exports = router;
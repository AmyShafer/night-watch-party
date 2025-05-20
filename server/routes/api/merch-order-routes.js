const router = require('express').Router();
const {
    getMerchOrders,
    getSingleMerchOrder,
    createMerchOrder,
    updateMerchOrder,
    deleteMerchOrder
} = require('../../controllers/merch-order-controller');

// /api/merchOrders
router.route('/').get(getMerchOrders).post(createMerchOrder);

// /api/merchOrders/:merchOrderId
router.route('/:merchOrderId').get(getSingleMerchOrder).put(updateMerchOrder).delete(deleteMerchOrder);

module.exports = router;
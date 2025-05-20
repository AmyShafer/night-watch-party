const router = require('express').Router();
const {
  getMerchCategories,
  getSingleMerchCategory,
  createMerchCategory,
  updateMerchCategory,
  deleteMerchCategory
} = require('../../controllers/merch-category-controller');

// /api/merchCategories
router.route('/').get(getMerchCategories).post(createMerchCategory);

// /api/merchCategories/:merchCategoryId
router.route('/:merchCategoryId').get(getSingleMerchCategory).put(updateMerchCategory).delete(deleteMerchCategory);

module.exports = router;
const router = require('express').Router();
const eventRoutes = require('./event-routes');
const memberRoutes = require('./member-routes');
const merchCategoryRoutes = require('./merch-category-routes');
// const merchOrderRoutes = require('./merch-order-routes');
// const merchProductRoutes = require('./merch-product-routes');
const movieRoutes = require('./movie-routes');

router.use('/members' , memberRoutes);
router.use('/merchCategories' , merchCategoryRoutes);
// router.use('/merchOrders', merchOrderRoutes);
// router.use('/merchProducts' , merchProductRoutes);
router.use('/movies', movieRoutes);

module.exports = router;
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Snap out of it! (Wrong Route!)');
});

module.exports = router;
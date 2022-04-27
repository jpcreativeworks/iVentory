const router = require('express').Router();
const userRoutes = require('./userRoutes');
const episodicRoutes = require('./episodicRoutes');
const inventoryRoutes = require('./inventoryRoutes');

router.use('/users', userRoutes);
router.use('/episodics', episodicRoutes);
router.use('/inventories', inventoryRoutes);

module.exports = router;

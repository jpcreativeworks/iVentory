const router = require('express').Router();
const userRoutes = require('./userRoutes');
const episodicRoutes = require('./episodicRoutes');
const inventoryRoutes = require('./inventoryRoutes');
const formFinish = require("./formFinishRoute");

router.use('/users', userRoutes);
router.use('/episodics', episodicRoutes);
router.use('/inventories', inventoryRoutes);
router.use('/forms', formFinish);
module.exports = router;

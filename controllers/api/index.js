const router = require('express').Router();
const userRoutes = require('./userRoutes');
const episodicRoutes = require('./episodicRoutes');
const inventoryRoutes = require('./inventoryRoutes');
const emailRoutes = require('./emailRequestRoutes');
const formFinish = require("./formFinishRoute");

router.use('/email', emailRoutes);
router.use('/users', userRoutes);
router.use('/episodics', episodicRoutes);
router.use('/inventories', inventoryRoutes);
router.use('/forms', formFinish);
module.exports = router;

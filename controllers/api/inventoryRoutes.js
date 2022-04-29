const router = require('express').Router();
const { Inventory } = require('../../models');
const withAuth = require('../../utils/auth');
//var for search
const { Op } = require("sequelize");

router.post('/', withAuth, async (req, res) => { //pass
  try {
    const newInventory = await Inventory.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newInventory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const inventoryData = await Inventory.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!inventoryData) {
      res.status(404).json({ message: 'No inventory found with this id!' });
      return;
    }

    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//search route 
// the withAuth middleware was removed from here temporarily for testing.
// When the App is completed with working login, then we will have a session and then
// we can re-insert this middleware there. 
router.get("/search", async(req, res) =>{
  try{
  const search = await Inventory.findAll({
    where: {
     "item_title": {
           [Op.like]:`%${req.body.title}%`
     }
     }
   });

    if (!search) {
      res.status(404).json({"error":"not found"});
      return;
    }

    res.status(200).json(search);

  } catch(err) {
    res.status(500).json(err);
  }  
});
module.exports = router;

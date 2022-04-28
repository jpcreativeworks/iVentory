const router = require('express').Router();
const { Episodic, Inventory, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => { //pass
  // try {
  //   // Get all projects and JOIN with user data
  //   const episodicData = await Episodic.findAll({
  //     include: [
  //       {
  //         model: User,
  //         attributes: ['name'],
  //       },
  //     ],
  //   });

  //   // Serialize data so the template can read it, fetching it orm
  //   const episodics = episodicData.map((episodic) => Episodic.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('login', { 
      // episodics, 
      // logged_in: req.session.logged_in 
    });
  // } catch (err) {
  //   res.status(500).json(err);
  // });
});

router.get('/episodic/:id', async (req, res) => {
  try {
    const episodicData = await Episodic.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const episodic = episodicData.get({ plain: true });

    res.render('account', {
      ...episodic,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/inventory/:id', async (req, res) => {
    try {
      const inventoryData = await Inventory.findByPk(req.params.id, {
        include: [
          {
            model: Episodic,
            attributes: ['title'],
          },
        ],
      });
  
      const inventory = inventoryData.get({ plain: true });
  
      res.render('request', {
        ...inventory,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route
router.get('/login', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Episodic }],
    });

    const user = userData.get({ plain: true });

    res.render('account', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/account');
    return;
  }

  res.render('login');
});

module.exports = router;

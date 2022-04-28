const router = require('express').Router();
const { Episodic } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/bla', (req,res)=>{
  res.status(200).json({"Bla":"bla"});
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newEpisodic = await Episodic.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newEpisodic);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const episodicData = await Episodic.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!episodicData) {
      res.status(404).json({ message: 'No episodic found with this id!' });
      return;
    }

    res.status(200).json(episodicData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

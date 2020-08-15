const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me
// @desc  Test current users profile
// @access Public
router.get('/me', auth, async (req, res) => {
  try {
  const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

  if(!profile) {
    return res.status(400).json({ msg: 'There no profile for this user'});
  }

  res.json(profile);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Sever Error');
  }
});

// @route POST api/profile
// @desc  Create or update user profile
// @access Public
router.post('/', [ auth, [
  check('status', 'Status is required').not().isEmpty(),
  check('skills', 'skills is required').not().isEmpty()
] ], (req, res) => {

})

module.exports = router;

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route POST api/users
// @desc  Register user
// @access Public
router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters')
], (req, res) =>{
 console.log(req.body);
  res.send('Users route')});

module.exports = router;

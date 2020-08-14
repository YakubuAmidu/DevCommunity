const jwt = require('jsonwebtoken');
cont config = require('config');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not jsonwebtoken
  if(!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verity(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch(err) {

  }
}

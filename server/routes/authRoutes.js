const { Router } = require('express');
const { signUp, logIn, getUserData } = require('../controllers/authController');
const passport = require('passport');

const router = Router();
router.post('/signup', signUp);
router.post(
	'/login',
	passport.authenticate('local', { session: false }),
	logIn
);
router.get(
	'/userdata',
	passport.authenticate('jwt', { session: false }),
	getUserData
);

module.exports = router;

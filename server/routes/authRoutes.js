const { Router } = require('express');
const {
	signUp,
	logIn,
	logOut,
	getUserData
} = require('../controllers/authController');
const passport = require('passport');

const router = Router();
router.post('/signup', signUp);
router.post(
	'/login',
	passport.authenticate('local', { session: false }),
	logIn
);
router.post('/logout', logOut);
router.get(
	'/userdata',
	passport.authenticate('jwt', { session: false }),
	getUserData
);

module.exports = router;

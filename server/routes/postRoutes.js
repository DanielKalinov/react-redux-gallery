const { Router } = require('express');
const passport = require('passport');
const {
	upload,
	getCurrentUserPosts,
} = require('../controllers/postController');
const uploadFile = require('../config/multer');

const router = Router();
router.post(
	'/post/upload',
	passport.authenticate('jwt', { session: false }),
	uploadFile,
	upload
);

router.get(
	'/post/currentuserposts',
	passport.authenticate('jwt', { session: false }),
	getCurrentUserPosts
);

module.exports = router;

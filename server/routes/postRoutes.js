const { Router } = require('express');
const passport = require('passport');
const {
	upload,
	getAllPosts,
	getMyPosts,
	sendImage,
} = require('../controllers/postController');
const uploadFile = require('../config/multer');

const router = Router();
router.post(
	'/post/upload',
	passport.authenticate('jwt', { session: false }),
	uploadFile,
	upload
);

router.get('/post/allposts', getAllPosts);

router.get(
	'/post/myposts',
	passport.authenticate('jwt', { session: false }),
	getMyPosts
);

router.get('/post/:id', sendImage);

module.exports = router;

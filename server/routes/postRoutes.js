const { Router } = require('express');
const passport = require('passport');
const {
	upload,
	getAllPosts,
	getMyPosts,
	getFavoritePosts,
	sendImage,
	favoritePost,
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
router.get(
	'/post/favoriteposts',
	passport.authenticate('jwt', { session: false }),
	getFavoritePosts
);
router.get('/post/:id', sendImage);
router.put(
	'/post/favoritepost/:id',
	passport.authenticate('jwt', { session: false }),
	favoritePost
);

module.exports = router;

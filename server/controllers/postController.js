const Post = require('../models/post');
const User = require('../models/user');
const path = require('path');
const mongoose = require('mongoose');

module.exports.upload = async (req, res) => {
	const newPost = await Post.create({ src: req.file.path });
	await User.findByIdAndUpdate(
		{ _id: req.user._id },
		{ $push: { posts: newPost._id } }
	);
	res.sendStatus(200);
};

module.exports.getAllPosts = async (req, res) => {
	const allPosts = await Post.find({}, { src: 0, __v: 0 }).sort({ _id: -1 });
	res.status(200).json({ allPosts });
};

module.exports.getMyPosts = async (req, res) => {
	const user = await User.findById(req.user._id).populate({
		path: 'posts',
		select: { _id: 1, usersFavorited: 1 },
		options: { sort: { _id: -1 } },
	});
	res.status(200).json({ myPosts: user.posts });
};

module.exports.sendImage = async (req, res) => {
	const post = await Post.findById({
		_id: req.params.id,
	});
	res.sendFile(path.join(__dirname, `../${post.src}`));
};

module.exports.favoritePost = async (req, res) => {
	const userId = req.user._id;
	const postId = req.params.id;

	const user = await User.findById(userId);

	const postIsFavorite = user.favoritePosts.includes(postId);
	if (postIsFavorite) {
		await User.findByIdAndUpdate(
			{ _id: userId },
			{ $pull: { favoritePosts: postId } }
		);

		await Post.findByIdAndUpdate(
			{ _id: postId },
			{ $pull: { usersFavorited: userId } }
		);
	} else {
		await User.findByIdAndUpdate(
			{ _id: userId },
			{ $push: { favoritePosts: postId } }
		);

		await Post.findByIdAndUpdate(
			{ _id: postId },
			{ $push: { usersFavorited: userId } }
		);
	}

	res.sendStatus(200);
};

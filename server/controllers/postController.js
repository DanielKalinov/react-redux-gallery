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
	const allPosts = await Post.find({}, { src: 0, __v: 0 });
	res.status(200).json({ allPosts });
};

module.exports.getMyPosts = async (req, res) => {
	const user = await User.findOne({ _id: req.user._id }).populate('posts', {
		src: 0,
		__v: 0,
	});
	res.status(200).json({ myPosts: user.posts });
};

module.exports.sendImage = async (req, res) => {
	const post = await Post.findById({
		_id: mongoose.Types.ObjectId(req.params.id),
	});
	res.sendFile(path.join(__dirname, `../${post.src}`));
};

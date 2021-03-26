const Post = require('../models/post');
const User = require('../models/user');

module.exports.upload = async (req, res) => {
	const newPost = await Post.create({ src: req.file.path });
	await User.findByIdAndUpdate(
		{ _id: req.user._id },
		{ $push: { posts: newPost._id } }
	);
	res.sendStatus(200);
};

module.exports.getMyPosts = async (req, res) => {
	User.findOne({ _id: req.user._id })
		.populate('posts')
		.then((user) => {
			res.status(200).json(user.posts);
		});
};

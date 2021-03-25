const Post = require('../models/post');
const User = require('../models/user');

module.exports.upload = async (req, res) => {
	try {
		const newPost = await Post.create({ src: req.file.path });
		await User.findByIdAndUpdate(
			{ _id: req.user._id },
			{ $push: { posts: newPost._id } }
		);
		res.sendStatus(200);
	} catch (err) {
		console.log(err);
	}
};

module.exports.getCurrentUserPosts = async (req, res) => {
	try {
		User.findOne({ _id: req.user._id })
			.populate('posts')
			.then((user) => {
				console.log(user.posts);
				// res.status(200).json(user.posts);
			});
	} catch (err) {
		console.log(err);
	}
};

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	date: Date,
	src: String
});

const Post = mongoose.model('post', postSchema);
module.exports = Post;

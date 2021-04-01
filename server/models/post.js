const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	src: String,
	author: String,
	usersFavorited: Array
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

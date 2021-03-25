const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	src: String,
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

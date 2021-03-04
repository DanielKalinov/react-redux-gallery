const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	email: String,
	password: String
});

userSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);

	next();
});

userSchema.statics.register = async function (email, password) {
	const user = await User.create({
		email,
		password
	});

	return user;
};

const User = mongoose.model('user', userSchema);
module.exports = User;

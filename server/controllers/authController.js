const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports.signUp = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (user) {
			res.status(409).send('Email is already in use');
		} else {
			const salt = await bcrypt.genSalt();
			const hashedPassword = await bcrypt.hash(password, salt);
			const username = email.substr(0, email.indexOf('@'));
			await User.create({
				email,
				username,
				password: hashedPassword
			});

			res.sendStatus(201);
		}
	} catch (err) {
		res.status(500).send('Something went wrong');
	}
};

module.exports.logIn = (req, res) => {
	const { user } = req;
	const userData = { userId: user._id, username: user.username };
	const token = jwt.sign(
		{
			userId: user._id
		},
		'secret'
	);

	return res.status(200).json({ token, userData });
};

module.exports.getUserData = (req, res) => {
	const { user } = req;
	const userData = { userId: user._id, username: user.username };
	res.status(200).json(userData);
};

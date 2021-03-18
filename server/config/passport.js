const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const bcrypt = require('bcrypt');

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: 'secret'
};

const localStrategy = new LocalStrategy(
	{
		usernameField: 'email'
	},
	async (email, password, done) => {
		try {
			const user = await User.findOne({ email });
			if (user) {
				const isMatch = bcrypt.compare(password, user.password);
				if (isMatch) {
					done(null, user);
				} else {
					done(null, false);
				}
			} else {
				done(null, false);
			}
		} catch (err) {
			done(err, false);
		}
	}
);

const jwtStrategy = new JwtStrategy(options, async (payload, done) => {
	try {
		const user = await User.findOne({ _id: payload.userId });
		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	} catch (err) {
		done(err, false);
	}
});

module.exports = (passport) => {
	passport.use(localStrategy);
	passport.use(jwtStrategy);
};

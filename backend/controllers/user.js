//TODO: User_Controllers declaration
const bcrypt = require('bcrypt');
const User = require('../models/User');

//TODO: User_Controllers instruction
exports.signup = (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			const user = new User({
				email: req.body.email,
				password: hash,
			});
			user
				.save()
				.then(() => res.status(201))
				.catch(() => res.status(400));
		})
		.catch(() => res.status(500));
};

exports.login = (req, res, next) => {};

//TODO: User_Model declaration
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//TODO: User_Model instruction
const userSchema = mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

// Pour une inscription unique
userSchema.plugin(uniqueValidator);

//TODO: User_Model exportation
module.exports = mongoose.model('User', userSchema);

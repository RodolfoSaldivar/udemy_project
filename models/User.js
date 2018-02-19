const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema; it is the same as above

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema);
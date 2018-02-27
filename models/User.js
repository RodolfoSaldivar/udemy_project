const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema; it is the same as above

const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema; it is the same as above

const recipientSchema = new Schema({
	email: String,
	responded: { type: Boolean, default: false}
});

module.exports = recipientSchema;
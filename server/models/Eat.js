const { Schema, model } = require('mongoose');

const eatSchema = new Schema({
	date: {
		type: Date,
		default: Date.now
	},
	caloriesEaten: {
		type: Number,
		required: true
	},
	foodName: {
		type: String,
		required: true
	}
});

const Eat = model('Eat', eatSchema);

// exporting eat schema
module.exports = Eat;
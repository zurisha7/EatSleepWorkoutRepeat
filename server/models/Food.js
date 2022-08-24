const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
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

const Food = model('Food', foodSchema);

// exporting eat schema
module.exports = Food;
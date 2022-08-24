const { Schema, model } = require('mongoose');

const foodSchema = new Schema(
	{
		caloriesEaten: {
			type: Number,
			required: true
		},
		foodName: {
			type: String,
			required: true
		},
		username: {
			type: String,
			required: true
		}
	}
);

const Food = model('Food', foodSchema);

// exporting eat schema
module.exports = Food;
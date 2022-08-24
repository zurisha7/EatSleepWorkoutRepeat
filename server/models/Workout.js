const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
	user: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	// name of user creating the routine
	workoutName: {
		type: String,
		required: true
	},
	description: {
		type: String,
		requried: true
	},
	caloriesBurned: {
		type: Number,
		required: true
	},
	exercises: {
		type: String,
		required: true
	}
});

const Workout = model('Workout', workoutSchema);

// exporting the workout schema
module.exports = Workout;
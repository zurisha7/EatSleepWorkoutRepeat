const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
	user: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	// Name of user creating the routine
	workoutName: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
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
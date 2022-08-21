const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
	user: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	// Name of user creating the routine
	name: {
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
	// when user did the workout
	date: {
		type: Date,
		default: Date.now
	},
	// list of exercises
	exercises: [
		{
			// name of the workout
			workoutName: {
				type: String,
				required: true
			},
			// workout Routine
			workoutRoutine: [
				{
					set: {
						type: Number,
						required: true
					},
					reps: {
						type: Number,
						required: true
					},
					weight: {
						type: Number,
						required: true
					}
				}
			]
		}
	]
});

const Workout = model('Workout', workoutSchema);

// exporting the workout schema
module.exports = Workout;
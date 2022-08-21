const { Schema } = require('mongoose');

const WorkoutSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
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

// exporting the workout schema
module.exports = mongoose.model('workout', WorkoutSchema);
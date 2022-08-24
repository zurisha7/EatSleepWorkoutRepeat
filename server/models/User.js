const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Not an valid email!']
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        Dob: {
            type: String,
            required: true,
            match: [/^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/, 'Not a valid Date of Birth!']
        },
        favWorkout: {
            type: String,
            required: true,
            maxlength: 30
        },
<<<<<<< HEAD
        workout: [
            {
                type: Schema.Types.ObjectId,
                ref: "Workout"
            }
        ],

        eat: [
=======
        
         workouts: [
            {
            type: Schema.Types.ObjectId,
            ref: "Workout"
        }
         ],
        
        foods: [
>>>>>>> 7f370fc2afb8731875f29154a52811dd2992c550
            {
                type: Schema.Types.ObjectId,
                ref: "Eat"
            }
        ],
<<<<<<< HEAD

=======
>>>>>>> 7f370fc2afb8731875f29154a52811dd2992c550
        sleeps: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Sleep'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// bcrypt to hash saved password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.pre('deleteMany', async function (callback) {
    const user = this;
    user.model('Sleep').deleteOne({ user: username.username }, callback);
});

// check password to hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('workoutCount').get(function () {
    return this.workouts.length;
});

const User = model('User', userSchema);

module.exports = User;
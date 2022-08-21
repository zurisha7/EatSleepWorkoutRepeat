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
        FavWorkout: {
            type: String,
            required: true,
            maxlength: 30
        }
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

// check password to hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
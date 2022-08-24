const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Sleep, Eat } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                // .select('-__v -password');

                return userData;
            }

            throw new AuthenticationError('Please log in!');
        },
        users: async () => {
            return User.find()
            // .select('-__v -password');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('__v -password');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, { _id, username, email, password, Dob, FavWorkout }) => {
            return User.findOneAndUpdate({ _id: _id }, { username: username, email: email, password: password, Dob: Dob, FavWorkout: FavWorkout }, { new: true });
            // throw new AuthenticationError('Not logged in');
        },
        deleteUser: async (parent, { _id }) => {
            return User.findOneAndDelete({ _id: _id })
        },

        //     throw new AuthenticationError('Not logged in');
        // },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Please try again');
            }

            const correctPass = await user.isCorrectPassword(password);

            if (!correctPass) {
                throw new AuthenticationError('Incorrect Password!');
            }

            const token = signToken(user);
            return { token, user };
        }, 
        addWorkout: async(parent, args, context) => {
            if(context.user) {
                const workout = await Workout.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { workouts: workout._id }},
                    { new: true }
                );

                return workout;
            }
        
        },
        addFood: async(parent, args, context) => {
            if(context.user) {
                const food = await Food.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { foods: food._id }},
                    { new: true }
                );

                return food;
            }
        
        }
        // addSleep: async(parent, args, context) => {
        //     if(context.user) {
        //         const sleep = await Sleep.create({ ...args, username: context.user.username });

        //         await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { sleeps: sleep._id }},
        //             { new: true }
        //         );

        //         return sleep;
        //     }
        
        // }
    }
};

module.exports = resolvers;
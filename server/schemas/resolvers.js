const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Sleep, Food } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .populate('sleeps')
                    .populate('foods')
                    .select('-__v -password');

                return userData;
            }

            throw new AuthenticationError('Please log in!');
        },
        users: async () => {
            return User.find()
                .populate('sleeps')
                .populate('foods')
                .select('-__v -password');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .populate('sleeps')
                .populate('foods')
            // .select('__v -password');
        },
        sleeps: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Sleep.find(params).sort({ createdAt: -1 });
        },
        sleep: async (parent, { _id }) => {
            return Sleep.findOne({ _id });
        },
        foods: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Food.find(params).sort({ createdAt: -1 });
        },
        food: async (parent, { _id }) => {
            return Food.findOne({ _id });
        },
        workouts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Food.find(params).sort({ createdAt: -1 });
        },
        workout: async (parent, { _id }) => {
            return Food.findOne({ _id });
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addSleep: async (parent, args, context) => {
            console.log(context)
            if (context.user) {
                const sleep = await Sleep.create({
                    ...args, username: context.user.username
                });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { sleeps: sleep._id } },
                    { new: true }
                );

                return sleep;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        deleteUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndDelete(context.user._id, args, { new: true });
            }

            // throw new AuthenticationError('Not logged in');
        },

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
        addWorkout: async (parent, args, context) => {
            if (context.user) {
                const workout = await Workout.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { workouts: workout._id } },
                    { new: true }
                );

                return workout;
            }

        },
        addFood: async (parent, args, context) => {
            if (context.user) {
                const food = await Food.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { foods: food._id } },
                    { new: true }
                );

                return food;
            }

        }
    }
};

module.exports = resolvers;
<<<<<<< HEAD
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const sleepSchema = new Schema(
    {
        timeSlept: {
            type: String,
            required: true
        },
        sleepRating: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
=======

const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const sleepSchema = new Schema(

  {
      timeSlept: {
          type: String,
          required: true
      },
      sleepRating: {
          type: String,
          required: true
      },
      username: {
        type: String,
        required: true
      },
  },
  {
      toJSON: {
          getters: true
      }
  }
>>>>>>> 7f370fc2afb8731875f29154a52811dd2992c550
);

const Sleep = model('Sleep', sleepSchema);

module.exports = Sleep;
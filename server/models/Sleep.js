
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
);

const Sleep = model('Sleep', sleepSchema);

module.exports = Sleep;
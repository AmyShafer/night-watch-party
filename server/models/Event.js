const {
    Schema, 
    model,
    Types
} = require('mongoose');

// Schema to create Event model
const eventSchema = new Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        default: () => Types.ObjectId()
    },
    eventBody: {
        type: String,
        required: true,
        max: 280
    },
    eventName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
  }, {
    toJSON: {
        getters: true
    },
    id: false
  }); 

module.exports = eventSchema;
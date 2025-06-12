const {
    Schema, 
    model
} = require('mongoose');

// Schema to create Event model
const eventSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    movieTitle: {
        type: String,
        required: true
    },
    picker: {
        type: String,
        required: true
    },
    attendees: {
        type: Array,
        required: true
    },
    isCurrent: {
        type: Boolean,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    time: {
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

const Event = model('Event', eventSchema);  

module.exports = Event;
const {
    Schema,
    model
} = require('mongoose');

// Schema to create Member model
const memberSchema = new Schema({
    username: {
        type: String,
        unique: true, 
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        required: false,
        unique: true,
        sparse: true,
        validate: {
          validator: function (v) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          }
        },
    },
    birthday: {
        type: String,
        unique: false, 
        required: false,
        trimmed: true
    },
    isActive: {
        type: Boolean,
        unique: false,
        required: true
    },
    roles: {
        type: Array,
        unique: false,
        required: true 
    },
    memberSince: {
        type: String,
        unique: false,
        required: true
    },
    memberSince: {
        type: String,
        unique: false,
        required: true
    },
    lastActive: {
        type: String,
        unique: false,
        required: false
    },
    firstMoviePick: {
        type: String,
        unique: false,
        required: false
    },
    mostRecentMoviePick: {
        type: String,
        unique: false,
        required: false
    },
    favoriteMovies: {
        type: Array,
        unique: false,
        required: false
    },
    memberStats: {
        type: Array,
        unique: false,
        required: false
    },
    currentRSVP: {
        type: String,
        unique: false,
        required: false
    },
    socials: {
        type: Array,
        unique: false,
        required: false
    },
    memberEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'Event',
    }, ],
  }, {
    id: true,
});

const Member = model('Member', memberSchema);

module.exports = Member;
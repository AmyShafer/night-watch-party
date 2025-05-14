const {
    Schema,
    model
} = require('mongoose');

// Schema to create Member model
const memberSchema = new Schema({
    memberName: {
        type: String,
        unique: true, 
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (v) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          }
        },
    },
    memberPicks: [{
        type: Schema.Types.ObjectId,
        ref: 'Pick',
    }, ],
    memberEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'Event',
    }, ],
  }, {
    id: true,
});

module.exports = memberSchema;
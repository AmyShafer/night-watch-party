const mongoose = require('mongoose');

const { Schema } = mongoose;

const MerchCategorySchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    }
});

const MerchCategory = mongoose.model('MerchCategory', MerchCategorySchema);

module.exports = MerchCategory;
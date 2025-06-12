const mongoose = require('mongoose');

const { Schema } = mongoose;

const MerchCategorySchema = new Schema({
    category: {
      type: String,
      required: true,
      trim: true
    },
    products: {
      type: Array
    }
});

const MerchCategory = mongoose.model('MerchCategory', MerchCategorySchema);

module.exports = MerchCategory;
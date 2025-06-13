const mongoose = require('mongoose');

const { Schema } = mongoose;

const merchProductSchema = new Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    sizes: {
        type: Array,
        required: true
    },
    colors: {
        type: Array
    },
    description: {
        type: String,
        required: false
    },
    prices: {
        type: Array,
        required: true
    },
    isSoldOut: {
        type: Boolean,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'MerchCategory',
        required: true
    },
    images: {
        type: Array,
        required: true
    }
});

const MerchProduct = mongoose.model('MerchProduct', merchProductSchema);

module.exports = MerchProduct;
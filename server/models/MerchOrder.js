const { 
    Schema,
    model
 } = require('mongoose');

 // Schema to create MerchOrder model
const MerchOrderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

// Initialize to MerchOrder model
const MerchOrder = model('MerchOrder', MerchOrderSchema);

module.exports = MerchOrder;
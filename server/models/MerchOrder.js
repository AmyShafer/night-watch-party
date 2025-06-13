const { 
    Schema,
    model,
    trusted
 } = require('mongoose');

 // Schema to create MerchOrder model
const MerchOrderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    customer: {
        type: Map,
        of: String
    },
    orderNumber: {
        type: String,
        required: true,
        unique: true
    },
    itemsOrdered: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    orderStatus: {
        type: String,
        required: true
    } 
});

// Initialize to MerchOrder model
const MerchOrder = model('MerchOrder', MerchOrderSchema);

module.exports = MerchOrder;
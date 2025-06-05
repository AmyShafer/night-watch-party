const { MerchOrder, MerchProduct, MerchCategory, Member } = require('../models');

// get all merch orders
function getMerchOrders(req, res) {
    MerchOrder.find()
    .sort({ createdAt: -1 })
    .then((dbMerchOrderData) => {
        res.json(dbMerchOrderData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// get a single merch order by id
function getSingleMerchOrder(req, res) {
    MerchOrder.findOne({ _id: req.params.merchOrderId })
    .then((dbMerchOrderData) => {
        if(!dbMerchOrderData) {
            return res.status(404).json({ message: 'Have you seen my stapler? Or, an order with this id? I haven\'t seen either...' })
        }
        res.json(dbMerchOrderData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
  });
}

// create a merch order
function createMerchOrder(req, res) {
    MerchOrder.create(req, res)
    .then((dbMerchOrderData) => {
        return Member.findOneAndUpdate(
            { _id: req.body.memberId },
            { $push: { members: dbMerchOrderData._id } },
            { new: true }
        );
    })
    .then((dbMerchOrderData) => {
        if (!dbMerchOrderData) {
            return res.status(404).json({ message: 'Try more gum! Your order was created but there is no member with this id.' });
        }
        res.json({ message: 'You remind me of the babe! The babe with the order successfully placed!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// update a merch order
function updateMerchOrder(req, res) {
    MerchOrder.findOneAndUpdate(
        { _id: req.params.merchOrderId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
    .then((dbMerchOrderData) => {
        if(!dbMerchOrderData) {
            return res.status(404).json({ message: 'Inconceivable! There is no order with this id!' })
        }
        res.json(dbMerchOrderData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// delete a merch order
function deleteMerchOrder(req, res) {
    MerchOrder.findOneAndRemove({ _id: req.params.merchOrderId })
    .then((dbMerchOrderData) => {
        if(!dbMerchOrderData) {
            return res.status(404).json({ message: 'Inconceivable! No order with this id!' });
        }
        res.json({ message: 'This order has been sacked!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

module.exports = {
    getMerchOrders,
    getSingleMerchOrder,
    createMerchOrder,
    updateMerchOrder,
    deleteMerchOrder,
};
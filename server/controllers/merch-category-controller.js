const { MerchCategory, MerchOrder, MerchProduct, Member } = require('../models');

// get all categories
function getMerchCategories(req, res) {
    MerchCategory.find()
    .sort({ createdAt: -1 })
    .then((dbMerchCategoryData) => {
        res.json(dbMerchCategoryData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// get single category by id
function getSingleMerchCategory(req, res) {
    MerchCategory.findOne({ _id: req.params.merchCategoryId })
    .then((dbMerchCategoryData) => {
        if (!dbMerchCategoryData) {
          return res.status(404).json({ message: 'As if! No merch category with this id!' });
        }
        res.jason(dbMerchCategoryData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// create a merch category
function createMerchCategory(req,res) {
    MerchCategory.create(req.body)
    .then((dbMerchCategoryData) => {
        return MerchProduct.findOneAndUpdate(
            { _id:req.body.merchProductId },
            { $push: { merchCategories: dbMerchCategoryData._id } },
            { new: true }
        );
    })
    .then((dbMerchProductData) => {
        if (!dbMerchProductData) {
            return res.status(404).json({ message: 'Try more gum! (Category created but no product with this id.)' });
        }
        res.json({ message: 'We invented post-its! And we also added this merch category for you.' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// update merch category
function updateMerchCategory(req, res) {
    MerchCategory.findOneAndUpdate(
      { _id: req.params.merchCategoryId }, 
      { $set: req.body },
      {runValidators: true, new: true }
    )
    .then((dbMerchProductData) => {
        if (!dbMerchProductData) {
          return res.status(404).json({ message: 'I see dead people but I don\'t see a merch category with this id.' });
        }
        res.json({ message: 'This merch category has been sacked!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// delete merch category
function deleteMerchCategory(req, res) {
    MerchCategory.findOneAndRemove({ _id: req.params.merchCategoryId })
    .then((dbMerchCategoryData) => {
      if(!dbMerchCategoryData) {
        return res.status(404).json({ message: 'I see dead people but I don\'t see a merch category with this id.' });
      }
      res.json({ message: 'Merch category has been sacked!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}


module.exports = {
  getMerchCategories,
  getSingleMerchCategory,
  createMerchCategory,
  updateMerchCategory,
  deleteMerchCategory,
};
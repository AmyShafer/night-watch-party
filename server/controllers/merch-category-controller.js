const { MerchCategory, MerchOrder, MerchProduct } = require('../models');

const merchCategoryController = {
  // get all categories
  getMerchCategories(req, res) {
    MerchCategory.find()
      .sort({ createdAt: -1 })
      .then((dbMerchCategoryData) => {
        res.json(dbMerchCategoryData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // get single category by id
  getSingleMerchCategory(req, res) {
    MerchCategory.findOne({ _id: req.params.merchCategoryId })
      .then((dbMerchCategoryData) => {
        if (!dbMerchCategoryData) {
            return res.status(404).json({ message: 'No merch category with this id!' })
        }
        res.jason(dbMerchCategoryData);
      })
  },
  // create a merch category
  createMerchCategory(req,res) {
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
            return res.status(404).json({ message: 'Category created but no product with this id!' });
        }
        res.json({ message: 'Merch Category successfully created!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // update merch category
  updateMerchCategory(req, res) {
    MerchCategory.findOneAndUpdate({ _id: req.params.merchCategoryId }, { $set: req.body }, {runValidators: true, new: true })
    // TODO add delete function 
    .then((dbMerchCategoryData) => {
        if (!dbMerchCategoryData) {
            return res.status(404).json({ message: 'No merch category with this id!' });
        }
        // remove merch category id from product's category field
        return MerchProduct.findOneAndUpdate(
            { thoughts: req.params.merchCategoryId },
            { $pull: { merchCategories: req.params.merchCategoryId } },
            { new: true }
        );
    })
    .then((dbMerchProductData) => {
        if (!dbMerchProductData) {
            return res.status(404).json({ message: 'No merch category with this id!' });
        }
        res.json({ message: 'Merch category successfully deleted!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
  }
}

module.exports = merchCategoryController;
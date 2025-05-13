const { AuthenticationError } = require('apollo-server-express');
const { Event, Member, MerchCategory, MerchOrder, Movie } = require('../models');

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        products: async (parent, { category, name }) {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                  $regex: name
                };
            }

            return await Product.find(params).populate('category');
        },
        product: async (parent, { _id }) => {
            return await
    Product.findById
        }
    }
};

model.exports = resolvers; 
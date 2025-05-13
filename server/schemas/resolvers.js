const { AuthenticationError } = require('apollo-server-express');
const { 
    Member, 
    Event, 
    Movie, 
    MerchCategory, 
    MerchProduct, 
    MerchOrder 
} = require('../models');

// Example for fetching a user (?)

const resolvers = {
    Query: {
        member: (parent, args) => {
          return memberSchema.find(member => member.id === args.id);
        },
    },

    // Example for fetching a movie (?)
    Query: {
        movie: (parent, args) => {
            return movieSchema.find(movie => movie.id === args.id)
        },
    },
};

model.exports = resolvers; 
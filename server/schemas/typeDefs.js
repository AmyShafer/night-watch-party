const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String  
  }

  type Member {
    _id: ID
    userName: String
    email: String
    birthday: String
    isActive: Boolean
    roles: String
    memberSince: String
    leftIn: String
    firstPickedMovie: String
    lastPickedMovie: String 
    favoriteMovies: String
    memberStats: String
    currentRSVP: String
    socials: String
  }


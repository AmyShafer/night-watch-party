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
    birthday: [Birthday]
    isActive: Boolean
    roles: [Role]
    memberSince: [startDate]
    leftIn: [endDate]
    firstPickedMovie: String
    lastPickedMovie: String 
    favoriteMovies: [memberFavorites]
    memberStats: [memberStat]
    currentRSVP: String
    socials: [Social]
  }

  type Movie {
    _id: ID
    movieTitle: String
    movieReleaseYear: Int
    genres: [Genre]
    rating: String
    runtime: String
    director: [Director]
    writer: [Writer]
    cast: [Cast]
    accolades: [Accolade] 
    releaseDate: [ReleaseDate] 
    tags: [Tag] ,
    viewingNumber: Int,
    dateViewed: [ViewDate]
    // or user id?
    picker: String 
    attendees: [Attendee]
    memberRating: Float
    currentlyStreaming: [Streaming]
    season: String
  }
`;

module.exports = typeDefs;
const { gql } = require('apollo-server')

const typeDefs = gql`
  # Schema definitions go here
  type Query {
    tracksForHome: [Track!]!
  }

  type Track {
    # fields go here

    # A Track 
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
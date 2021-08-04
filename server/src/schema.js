const { gql } = require('apollo-server')

const typeDefs = gql`
  # Schema definitions go here
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
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
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }
`;

module.exports = typeDefs;
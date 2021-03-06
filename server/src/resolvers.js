const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    // tracksForHome: (parent, args ,context, info) => {},
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    // get a single track by ID, for the track page
    track: async (_, { id }, { dataSources }) => {
      // get tarck detail
      const track = dataSources.trackAPI.getTrack(id);

      // get module details for the track
      const modules = await dataSources.trackAPI.getTrackModules(id);

      // shape the data in the way that the schema expects it
      return {...track, modules};
    }
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    }
  }
};

module.exports = resolvers;
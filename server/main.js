const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const db = require("./models");
const Mutation = require("./src/resolvers/Mutation");
const Query = require("./src/resolvers/Query");
// const Subscription = require("./src/resolvers/Subscription");
const Repo = require("./src/resolvers/Repo");
const User = require("./src/resolvers/User");
const { makeExecutableSchema } = require("graphql-tools");
const { importSchema } = require("graphql-import");

const resolvers = { Query, Mutation, Repo, User };
const typeDefs = importSchema("src/schema.graphql");

//TODO Authentication. CRUD to Repo only with user token
const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
// });

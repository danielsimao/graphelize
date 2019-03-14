const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
// import faker from "faker";
// import times from "lodash.times";
// import random from "lodash.random";
// const resolvers = require("./resolvers");
const db = require("./models");
const Mutation = require("./src/resolvers/Mutation");
const Query = require("./src/resolvers/Query");
const Subscription = require("./src/resolvers/Subscription");
const typeDefs = require("./src/schema");

const resolvers = { Query };

//TODO: executableSchema
const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

// app.use(express.static("app/public"));

// db.sequelize.sync().then(() => {
//   // populate author table with dummy data
//   db.author.bulkCreate(
//     times(10, () => ({
//       firstName: faker.name.firstName(),
//       lastName: faker.name.lastName()
//     }))
//   );
//   // populate post table with dummy data
//   db.post.bulkCreate(
//     times(10, () => ({
//       title: faker.lorem.sentence(),
//       content: faker.lorem.paragraph(),
//       authorId: random(1, 10)
//     }))
//   );

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
// });

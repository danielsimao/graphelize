module.exports = `

scalar timestamp

type User {
  id: ID!
  username: String!
  fullname: String!
  email: String!
  password: String!
  repos: [Repo!]!
  createdAt: timestamp!
  updatedAt: timestamp!
}

type Repo {
  id: ID!
  name: String!
  url: String!
  balance: Int!
  userId: ID!
  owner: User!
}

type Query {
  repos: [Repo!]!
  repo(id: ID!): Repo
  user(id: ID!): User
  users: [User!]!
}

`;

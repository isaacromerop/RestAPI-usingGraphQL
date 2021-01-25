const { ApolloServer } = require("apollo-server");
require("dotenv").config({ path: "variables.env" });
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server running at PORT: ${url}`);
});

const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/typeDefs');
const { resolvers } = require('./schema/resolvers');


const server = new ApolloServer({typeDefs, resolvers});
// const {url} = await server.listen();






server.listen().then(({url}) => {
    console.log(`Server firing full throttle at ${url} 🪐🚀`);
    });

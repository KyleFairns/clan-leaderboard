import { ApolloServer } from 'apollo-server'

import { environment } from './environment'
import resolvers from './resolvers'
import typeDefs from './schemas'

const server = new ApolloServer({
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  resolvers,
  typeDefs
})

const listening = (async () => {
  await server.listen()
})()

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => server.stop())
}

import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

// base da app
const server = fastify()

server.register(transactionsRoutes)

server
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })

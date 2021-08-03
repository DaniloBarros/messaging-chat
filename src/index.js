import express from 'express'
import expressWS from 'express-ws'
import { createRoutes } from './routes/conversation.js'

const PORT = process.env.PORT || 3000
const sockets = {
  // This data is structured in this way (object inside an object)
  // Just so the object "socket" remains in memory throughout the
  // server's execution and is mutated by reference
  // Thus, the sockets instance could be shared if we later want to
  // have a updated list of conversations or messages
  conversations: {}
}

async function main () {
  const app = express()
  expressWS(app)

  app.use(express.json())

  app.get('/', (_, res) => res.send('Hello'))

  app.use('/conversation', createRoutes(sockets))

  app.listen(PORT, err => {
    if (err) {
      throw err
    }
    console.info(`Server listening on ${PORT}`)
  })
}

main()
  .catch(err => {
    console.error({ err })
    process.exit(1)
  })

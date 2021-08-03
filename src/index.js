import express from 'express'
import expressWS from 'express-ws'
import { createRoutes } from './routes/conversation.js'

const PORT = process.env.PORT || 3000
const sockets = {
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

import express from 'express'
import { createRoutes } from './routes/conversation.js'

async function main () {
  const app = express()
  app.use(express.json())

  app.get('/', (_, res) => res.send('Hello'))

  app.use('/conversation', createRoutes())
  app.use('/sendmessage', createRoutes())

  app.listen(3000, err => {
    if (err) {
      throw err
    }
    console.info(`Server listening on ${3000}`)
  })
}

main()
  .catch(err => {
    console.error({ err })
    process.exit(1)
  })

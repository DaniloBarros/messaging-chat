import express from 'express'

async function main () {
  const app = express()

  app.get('/', (_, res) => res.send('Hello'))
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

import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  const helloMsg = `<h1>Hello from the ${os.hostname()} VERSION 1.0.0 </h1>`
  console.log(helloMsg)
  res.send(helloMsg)
})

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})

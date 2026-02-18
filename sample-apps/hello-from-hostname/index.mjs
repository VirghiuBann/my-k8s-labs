import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  const helloMsg = `<h1>Hello from the ${os.hostname()}</h1>
  <h2>Version 2.0.0</h2> 
  `
  console.log(helloMsg)
  res.send(helloMsg)
})

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})

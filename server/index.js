const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.text())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    const type = req.headers['content-type']
    if (type != 'text/plain' && type != 'application/json') {
        res.status(400).send("Unknown content type")
    }
    else {
        res.send(req.body)
    }
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//const server = require('./server').server

const app = require('./server')

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log('server is running on port ' + port)
})
// async function run () {
//     const app = await server()
//     app.listen(3000, () => {
//         console.log('server is running on port 3000')
//     })
// }

//run().catch(console.error)
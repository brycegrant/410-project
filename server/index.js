//const server = require('./server').server
const app = require('./server')

app.listen(3000, () => {
  console.log('server is running on port 3000')
})
// async function run () {
//     const app = await server()
//     app.listen(3000, () => {
//         console.log('server is running on port 3000')
//     })
// }

//run().catch(console.error)
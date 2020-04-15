let express = require('express')
const cors = require('cors')
let app = express()

app.use(cors())

app.get('/', (req, res) => {

  res.send({
    message: 'Hello Lab9',
    users: [{
      id: 1,
      name: 'JanJoa',
      studentID: 34
    }, {
      id: 2,
      name: 'Sufairee'
    }]
  })

})


app.listen(process.env.PORT,() => console.log('Server is Running at ', process.env.PORT))
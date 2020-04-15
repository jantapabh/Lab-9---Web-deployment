let express = require('express')
const cors = require('cors')
let app = express()

app.use(cors())

app.get('/', (req, res) => {

    res.json({
        message: 'Engineering Computer',
        users: [{
          id: 1,
          name: 'Jantapa Binheem'
        }, {
          id: 2,
          name: 'Sufairee Leeadum'
        }]
      })
})


app.listen(process.env.PORT,() => console.log('Server is Running at ', process.env.PORT))
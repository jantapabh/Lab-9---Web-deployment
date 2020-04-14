let express = require('express')
let app = express()

app.get('/', (req, res) => {

    console.log('Hello Worls')
    res.send('Hello World')
})

app.listen(80,() => console.log('Server is Running'))
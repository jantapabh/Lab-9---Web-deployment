let express = require('express')
let app = express()

app.get('/', (req, res) => {

    console.log('Hello Worls')
    res.send('Hello JanTapa')
})

app.get('/crash', (req, res) => {

    console.log('Crash!!!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(process.env.PORT,() => console.log('Server is Running at ', process.env.PORT))
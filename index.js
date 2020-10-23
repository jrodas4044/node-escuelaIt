const express = require('express')
const helmet = require("helmet")
const PORT = 4444
const PUBLIC = 'public'

const app = express()
app.use(helmet())
//MIDDLEWARE
const myLogger = (req, res, next) => {
    console.log('LOGUER', req.method, req.originalUrl)
    next()
}
app.use(myLogger)
// Static Content
app.use(express.static(PUBLIC))

// ROUTED
const series = require('./routes/series')
app.use('/series', series)

app.listen(PORT, ()=>{
    console.log(`APP Running PORT ${PORT}....`)
})

app.get('/', (req, res)=>{
    res.send('Hellow from Express XD')
})

app.post('/', (req, res)=>{
    res.send('Respuesta por Post')
})

//RegEx
app.get('/jonhathan/', (req, res) =>{
    res.send('Pedistes Algo con Jonhathan')
})

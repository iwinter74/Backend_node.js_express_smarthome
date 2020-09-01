const express = require('express')
const app = express()
app.listen(3000, () => {
    console.log('Server started')
})
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', {root:__dirname})
})

app.get('/blog', (req, res) => {
    res.sendFile('./views/blog.html', {root:__dirname})
})

app.use((req, res) => {
    res.status(404)
    res.sendFile('./views/404.html', {root:__dirname})
})
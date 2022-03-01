const express = require('express')
const app = express();
const port = 3000


app.get('/', (req, res) => {
    res.send('<h1> Follow the Spring/Flowers/Bees/Fruits/Happiness route OR the Plants/Types/ Flowering, Moss, or Fungi route </h1> ')

})

const fs = require('fs')

app.engine('hypatia', (filePath, options, callback)=>{
    fs.readFile(filePath, (err, content) => {
        if(err) return callback(err)
        const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
        return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'hypatia')

app.get('/Spring', (req, res) => {
    res.render('template', { title: 'Spring', message: 'Spring is wonderful.', content: 'It brings an abundance of life and pretty flowers.' }) 
})
app.get('/Spring/Flowers', (req, res) => {
    res.render('template', { title: 'Flowers', message: 'Spring brings flowers.', content: 'The pretty variety of flowers will draw the bees in.' }) 
})
app.get('/Spring/Flowers/Bees', (req, res) => {
    res.render('template', { title: 'Bees', message: 'Flowers bring in the bees.', content: 'Thanks to the bees pollunating, we are blesses with fruits.' }) 
})
app.get('/Spring/Flowers/Bees/Fruits', (req, res) => {
    res.render('template', { title: 'Fruits', message: 'Bees bless us with fruits.', content: 'The fruits are filled with vitamins and deliciousness.' }) 
})
app.get('/Spring/Flowers/Bees/Fruits/Happiness', (req, res) => {
    res.render('template', { title: 'Happiness', message: 'Fruits bring happiness.', content: 'If youre feeding yourself what you and you body benefit from, you can achieve happiness.' }) 
})


app.get('/Plants', (req, res) => {
    res.render('template2', { title: 'Plants', message: 'What are plants?', content: 'Plants are a form of life that helps the earth stay as perfect as she is.' }) 
})
app.get('/Plants/Types', (req, res) => {
    res.render('template2', { title: 'Types', message: 'Types of Plants', content: 'Types of plants include flowering, moss, and fungi. Yes I know fungi isnt a plant but just work with me here' }) 
})
app.get('/Plants/Types/Flowering', (req, res) => {
    res.render('template2', { title: 'Flowering', message: 'Flowering Plants', content: 'Flowers can help improve productivity and lessen anxiety. Their smells can do things from helping you sleep to improving your memory. With choosing the right color of flowers, they can help improve your mood as well.' }) 
})
app.get('/Plants/Types/Moss', (req, res) => {
    res.render('template2', { title: 'Moss', message: 'Moss Plant', content: 'Theres many different species of moss, their climate survival ranges from 0°F to 104°F!! But they can become dormat and survive temperatures even lower and higher! Moss can also help prevent erosion. It helps with that by protecting tree roots, which is done by insulating the soil depending on the environment.' }) 
})
app.get('/Plants/Types/Fungi', (req, res) => {
    res.render('template2', { title: 'Fungi', message: 'Fantastic Fungi -great documentary, watch it!!', content: 'Fungi is its own kingdom on its own, but can be commonly confused as a plant because fungi-mushrooms-plant. But fungi is the key to the cycle of life. Fungi is at the end and beginning of the life cycle. They break down dead plant matter to make it useable for new plant life. They can break down anything natural. Which includes oil, fungi can be used to clean up oil and produce nutrition from it.' }) 
})

app.listen(port, () => {
    console.log('listening', port)
})
